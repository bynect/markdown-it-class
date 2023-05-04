# markdown-it-class

> Plugin for [markdown-it](https://github.com/markdown-it/markdown-it) to allow adding classes to HTML tags.

## Install

You can install it using yarn or npm

```shell
npm install --save-dev markdown-it-class
```

## Usage

All you have to do is register the plugin and pass the tag to class mapping.

```javascript
const MarkdownIt = require('markdown-it')
const markdownItClass = require('markdown-it-class')

// Setup the markdown renderer
const md = MarkdownIt()
  // Register the plugin and pass a tag to class mapping
  .use(markdownItClass, {
    h1: ['text-2xl', 'font-bold', 'mb-3', 'text-blue-700'],
    p: ['text-md'],
  });

const markdownString = fs.readFileSync('post.md', 'utf-8');
const html = md.render(markdownString);

// HTML with classes assigned to the tags
console.log(html);
```

## Credits

This package is a fork of [markdown-it-class](https://github.com/kamranahmedse/markdown-it-class) that stores the class mappings in the MarkdownIt object for easier modifications.

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; bynect
