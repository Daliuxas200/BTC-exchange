# BTC exchange

## Development Environment

The development enviroment was set up using manual implementation of **Webpack**. This configuration provides some useful features nescesary for development yet remains simple enough to easily understand and adjust.

1. **webpack-merge** was used to split the prod and dev modes into separate config files.
2. **SCSS** was used, in combination with **mini-css-extract-plugin**, **css-loader**, **postcss-loader**, **sass-loader** and **autoprefixer** to generate a final minified and multibrowser compatible **CSS** file.
3. **Webpack 5 asset module** was used to load font files.
4. **html-webpack-plugin** was used to extract and set up the main index.html file with some main meta tags configured. **clean-webpack-plugin** for clearing old /dist files between builds.
5. **Prettier** was used to help keep the code tidy

#### To run the Dev server

```
npm run dev
```

#### To generate a final Build

```
npm run build
```

## The App

### Styling

The Web Aplication was designed and its CSS programmed in house, only using **react-icons** library to get SVG icons. I prefer writing my own styles as it provides a more lightweight package and allows for more creativity.

Full power of SCSS was utilised including file imports, media queries, mixins and variables.

### UI

The BTC exchanger is displayed in a modal, that can be minimized while on desktop resolution. It lets you keep track of up to 3 currencies to BTC exchange rate, updating automatically every 60s, but also leting you update manualy by clicking the little reload icon. There is a visual loader to indicate whenever the app is fetching new data, and to show when the last update occured. Unwanted currencies can be removed from tracker by clicking the little X icon next to it, or added by clicking the + button which appears whenever some currencies are untracked. Inputing a numeric value into the Input field will instantly convert it to tracked currencies. The converted value will update automatically whenever the conversion rate is updated.

### Front End, React

Pure react was used for generating the front end. Functional components were used, utilising the new react Hooks for state managment. useEffect hooks were set up to trigger the initial and periodic fetching of data from https://api.coindesk.com/v1/bpi/currentprice.json. Due to the minimal size of the app, state managment was done by using useState hook and passing of props between components. A helperFunctions.js file was set up to contain reusable helper functions for proper formating of monetaly values, parsing Rates from response data, etc.
