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

## Styling

The Web Aplication was designed and its CSS programmed in house, only using **react-icons** library to get SVG icons. I prefer writing my own styles as it provides a more lightweight package and allows for more creativity.

Full power of SCSS was utilised including file imports, media queries, mixins and variables.
