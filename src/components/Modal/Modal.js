import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css'

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }

  handelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div onClick={this.handleBackDropClick}
        className={css.Overlay}
        >
            <div className={css.Modal}
            >
          <img src={this.props.bigImg} alt="bigPic" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal