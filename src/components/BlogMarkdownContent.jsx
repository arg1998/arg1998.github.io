import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkObsidianCallout from "remark-obsidian-callout";
import remarkDirective from "remark-directive"
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";
import "highlight.js/styles/lioshi.css";

const BlogMarkdownContent = ({ MarkdownFileContent, styles }) => {
  return (
    <div className="blog-container-md" style={styles}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, remarkMath, remarkObsidianCallout]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex, rehypeSlug]}
      >
        {MarkdownFileContent}
      </ReactMarkdown>
    </div>
  );
};


export default BlogMarkdownContent;
