# Introduction
For a long I time, I wanted to make a personal website where I can showcase my projects, talk about things I like, and share some of my valuable knowledge to anyone who is interested. This thought never left my mind but also never materialized since I was always busy with procrastinating on a random project until I started applying for jobs in the Software Development, Game Development, and Data Science industries. Many job application asked if I had a portfolio or a personal website to share. My respond was my Linkedin page, but the time has come for me to take the bullet and allocate some time to make a proper website for myself. 

In this article, I explain what I wanted from my website, how I approached to build it, and how I maintain it. 
  
# Requirements
First and foremost, I laid out a list of high-level requirements for my website. Here is a simplified version of it: 


- My website must be responsive, catering all sorts of devices with varying screen configuration
- My website must have a blog page, listing blog posts filterable by date, tags, and text content
- My website must have _About Me_, _Resume_, and _Contact Me_ pages 
- My website must have a dedicated _Projects_ page where I can present my works 
- My website must not store any form of persistent user data (comment, login session, profiles, etc.)

Since I am not keeping any data from users, that means my website can be a simple statically served web page! With these decisions, a new set of requirements emerged: 

- There should be no cost for infrastructure, server, database, or API
- My website must not use any cookies, trackers, ads, and other forms of privacy violation tools
- My website must not use third-party services for dynamic content like blog posts

Now, you may think some of these requirement sound absurd! and you are right. But what I want to achieve is a balance among my **SKILLS**, **SIMPLICITY**, and **FREEDOM**! My skills in programming and web development are more than enough for me to build simple solution and have total control and freedom over it. A huge part of this simplicity comes from the fact that my website can be static. And by static, I mean no server-side computation or rendering. Just a bunch of HTML, CSS, Js, and asset files send to the user. 

There are, of course, many other smaller requirements (both functional and non-functional) that I won't go into detail. However, you can spot some of them in later chapters. 

# Solution
My website being statically served was the most important factor to consider when choosing a solution (_i.e._ programming language, framework, infrastructure, _etc._). The second most important factor was cost. I didn't like to pay money for a server just to serve my static files. A solution to both of these problems is <a href="https://pages.github.com" target="_blank">GitHub Pages</a>. With Github Pages (`gh-pages`), you can have a static server with a templated domain name (_i.e_ `<your_github_username>.github.io`). 


ReactJs was my first option since it allowed me to skip server-side rendering and directly present my website in user's browser. However, page routing in react and `gh-pages` is not simple. `gh-pages` expects routes to be a directory where an `index.html` file exists inside it to serve as the route's content. For example, bellow directory structure correspond to routes within `gh-pages` server: 

```markdown
[root]
     ├─── index.html ---------------> arg1998.github.io
     │
     ├─── about 
     │    └─── index.html ----------> arg1998.github.io/about 
     ├─── blog 
     │    ├─── index.html ----------> arg1998.github.io/blog
     │    └─── my-blog-post
     │      └─── index.html --------> arg1998.github.io/blog/my-blog-post
     │
     ├─── contact 
     │    └─── index.html ----------> arg1998.github.io/contact
     │
     ├─── projects
     │    └─── index.html ----------> arg1998.github.io/projects
     │
     └─── resume
          └─── index.html ----------> arg1998.github.io/resume
```

Since React Router renders content dynamically, there is no actual directory structure in `gh-pages` to handle the routes. Everything is on client side and fine if the users starts navigating the website from the homepage (where the react application is loaded and the client-side router is initialized). The problem is when the user enters a URL in the browser and tries to access it. In this scenario, `gh-pages` recognizes that there are no directory matching the requested route and throws a big **404** page back at the user. It makes sense when you consider that a react application is a single (not always) file in the `root` directory. 

To solve this, we either have to use a different method for routing such as <a href="https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jh" target="_blank">hash-based routing</a> or break the application into multiple files and serve them from our routes directories. In my opinion, hash routing is ugly and adds ambiguity. Hash routing is often used to navigate users to a specific HTML tag within the page. For example, hash-routes are heavily used in Table of Contents where users clicking on an entry would take them to that chapter. Since I did not want to compromise on the routing styles, I had to take the second option. 

To divide the application in multiple pages and have them served from different directories sounds like a nightmare when you think only in React! but fear not, because there is a solution exactly built for this kind of problem. Enter NextJs! 

