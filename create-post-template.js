/* eslint-disable*/

const fs = require("fs");
const path = require("path");
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sanitizeForIdentifier = (slug) => {
  return slug
    .trim()
    .replace(/\+/g, "plus") // Replace "+" with "plus"
    .replace(/[#!?&=.\s-]+/g, " ") // Remove invalid characters and replace with space
    .replace(/[^a-zA-Z0-9_ ]/g, "") // Remove any remaining invalid characters
    .replace(/\s+/g, " "); // Collapse multiple spaces
}

const toCamelCase = (str) => {
  const sanitized = sanitizeForIdentifier(str);
  return sanitized
    .split(" ")
    .map(
      (word, index) =>
        index === 0
          ? word.toLowerCase() // Lowercase first word
          : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize following words
    )
    .join("")
    .replace(/^(\d)/, "_$1"); // Prefix with `_` if starts with a number
};


const toPascalCase = (str) => {
  const sanitized = sanitizeForIdentifier(str);
  return sanitized
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize all words
    .join("")
    .replace(/^(\d)/, "_$1"); // Prefix with `_` if starts with a number
};

const sanitizeSlug = (slug) => {
  return slug
    .trim()
    .toLowerCase()
    .replace(/\+/g, "plus") // Replace "+" with "plus"
    .replace(/[#!?&=]+/g, "") // Remove invalid characters (#, ?, !, &, =)
    .replace(/\s+/g, "-") // Replace spaces with "-"
    .replace(/[^a-z0-9\-]/g, ""); // Remove any other non-alphanumeric characters except "-"
};


const createPostTemplate = () => {
  let postData = JSON.parse(fs.readFileSync("./src/data/posts.json").toString());

  rl.question("Enter post name (slug): ", (slug) => {
    const sanitizedSlug = sanitizeSlug(slug);

    // Define paths
    const srcPath = path.join(__dirname, "src", "pages", "blog", sanitizedSlug);
    const publicPath = path.join(__dirname, "public", "blog", sanitizedSlug);

    // Check if directories already exist
    if (fs.existsSync(srcPath) || fs.existsSync(publicPath) || postData[sanitizedSlug]) {
      console.log(`Error: A post with the name "${sanitizedSlug}" already exists.`);
      rl.close();
      return;
    }

    // Create directories
    fs.mkdirSync(srcPath, { recursive: true });
    fs.mkdirSync(publicPath, { recursive: true });

    // Ask for Fancy Title
    rl.question("Enter Fancy Title: ", (fancyTitle) => {
      const camelCaseSlug = toCamelCase(sanitizedSlug);
      const pascalCaseSlug = toPascalCase(sanitizedSlug);
      const currentDate = Date.now();

      postData[camelCaseSlug] = {
        active: true,
        slug: sanitizedSlug,
        URI: '/blog/' + sanitizedSlug,
        URL: 'https://argosta.me/blog/' + sanitizedSlug,
        fancyTitle: fancyTitle,
        imageUri: "/blog/No_Image_Available.jpg",
        imageAlt: "",
        date: currentDate,
        active: true,
        excerpt: "",
        tags: [],
      };

      // Content of the index.jsx file
      const indexContent = `
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Application from "../../../components/Application";
import BlogPostVerticalLayout from "../../../components/BlogPostVertcalLayout"
import BlogPostBanner from "../../../components/BlogPostBanner";
import TableOfContents from "../../../components/TableOfContents";
import BlogMarkdownContent from "../../../components/BlogMarkdownContent";

//----------------------------- Import Markdown Content Here --------------------------------
import markdownContent from "./content.md"

const ${pascalCaseSlug} = ({postData}) => {

  // redirect to 404 if this post is not on display
  if (!postData.active) {
    const router = useRouter();
    useEffect(() => { router.replace('/404');}, []);
    return null;
  }
  

  return (
    <Application currentRoute={postData.URI} pageTitle={postData.fancyTitle}>
      <BlogPostVerticalLayout>
        <BlogPostBanner postData={postData} bannerImage={""} />
        <TableOfContents markdownContents={[markdownContent]} showHeader={true} generateReference={true} />

        <BlogMarkdownContent MarkdownFileContent={markdownContent} />

      </BlogPostVerticalLayout>
    </Application>
  );
};

// Fetch data at build time
import POSTS from "../../../data/posts.json";
export async function getStaticProps() {
  const { ${camelCaseSlug} } = POSTS;

  return {
    props: {
      postData: ${camelCaseSlug},
    },
  };
}

export default ${pascalCaseSlug};
`;

      // write to post data JSON file
      fs.writeFileSync("./src/data/posts.json", JSON.stringify(postData, undefined, 2));

      // Write index.jsx file
      fs.writeFileSync(path.join(srcPath, "index.jsx"), indexContent, "utf8");
      // write content.md file
      fs.writeFileSync(path.join(srcPath, "content.md"), `# ${fancyTitle}`, "utf8");

      console.log(`✅ Post "${sanitizedSlug}" created successfully!`);

      rl.close();
    });
  });
};

// Run the function
createPostTemplate();
