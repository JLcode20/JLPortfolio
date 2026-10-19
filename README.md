# JLPortfolio

A responsive personal portfolio for Justine Lance F. Cutiongco, a Computer Engineering student focused on embedded systems and PCB design. The site is built with plain HTML, CSS, and JavaScript.

## Run locally

From the project directory, start a local web server:

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. You can also open `index.html` directly, though a local server is recommended for reliable loading of media and assets.

## Features

- Responsive layout for desktop and mobile screens
- Light and dark themes, with the selected theme saved in the browser
- Project image previews in a modal
- Contact links for GitHub, LinkedIn, and Facebook
- Copy-to-clipboard control for the contact email
- Animated circuit-board background video

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
└── asset/
	├── Pictures/
	└── vecteezy_glowing-circuit-board-lines-animation-abstract-technology_46886569.mp4
```

`index.html` contains the page content, `styles.css` controls the layout and themes, and `script.js` handles theme switching, project previews, and email copying. Images and the background video are stored in `asset/`.
# JLPortfolio
