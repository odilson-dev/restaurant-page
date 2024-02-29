# Restaurant Homepage Project

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum, focusing on practicing DOM manipulation by dynamically rendering a restaurant homepage using JavaScript.

## Project Overview

The goal of this project is to create a restaurant homepage where the entire content is generated dynamically using JavaScript. The project involves setting up a development environment with webpack, organizing the project structure, and implementing tabbed browsing functionality to navigate through different sections of the website.

## Setup

1. Begin by initializing the project with npm:

   ```
   npm init -y
   ```

2. Install webpack and webpack-cli as dev dependencies:

   ```
   npm install webpack webpack-cli --save-dev
   ```

3. Create `src` and `dist` directories with necessary files:

   - `src/index.js`: Entry point for JavaScript code.
   - `dist/index.html`: HTML skeleton of the website.

4. Create a `webpack.config.js` file to configure webpack.

5. Set up an HTML skeleton inside `dist/index.html` with a header containing navigation buttons and a content div.

## Usage

1. Run webpack to bundle the JavaScript code:

   ```
   npx webpack --watch
   ```

2. Open `dist/index.html` in a browser to view the website.

3. Use the navigation buttons to switch between different tabs: Home, Menu, and Contact.

## Additional Notes

- Styling is separated into a separate CSS file.
- Each tab (Home, Menu, Contact) is implemented as a separate module.
- Event listeners are added to the navigation buttons to dynamically load tab content.

## Acknowledgments

This project is inspired by [The Odin Project](https://www.theodinproject.com/) curriculum.
