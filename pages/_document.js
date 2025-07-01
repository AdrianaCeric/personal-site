import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: "Adriana's Personal Site",
      description:
        "I'm a Civil Engineering student at UWaterloo interested in physical and digital infrastructure, transit development, and smart cities.",
      image: 'https://aceric.vercel.app/images/waterloo2.png',
      url: 'https://aceric.vercel.app',
      keywords:
        'Civil Engineering, UWaterloo, Infrastructure, Transit Development, Smart Cities, Engineering Student',
      author: 'Adriana'
    }

    return (
      <Html lang="en">
        <Head>
          {/* Essential Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* SEO Meta Tags */}
          <meta name="robots" content="follow, index" />
          <meta name="author" content={meta.author} />
          <meta name="keywords" content={meta.keywords} />
          <meta name="description" content={meta.description} />
          <link rel="canonical" href={meta.url} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={meta.url} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />
          <meta property="og:image:alt" content="Adriana's Personal Website" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={meta.url} />
          <meta name="twitter:site" content="@adriyuhh" />
          <meta name="twitter:creator" content="@adriyuhh" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <meta name="twitter:image:alt" content="Adriana's Personal Website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
