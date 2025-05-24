const sm = require('sitemap-generator');
const fs = require('fs');

// Create sitemap generator
const generator = sm('https://sam-tech-solution.web.app', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml',
});

// Register events
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// Start the crawler
generator.start();