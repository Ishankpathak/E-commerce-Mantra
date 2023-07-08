import React from "react";
import Layout from "../components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout title={'404-NotFound'}>
      <div className="Not-Found">
        <img src="404.avif" alt="404 not found" />
      </div>
    </Layout>
  );
};

export default PageNotFound;
