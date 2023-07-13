import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initial details
  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);
  //getproduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Layout>
        {/* {JSON.stringify(product, null, 4)} */}
        <div className="row container m-3">
          <div className="col-md-6">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="card-img-top mt-3"
              style={{
                width: "16rem",
                height: "16rem",
                borderRadius: "2rem",
              }}
              alt={product.name}
            />
          </div>
          <div className="col-md-6 ">
            <h4 className="text-center">Product Details</h4>
            <h6>Name: {product?.name}</h6>
            <h6>Description: {product?.description}</h6>
            <h6>Price: {product?.price}</h6>
            <h6>Category: {product?.category?.name}</h6>
            <button className="btn btn-warning ms-1">Add To Cart</button>
          </div>
        </div>
        <div className="row">
          <h4 className="text-center">Similar Product</h4>
          {/* {JSON.stringify(relatedProducts, null, 4)} */}
          {relatedProducts.length < 1 && <h4 className="text-center">No Similar Product</h4>}
          <div className="d-flex  flex-wrap justify-content-center">
            {relatedProducts?.map((p) => (
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
                    <p className="card-text">
                      {p.description.substring(0, 60)}
                    </p>
                    <p className="card-text">₹{p.price}</p>
                    <button className="btn btn-warning ms-1">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductDetails;
