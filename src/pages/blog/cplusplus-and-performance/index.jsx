
import Layout from "../../../components/Layout";
import { cplusplusAndPerformance } from "../../../data/posts.json"


const CplusplusAndPerformance = ({postData}) => {
  return (
    <Layout currentRoute={"/blog/cplusplus-and-performance"} pageTitle={postData.fancyTitle}>
    </Layout>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const postData = cplusplusAndPerformance; // Get the post data

  return {
    props: {
      postData, // Pass data as props
    },
  };
}

export default CplusplusAndPerformance;
