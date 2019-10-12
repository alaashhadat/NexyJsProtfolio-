import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/document";
const home = () => {
  return (
    <Layout title="home">
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>Welcome to home page</p>
    </Layout>
  );
};
export default home;
