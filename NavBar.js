let homepage;
let profile;
let internship;
let report;
let currentURL = window.location.href;
console.log(currentURL);

if(currentURL == "http://127.0.0.1:5500/Homepage/homepage.html")
homepage = "<a><button type='button'>HOME</button></a>";
else
homepage = `<a href="/Homepage/homepage.html"><button type='button'>HOME</button></a>`;
if(currentURL == "http://127.0.0.1:5500/Profile/profile.html")
profile = "<a><button type='button'>PROFILE</button></a>";
else
profile = `<a href="/Profile/profile.html"><button type='button'>PROFILE</button></a>`;
if(currentURL == "http://127.0.0.1:5500/Internship/internship.html")
internship = "<a><button type='button'>INTERNSHIP</button></a>";
else
internship = `<a href="/Internship/internship.html"><button type='button'>INTERNSHIP</button></a>`;

if(currentURL == "http://127.0.0.1:5500/Report/report.html")
    report = "<a><button type='button'>REPORT</button></a>";
else
report = `<a href="/Report/report.html"><button type='button'>REPORT</button></a>`;
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
                    ${homepage}
                    ${profile}
                    ${internship}
                    ${report}  
                </div>
        </div>
    </body>
    </html>
    `);