NextJs allows you to build react applications but with some extra benefits. One such benefits is Static Site Generation (SSG for short). With SSG mode enabled, NextJs will build your application ahead of time and generates HTML files. Another massive advantage of using NextJs is its directory-based routing mechanism. We can put each of our pages (Jsx or Tsx files) in their respective directories and NextJs will automatically converts them into HTML files, respecting `gh-pages` routing protocols. This looks like a massive win when you consider that statically generated websites load faster (when caching is involved) and are SEO friendlier than their Client-Side Rendering (CSR) counterparts. 


It looks like we are all set as far as choosing a framework goes. Now, we just have to build it ¯\\_(ツ)\_/¯

# Development Setup

#### GitHub Pages
To setup GitHub Pages, we create a repository with the following format as its name: `<username>.github.io`. In my case, my repository name is `arg1998.github.io`. Note that this repository must be public if you are on Free Tier plan on GitHub. GitHub Pro users can create `gh-pages` on a private repository. 

Since I owned a domain name (_i.e._ `www.argosta.me`), I used <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank">this article</a> to configure my DNS provider to point to my GitHub Pages URL and GitHub to verify my domain name. This step is not necessary, but I wanted my website to be accessible from the domain I bought instead of `arg1998.github.io`. 

#### Local Dev Environment
In my local setup, I cloned my repository and started coding right away. 

1. Navigate to the cloned repository
2. Initialize a NextJs App by running `npx create-next-app@latest .`. It asks a bunch of questions that I answered as bellow:
    - TypeScript    -> Yes
    - ESLint        -> Yes
    - TailWind CSS  -> No
    - Code in `src/` directory -> Yes
    - App Router -> Yes
    - Turbopack -> No (I disabled this because of a bug. I wil explain this later)
    - Customize `@import` alias -> No
3. Run `npm install` to download the dependencies
4. Install `gh-pages` tool by running `npm install gh-pages`
5. Add `"deploy": "next build && gh-pages -d out"` to your `package.json` scripts
> [!info]
> When using <code>gh-pages</code> command to deploy your website to GitHub Pages, it will automatically pushes the content of the specified directory (<code>out/</code> directory in our case) to a remote branch called <code>gh-pages</code>! You should go to your repository page, Open <code>Settings >> Pages >> Build and deployment</code> and choose <code>gh-pages</code> as deployment branch.
6. Open `next.config.ts` and configure `nextConfig` as bellow: 

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // To generate HTML files and export the application into a SSG website
  output: "export",
  // [Optional] No need for automatic image optimization, I want to handle that manually             
  images: { unoptimized: true },
  // [Optional]    
  trailingSlash: true,
  // Disable ESLint when building because it complains a lot about node_modules              
  eslint: {
    ignoreDuringBuilds: true,       
  },
  // Append a new webpack module import rule for Markdown (.md) files
  // We will use markdown for writing blog post and this helps with 
  // importing them with ease
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
};

export default nextConfig;
```

Now everything should be ready. Create your NextJs/ReactJs application and when you are done, just run `npm run deploy`. 


> [!tip]
> GitHub pages by default uses Jekyll as a SSG build tool. Every time you deploy your website on GitHub pages, Jekyll will run to generate an static website for you. Directories with underline (<code>_</code>) at the beginning are ignored and deleted by Jekyll. This is a problem since NextJs creates a directory called <code>_next</code> and it's essential to the website and must be included in the final build. Additionally, we build our website locally and don't need Jekyll anyway, so we can disable it. 
>
> </br>
> To disable Jekyll, create an empty file called <code>.nojekyll</code> inside the <code>public</code> directory. Now Jekyll is out of the way and you have full control over your deployment branch. 



# Pages

Creating pages is as easy as creating a directory and writing to `index.jsx` inside it. You just have to use `Static Props` since there are no NextJs server to supply you with server-side or dynamic props. In my case, router props and metadata was rarely needed. So lets break down the most complicated part of routing in my website, the blog route!

### Blog Posts
#### _Navigation_
when you navigate to <a href="https://www.argosta.me/blog" target="_blank">`www.argosta.me/blog`</a> you can see a list of articles and posts. When you click on a post, you will be directed to another route, for example <a href="https://www.argosta.me/blog/nextjs-on-github-pages" target="_blank">`www.argosta.me/blog/nextjs-on-github-pages`</a>. To achieve this effect, for each blog post, we have to create a directory and add an `index.jsx` file inside it. We also have to share some information between `/blog` route and the `/blog/nextjs-on-github-pages` post like post title, published date, banner image, etc. 

#### _Post Database_
To be able to show all of the articles and posts on the `/blog` route and at the same time render correct information for each blog post when navigated, I created a simple JSON file to contain a collection of information about a blog post. An example of one blog entry in this file is provided bellow: 

```json
{
  "nextjsOnGithubPages": {
    "active": true,
    "slug": "nextjs-on-github-pages",
    "URI": "/blog/nextjs-on-github-pages",
    "URL": "https://www.argosta.me/blog/nextjs-on-github-pages",
    "fancyTitle": "How I built my website using NextJs and GitHub Pages",
    "imageUri": "/blog/nextjs-on-github-pages/banner.jpg",
    "imageAlt": "",
    "date": 1741202783616,
    "excerpt": "Here, you can read about the process, decisions, tools, and struggles I encountered ...",
    "tags": [
      "web_dev",
      "nextjs",
      "github"
    ]
  }
}
```

Now, I populate my react components in the `/blog` route using this list and when users want to read more, the same information they saw will be available when they open the article. This was done using NextJs's `getStaticProps()` function at build time. In the `/blog/nextjs-on-github-pages/index.jsx` for example, I access posts data like this:

```jsx
// Fetch data at build time
import POSTS from "../../../data/posts.json";
export async function getStaticProps() {
  const { nextjsOnGithubPages } = POSTS;
 
  return {
    props: {
      postData: nextjsOnGithubPages,
    },
  };
}

