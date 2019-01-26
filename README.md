# Website
Please switch to gh-pages branch to see the main website structure and implementation


# typography.css [![GitHub release](https://img.shields.io/github/release-pre/hungvt13/typography.css.svg)](https://github.com/hungvt13/typography.css) [![npm version](https://badge.fury.io/js/ht-typography.css.svg)](https://badge.fury.io/js/ht-typography.css) ![](https://img.shields.io/npm/l/express.svg)

_Plug and use preset fonts CSS_

[Demo](https://hungvt13.github.io/typography.css/)

`typography.css` is a css that change your default font using more beautiful preset. Great to use in projects that emphasis on typography.

# Installation

Install via npm:

```bash
$ npm i ht-typography.css --save
```

## Usage

To use typography.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

All you need is to add the stylesheet into your html `<head>` and add the preset to the `<body>` or `<div>` tag. 

```html
<head>
  <link rel="stylesheet" href="typography.css">
</head>
```

### Classes

To animate an element, add the class `animated` to an element. You can include the class `infinite` for an infinite loop. Finally you need to add one of the following classes to the element:

| Class Name Presets|  Class Headers     | Class Paragraph      |
| ----------------- | ------------------ | -------------------- |
| `general`         | `general_header`   | `general_paragraph`  |
| `high-end`        | `high-end_header`  | `high-end_paragraph` |
| `modern`          | `modern_header`    | `modern_paragraph`   |
| `start-up`        | `start-up_header`  | `start-up_paragraph` |
| `elegant`         | `elegant_header`   | `elegant_paragraph`  |
| `attention`       | `attention_header` | `attention_paragraph`|
| `medieval`        | `medieval_header`  | `medieval_paragraph` |
| `art`             | `art_header`       | `art_paragraph`      |


Example Preset:

```html
<div class="elegant">
  <h1>Header</h1>
  <p>paragraph here</p<
</div>
```
Example Individual Element:

```html
<div>
  <h1 class="art_header">Header</h1>
  <p class="modern_paragraph">paragraph here</p<
</div>
```

## License

Typography.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)
