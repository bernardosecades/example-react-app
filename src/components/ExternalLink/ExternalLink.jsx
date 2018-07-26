import React from 'react';
import PropTypes from 'prop-types';

class ExternalLink extends React.PureComponent {

  render() {
    return (
      <a href={this.props.to} className={this.props.className} rel="noopener" target="_blank">
        {this.props.children}
      </a>
    );
  }
}

ExternalLink.propTypes = {
  to: PropTypes.string.required,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]).required,
  className: PropTypes.string
};

export default ExternalLink;