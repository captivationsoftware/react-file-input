import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileInput extends Component {
  static propTypes={
    name: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    accept: PropTypes.string,
    onChange: PropTypes.func,
  };

  state={
    value: '',
  };

  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop(),
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    return (
      <div>
        <input
          type="file"
          style={{ cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            width: '100%',
            zIndex: 1 }}
          name={this.props.name}
          accept={this.props.accept}
          className={this.props.className}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          tabIndex="-1"
          value=""
          name={this.props.name}
          className={this.props.className}
          style={{ position: 'relative', zIndex: -1 }}
        />
      </div>
    );
  }
}

export default FileInput;
