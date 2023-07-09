import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth(); //* from context/auth.js
  return (
    <Layout title={"Home Page"}>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
