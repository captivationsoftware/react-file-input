react-file-input
============
[Demo](https://captivationsoftware.github.io/react-file-input)

Styling native HTML file inputs can be a pretty big pain, and to make matters worse, the browser default look-and-feel is probably at odds with your app's design. This problem is what react-file-input aims to solve.

Once integrated, react-file-input quickly eliminates the headaches associated with forms requiring file upload.

## Installation
```sh
npm install react-file-input
```

## Code Example
Usage is pretty simple: just use react-file-input instead of `<input type="file" />`!

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
