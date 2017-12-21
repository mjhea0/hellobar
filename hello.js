let content = {
  text: 'Want to learn Docker, Flask, and React?',
  buttonText: 'Click Here',
  buttonLink: 'https://testdriven.io',
  cookieExpiration: 30,
};

let helloBar = `
<div id="hellobar-bar" class="regular closable">
  <div class="hb-content-wrapper">
    <div class="hb-text-wrapper">
      <div class="hb-headline-text">
        <p><span>${content.text}</span></p>
      </div>
    </div>
    <a href="${content.buttonLink}" target="_blank" class="hb-cta hb-cta-button">
      <div class="hb-text-holder">
        <p>${content.buttonText}</p>
      </div>
    </a>
  </div>
  <div class="hb-close-wrapper">
    <a href="javascript:void(0);" class="icon-close">x</a>
  </div>
</div>
`;

$(() => {
  if (!Cookies.get('cookieNotification')) {
    $('body').append(helloBar);
  }
});

$('body').on('click', '.icon-close', () => {
  $('#hellobar-bar').delay(100).fadeOut('slow');
  Cookies.set('cookieNotification', 'true', {
    expires: content.cookieExpiration });
});
