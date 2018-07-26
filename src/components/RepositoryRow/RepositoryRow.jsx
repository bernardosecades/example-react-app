import React from 'react';
import PropTypes from 'prop-types';
import GithubAvatar from '../GithubAvatar';
import ExternalLink from '../ExternalLink';

class RepositoryRow extends React.PureComponent {

  render() {
    let repo = this.props.repo;

    return (
      <tr>
        <td>
          <ExternalLink to={ "https://github.com/" + repo.owner.full_name }>
            { repo.full_name }
          </ExternalLink>
        </td>
        <td><GithubAvatar author={ repo.owner }/></td>
        <td>Stars { repo.stargazers_count }</td>
        <td>{ repo.forks_count }</td>
      </tr>
    );
  }
}

RepositoryRow.propTypes = {
  repo: PropTypes.object.required
};

export default RepositoryRow;