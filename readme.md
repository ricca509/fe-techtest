# Implementation notes

There are two parts where unit tests do not cover 100% of the code:

- `utils/dom`: jsdom lacks a complete dom implementation and the api for `createRange` is missing.
  I could have polyfilled it but given the time constraints I decided to not do it (I although prepared all the tests). It is not difficult to do, it just takes time that I felt at that point I had to spend on the app itself.
- `app`: The app is not completely unit tested: given my decision to implement a small "library" and have an internal state,
  the state changes could not be tested, resulting in a partial unit test. With more time, I would have implemented it as a class extending a parent class (like react does) with a public method to be called inside the tests to set the state.

Although those two pieces are not completely unit tested, I added two integration tests with cypress that cover the requirements and show the page working as a whole. Run them with `npm run integration` (or `npm run integration:dev` if you want to use the cypress UI).

With more time I would have implemented CSS modules by changing the webpack config. This way every component would have been completely isolated. All the style is for now in the main `style.css`.

# Which? Javascript Exercise

## Getting up and running

Clone or fork this repo. If you'd rather start from scratch with your own setup that's fine too, as long as you complete [the exercise](#the-exercise).

This repo contains a very simple webpack based development environment. We'll need to install some stuff to get going...

### Requirements

Webpack needs nodejs to do its thing. We aren't making a node app - just using it as a dev tool.

- [nodejs](https://nodejs.org/en/)

Installing node.js will also install [npm](https://www.npmjs.com) for us too. We'll need it for dependencies and some scripts.

### Dependencies

We have specified all the dependencies we need in the `package.json` file. Npm will install them for us:

`$ npm install`

### Run!

Ok, time to run the app. Npm takes care of business again:

`$ npm start`

This will fire up the wepback dev server. It's not important to understand how it works for now.

Open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic html page. If you open the development console in your browser you should see a welcome message.

### Development

The source files are located in `src/`. If you change a file, webpack will reload your files and refresh the browser for you.

### Test

You can run the example tests:

`$ npm test`

## The exercise

**Goal**: Production of a client-side Web application to help a child understand multiplication.

**Duration**: This test is intended to take ~2 hours but may take more

**Description**: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking a second time on a previously highlighted number should remove all highlighting from numbers that are multiples of the number that is clicked.

**Constraints**: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

**Criteria for assessment**: Important things that will be assessed are:

- Project layout.
- Coding style, i.e. your approach not whether you use semicolons or not ;)
- Your approach to unit testing/TDD
- Maintainability and extensibility
- Use of responsive design
- Performance & Accessibility
- Naming conventions used
- Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.
