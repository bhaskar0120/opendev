export default function handler(req, res) {
    res.status(200).json({
        "blog": `
# This is a heading
## This is a sub-heading
### This is a sub-sub-heading
[This is a link](https://www.google.com)

Try an image

![This is an image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

Try an image to be a link
[![This is an image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)](https://www.google.com)

This is a paragraph

Some inline code \`const a = 1;\`  and some more inline code \`const b = 2;\`

Some bold text **This is bold text**

Some italic text *This is italic text*

Some strikethrough text ~~This is strikethrough text~~

Some bold and italic text ***This is bold and italic text***

Some Bold and strikethrough text **~~This is bold and strikethrough text~~**

Some italic and strikethrough text *~~This is italic and strikethrough text~~*

Some bold, italic and strikethrough text ***~~This is bold, italic and strikethrough text~~***


This is another paragraph
List inside a list inside a list
1. Item 1
    - Item 1.1
        1. Item 1.1.1
2. Item 2
3. Item 3

Checkboxes
- [x] Item 1
- [ ] Item 2
- [ ] Item 3

This is a list
- Item 1
- Item 2
- Item 3

This is a numbered list
1. Item 1
3. Item 2
2. Item 3

This is a code block
\`\`\`
void main(){
    printf("Hello World");
}
\`\`\`

Attempt to inject html XSS
<script>alert("XSS")</script>

This is a table
| Name | Age |
| :-: | :-: |
| John | 20  |
| Jane | 21  |
| Jack | 22  |

Attempt to create an XSS button
<button onclick="alert('XSS')">Click Me</button>
This is a Blockquote
> This is a blockquote

List inside a blockquote
> - Item 1
> - Item 2
> - Item 3

<
`
    });
}