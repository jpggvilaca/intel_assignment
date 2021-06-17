## Instructions

- Rename `.env.example` to `.env` and replace the api keys with your own
- Run `yarn` to install dependencies
- Run `yarn start`. A new tab should open automatically in your browser

- Node >= 10.14 is required.

## Decisions

- Bootstrapped the app with CRA for faster development
- For styling I went with 'styled-components', using css-grid and flexbox
- For API calls I went with 'axios'

## Architecture

- src/components where all the UI lies, along with their types and styles
- src/api.ts for any code that handles api interaction
- src/utils for utility functions

## What's missing

- Unit tests
- Additional styling
- Fetch user info to display more metadata
- Error handling
- Loading states
