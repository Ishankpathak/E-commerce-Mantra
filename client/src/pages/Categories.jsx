import React from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container all-category">
        {categories.map((c) => (
          <div className="mt-3 mb-3 gx-3 gy-3  all-category" key={c._id}>
            <Link to={`/category/${c.slug}`} className="btn btn-primary p-3">
              {" "}
              {c.name}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
