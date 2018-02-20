const React = require('react');

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      styles: {
        parent: {
          position: 'relative'
        },
        file: {
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          width: '100%',
          zIndex: 1
        },
        text: {
          position: 'relative',
          zIndex: -1
        }
      }
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    const {styles, value} = this.state;
    const {name, className, disabled, accept} = this.props;
    return <div style={styles.parent}>
        <input type="file" name={name} className={className} onChange={this.handleChange.bind(this)} 
          disabled={disabled} accept={accept} style={styles.file} />
        <input type="text" name={name + '_filename'} className={className} value={value}
          disabled={disabled} style={styles.text} tabIndex={-1} />
      </div>;
  }
}

module.exports = FileInput;
