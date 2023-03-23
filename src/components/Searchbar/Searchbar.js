import { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Searchbar/Searchbar.module.css'


export default class Searchbar extends Component {
     state= {
         pictureName: '',
         
    };


    handleChange = e => {
        this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
    }


    handelSubmit = e => {
        e.preventDefault();


         if (this.state.pictureName.trim() === '') {
            alert('введіть назву')
            return;
         }

        this.props.onSubmit(this.state.pictureName);


        this.setState({ pictureName: '' });
    }




    render() {
    return (
     <header className={css.Searchbar} >
            <form  onSubmit={this.handelSubmit} className={css.SearchForm}>
            <button type="submit"   className={css.SearchFormButton}>
            <span >Search</span>
            </button>

                <input
            className={css.SearchFormInput}
            onChange={this.handleChange}
            value={this.state.pictureName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
</header>
    );
  }
 }

 Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};