
import Layout from "../../../components/Layout";
import { testScrollBar } from "../../../data/posts.json"


const TestScrollBar = ({postData}) => {
  return (
    <Layout currentRoute={"/blog/test-scroll-bar"} pageTitle={postData.fancyTitle}>
    </Layout>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const postData = testScrollBar; // Get the post data

  return {
    props: {
      postData, // Pass data as props
    },
  };
}

export default TestScrollBar;
