import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {config} from '../../config';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: config.acc,
      pass: config.pass,
      q: 'hello',
      url: 'https://archive.org/metadata/allenAPI'
    };
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }

  change(event) {
    this.setState({
      q: event.target.value
    });
  }

  submit(event) {
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
        '-patch': JSON.stringify({
          "add":'/test',
          "value": this.state.q
        })
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
      <form onSubmit={this.submit}>
        <label>
          test:
          <input type="text" value={this.state.q} onChange={this.change} />
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
