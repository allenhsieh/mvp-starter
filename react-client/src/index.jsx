import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {config} from '../../config';
// import List from './components/List.jsx';

const TagItem = (props) => {
  return (
    <label>
      {props.name}:
      <input type="text" />
    </label>
  );

  <label>
  test:
  <input type="text" value={this.state.q} onChange={this.handleChange} />
</label>

}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      acc: config.acc,
      pass: config.pass,
      // activeTags: ['city', 'state', 'venue', 'time', 'price', 'fb', 'yt'],
      // activeTags:[
      //   {city: ''},
      //   {state: ''},
      //   {venue: ''},
      //   {time: ''},
      //   {price: ''},
      //   {fb: ''},
      //   {yt: ''},
      // ],
      activeTags:[
        ['city', ''],
        ['state', ''],
        ['venue', ''],
        ['time', ''],
        ['price', ''],
        ['fb', ''],
        ['yt', ''],
      ],
      inactiveTags: [],
      // tagValues: [{
      //   city: '',
      //   state: '',
      //   venue: '',
      //   time: '',
      //   price: '',
      //   fb: '',
      //   yt: '',
      // }],
      q: [],
      url: 'https://archive.org/metadata/allenAPI'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('THIS IS EVENT', event);
    console.log('THIS IS INDEX', index);
    // this.setState({

    // });
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
        {this.state.activeTags.map((tag, index) => {
          return (
            <TagItem
              onChange={this.handleChange.bind(this, index)}
              name={tag}
              key={index}
            />
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
