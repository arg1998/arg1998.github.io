import { unified } from "unified";
import remarkParse from "remark-parse";  // Parse Markdown
import remarkRehype from "remark-rehype"; // Convert to HTML-compatible AST
import rehypeToc from "rehype-toc"; // Generate Table of Contents
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm";


const generateTocMarkdown = (markdownStrings: [string], generateReference: boolean = true): string => {

    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const toc_uid = getRandomInt(10000000, 1000000000000);
    const toc_pattern = `\n${toc_uid}`

    markdownStrings.push(toc_pattern);

    let pipeline = unified()
        .use(remarkGfm)
        .use(remarkParse) // Parse Markdown
        .use(remarkRehype); // Convert to HTML AST

    if (generateReference) {
        pipeline = pipeline.use(rehypeSlug); // Conditionally add rehypeSlug
    }

    const toc = pipeline
        .use(rehypeToc, { position: "beforeend" }) // Generate TOC
        .use(rehypeStringify) // Convert HTML AST to HTML string
        .processSync(markdownStrings.join("\n"))
        .toString();

    return toc.split(`<p>${toc_uid}</p>`)[1] || ''

}

export { generateTocMarkdown }