react-file-input
============
[Demo](https://captivationsoftware.github.io/react-file-input)

Style your file inputs using React!

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

#### name
Behaves just like plain 'ol HTML input name attribute.

#### onChange
An event is fired when a file is selected for upload. You can pass your own callback for this attribute and it will be called with the selected file's details.

## Contributors

Captivation Software (@teamcaptivation)

By all means, if you see room for improvement, let us know!


## License

MIT License
