import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import GameLogo from '../../assets/images/logo/logo_3x.png';
import Fork from '../../assets/images/icons/fork_3x.png';
import Spoon from '../../assets/images/icons/spoon_3x.png';
import Title from '../../components/Title/Title';
import GameTitle from '../../components/GameTitle/GameTitle';
import Card from '../../components/Card/Card';
import Footer from '../../components/FooterComponent/FooterComponent';

export const PickLevelPage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="homelogocontainer">
        <div className="homelogo">
          <img src={GameLogo} alt="Game Logo" />
        </div>
        <Title title="Memory Game" subtitle="perserve culinary heritage" />
        <img src={Fork} alt="Fork" />
        <GameTitle title="Smørrebrød" />

        <span>
          <Link to="/game-page">
            <Card text="Easy" image="" />
          </Link>

          <Link to="/game-page">
            <Card text="Hard" image="" />
          </Link>
        </span>

        <img src={Spoon} alt="Spoon" />
      </div>
      <Footer />
    </div>
  </section>
);
