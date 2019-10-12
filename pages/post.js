import Link from "next/link";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
// url is depricated use router instead 
const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <ul>
        <li>
          <p>
            <Link href="https://github.com/alaashhadat">
              <a>Check my Github</a>
            </Link>{" "}
          </p>
        </li>
      </ul>
    </Layout>
  );
};
export default withRouter(Post);
