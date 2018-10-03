import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {config} from '../../config';
// import List from './components/List.jsx';

const TagItem = (props) => {
  return (
    <div>
      <label>
        <button className="remove-tag">✖</button>{props.tag[0]}:
        <input type="text" name={props.tag[0]} value={props.tag[1]} onChange={props.change}/>
      </label>
    </div>
  );

//   <label>
//   test:
//   <input type="text" value={this.state.q} onChange={this.handleChange} />
// </label>

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
        ['city', 'hi'],
        ['state', 'test'],
        ['venue', 'testing'],
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

  handleChange(index, event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('THIS IS EVENT', value);
    console.log('THIS IS INDEX', index);
    let newTags = [...this.state.activeTags];
    newTags[index][1] = value;
    this.setState({
      activeTags: newTags
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
        {this.state.activeTags.map((tag, index) => {
          return (
              <TagItem
                change={this.handleChange.bind(this, index)}
                tag={tag}
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
