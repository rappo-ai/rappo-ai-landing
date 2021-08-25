import Document, { Html, Head, Main, NextScript } from 'next/document';

const localEnv = false

let chatBotSrc = 'https://landerbot.rappo.ai/static/js/embed.js'
let chatBotIFrame = 'https://landerbot.rappo.ai'

if (localEnv) {
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
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <iframe src={chatBotIFrame} className="chatbot chatbotClose" id="chatbotWidget"></iframe>
          <script src={chatBotSrc}></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
