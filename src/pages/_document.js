import Document, { Html, Head, Main, NextScript } from 'next/document';

const localEnv = false

let chatBotCss = 'https://widget.rappo.renzil.com/static/css/embed.css'
let chatBotSrc = 'https://widget.rappo.renzil.com/static/js/embed.js'
let chatBotIFrame = 'https://widget.rappo.renzil.com'

if (localEnv) {
  chatBotCss = 'http://127.0.0.1:8080/static/css/embed.css'
  chatBotSrc = 'http://127.0.0.1:8080/static/js/embed.js'
  chatBotIFrame = 'http://127.0.0.1:8080/'
}

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet" />
          <link href={chatBotCss} rel="stylesheet" />
          <meta property="og:image" content="https://rappo.renzil.com/social_preview.png" />
          <meta property="og:description" content="A complete solution to manage interactions on web with your customers." />
        </Head>
        <body>
          <Main />
          <NextScript />
          <iframe src={chatBotIFrame} id="RappoChatbotWidget"></iframe>
          <script src={chatBotSrc}></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
