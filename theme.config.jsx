const YEAR = new Date().getFullYear()

export default {
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
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
