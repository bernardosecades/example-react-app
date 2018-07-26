import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../ExternalLink';
import './GithubAvatar.css';

class GithubAvatar extends React.PureComponent {

  render() {
    let author = this.props.author;

    return (
      <span>
        <img className="GithubAvatar__Image" alt={ `${author.login}` } src={ `${author.avatar_url}` }/>
        <ExternalLink to={ author.html_url }>{ author.login }</ExternalLink>
      </span>
    );
  }
}

GithubAvatar.propTypes = {
  author: PropTypes.shape({
    login: PropTypes.string.required,
    avatar_url: PropTypes.string.required,
    html_url: PropTypes.string.required
  }).required
};

export default GithubAvatar;