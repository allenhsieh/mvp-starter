import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {config} from '../../config';
// import List from './components/List.jsx';

const TagList = (props) => {

}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      acc: config.acc,
      pass: config.pass,
      tags: ['city', 'state', 'venue', 'time', 'price', 'fb', 'yt'],
      city: '',
      state: '',
      venue: '',
      time: '',
      price: '',
      fb: '',
      yt: '',
      q: [],
      url: 'https://archive.org/metadata/allenAPI'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      q: event.target.value
    });
  }

  handleSubmit(event) {

    $.post({
      url: this.state.url,
      crossDomain: true,
      dataType: 'jsonp',
      contentType: 'application/javacript',
      headers: {
        'access': this.state.acc,
        'secret': this.state.pass
      },
      data: {
        '-target': 'metadata',
        '-patch': JSON.stringify(q)
      }
    })
    .done((msg) => {
      console.log('success!', msg);
    })
    .fail((failed) => {
      console.log('FAIL', failed);
    })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          test:
          <input type="text" value={this.state.q} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
