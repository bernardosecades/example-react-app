import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RepositoryList from '../../components/RepositoryList';
import SearchContainer from '../SearchContainer';

class BaseContainer extends React.Component {

  stubData() {
    let repo = {
      full_name: 'bernardosecades/split-blue',
      owner: {
        login: 'bernardo',
        avatar_url: 'https://avatars3.githubusercontent.com/u/1932461?v=4',
        html_url: 'https://github.com/bernardosecades'
      },
      stargazers_count: 10,
      forks_count: 5
    };

    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
    ];
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <SearchContainer/>
        <RepositoryList repositories={ this.stubData() }/>
        <Footer/>
      </div>
    );
  }
}

export default BaseContainer;
