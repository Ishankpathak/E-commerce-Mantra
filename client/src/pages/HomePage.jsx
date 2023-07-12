import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import Swal from "sweetalert2";
import { Prices } from "../components/Prices.js";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //get product
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <Layout title={"All Product - Best offers"}>
      <div className="row mt-3">
        <h4 className="text-center">Filter By Category</h4>
        <div className="d-flex flex-column justify-content-ceter align-items-center">
          <div className="d-flex flex-row flex-wrap ms-4 mb-4">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
                className="fs-5"
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* Price Filter  */}
          <h4 className="text-center">Filter By Price</h4>

          <Radio.Group
            onChange={(e) => setRadio(e.target.value)}
            className="d-flex flex-row flex-wrap ms-4 mb-4 fs-2"
          >
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>

          {JSON.stringify(radio, null, 4)}
          <h1 className="text-center">All Products</h1>
          <div className="d-flex  flex-wrap justify-content-center">
            {products?.map((p) => (
              <div
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div
                  className="card m-3"
                  style={{
                    width: "17rem",
                  }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top mt-3"
                    style={{
                      width: "15rem",
                      height: "15rem",
                      borderRadius: "2rem",
                    }}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <button className="btn btn-primary ms-1">
                      More Details
                    </button>
                    <button className="btn btn-warning ms-1">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
