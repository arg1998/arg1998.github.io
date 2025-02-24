
import Layout from "../../../components/Layout";
import { somethingIsInTheAir } from "../../../data/posts.json"


const SomethingIsInTheAir = ({postData}) => {
  return (
    <Layout currentRoute={"/blog/something-is-in-the-air"} pageTitle={postData.fancyTitle}>
    </Layout>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const postData = somethingIsInTheAir; // Get the post data

  return {
    props: {
      postData, // Pass data as props
    },
  };
}

export default SomethingIsInTheAir;
