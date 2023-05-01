export default function FacebookLogin() {
  FB.init({
    appId: '332308867509793',
    version: 'v16.0',
    status: true,
    cookie: true,
    xfbml: true,
    autoLogAppEvents: false
  });

  FB.getLoginStatus(function(response: fb.StatusResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
  });
}
