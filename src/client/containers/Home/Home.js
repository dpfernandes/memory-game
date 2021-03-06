import React from 'react';
import '../../App.css';

import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Footer from '../../components/FooterComponent/FooterComponent';

export const Home = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="headercontainer">
        <div className="homelogo">
          <GameLogoComponent />
        </div>
        <Title title="Memory Game" subtitle="- perserve culinary heritage -" />
      </div>
      <ForkImageComponent />
      <SubmitButton
        buttonTitle="Play EAT THE PAIR"
        onClick={() => {
          location.href = '../pick-game-page';
        }}
      />
      <SpoonImageComponent /> <Footer />
    </div>
  </section>
);
