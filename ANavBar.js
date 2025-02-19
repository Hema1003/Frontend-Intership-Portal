let pages = [
  { name: 'HOME', url: '/Homepage/homepage.html' },
  { name: 'Student Details', url: '/StudentDetails/studentDetails.html' },
  { name: 'INTERNSHIP', url: '/Internship/Ainternship.html' }
];

let currentURL = window.location.href;
let buttons = pages.map(page => {
  if (currentURL.includes(page.url)) {
    return `<a><button type='button'>${page.name}</button></a>`;
  } else {
    return `<a href="${page.url}"><button type='button'>${page.name}</button></a>`;
  }
}).join('');

document.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/navbar/NavBar.css">
  </head>
  <body>
    <div class="navigationBar">
      <div>
        <button type="button" class="menu-button">MENU</button>
      </div>
      <div class="home-button">
        ${buttons}
      </div>
    </div>
  </body>
  </html>
`);