import React from 'react';
import Title from '../../components/Title/Title';
import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Footer from '../../components/FooterComponent/FooterComponent';

export const RecipePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="homelogocontainer">
        <div className="homelogo">
          <GameLogoComponent />
        </div>
        <Title title="This is the Recipe Page" subtitle="" />
        <ForkImageComponent />
        <SpoonImageComponent />
        <Footer />
      </div>
    </div>
  </section>
);
