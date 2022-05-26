# NEXT-TYPESCRIPT STARTER

### What's Included

- Styling options
- Page analytics
- SEO setup
- Site Map

#### Styling

Styling options include:

- Vanilla CSS
- Sass/Scss
- Tailwindcss

You can also use modular styling with css or scss.

#### Page Analytics

We added functionalities for both google and fathom analytics in this project, so you can choose one that's suitable for your project.
NB: Add your google or fathom analytics ids to the `next.config.js` file as environmental variables. Use identifiers/keys `GOOGLE_ANALYTICS_ID` for google analytics id and `FATHOM_ANALYTICS_ID` as env variable for fathom analytics.

#### SEO

We setup default seo using the [next-seo package](https://github.com/garmeeh/next-seo). You can add your site name, site title and site url as environmental variables under the `next.config.js` file. See [the documentation](https://github.com/garmeeh/next-seo) on how to add seo bits on a per page basis.

#### Sitemap Generation

We use the [next-sitemap package](https://www.npmjs.com/package/next-sitemap) to generate sitemap for different pages.

#### Other env variables

We advice you create a `.env.local` file in your root folder and add your sensitive environmental variables to this file. For less sensitive environmental variables (like site url and title), add them under the `next.config.js` file.
NB: Prefixing a env variable with `NEXT_PUBLIC_` exposes it to the browser. See [Next.js documentation](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser).

#### Components Folder

Contains repeating components used accross our different projects.
