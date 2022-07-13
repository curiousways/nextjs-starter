# NEXT-TYPESCRIPT STARTER

<p>
  <a aria-label="Next js logo" href="https://nextjs.org">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="28">
  </a>
    <a aria-label="Typescript logo" href="https://www.typescriptlang.org/" style="margin-left:10px">
    <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png" height="28">
  </a>
  <a aria-label="Tailwindcss logo" href="https://tailwindcss.com/" style="margin-left:10px">
    <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" height="28">
  </a>
</p>

This project is bootstrapped using [Next.js](https://nextjs.org/docs), [Typescript](https://www.typescriptlang.org/) and [TailwindCSS](https://tailwindcss.com/) (optional).

To get started, clone this repo using `git clone https://github.com/Curious-Ways/flox.git`. Next run `npm i` or `npm install` to install all required dependencies (you need Node JS installed on your machine to run `npm` commands. [See here](https://nodejs.org/en/download/) to download and install Node JS on your machine).

After the installation is complete:

Run `npm run dev` to start the development server on http://localhost:3000

### What's Included

- Project folder structure
- Styling
- Analytics
- SEO setup
- Sitemap
- Prettier
- env variables

#### Project folder structure

- **_Pages directory_**: Since Next.js's router is file-system based, The folder _Pages_ is a Next-specific directory to place routes or pages. For each route, you will have a separate file, which is named as the route. For example the file _about.tsx_ in the pages directory will create the following route: https://domain.com/about. [See docs](https://nextjs.org/docs/routing/introduction) for more details.

- **_Public directory_**: Next.js uses this directory to statically serve files like the robots.txt or the favicon.ico. For more information on how to include these files here: [official docs](https://nextjs.org/docs/basic-features/static-file-serving).

- **_Components directory_**: Contains React components which can be reused across multiple pages.

#### Styling

Styling options include:

- Vanilla CSS
- Sass/Scss
- [TailwindCSS](https://tailwindcss.com/docs/installation). A utility-first CSS framework with pre-configured classes to create an API for the projects design system.

You can also use modular styling with css or scss.

#### Page Analytics

We added functionalities for both [Google Analytics](https://developers.google.com/analytics) and [Fathom Analytics](https://usefathom.com/) in this project, so you can choose one that's suitable for your project.
NB: Add your google or fathom analytics ids to the `next.config.js` file as environmental variables. Use identifiers/keys `GOOGLE_ANALYTICS_ID` for google analytics id and `FATHOM_ANALYTICS_ID` as env variable for fathom analytics.

#### SEO

We setup default seo using the [next-seo package](https://github.com/garmeeh/next-seo). You can add your site name, site title and site url as environmental variables under the `next.config.js` file. See [the documentation](https://github.com/garmeeh/next-seo) on how to add seo bits on a per page basis.

#### Sitemap Generation

We use the [next-sitemap package](https://www.npmjs.com/package/next-sitemap) to generate sitemap for different pages.

#### Prettier

Prettier is a code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.
It'll do things like adding a semicolon to the end of every statement, or make sure your indentation is consistent. The `.prettierrc` file at the project's root is in charge of customising Prettier and how it works. We recommend that you should not touch this file, to keep this configuration consistent through out the period of this project. VScode also has a Prettier extension, see how to install it [here](https://www.educative.io/answers/how-to-set-up-prettier-and-automatic-formatting-on-vs-code).

#### env variables

Create a `.env.local` file in your root folder and add your sensitive environmental variables to this file. For less sensitive environmental variables (like site URL and title), add them under the `next.config.js` file.

NB: Prefixing a env variable with `NEXT_PUBLIC_` exposes it to the browser. See [Next.js documentation](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser).
