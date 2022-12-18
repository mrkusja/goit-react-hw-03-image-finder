import { Component } from 'react';

import { fetchImages } from 'utils/fetchImages';
import { imagesMapper } from 'utils/imagesMapper';

import { Searchbar } from './Searchbar/Searchbar';
// import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    keyword: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    currentImage: null,
    totalAmoutOfPages: 0,
  };

  updateKeyword = query => {
    this.setState({
      keyword: query,
      page: 1,
      images: [],
      totalPages: 0,
    });
  };

  getItem = () => {
    const { page, keyword } = this.state;

    fetchImages(page, keyword)
      .then(response => {
        if (response.data.hits.lenght === 0) {
          alert('no images');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...imagesMapper(response.data.hits)],
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.updateKeyword} />
        {this.state.images.length > 0 && (
          <ImageGallery arrayImages={this.state.images} />
        )}
      </>
    );
  }
}
