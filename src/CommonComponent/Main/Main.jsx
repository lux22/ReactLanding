import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Main = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Main;
