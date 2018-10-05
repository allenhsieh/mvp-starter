import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const TagItem = (props) => {
  return (
    <div>
      <label>
        <button type="button" className="remove-tag" onClick={props.removeTag}>✖</button>{props.tag[0]}:
        <input type="text" name={props.tag[0]} value={props.tag[1]} onChange={props.change}/>
      </label>
    </div>
  );
}

const InactiveTag = (props) => {
  return (
    <button type="button">{props.tag[0]}</button>
  );
}

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
  }

  handleChange(index, event) {
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
    $.post('/data', {query})
    .done(response => {
      console.log('success', response.body);
    })
    .fail(err => {
      console.log('error', err.responseJSON.body);
    });
    event.preventDefault();
  }

  handleRemoveTag(index, event) {
    // console.log('button clicked! with index', index);
    let newActive = [...this.state.activeTags];
    let newInactive = this.state.inactiveTags.concat(newActive.splice(index, 1));
    console.log('newActive', newActive);
    console.log('newinActive', newInactive);

    this.setState(prevState => {
      return {
        activeTags: newActive,
        inactiveTags: newInactive
      }
    })
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
                removeTag={this.handleRemoveTag.bind(this, index)}
              />
          );
        })}
        <input type="submit" value="Submit"/>
        <div>
          {this.state.inactiveTags.map((tag, index) => {
            return (
              <InactiveTag
                tag={tag}
                key={index}
              />
            );
          })}
        </div>
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
