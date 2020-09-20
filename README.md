# WebCV

A custom HTML element for generating a web-based CV from a JSON file with a selection of themes.

## How to use

1. Place the CV.mjs file into your project.
1. Add the web-cv HTML element to your HTML file as follows:
```html
<web-cv uri="cv.json" accent-color="#589bd5" theme="sidebar"></web-cv>
```

### Properties

The `<web-cv>` element takes the following three properties:
| Property | Explanation | Required | Default |
| - | - | - | - |
| `uri` | The link to your CV JSON file | Yes | n/a |
| `accent-color` | The color which will be used to add accents to the CV, e.g. in headings | False | 'coral' |
| `theme` | Your choice of theme | False | 'sidebar' |

#### Current available themes
- 'sidebar'
  - Two column layout with a sidebar on the right.
- 'cascade'
  - Block level content elements from top to bottom.

## Installation

1. Clone this repo
1. `cd` into the directory and run `npm i` to install.
1. Run `npm run dev` to spin up a simple http-server
1. Navigate to http://localhost:8080.
1. Profit!

### Example

An example of this component can be seen [here](https://gavhanna.github.io/WebCV)
