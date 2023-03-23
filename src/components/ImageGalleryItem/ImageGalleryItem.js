import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'


 const ImageGalleryItem = ({ webformatURL,largeImageURL,openModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
    onClick = {() => {
      openModal(largeImageURL)
    }}>
      
      <img src={webformatURL} alt="pic" width={400} className={ css.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL : PropTypes.string.isRequired,
  openModal : PropTypes.func.isRequired
  
}



export default ImageGalleryItem