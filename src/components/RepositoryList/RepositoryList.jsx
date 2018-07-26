import React from 'react';
import PropTypes from 'prop-types';
import RepositoryRow from '../RepositoryRow';

class RepositoryList extends React.PureComponent {

  renderTable() {

      if (!this.props.repositories) {
        return null;
      }

      const repos = this.props.repositories;

      return (
        <table>
          <thead>
            <th>Repository</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Forks</th>
          </thead>
          <tbody>
          { repos.map(repo => <RepositoryRow repo={ repo }/>) }
          </tbody>
        </table>
      );
  }

  render() {
    return (
      <section>
        <h1>Repository list</h1>
        { this.renderTable() }
      </section>
    );
  }
}

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object).required
};

export default RepositoryList;