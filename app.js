const express = require('express');
const hbs = require('hbs');
const fs = require("fs");

var app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/html'));
hbs.registerHelper('html', (text) => {
  return new hbs.SafeString(text);
});

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.ip} accessed ${req.url}`;
  
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err){
      console.log(err);
    }
  });
  next();
});

// --------------------------------------------------------------------------------------------------
// Uncomment below for server maintenence. As privacy policy and terms of use pages 
// are static html hosted by command above, they will be the only pages uneffected by this redirect.
// --------------------------------------------------------------------------------------------------
//
// app.use((req, res, next) => {
//   res.render('template.hbs',{
//     mainContent: `<center>
//           <p><img class="main_img" src="images/saiy.svg"></p>
//           <p class="main_text">Saiy.ai is currently undergoing maintenence. We'll be back soon! In the mean time feel free to find us on the Play Store and GitHub at the links below.</p>
//           <p>
//             <a href="https://play.google.com/store/apps/details?id=ai.saiy.android" target="_blank" class="button">Play Store</a> 
//             <a href="https://github.com/brandall76/Saiy-PS" target="_blank" class="button">GitHub</a>
//           </p>`
//   });
// });

app.get('/', (req, res) => {
  res.render('template.hbs',{
    mainContent: `<center>
          <p><img class="main_img" src="images/saiy.svg"></p>
          <p class="main_text">Saiy is an open source, infinitely customizable, voice assistant for Android compatible with Tasker! Download on the Play Store today or join the cause and fork us on GitHub!</p>
          <p>
            <a href="https://play.google.com/store/apps/details?id=ai.saiy.android" target="_blank" class="button">Play Store</a> 
            <a href="https://github.com/brandall76/Saiy-PS" target="_blank" class="button">GitHub</a> 
            <a href="features.html" class="button">Learn More</a>
          </p>`,
    navHome: ' active'
  });
});
app.get('/contact', (req, res) => {
  res.render('template.hbs',{
    mainContent: `<center>
          <p><img class="main_img" src="images/at.svg"></p>
          <p class="main_text">Need to get in touch? Say no more!<br>You can send off an email or find us at any of the social media links below!</p>
          <p>
            <a href="mailto:contact@saiy.ai"><img class="lgicon" src="images/at.svg"></a> 
            <a href="https://www.facebook.com/games/saiy_ai/" target="_blank"><img class="lgicon" src="images/facebook.svg"></a> 
            <a href="https://twitter.com/brandall76" target="_blank"><img class="lgicon" src="images/twitter.svg"></a> 
            <a href="https://plus.google.com/100131487913427971091" target="_blank"><img class="lgicon" src="images/google-plus.svg"></a> 
            <a href="https://uk.linkedin.com/in/benrandall76" target="_blank"><img class="lgicon" src="images/linkedin.svg"></a>
            <a href="https://github.com/brandall76/Saiy-PS" target="_blank"><img class="lgicon" src="images/github.svg"></a>
            <a href="https://play.google.com/store/apps/details?id=ai.saiy.android" target="_blank"><img class="lgicon" src="images/playstore.svg"></a>
          </p>
        </center>`,
    navContact: ' active'
  });
});
app.get('/features', (req, res) => {
  res.render('template.hbs',{
    mainContent: `<center>
          <p><img class="main_img" src="images/s8_saiylogo.svg"></p>
          <p class="main_text">A full list of all features is coming soon! Till then, why not download the app and see if you can figure them all out? *Hint, it'll take awhile. ;) </p>
          <p>
            <a href="https://play.google.com/store/apps/details?id=ai.saiy.android" target="_blank" class="button">Play Store</a> 
          </p>
        </center>`,
    navFeatures: ' active'
  });
});

var port = 3000;

app.listen(port);

console.log(`Server is running on port ${port}`);