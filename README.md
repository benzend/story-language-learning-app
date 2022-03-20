## Project Breakdown

The main technologies being used:

- Nest.js
- React.js (TypeScript)

Nest.js is the _root_ of the project while React is stuck in the `client` folder.

Nest.js's job is to both serve the React code and act as an API for the project.

## Setup

1. _Clone the repository_ - Run `git clone "https://github.com/benzend/story-language-learning-app`
2. _Dependencies_ - You need to get the dependencies installed into your instance. Luckily for you, there isn't a lot.

- In the _root_ of the application, run `npm i`
- In the _client_ folder, `npm i`

## Run The Instance

There are two parts to getting this app functional.

1. In the _client_ folder, run `npm run build`. This will start create a frontend build for the backend to serve later.
2. In the _root_ of the application, run `npm run start`. This will get the backend running and serve up the frontend files in `client/build` for the application.
3. You should see your instance running at https://localhost:8080

## Dev

If you're wanting to have a development setup for things like _compiling whenever you save_, you'll want to follow these steps.

1. In the _root_ of the application, run `npm run start:dev`. Nest.js will be watching for any changes you make in the backend of the project.
2. In the _client_ folder, run `npm run start`. Webpack will be watching for any changes you make in the client folder.
