# Ian Rosenthal — Portfolio

A responsive HTML/CSS portfolio based on Ian’s three-page Figma design.

## View
https://ian-rosenthal-portfolio.netlify.app/

## Run
Open `dist/index.html` in a browser. No package installation or build step is needed.
For a local server, run `python3 -m http.server 8773 --directory dist` from this folder.

## Deploy updates
This site is published with Netlify Drop. Upload the contents of `dist` (or a ZIP with `index.html` at its root) to the existing Netlify project. GitHub changes do not deploy automatically.

## Edit
- `dist/index.html`: introduction, photo, skills, and contact
- `dist/projects.html`: three featured projects and a seven-tile course-project grid
- `dist/case-study.html`: agriculture case study
- `dist/business-card-case-study.html` and `dist/plant-case-study.html`: project-specific starters
- `dist/farm-plan.html` and `dist/sop.html`: clearly labeled document starters
- `dist/styles.css`: shared styles and mobile layout
- `dist/script.js`: responsive sizing for original Figma diagram layers
- `dist/assets/`: portrait, project previews, original Figma vectors, and fonts

## Status and credits
Initial portfolio; final growing photos, measured designs, farm plan, SOP and results are pending. Concept drawings are illustrative and are not build-ready plans. Website project previews use screenshots of the projects. The Figma preview shows the original three-page design. The plant page does not connect to a working API.

Creative direction and portfolio content: Ian Rosenthal. Implementation developed with Codex assistance. The design’s SDS button styling is adapted to semantic HTML links because this project uses no React component library. Fonts: Inter and Playfair Display, distributed under the SIL Open Font License. Portrait and original project content retain their owners’ rights. No general reuse license is granted by publishing this repository.

## Contact icons and course-project grid
This update adds Email, Résumé, GitHub and LinkedIn icon links to all seven page footers, plus the home contact section. External links request a new tab; mailto opens the visitor’s configured email handler. No email is sent automatically.

The Projects page keeps its three featured projects and adds seven smaller project cards. The Figma tile links to the original design and this repository’s HTML/CSS implementation. Five earlier projects have source copies in `course-projects/`; their existing live URLs stay unchanged. Blackjack keeps its separate repository.

Icons: Bootstrap Icons v1.11.3 (MIT), https://icons.getbootstrap.com/. SVG files and the original license are in `dist/assets/icons/`.

Publication: the source belongs in this GitHub repository; deploy the dist folder separately to the existing Netlify project.
