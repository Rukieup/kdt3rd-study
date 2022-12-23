import React from 'react';
import PropTypes from 'prop-types';

class TextComponent extends React.Component {
  render() {
    const {text, valid} = this.props;

    return (
      <div>
        <p>{text}</p>
        <button onClick={valid}>콘솔메시지</button>
      </div>
    )
  }
}

TextComponent.defaultProps = {
  text: '이건 기본 text props입니다.'
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextComponent;