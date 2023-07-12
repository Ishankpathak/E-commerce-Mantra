import React from "react";
import Layout from "../components/Layout/Layout";
import NotFound from "../image/404.avif";

const PageNotFound = () => {
  return (
    <Layout title={"404-NotFound"}>
      <div className="Not-Found">
        <img src={NotFound} alt="404 not found" />
      </div>
    </Layout>
  );
};

export default PageNotFound;
