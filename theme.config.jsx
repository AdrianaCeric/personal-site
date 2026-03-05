const YEAR = new Date().getFullYear()
const SITE_URL = 'https://aceric.vercel.app'
const DEFAULT_DESCRIPTION =
  'Civil engineering student, transportation planner, and civic technologist based in Waterloo, Ontario.'
const DEFAULT_IMAGE = `${SITE_URL}/images/waterloo2.png`

export default {
  head: ({ title, meta }) => {
    const pageTitle = title ? `${title} – Adriana Ceric` : 'Adriana Ceric'
    const description = meta.description || DEFAULT_DESCRIPTION
    const image = meta.image || DEFAULT_IMAGE
    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Adriana Ceric's personal site" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adriyuhh" />
        <meta name="twitter:creator" content="@adriyuhh" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content="Adriana Ceric's personal site" />
      </>
    )
  },
  footer: (
  <small style={{ display: 'block', marginTop: '8rem' }}>
    <time>{YEAR}</time> © Adriana Ceric
    <style jsx>{`
      small a {
        float: right;
      }
      @media screen and (max-width: 480px) {
        small {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
      }
    `}</style>
  </small>
)
}
