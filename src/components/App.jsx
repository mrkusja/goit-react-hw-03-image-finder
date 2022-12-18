import { Component } from "react";

import { fetchImages } from "Utils/fetchImages";

import { Searchbar } from './Searchbar/Searchbar';
// import { Loader } from './Loader/Loader';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

console.log(fetchImages())

export class App extends Component {
  state = {
    page: 1
  }

  render() {
   return (
    <Searchbar/>
    
   )

  }
  
}
