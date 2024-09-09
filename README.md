![Next.js blogging template for Static CMS on Vercel](https://github.com/StaticJsCMS/static-cms-next-vercel-template/assets/1388138/51fc586a-b150-4ca7-afd8-95c18961b14f)

[![MADE BY Next.js](https://img.shields.io/badge/MADE%20BY%20Next.js-000000.svg?style=flat&logo=Next.js&labelColor=000)](https://nextjs.org/)

Next.js blogging template for Vercel is a boilerplate for building blogs with only Vercel stacks.

There are some boilerplate or tutorials for the combination of Next.js and Vercel on GitHub. These resources have documentation and good tutorial to get started Next.js and Vercel quickly, but they are too simple to build blogs with standard features like tagging.

Next.js blogging template for Vercel has already implemented these standard features for building blogs with only using Next.js and Vercel stacks.

## Features

- **Tagging**: organizes content by tags
- **Author**: displays author names who write a post
- **Pagination**: limits the number of posts per page
- **CMS**: built with CMS to allow editors modifying content with the quickest way
- **SEO optimized**: built-in metadata like JSON-LD
- **Shortcode**: extends content writing with React component like WordPress shortcodes

## Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [MDX](https://mdxjs.com/)

## Getting started

To create your blog using the template, open your terminal, `cd` into the directory you'd like to create the app in,
and run the following command:

```
npx create-next-app your-blog --example "https://github.com/StaticJsCMS/static-cms-next-vercel-template"
```

After that, set up your project, following the Vercel documentation:

[Creating & Deploying Your Project](https://vercel.com/docs/concepts/get-started/deploy)

### Static CMS Config

[config.yml](src/config.ts)

## License

MIT
