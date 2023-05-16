const simpleOauthModule = require("simple-oauth2");

const create = () =>
  simpleOauthModule.create({
    client: {
      id: process.env.OAUTH_CLIENT_ID,
      secret: process.env.OAUTH_CLIENT_SECRET,
    },
    auth: {
      tokenHost: `https://github.com`,
      tokenPath: `/login/oauth/access_token`,
      authorizePath: `/login/oauth/authorize`,
    },
  });

const renderBody = (status, content) => `
<script>
  const receiveMessage = (message) => {
    window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(content)}',
      message.origin
    );

    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  
  window.opener.postMessage("authorizing:github", "*");
</script>
`;

exports.create = create;
exports.renderBody = renderBody;
