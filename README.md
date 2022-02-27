# gpa-calculator
app for calculating GPAs for Swarthmore College students. Currently, it requires students to paste transcript data from MySwarthmore into the input box, but (pending confirmation that it is actually legal) it will hopefully eventually be able to directly scrape the data from MySwarthmore using the user's login credentials.

# Stuff About It:
The backend is written in TypeScript on top of Express.js and MongoDB. Pages are rendered from Pug templates with some JavaScript logic, though since the frontend JS/CSS is prebuilt with Webpack and served statically, using other languages on the backend would be fairly trivial. It uses Bootstrap 5 for most styling, with some customizations applied using SCSS.
