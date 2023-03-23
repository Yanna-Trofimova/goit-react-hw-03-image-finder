import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css'


 const ImageGallery = ({ picture,onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {picture.map(({ id, webformatURL,largeImageURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} openModal={onImageClick}  />
      ))}
    </ul>
  );
 };

ImageGallery.propTypes = {
  picture: PropTypes.array.isRequired,
  onImageClick : PropTypes.func.isRequired
  
}
 

export default ImageGallery