export default NextjsOnGithubPages;
```

This approach allows me to modify articles in one place and having changes reflected everywhere. I also mentioned that users can filter posts by date, tags, or even search their content in the `/blog` route. How is this possible when we don't have a server and a live database? Turns out, we don't need one! We send the entire posts JSON metadata to user and all the post filtering happens on the client side. I used `fuse.js` to enable users to do fuzzy search on posts title and description. And since I am not going to write 10000 posts anytime soon, it is extremely fast to search and filter out posts this way for a small number of posts.  

#### _Automation_
Creating a blog post or article manually is time consuming and error prone. That's why I created an automated script where it creates the necessary directory structures, generates the appropriates files, and update the JSON database containing posts metadata. You can see this script on <a href="https://github.com/arg1998/arg1998.github.io/blob/main/create-post-template.js" target="_blank">GitHub</a>

With this script, I can create a new blog post in under 10 seconds with all the necessary infrastructure and everything gets updated automatically because of the way I have set up my simple and small JSON database. 

#### _Markdown Rendering_
To actually write content for an article or a blog post, I needed a way to display rich content where elements such as headers, lists, tables, mathematical expressions, code syntax highlighting, etc are easy to write and display. Markdown is a great tool for this. Specifically, `react-markdown` package is the one I chose. `react-markdown` uses `remark` and `rehype` and their multitude of plugins to render markdown as html. I used bellow plugins to extend the functionality of `react-markdown` and achieve my desired outcome: 

- `react-markdown` – Renders Markdown as React components.  
- `remark-math` – Parses LaTeX math equations in Markdown.  
- `remark-gfm` – Adds GitHub Flavored Markdown (tables, strikethrough, etc.).  
- `remark-obsidian-callout` – Supports Obsidian-style callouts in Markdown.  
- `remark-directive` – Enables custom Markdown directives.  
- `rehype-highlight` – Adds syntax highlighting to code blocks.  
- `rehype-raw` – Allows raw HTML inside Markdown.  
- `rehype-slug` – Generates URL-friendly slugs for headings.  
- `rehype-katex` – Renders LaTeX math using KaTeX in Markdown.  


Now, I can create a markdown file somewhere in my website, open it with <a href="https://obsidian.md" target="_blank">Obsidian</a> or VS Code and write content. And since I configured `webpack` to import markdown files and strings, I can easily import them into any component, not just blog posts, like this: 

```jsx
import article_markdown_content from "./article.md"
```

#### _Custom Rendering_
Markdown rendering is great but it is just another component. It is possible to render very interesting things in an article (or anywhere in the website honestly) like interactive charts, simple games, HTML frames, videos, etc. For custom component that require a log of data to be fetched (imagine an interactive data visualizer), we can prompt the user if they want to load the necessary data and only upon user's permission, we LAZY load the data, do the computation, cache the result and display it. 



# What's Next?

- There are some features still missing such as:
    - Pagination for the `/blog` route
    - Searching and Filtering projects in the `/project` route
    - Lazy loadable data and components 
- CSS styling needs a huge refactor. I am planning to configure webpack to build super-optimized CSS styles where names are minified and unused styles are pruned. 
- Optimizing the load time and minimizing the total bundle size
- Improving the UI, theme, and typography 
