import Layout from "../components/Layout";
import React from "react";

export default function _errors({statusResponse}) {
  return (
    <Layout title="error">
      {statusResponse
        ? `could not load user data ${statusResponse}  `
        : "could not get that page sorry"}
      <p>this page is not available </p>
    </Layout>
  );
}
