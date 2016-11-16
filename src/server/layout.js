export default function renderLayout(html) {
  const styles = [
  ];

  const scripts = [
    'http://0.0.0.0:3001/static/bundle.js',
  ];

  return `
    <!doctype html>
    <html class="no-js" lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Codemotion 2016 - Universal JavaScript</title>

        ${styles.map(style => `<link rel="stylesheet" href="${style}">`).join('')}
      </head>
      <body>

        <div id="root">${html}</div>

        ${scripts.map(script => `<script src="${script}"></script>`).join('')}
      </body>
    </html>
  `;
}
