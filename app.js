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

app.get('/terms', (req, res) => {
  res.render('template.hbs',{
    mainContent: `<center><p><img class="main_img" src="images/s8_lock.svg"></p></center>
        <h1>
          Saiy Android Terms of Use
        </h1>
        <div class="policy_text">
          <p>
            <strong>Please read carefully before downloading or using the app.</strong>
          </p>
          <p>
            This end-user licence and terms of use agreement (<strong>EULA</strong>) is a legal agreement between you (<strong>End-user or you</strong>) and Saiy Ltd 20-22, Wenlock Road, London, England, N1 7GU (<strong>Licensor, us or we</strong>) for:
          </p>
          <blockquote>
            Saiy mobile application software, the data supplied with the software, and the associated media (<strong>App</strong>); and
            the electronic documents provided by the Application Store from which you downloaded the App (<strong>Application Store</strong>) in conjunction with the App (<strong>Documents</strong>).
            We license use of the App and Documents to you on the basis of this EULA and subject to any rules or policies applied by the Application Store (<strong>Application Store Rules</strong>). We do not sell the App or Documents to you. We remain the owners of the App and Documents at all times.
          </blockquote>
          <p>
            <strong>Important notice:</strong>
          </p>
          <blockquote>
            By downloading the App from this website you agree to the terms of the licence which will bind you. The terms of the licence include, in particular, the privacy policy defined in condition 1.4 and limitations on liability in condition 7.
If you do not agree to the terms of this licence, we will not license the App and Documents to you and you must stop the downloading process now by clicking the "Decline" button. In this case the downloading process will terminate.
As a consumer, you have the right to withdraw from your transaction without charge and without any reason before downloading the App and Documents.
However, you will lose the right to cancel the transaction once you begin to download the App or Documents.
This does not affect your consumer rights for an app or documents that are defective.
          </blockquote>
          <p>
            <strong>AGREED TERMS</strong>
          </p>
          <p><strong>
            1. Acknowledgements
          </strong></p>
          <blockquote>
            1.1 The terms of this EULA apply to the App or any of the services accessible through the App (<strong>Services</strong>), including any updates or supplements to the App or any Service, unless they come with separate terms, in which case those terms apply. If any open-source software is included in the App or any Service, the terms of an open-source licence may override some of the terms of this EULA.
          </blockquote>
          <blockquote>
            1.2 We may change these terms at any time by informing you via the Application Store of the change or notifying you of a change when you next start the App or go to download any update which we may issue through the Application Store from time to time. New terms may be displayed on-screen and you may be required to read and accept them to continue your use of the Services or download an update.
          </blockquote>
          <blockquote>
            1.3 You will be assumed to have obtained permission from the owners of the mobile telephone or handheld devices that are controlled, but not owned, by you and described in condition 2.2(a) (<strong>Devices</strong>) and to download or stream a copy of the App onto the Devices. You and they may be charged by your and their service providers for internet access on the Devices. You accept responsibility in accordance with the terms of this EULA for the use of the App or any Service on or in relation to any Device, whether or not it is owned by you.
          </blockquote>
          <blockquote>
            1.4 The terms of our privacy policy from time to time, available at www.saiy.ai/privacy (<strong>Privacy Policy</strong>) are incorporated into this EULA by reference and apply to those Services that are specified in condition 1.5 as having separate privacy policies. Additionally, by using the App or any Service, you acknowledge and agree that internet transmissions are never completely private or secure. You understand that any message or information you send using the App or any Service may be read or intercepted by others, even if there is a special notice that a particular transmission is encrypted.
          </blockquote>
          <blockquote>
            1.5 By using the App or any of the Services, you consent to us collecting and using technical information about the Devices and related software, hardware and peripherals for Services that are internet-based or wireless to improve our products and to provide any Services to you.
          </blockquote>
          <blockquote>
            1.6 The App or any Service may contain links to other independent third-party websites (<strong>Third-party Sites</strong>). Third-party Sites are not under our control, and we are not responsible for and do not endorse their content or their privacy policies (if any). You will need to make your own independent judgement regarding your interaction with any Third-party Sites, including the purchase and use of any products or services accessible through them.
          </blockquote>
          <blockquote>
            1.7 Any words following the terms <strong>including</strong>, <strong>include</strong>, <strong>in particular</strong> or <strong>for example</strong> or any similar phrase shall be construed as illustrative and shall not limit the generality of the related general words.
          </blockquote>
          <p><strong>
            2. Grant and scope of licence
          </strong></p>
          <blockquote>
            2.1 In consideration of you agreeing to abide by the terms of this EULA, we grant you a non-transferable, non-exclusive licence to use the App on the Devices, subject to these terms, the Privacy Policy and the Application Store Rules, incorporated into this EULA by reference. We reserve all other rights.
          </blockquote>
          <blockquote>
            2.2 You may:
            <ol type="a">
              <li>download a copy of the App onto a Device to view, use and display the App on the Device for your personal purposes only; and</li>
              <li>use the Documents for your personal purposes only.</li>
            </ol>
          </blockquote>
          <p><strong>
            3. Licence restrictions
          </strong></p>
          <blockquote>
            Except as expressly set out in this EULA or as permitted by any local law, you agree:
            <ol type="a">
              <li>not to copy the App or Documents except where such copying is incidental to normal use of the App, or where it is necessary for the purpose of back-up or operational security;</li>
              <li>not to rent, lease, sub-license, loan, translate, merge, adapt, vary or modify the App or Documents;</li>
              <li>not to make alterations to, or modifications of, the whole or any part of the App, or permit the App or any part of it to be combined with, or become incorporated in, any other programs;</li>
              <li>not to disassemble, decompile, reverse-engineer or create derivative works based on the whole or any part of the App or attempt to do any such thing except to the extent that (by virtue of section 296A of the Copyright, Designs and Patents Act 1988) such actions cannot be prohibited because they are essential for the purpose of achieving inter-operability of the App with another software program, and provided that the information obtained by you during such activities:</li>
              <ol type="i">
                <li>is used only for the purpose of achieving inter-operability of the App with another software program;</li>
                <li>is not unnecessarily disclosed or communicated without our prior written consent to any third party; and</li>
                <li>is not used to create any software that is substantially similar to the App;</li>
              </ol>
              <li>not to provide or otherwise make available the App in whole or in part (including object and source code), in any form to any person without prior written consent from us; and</li>
              <li>to comply with all technology control or export laws and regulations that apply to the technology used or supported by the App or any Service (<strong>Technology</strong>), together Licence Restrictions.</li>
            </ol>
          </blockquote>
          <p><strong>
            4. Acceptable use restrictions
          </strong></p>
          <blockquote>
            Please be aware that your dialogue with the App may enter the public domain; e.g. by providing third parties with data. You must:
            <ol type="a">
              <li>not use the App or any Service in any unlawful manner, for any unlawful purpose, or in any manner inconsistent with this EULA, or act fraudulently or maliciously, for example, by hacking into or inserting malicious code, including viruses, or harmful data, into the App, any Service or any operating system;</li>
              <li>not infringe our intellectual property rights or those of any third party in relation to your use of the App or any Service (to the extent that such use is not licensed by this EULA);</li>
              <li>not transmit any material that is defamatory, offensive or otherwise objectionable in relation to your use of the App or any Service;</li>
              <li>not use the App or any Service in a way that could damage, disable, overburden, impair or compromise our systems or security or interfere with other users; and</li>
              <li>not collect or harvest any information or data from any Service or our systems or attempt to decipher any transmissions to or from the servers running any Service.</li>
            </ol>
          </blockquote>
          <p><strong>
            5. Intellectual property rights
          </strong></p>
          <blockquote>
            5.1 You acknowledge that all intellectual property rights in the App, the Documents and the Technology anywhere in the world belong to us or our licensors, that rights in the App are licensed (not sold) to you, and that you have no rights in, or to, the App, the Documents or the Technology other than the right to use each of them in accordance with the terms of this EULA.
          </blockquote>
          <blockquote>
            5.2 You acknowledge that you have no right to have access to the App in source-code form.
          </blockquote>
          <p><strong>
            6. Limited warranty
          </strong></p>
          <blockquote>
            6.1 We warrant that:
            <ol type="a">
              <li>the App will, when properly used and on an operating system for which it was designed, perform substantially in accordance with the functions described in the Documents; and</li>
              <li>that the Documents correctly describe the operation of the App in all material respects, for a period of thirty days from the date on which the App is downloaded to the Device (<strong>Warranty Period</strong>).</li>
            </ol>
          </blockquote>
          <blockquote>
            6.2 If within the Warranty Period you notify us in writing of any defect or fault in the App as a result of which it fails to perform substantially in accordance with the Documents, you will be entitled to a replacement download of the App for no additional payment.
          </blockquote>
          <blockquote>
            6.3 The warranty does not apply:
            <ol type="a">
              <li>if the defect or fault in the App or any Service results from you having amended the App;</li>
              <li>if the defect or fault in the App results from you having used the App in contravention of the terms of this EULA; or</li>
              <li>if you breach any of the Licence Restrictions or the Acceptable Use Restrictions.</li>
            </ol>
          </blockquote>
          <blockquote>
            6.4 This warranty is in addition to your legal rights in relation to software that is faulty or not as described.
          </blockquote>
          <p><strong>
            7. Limitation of liability
          </strong></p>
          <blockquote>
            7.1 You acknowledge that the App has not been developed to meet your individual requirements, and that it is therefore your responsibility to ensure that the facilities and functions of the App as described in the Documents meet your requirements.
          </blockquote>
          <blockquote>
            7.2 We only supply the App and Documents for domestic and private use. You agree not to use the App and Documents for any commercial, business or resale purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.
          </blockquote>
          <blockquote>
            7.3 We are only responsible for loss or damage you suffer that is a foreseeable result of our breach of this EULA or our negligence up to the limit specified in condition 7.4, but we are not responsible for any unforeseeable loss or damage. Loss or damage is foreseeable if it is an obvious consequence of our breach or if they were contemplated by you and us at the time we granted you the EULA.
          </blockquote>
          <blockquote>
            7.4 Our maximum aggregate liability under or in connection with this EULA (including your use of any Services) whether in contract, tort (including negligence) or otherwise, shall in all circumstances be limited to the amount of any payment made by you to us to download the App. This does not apply to the types of loss set out in condition 7.5.
          </blockquote>
          <blockquote>
            7.5 Nothing in this EULA shall limit or exclude our liability for:
            <ol type="a">
              <li>death or personal injury resulting from our negligence;</li>
              <li>fraud or fraudulent misrepresentation; and</li>
              <li>any other liability that cannot be excluded or limited by English law.</li>
            </ol>
          </blockquote>
          <p><strong>
            8. Termination
          </strong></p>
          <blockquote>
            8.1 We may terminate this EULA immediately by written notice to you if you breach any of the Licence Restrictions or the Acceptable Use Restrictions.
          </blockquote>
          <blockquote>
            8.2 On termination for any reason:
            <ol type="a">
              <li>all rights granted to you under this EULA shall cease;</li>
              <li>you must immediately cease all activities authorised by this EULA, including your use of any Services; and</li>
              <li>you must immediately delete or remove the App from all Devices, and immediately destroy all copies of the App and Documents then in your possession, custody or control and certify to us that you have done so.</li>
            </ol>
          </blockquote>
          <p><strong>
            9. Communication between us
          </strong></p>
          <blockquote>
            9.1 If you wish to contact us in writing, or if any condition in this EULA requires you to give us notice in writing, you can send this to us by e-mail to <a href="mailto:support@saiy.ai">support@saiy.ai</a> . We will confirm receipt of this by contacting you by e-mail.
          </blockquote>
          <blockquote>
            9.2 If we have to contact you or give you notice in writing, we will do so by e-mail to the address you provide to us in your request for the App.
          </blockquote>
          <p><strong>
            10. Events outside our control
          </strong></p>
          <blockquote>
            10.1 We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under this EULA that is caused by any act or event beyond our reasonable control, including (without limitation) failure of public or private telecommunications networks (<strong>Event Outside Our Control</strong>).
          </blockquote>
          <blockquote>
            10.2 If an Event Outside Our Control takes place that affects the performance of our obligations under this EULA:
            <ol type="a">
              <li>our obligations under this EULA will be suspended and the time for performance of our obligations will be extended for the duration of the Event Outside Our Control; and</li>
              <li>we will use our reasonable endeavours to find a solution by which our obligations under this EULA may be performed despite the Event Outside Our Control.</li>
            </ol>
          </blockquote>
          <p><strong>
            11. Other important terms
          </strong></p>
          <blockquote>
            11.1 You acknowledge that the App may utilize software components and technology from a number of third party companies, including, but not limited to, Microsoft, Google, IBM and Nuance Communications Inc. Such use is subject to their End User License Agreement. You further acknowledge that such third party companies may collect data as a result of your use of the App and be subject to their data use and privacy policies, and that we have no control regarding their collection, storage and use of such data.
          </blockquote>
          <blockquote>
            11.2 We may transfer our rights and obligations under this EULA to another organisation, but this will not affect your rights or our obligations under this EULA.
          </blockquote>
          <blockquote>
            11.3 You may not transfer your rights or obligations under this EULA to another person.
          </blockquote>
          <blockquote>
            11.4 If we fail to insist that you perform any of your obligations under this EULA, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you.
          </blockquote>
          <blockquote>
            11.5 Each of the conditions of this EULA operates separately. If any court or competent authority decides that any of them are unlawful or unenforceable, the remaining conditions will remain in full force and effect.
          </blockquote>
          <blockquote>
            11.6 Please note that this EULA, its subject matter and its formation, are governed by English law. You and we both agree that the courts of England and Wales will have non-exclusive jurisdiction.
          </blockquote>
        </div>`
  });
});
app.get('/privacy', (req, res) => {
  res.render('template.hbs',{
    mainContent: `<center><p><img class="main_img" src="images/s8_lock.svg"></p></center>
        <h1>
          Saiy Android Privacy Policy
        </h1>
        <div class="policy_text">
          <p>
            As an individual developer, I am keen to make my privacy policy as clear as possible to you, without it being diluted with corporate disclaimers, that we are all used to, but rarely digest. The application requires a lot of permission to run to its full potential and I am extremely conscious of your privacy in these events and using your data responsibly - where 'responsibly' is an alternate term for 'how you would expect'.
          </p>
          <p>
            Before you digest the details below, allow me to give you some examples of how your permissions and data are used within commands:
          </p>
          <blockquote>
            <strong>Call a contact</strong> - The application searches your contact list for the required contact and number and automatically dials the number. Your contact list is not used remotely. Obviously, no calls are placed unless you specifically request the application to do so. This applies to sending text messages at your request too.
          </blockquote>
          <blockquote>
            <strong>Request the weather forecast</strong> - Your current, precise location is used as a parameter to an external company, so they may return the weather details. The application does not store your location. The external company may indeed save the location data of the request for analytical purposes, but this is not identifiable to you as an individual.
          </blockquote>
          <blockquote>
            <strong>I've parked my car</strong> - Your current, precise location will be stored locally on the device, in order to retrieve when you request the location of your vehicle at a later date.
          </blockquote>
          <blockquote>
            <strong>Navigate to an address</strong> - Whilst we do not store the address you requested, the address sent to your default navigation application may be stored as part of their history, for when you return to the application.
          </blockquote>
          <p>
            I hope the above examples put you at ease as to how I responsibly manage your data and do not collect or store information that is unnecessary to provide a service to you. Please read on where things get a little more wordy...
          </p>
          <p>
            Other than for the reasons stated below<sup>1</sup>, we do not externally collect personally identifiable information about you. In other words, we do not collect or store information such as your name, address, phone number or email address, anywhere other than on your device<sup>2</sup>.
          </p>
          <blockquote>
            <sup>1</sup> Should you make a purchase via the in-app-billing, your email with be stored externally, along with the purchase information for administration reasons.
          </blockquote>
          <blockquote>
            <sup>2</sup> Should you create a user account and choose to identify yourself in such a way.
          </blockquote>
          <p>
            In serving you, we may use or store your precise geographic location, if you give us permission to do so. We do not use or share this data for any other purpose. Many devices will indicate through an icon when location services are operating. We only share this location information with others as approved by you.
          </p>
          <p>
            We do not share personally identifiable information (such as name, address, email or phone) with other companies, unless with your express consent, they are an identifier in which you have selected for your data to be managed.
          </p>
          <p>
            When the application connects or passes data (on your device) to other third-party applications, we are not responsible for their continued usage of such information. Please refer to the specific application's individual privacy policy to understand how your device and personal data is collected, managed and shared. This includes your voice data, both analysed and spoken, by third party applications and companies.
          </p>
          <p>
            We are not responsible for the content of any external applications, web searches or websites that our application may pass data to, or refer to, either in the form of a suggested link or direct association.
          </p>
          <p>
            To understand how usage of our application may be used for targeted advertising, please check your settings in the Google Play Application, under Google AdMob Ads, for your Android Platform preferences. These individual preferences may allow Google to access the information collected by our application regardless of our individual privacy policy terms.
          </p>
          <p>
            In addition, you should consult your Google Services privacy policy, to ensure any preferences concerned with your Android device are suitable to you and are not conflicting with any other individual application privacy policies, such as ours, which may be ignored as a result.
          </p>
          <p>
            When requesting ads be served to you, your date of birth and gender may be disclosed, purely for the purposes of advertising relevance. These parameters are anonymous, notwithstanding the above.
          </p>
          <p>
            Analytics companies may access anonymous data (such as your voice data and usage statistics) to help us understand how our services are used. They use this data solely on our behalf in order to improve our service to you. They do not share it except in aggregate form; no data is shared as to any individual user.
          </p>
          <p>
            We take steps following the Android Developer Guidelines to secure your personally identifiable information against unauthorized access or disclosure. No security or encryption method can be guaranteed to protect information from hackers or human error.
          </p>
          <p>
            Information we collect may be stored or processed on computers located in any country where we do business.
          </p>
          <p>
            To operate the service, we also may make identifiable and anonymous information available to third parties in these limited circumstances:
            <ol>
              <li>With your express consent.</li>
              <li>When we have a good faith belief it is required by law.</li>
              <li>When we have a good faith belief it is necessary to protect our rights or property.</li>
              <li>To any successor or purchaser in a merger, acquisition, liquidation, dissolution or sale of assets.</li>                
            </ol>
            Your consent will not be required for disclosure in these cases, but we will attempt to notify you, to the extent permitted by law to do so.
          </p>
          <p>
            <strong>Application Permissions</strong>: The application requires many permissions in order to function as you would expect. By accepting these permissions from within the application, we do not store the accessible data remotely, neither do you give us permission to do so.
          </p>
          <p>
            <strong>Voice Recognition & Permanent Listening:</strong> A recording of the last few seconds of audio will be analysed to identify and process your commands. This recorded audio may be shared with any of the Voice Recognition Providers, in order to transcript the audio captured into words. The audio capture is not stored locally on the device. If you do not understand or are unclear on the contents of this privacy policy, please uninstall the application immediately in the usual way.
          </p>
          <p>
            <strong>Anonymous Usage Statistics:</strong> In order to improve your experience and that of others, anonymous usage data is collected whilst you are using the application. Such information may contain the particular command you attempted, how it was requested and if it resulted in a success or failure. This will help to identify any potential errors negative to the workings of the application. In addition, the time you spent in various parts of the application user interface, which again, are not identifiable individually to you.
          </p>
        </div>`
  });
});

// --------------------------------------------------------------------------------------------------
// Uncomment below for server maintenence. As privacy policy and terms of use pages 
// are listed above, they will be the only pages uneffected by this redirect.
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
app.get('/features1', (req, res) => {
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