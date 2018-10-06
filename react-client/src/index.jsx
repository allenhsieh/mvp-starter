import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';
import InactiveTags from './components/InactiveTags.jsx';
import styled from 'styled-components';

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

  handleChange(event, index) {
    const target = event.target;
    const value = target.value;
    // const index = target.getAttribute('data-index');
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

  handleRemoveTag(index) {
    // const target = event.target;
    // const index = target.getAttribute('data-index');
    let newActive = [...this.state.activeTags];
    let newInactive = this.state.inactiveTags.concat(newActive.splice(index, 1));

    this.setState({
        activeTags: newActive,
        inactiveTags: newInactive
    })
  }

  handleAddTag(index) {
    // const target = event.target;
    // const index = target.getAttribute('data-index');

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
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleRemoveTag={this.handleRemoveTag}
          activeTags={this.state.activeTags}
        />
        <InactiveTags
          handleAddTag={this.handleAddTag}
          inactiveTags={this.state.inactiveTags}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
