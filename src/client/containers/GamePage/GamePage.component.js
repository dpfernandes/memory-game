import React from 'react';
import Game from '../../components/Game/Game';
import GameTitleHeader from '../../components/GameTitleHeader/GameTitleHeader';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import Timer from '../../components/Timer/Timer';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Footer from '../../components/FooterComponent/FooterComponent';

export const GamePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="header-game-container">
        <GameTitleHeader title="Game Name" />
        <Timer countdown={120} />
        <ForkImageComponent />
        <Game level="easy" />
        <SpoonImageComponent />
      </div>
      <Footer />
    </div>
  </section>
);
