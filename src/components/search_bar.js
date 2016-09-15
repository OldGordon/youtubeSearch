import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: 'Start typing'
    };
  }

  render(){
    return (
      <div>

      <input
        value={this.state.term}
        onFocus={e => this.setState({term: ''})}
        onChange={ e => this.setState({term: e.target.value})}/>

      </div>
    );
  }

}

export default SearchBar;
