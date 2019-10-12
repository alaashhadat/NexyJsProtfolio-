import Document, { Main, Head, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
    
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="A site for my portofolio"></meta>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width"></meta>
          <meta name="robots" content="noindex,nofollow"></meta>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Mansalva&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Main></Main>

        <NextScript />
        <style jsx>{`
          font-family: "Roboto", sans-serif;
        `}</style>
      </html>
    );
  }
}
export default MyDocument;
