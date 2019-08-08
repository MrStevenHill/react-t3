import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: "Some Text",
};

const DisplayText = ({ text }) => (
  <div>
    Here is some text:&nbsp;
    {text}
  </div>
);

DisplayText.propTypes = propTypes;
DisplayText.defaultProps = defaultProps;

export default DisplayText;
