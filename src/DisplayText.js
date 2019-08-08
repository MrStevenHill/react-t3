import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string
}

const DisplayText = ({ text }) => <div>Here is some text: {text}</div>

DisplayText.propTypes = propTypes;

export default DisplayText;
