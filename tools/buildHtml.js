import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (error, markup) => {
  if (error) {
    return console.error(error);
  }

  const $ = cheerio.load(markup);
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    if (error) {
      return console.error(error);
    }

    console.log('index.html written to /dist'.green);
  });
});
