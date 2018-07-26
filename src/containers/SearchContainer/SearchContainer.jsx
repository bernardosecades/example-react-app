import React from 'react';
import SearchForm from '../../components/SearchForm';

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchForm/>
      </div>
    );
  }
}

export default SearchContainer;
