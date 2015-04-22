react-file-input
============
[Demo](https://captivationsoftware.github.io/react-file-input)

react-file-input allows you to style your file inputs just like other input types (e.g. text). Useful for creating uniformity between form controls, regardless of type.

## Installation
```sh
npm install react-file-upload
```

## Code Example
Usage is pretty simple: just use react-file-input instead of <input type="file" />!

app.jsx
```js
var React = require('react'),
  FileInput = require('react-file-input');

var Form = React.createClass({
  handleChange: function(file) {
    console.log(file, 'selected!');
  },

  render: function() {
    return (
      <form>
        <FileInput name="myFile" placeholder="My File" className="inputClass" onChange={this.handleChange} />
      </form>
    );
  },
});

```

The list of valid props can be found below.

### Props

#### name, className, placeholder, onChange
Behave just like standard react-style attributes on input controls.

## Contributors

Captivation Software (@teamcaptivation)

By all means, if you see room for improvement, let us know!


## License

MIT License
