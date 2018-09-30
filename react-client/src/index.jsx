import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: window.s3Access,
      pass: window.s3Secret,
      q: 'hello',
      url: 'https://archive.org/metadata/AandDICPAdventure'
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
    console.log(typeof this.state.q);
    $.post({
      url: this.state.url,
      data: {
        '-target': metadata,
        '-patch': {
          "add":'/testingthisout',
          "value": this.state.q
        },
        'access': this.state.acc,
        'secret': this.state.pass
      }
    })
    .done((msg) => {
      console.log('success!', msg);
    })
    .fail((failed) => {
      console.log('FAIL', fail);
    })
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
