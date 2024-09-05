import React from "react";
import ErrorPage from "../../components/error/ErrorPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;