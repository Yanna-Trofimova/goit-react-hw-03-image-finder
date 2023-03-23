import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';



export default class App extends Component{
   state= {
     pictureName: '',
     page: 1,
     picture: [],
     error: null,
     buttonLoad: false,
     totalImages: 0,
     bigImg: '',
     showModal: false,
      loading: false
   };
  
  
  
  componentDidUpdate(prevProps, prevState) {
        const prevName = prevState.pictureName;
        const nextName = this.state.pictureName;
        const currentPage = this.state.page;
        const prevPage = prevState.page;


    if (prevName !== nextName || prevPage !== currentPage)
    {
      this.setState({ loading: true });

      fetch(`https://pixabay.com/api/?q=${nextName}&page=${currentPage}&key=33458251-0b67ccfbd4060c82b4c4d5dd0&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
          .then(pic => {
           if (!pic.total){
            return alert('К сожалению по Вашему запросу ничего не найдено');
          }
             this.setState(prevState=>({picture: [...prevState.picture, ...pic.hits], totalImages: pic.total, }))
            
              const hits = pic.hits;
              this.buttonLoad(hits.length);
          
          })
          
        .catch(error => error)
       .finally(() => {
          this.setState({ loading: false });
        });
    
    }
  }



onLoadMore = () => {
  this.setState(prevState => ({
      page: prevState.page + 1,
  }));
};

buttonLoad = length => {
    if (length >= 12) {
      return this.setState({ buttonLoad: true });
    }
    return this.setState({ buttonLoad: false });
};

onSubmit= pictureName => {
  this.setState({ pictureName });
  
 if(this.state.pictureName.trim() === pictureName) {
             return alert(`ви вже продивляєтесь ${pictureName}`);
        }
        this.setState({pictureName: pictureName, picture: [], page: 1})
        
};
  
  
openModal = url => {
  this.setState({ bigImg: url,
  showModal:true,
  });
};

closeModal = () => {
  this.setState({showModal:false})
}

  render() {
    const { picture, loading, buttonLoad,showModal,bigImg, page } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} page={ page} picture={picture} />
        {picture && <ImageGallery picture={picture} onImageClick={this.openModal} />}
        {buttonLoad && <Button onLoadMore={this.onLoadMore} />}
        {loading && <Loader/>}
        {showModal && (
        <Modal closeModal={this.closeModal}  bigImg={bigImg}/>
        )}
      </>
    );
  }
}