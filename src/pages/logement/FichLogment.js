import React from "react";
import FicheLogementDisplay from "../../components/ficheLogement/FicheLogementDisplay";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogementDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;