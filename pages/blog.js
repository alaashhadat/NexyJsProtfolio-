import Link from "next/link";
import Layout from "../components/Layout";
const PostLink = ({ slug, title }) => {
  return (
    <ul>
      <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
          <a>{title}</a>
        </Link>
      </li>
    </ul>
  );
};
const blog = () => {
  return (
    <Layout title="My blog">
      <ul>
        <PostLink slug="react-post" title="react-post" />
        <PostLink slug="nextjs-post" title="nextjs-post" />
        <PostLink slug="html-post" title="html-post" />
      </ul>
    </Layout>
  );
};
export default blog;
