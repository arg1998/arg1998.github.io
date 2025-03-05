import { generateTocMarkdown } from "../utils/generateTocMarkdown"



const TabelOfContents = ({ markdownContents = null, showHeader, styles, generateReference = true }) => {
    if (markdownContents == null || !markdownContents.length) return null;

    

    const toc = generateTocMarkdown(markdownContents, generateReference);
    if (toc) {
        return (
            <>
                {showHeader && <h1>Contents</h1>}
                <div
                    className={`blog-post-toc-container ${!generateReference && "toc-disbaled-links"}`}
                    dangerouslySetInnerHTML={{ __html: toc }}
                    style={styles}
                />
            </>
        )
    }
    return null;
}

export default TabelOfContents;



