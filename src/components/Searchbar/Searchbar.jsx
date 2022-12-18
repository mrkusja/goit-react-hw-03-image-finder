import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    keyword: '',
  };

  handlerInput = e => {
    this.setState({ keyword: e.target.value });
 console.log(e)
  };


  render() {
    return (
      <header>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
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
