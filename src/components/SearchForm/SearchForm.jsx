import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.PureComponent {

  render() {
    return (
      <form onSubmit="">
        <label>Search a repository</label>
        <input className="u-full-width" type="text" name="search" placeholder="laravel, symfony ..."/>
        <input type="submit" />
      </form>
    );
  }
}

SearchForm.propTypes = {

};

export default SearchForm;