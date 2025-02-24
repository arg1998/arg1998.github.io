/* eslint-disable*/

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sanitizeForIdentifier = (slug) => {
  return slug
    .trim()
    .replace(/\+/g, "plus") // Replace "+" with "plus"
    .replace(/[#!?&=.\s-]+/g, " ") // Remove invalid characters & replace with space
    .replace(/[^a-zA-Z0-9_ ]/g, "") // Remove any remaining invalid characters
    .replace(/\s+/g, " "); // Collapse multiple spaces
}

// Convert a slug to CamelCase (for metadata object)
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

// Convert a slug to PascalCase (for component name)
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
    .trim() // Remove leading and trailing spaces
    .toLowerCase() // Convert to lowercase
    .replace(/\+/g, "plus") // Replace "+" with "plus"
    .replace(/[#!?&=]+/g, "") // Remove invalid characters (#, ?, !, &, =)
    .replace(/\s+/g, "-") // Replace spaces with "-"
    .replace(/[^a-z0-9\-]/g, ""); // Remove any other non-alphanumeric characters except "-"
};

// Function to create a new post template
const createPostTemplate = () => {
  let postData = JSON.parse(
    fs.readFileSync("./src/data/posts.json").toString()
  );

  rl.question("Enter post name (slug): ", (slug) => {
    const sanitizedSlug = sanitizeSlug(slug);

    // Define paths
    const srcPath = path.join(__dirname, "src", "pages", "blog", sanitizedSlug);
    const publicPath = path.join(__dirname, "public", "blog", sanitizedSlug);

    // Check if directories already exist
    if (
      fs.existsSync(srcPath) ||
      fs.existsSync(publicPath) ||
      postData[sanitizedSlug]
    ) {
      console.log(
        `Error: A post with the name "${sanitizedSlug}" already exists.`
      );
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
        slug: sanitizedSlug,
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
import Layout from "../../../components/Layout";
import { ${camelCaseSlug} } from "../../../data/posts.json"


const ${pascalCaseSlug} = ({postData}) => {
  return (
    <Layout currentRoute={"/blog/${sanitizedSlug}"} pageTitle={postData.fancyTitle}>
    </Layout>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const postData = ${camelCaseSlug}; // Get the post data

  return {
    props: {
      postData, // Pass data as props
    },
  };
}

export default ${pascalCaseSlug};
`;

      //write to post data JSON file
      fs.writeFileSync(
        "./src/data/posts.json",
        JSON.stringify(postData, undefined, 2)
      );

      // Write index.jsx file
      fs.writeFileSync(path.join(srcPath, "index.jsx"), indexContent, "utf8");

      console.log(`✅ Post "${sanitizedSlug}" created successfully!`);
      console.log(`📂 Directories:`);
      console.log(`   - ${srcPath}`);
      console.log(`   - ${publicPath}`);
      console.log(`📝 Created: ${path.join(srcPath, "index.jsx")}`);

      rl.close();
    });
  });
};

// Run the function
createPostTemplate();
