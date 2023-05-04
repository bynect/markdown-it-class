const MarkdownIt = require('markdown-it');
const markdownItClass = require('@bynect/markdown-it-class');

const mdText = `# Colors and Cords\n

The following is correspondence of color _name_ and _code_

| CSS Name       | Code (Hex) |
| :------------- | :--------: |
| LightSteelBlue | #B0C4DE    |
| ForestGreen    | #228B22    |
| Crimson        | #DC143C    |
`;

const md = MarkdownIt().use(markdownItClass, {
  h1: ['title', 'is-4'],
  em: ['tag', 'is-info'],
  table: 'table',
});

console.log(md.render(mdText));

md.mapping = {
  p: "color:red;",
  h1: "text-align:left",
};

console.log(md.render(`
# Hello world

This is a simple test


This too

Yes bro
`));