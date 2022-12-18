import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    keyword: '',
  };

  handlerInput = e => {
    this.setState({ keyword: e.target.value });
  };

  sendedKeyword = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.keyword);
    this.setState({ keyword: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.sendedKeyword}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
          value={this.state.keyword}
          onChange={this.handlerInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
