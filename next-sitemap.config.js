/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aceric.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
