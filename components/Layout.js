import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

// show router loading status when the user click on navbar items 
Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
};
Router.onRouteChangeComplete = url => {
  NProgress.done();
};
Router.onRouteChangeError = url => {
  NProgress.done();
};
export default ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <title> NextJS Portfolio </title>
        <Link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css">
          <a></a>
        </Link>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br></br>
        <Link href="/about">
          <a>About</a>
        </Link>
        <br></br>
        <Link href="/hireme">
          <a>Hire me</a>
        </Link>
        <Link href="/blog">
        <a>Blog</a>
      </Link>
      </header>
      <h1>{title}</h1>
      {children}
      <br></br>
      <footer>&copy;{new Date().getFullYear()}</footer>
      <style jsx>
        {`
    .root {
        display:flex;
        justify-content-center; 
        align-items:center;
        flex-direction:column;
    }
    header{
        display:flex;
        width:100%;
        justify-content:space-around;
        padding:1em;
        font-size:1rem;
        background:yellow;
        color:black;
    }
    header a{
        color:dark-grey;
        text-decoration:none;
    }
    header a:hover{
        font-weight:bold;
        color:black;
    }
    footer{
padding:1em;
    }`}
      </style>
      <style global jsx>
        {`
          body {
            margin: 0;
            font-size: 110%;
            background: #f0f0f0f;
          }
        `}
      </style>
    </div>
  );
};
