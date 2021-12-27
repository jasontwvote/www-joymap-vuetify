const facebookAppId = process.env.FB_CLIENT_ID;

export function initFacebookSdk() {
  return new Promise((resolve) => {
    window.fbAsyncInit = function () {
      const FB = window.FB;
      FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });

      FB.AppEvents.logPageView();

      resolve();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}
