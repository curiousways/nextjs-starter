/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL: "site url",
    SITE_TITLE: "Site Title",
    GOOGLE_ANALYTICS_ID: "yourgaid",
    FATHOM_ANALYTICS_ID: "yourfathomanalyticsid",
    DATOCMS_API_TOKEN: "datocmsid",
    DATOCMS_SITE_SEARCH_TOKEN: "datocmssearchaccessid",
  },
  images: {
    deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
