import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTags:[
        ['city', 'hi'],
        ['state', 'test'],
        ['venue', 'testing'],
        ['time', 'sdgg'],
        ['price', 'sdgsgs'],
        ['fb', 'sdggds'],
        ['yt', 'tw235t4wt'],
      ],
      inactiveTags: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const index = target.getAttribute('data-index');
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
    $.post('/data', {query})
    .done(response => {
      console.log('success', response.body);
    })
    .fail(err => {
      console.log('error', err.responseJSON.body);
    });
    event.preventDefault();
  }

  handleRemoveTag(event) {
    const target = event.target;
    const index = target.getAttribute('data-index');
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
    return (
      <div>
        <Form
          submit={this.handleSubmit}
          change={this.handleChange}
          removeTag={this.handleRemoveTag}
          activeTags={this.state.activeTags}
        />
        {/* <InactiveTags addTag={this.handleAddTag}/> */}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
