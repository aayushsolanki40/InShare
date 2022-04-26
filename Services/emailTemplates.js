module.exports = ({emailFrom, downloadLink, size, expires}) =>{
    return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
    
    
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">
    
        <!-- CSS Reset : BEGIN -->
    <style>
    
    html,
    body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        background: #f1f1f1;
    }
    
    /* What it does: Stops email clients resizing small text. */
    * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    
    /* What it does: Centers email on Android 4.4 */
    div[style*="margin: 16px 0"] {
        margin: 0 !important;
    }
    
    /* What it does: Stops Outlook from adding extra spacing to tables. */
    table,
    td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
    }
    
    /* What it does: Fixes webkit padding issue. */
    table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto !important;
    }
    
    /* What it does: Uses a better rendering method when resizing images in IE. */
    img {
        -ms-interpolation-mode:bicubic;
    }
    
    /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
    a {
        text-decoration: none;
    }
    
    /* What it does: A work-around for email clients meddling in triggered links. */
    *[x-apple-data-detectors],  /* iOS */
    .unstyle-auto-detected-links *,
    .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
    .a6S {
        display: none !important;
        opacity: 0.01 !important;
    }
    
    /* What it does: Prevents Gmail from changing the text color in conversation threads. */
    .im {
        color: inherit !important;
    }
    
    /* If the above doesn't work, add a .g-img class to any image in question. */
    img.g-img + div {
        display: none !important;
    }
    
    /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
    /* Create one of these media queries for each additional viewport size you'd like to fix */
    
    /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
    @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
            min-width: 320px !important;
        }
    }
    /* iPhone 6, 6S, 7, 8, and X */
    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
            min-width: 375px !important;
        }
    }
    /* iPhone 6+, 7+, and 8+ */
    @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
            min-width: 414px !important;
        }
    }
    
    </style>
    
        <!-- CSS Reset : END -->
    
        <!-- Progressive Enhancements : BEGIN -->
    <style>
    
    .primary{
        background: #f3a333;
    }
    
    .bg_white{
        background: #ffffff;
    }
    .bg_light{
        background: #fafafa;
    }
    .bg_black{
        background: #000000;
    }
    .bg_dark{
        background: rgba(0,0,0,.8);
    }
    .email-section{
        padding:2.5em;
    }
    
    /*BUTTON*/
    .btn{
        padding: 10px 15px;
    }
    .btn.btn-primary{
        border-radius: 30px;
        background: #f3a333;
        color: #ffffff;
    }
    
    
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Playfair Display', serif;
        color: #000000;
        margin-top: 0;
    }
    
    body{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.8;
        color: rgba(0,0,0,.4);
    }
    
    a{
        color: #f3a333;
    }
    
    table{
    }
    /*LOGO*/
    
    .logo h1{
        margin: 0;
    }
    .logo h1 a{
        color: #000;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
    }
    
    /*HERO*/
    .hero{
        position: relative;
    }
    .hero img{
    
    }
    .hero .text{
        color: rgba(255,255,255,.8);
    }
    .hero .text h2{
        color: #ffffff;
        font-size: 30px;
        margin-bottom: 0;
    }
    
    
    /*HEADING SECTION*/
    .heading-section{
    }
    .heading-section h2{
        color: #000000;
        font-size: 28px;
        margin-top: 0;
        line-height: 1.4;
    }
    .heading-section .subheading{
        margin-bottom: 20px !important;
        display: inline-block;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(0,0,0,.4);
        position: relative;
    }
    .heading-section .subheading::after{
        position: absolute;
        left: 0;
        right: 0;
        bottom: -10px;
        content: '';
        width: 100%;
        height: 2px;
        background: #f3a333;
        margin: 0 auto;
    }
    
    .heading-section-white{
        color: rgba(255,255,255,.8);
    }
    .heading-section-white h2{
        font-size: 28px;
        font-family: 
        line-height: 1;
        padding-bottom: 0;
    }
    .heading-section-white h2{
        color: #ffffff;
    }
    .heading-section-white .subheading{
        margin-bottom: 0;
        display: inline-block;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(255,255,255,.4);
    }
    
    
    .icon{
        text-align: center;
    }
    .icon img{
    }
    
    
    /*SERVICES*/
    .text-services{
        padding: 10px 10px 0; 
        text-align: center;
    }
    .text-services h3{
        font-size: 20px;
    }
    
    /*BLOG*/
    .text-services .meta{
        text-transform: uppercase;
        font-size: 14px;
    }
    
    /*TESTIMONY*/
    .text-testimony .name{
        margin: 0;
    }
    .text-testimony .position{
        color: rgba(0,0,0,.3);
    
    }
    
    
    /*VIDEO*/
    .img{
        width: 100%;
        height: auto;
        position: relative;
    }
    .img .icon{
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: -25px;
    }
    .img .icon a{
        display: block;
        width: 60px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -25px;
    }
    
    
    
    /*COUNTER*/
    .counter-text{
        text-align: center;
    }
    .counter-text .num{
        display: block;
        color: #ffffff;
        font-size: 34px;
        font-weight: 700;
    }
    .counter-text .name{
        display: block;
        color: rgba(255,255,255,.9);
        font-size: 13px;
    }
    
    
    /*FOOTER*/
    
    .footer{
        color: rgba(255,255,255,.5);
    
    }
    .footer .heading{
        color: #ffffff;
        font-size: 20px;
    }
    .footer ul{
        margin: 0;
        padding: 0;
    }
    .footer ul li{
        list-style: none;
        margin-bottom: 10px;
    }
    .footer ul li a{
        color: rgba(255,255,255,1);
    }
    
    
    @media screen and (max-width: 500px) {
    
        .icon{
            text-align: left;
        }
    
        .text-services{
            padding-left: 0;
            padding-right: 20px;
            text-align: left;
        }
    
    }
    
    </style>
    
    
    </head>
    
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
        <center style="width: 100%; background-color: #f1f1f1;">
        <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <!-- BEGIN BODY -->
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
              <tr>
              <td class="bg_white logo" style="padding: 1em 2.5em; text-align: center">
                <h1><a href="#">AAYSOL HOTEL PVT. LTD., AHMEDABAD</a></h1>
              </td>
              </tr><!-- end tr -->
                    <tr>
              <td valign="middle" class="hero" style="background-image: url(images/bg_1.jpg); background-size: cover; height: 400px;">
                <table>
                    <tr>
                        <td>
                            <div class="text" style="padding: 0 3em; text-align: center;">
                                <h2>We Serve Healthy &amp; Delicious Foods</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="${downloadLink}" class="btn btn-primary">Get Your Order Here!</a></p>
                            </div>
                        </td>
                    </tr>
                </table>
              </td>
              </tr><!-- end tr -->
              <tr>
                  <td class="bg_white">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td class="bg_dark email-section" style="text-align:center;">
                            <div class="heading-section heading-section-white">
                                <span class="subheading">Welcome</span>
                              <h2>Welcome To RestoBar</h2>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_white email-section">
                            <div class="heading-section" style="text-align: center; padding: 0 30px;">
                                <span class="subheading">Services</span>
                              <h2>Our Services</h2>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="icon">
                                  <img src="https://colorlib.com/etc/email-template/1/images/001-diet.png" alt="" style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-services">
                                    <h3>Healthy Foods</h3>
                                     <p>Far far away, behind the word mountains, far from the countries</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="icon">
                                  <img src="https://colorlib.com/etc/email-template/1/images/003-recipe-book.png" alt="" style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-services">
                                    <h3>Original Recipes</h3>
                                  <p>Far far away, behind the word mountains, far from the countries</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_light email-section" style="text-align:center;">
                            <table>
                                <tr>
                                    <td class="img">
                                        <table>
                                            <tr>
                                                <td>
                                                    <img src="https://colorlib.com/etc/email-template/1/images/bg_2.jpg" width="600" height="" alt="alt_text" border="0" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;" class="g-img">
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="icon">
                                            <a href="#">
                                    <img src="https://colorlib.com/etc/email-template/1/images/002-play-button.png" alt="" style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block;">
                                  </a>
                              </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 20px;">
                                        <h2>Watch Our Video</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_white email-section">
                            <div class="heading-section" style="text-align: center; padding: 0 30px;">
                                <span class="subheading">Menu</span>
                              <h2>Our Delicious Food</h2>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding-right: 10px;">
                                  <img src="https://colorlib.com/etc/email-template/1/images/menu-1.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-services" style="text-align: left;">
                                    <h3>Pasta, Sauce Milk</h3>
                                     <p>Far far away, behind the word mountains, far from the countries</p>
                                     <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding-left: 10px;">
                                  <img src="https://colorlib.com/etc/email-template/1/images/menu-2.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-services" style="text-align: left;">
                                    <h3>Sweetened Fruits</h3>
                                  <p>Far far away, behind the word mountains, far from the countries</p>
                                  <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
    
                      <tr>
                        <td class="bg_light email-section" style="padding: 0; width: 100%;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="text-services" style="text-align: left; padding: 20px 30px;">
                                    <div class="heading-section">
                                                        <span class="subheading">Breakfast</span>
                                                      <h2 style="font-size: 22px;">Grilled Beef with potatoes</h2>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" class="btn btn-primary">Read more</a></p>
                                                    </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <img src="https://colorlib.com/etc/email-template/1/images/bg_3.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_light email-section" style="padding: 0; width: 100%;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <img src="https://colorlib.com/etc/email-template/1/images/bg_4.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="text-services" style="text-align: left; padding: 20px 30px;">
                                    <div class="heading-section">
                                                        <span class="subheading">Lunch</span>
                                                      <h2 style="font-size: 22px;">Grilled Beef with potatoes</h2>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" class="btn btn-primary">Read more</a></p>
                                                    </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_light email-section" style="padding: 0; width: 100%;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="text-services" style="text-align: left; padding: 20px 30px;">
                                    <div class="heading-section">
                                                        <span class="subheading">Dinner</span>
                                                      <h2 style="font-size: 22px;">Grilled Beef with potatoes</h2>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" class="btn btn-primary">Read more</a></p>
                                                    </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <img src="https://colorlib.com/etc/email-template/1/images/bg_6.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_light email-section" style="padding: 0; width: 100%;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <img src="https://colorlib.com/etc/email-template/1/images/bg_5.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="50%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="text-services" style="text-align: left; padding: 20px 30px;">
                                    <div class="heading-section">
                                                        <span class="subheading">Dessert</span>
                                                      <h2 style="font-size: 22px;">Grilled Beef with potatoes</h2>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" class="btn btn-primary">Read more</a></p>
                                                    </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                          <td valign="middle" class="counter" style="background-image: url(images/bg_1.jpg); background-size: cover; padding: 4em 0;">
                            <table>
                                <tr>
                                    <td valign="middle" width="25%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="counter-text">
                                    <span class="num">9457</span>
                                    <span class="name">Happy Customer</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="25%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="counter-text">
                                    <span class="num">20</span>
                                    <span class="name">Years of Experienced</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="25%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="counter-text">
                                    <span class="num">80</span>
                                    <span class="name">Branches</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" width="25%">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td class="counter-text">
                                    <span class="num">980</span>
                                    <span class="name">Staff</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                                </tr>
                            </table>
                          </td>
                          </tr><!-- end tr -->
                          <tr>
                        <td class="bg_white email-section">
                            <div class="heading-section" style="text-align: center; padding: 0 30px;">
                                <span class="subheading">Blog</span>
                              <h2>Read Stories</h2>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding-right: 10px;">
                                  <img src="https://colorlib.com/etc/email-template/1/images/blog-1.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-services" style="text-align: left;">
                                    <p class="meta"><span>Posted on Feb 18, 2019</span> <span>Food</span></p>
                                    <h3>Healthy Foods For Kids</h3>
                                     <p>Far far away, behind the word mountains, far from the countries</p>
                                     <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding-left: 10px;">
                                  <img src="https://colorlib.com/etc/email-template/1/images/blog-2.jpg" alt="" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-services" style="text-align: left;">
                                    <p class="meta"><span>Posted on Feb 18, 2019</span> <span>Food</span></p>
                                    <h3>A Fresh Food Organic</h3>
                                  <p>Far far away, behind the word mountains, far from the countries</p>
                                  <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      <tr>
                        <td class="bg_light email-section">
                            <div class="heading-section" style="text-align: center; padding: 0 30px;">
                                <span class="subheading">Says</span>
                              <h2>Testimonial</h2>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                            <table role="presentation" border="0" cellpadding="10" cellspacing="0" width="100%">
                                <tr>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <img src="https://colorlib.com/etc/email-template/1/images/person_1.jpg" alt="" style="width: 100px; max-width: 600px; height: auto; margin: auto; margin-bottom: 20px; display: block; border-radius: 50%;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-testimony" style="text-align: center;">
                                    <h3 class="name">Ronald Tuff</h3>
                                    <span class="position">Businessman</span>
                                     <p>Far far away, behind the word mountains, far from the countries</p>
                                     <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="top" width="50%" style="padding-top: 20px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <img src="https://colorlib.com/etc/email-template/1/images/person_2.jpg" alt="" style="width: 100px; max-width: 600px; height: auto; margin: auto; margin-bottom: 20px; display: block; border-radius: 50%;">
                                </td>
                              </tr>
                              <tr>
                                <td class="text-testimony" style="text-align: center;">
                                    <h3 class="name">Willam Clarson</h3>
                                    <span class="position">Businessman</span>
                                  <p>Far far away, behind the word mountains, far from the countries</p>
                                  <p><a href="#" class="btn btn-primary">Read more</a></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                            </table>
                        </td>
                      </tr><!-- end: tr -->
                      
                    </table>
    
                  </td>
                </tr><!-- end:tr -->
          <!-- 1 Column Text + Button : END -->
          </table>
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
              <tr>
              <td valign="middle" class="bg_black footer email-section">
                <table>
                    <tr>
                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-right: 10px;">
                              <h3 class="heading">RestoBar</h3>
                              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                              <h3 class="heading">Contact Info</h3>
                              <ul>
                                        <li><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                        <li><span class="text">+2 392 3929 210</span></a></li>
                                      </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-left: 10px;">
                              <h3 class="heading">Useful Links</h3>
                              <ul>
                                        <li><a href="#">Breakfast</a></li>
                                        <li><a href="#">Lunch</a></li>
                                        <li><a href="#">Dinner</a></li>
                                        <li><a href="#">Dessert</a></li>
                                      </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr><!-- end: tr -->
            <tr>
                <td valign="middle" class="bg_black footer email-section">
                    <table>
                    <tr>
                    <td valign="top" width="33.333%">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-right: 10px;">
                              <p>&copy; 2018 Restobar. All Rights Reserved</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: right; padding-left: 5px; padding-right: 5px;">
                              <p><a href="#" style="color: rgba(255,255,255,.4);">Unsubcribe</a></p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                </td>
            </tr>
          </table>
    
        </div>
      </center>
    </body>
    </html>`;
}