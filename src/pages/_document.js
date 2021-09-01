import Document, { Html, Head, Main, NextScript } from 'next/document';

const localEnv = false

let chatBotCss = 'https://landerbot.rappo.ai/static/css/embed.css'
let chatBotSrc = 'https://landerbot.rappo.ai/static/js/embed.js'
let chatBotIFrame = 'https://landerbot.rappo.ai'

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
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet" />
          <link href={chatBotCss} rel="stylesheet" />
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
