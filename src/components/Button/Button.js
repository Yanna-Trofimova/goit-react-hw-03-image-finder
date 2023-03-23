import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css'


const Button = ({ onLoadMore }) => {
  return (
    <div className={css.ContainerButton}>
      <button type="button" onClick={onLoadMore} className={css.Button} >Load More</button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore:PropTypes.func.isRequired,
}

export default Button