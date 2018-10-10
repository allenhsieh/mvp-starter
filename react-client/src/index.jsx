import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';
import InactiveTags from './components/InactiveTags.jsx';
import Search from './components/Search.jsx';
import StatusLogs from './components/StatusLogs.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTags:[
        ['band', 'band'],
        ['city', 'hi'],
        ['state', 'test'],
        ['country', 'USA'],
        ['venue', 'testing'],
        ['time', 'sdgg'],
        ['price', 'sdgsgs'],
        ['event', 'sdggds'],
        ['yt', 'tw235t4wt'],
      ],
      inactiveTags: [],
      query: '',
      endpoints: [],
      searchResults: [],
      responseLog: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  handleSearchInput(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleSearchSubmit(event) {
    if (!this.state.query) {
      this.setState({
        searchResults: [],
        responseLog: []
      });
    } else {
      $.post('/search', {q: this.state.query})
      .done(({results}) => {
        this.setState({
          searchResults: results.map(item => {
            item.checked = false;
            return item
          }),
          query: ''
        });
      });
    }
    event.preventDefault();
  }

  handleCheck(event, index) {
    let newSearchResults = [...this.state.searchResults];
    newSearchResults[index]['checked'] = event.target.checked;
    let newEndpoints = newSearchResults.reduce((accumulator, currentItem) => {
      if (currentItem.checked) {
        return accumulator.concat(currentItem.identifier)
      }
      return accumulator;
    }, []);
    this.setState({
      searchResults: newSearchResults,
      endpoints: newEndpoints
    })
  }

  handleSelectAll(event) {
    let selectAllSearch = this.state.searchResults.map(item => {
      item.checked = event.target.checked;
      return item;
    })
    let addAllEndpoints = selectAllSearch.reduce((accumulator, currentItem) => {
      if (currentItem.checked) {
        return accumulator.concat(currentItem.identifier)
      }
      return accumulator;
    }, []);

    this.setState({
      searchResults: selectAllSearch,
      endpoints: addAllEndpoints
    })
  }

  handleChange(event, index) {
    const target = event.target;
    const value = target.value;
    let newTags = [...this.state.activeTags];
    newTags[index][1] = value;
    this.setState({
      activeTags: newTags
    });
  }

  handleSubmit(event) {
    let query = [];
    this.state.activeTags.forEach(tag => {
      query.push({
        add: '/' + tag[0],
        value: tag[1]
      });
    });
    $.post('/data', {endpoints: this.state.endpoints, query: query})
    .done(response => {
      this.setState({
        responseLog: response
      })
    })
    .fail(err => {
      console.log('error', err);
    });
    event.preventDefault();
  }

  handleRemoveTag(index) {
    let newActive = [...this.state.activeTags];
    let newInactive = this.state.inactiveTags.concat(newActive.splice(index, 1));

    this.setState({
        activeTags: newActive,
        inactiveTags: newInactive
    })
  }

  handleAddTag(index) {
    let newInactive = [...this.state.inactiveTags];
    let newActive = this.state.activeTags.concat(newInactive.splice(index, 1));

    this.setState({
      activeTags: newActive,
      inactiveTags: newInactive
    });
  }

  render() {
    let status;
    if (this.state.responseLog.length > 0) {
      status = <StatusLogs log={this.state.responseLog} />
    }

    return (
      <div>
        <InactiveTags
          handleAddTag={this.handleAddTag}
          inactiveTags={this.state.inactiveTags}
        />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleRemoveTag={this.handleRemoveTag}
          activeTags={this.state.activeTags}
        />
        <Search
          query={this.state.query}
          endpoints={this.state.endpoints}
          searchResults={this.state.searchResults}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
          handleCheck={this.handleCheck}
          handleSelectAll={this.handleSelectAll}
        />
        <div>
          {status}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
