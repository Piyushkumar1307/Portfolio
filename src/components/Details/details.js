import React from 'react';
import Header from '../Common/Header';
import Globe from '../Globes/globe';
import Pabout from '../Pabout/pabout';
import Certificate from '../Certificate/certificate';
import Projectview from '../Projectview/project';
import Footer from "../Footer/footer";


const Details = () => {
  return (
    <>
      <Header />
      <Globe />
      <Pabout />
      <Certificate />
      <Projectview />
      <Footer />
      {/* Rest of your component code */}
    </>
  );
};

export default Details;
