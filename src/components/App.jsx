import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import { ImageGallery } from './ImageGallery';
// import { Loader } from './Loader';
import { Searchbar } from './Searchbar';

class App extends Component {
  state = {
    textSearch: '',
    // isLoading: false,
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    return (
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#1f6c31',
              color: '#fff',
            },
          }}
        />
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery value={this.state.textSearch} />
      </div>
    );
  }
}

export default App;
