react-file-input
============
[Demo](https://captivationsoftware.github.io/react-file-input)

react-file-input allows you to style your file inputs just like other input types (e.g. text). Useful for creating uniformity between form controls, regardless of type.

## Installation
```sh
npm install react-file-upload
```

## Code Example

First, you will want to wrap the element you want to be sticky with <Sticky></Sticky> tags. When the element is scrolled past the point where it would start to move off screen, the stickiness is activated.

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
        <FileInput name="myFile" onChange={this.handleChange} />
      </form>
    );
  },
});

```

### Props

#### name, className, placeholder, onChange
Behave just like standard react-style attributes on input controls.

## Contributors

Captivation Software (@teamcaptivation)

By all means, if you see room for improvement, let us know!


## License

MIT License
