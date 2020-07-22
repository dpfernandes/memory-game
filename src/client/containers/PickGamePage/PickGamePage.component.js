import React from 'react';
import '../../App.css';
import GameLogo from '../../assets/images/logo/logo_3x.png';
import Fork from '../../assets/images/icons/fork_3x.png';
import Spoon from '../../assets/images/icons/spoon_3x.png';
import { Link } from 'react-router-dom';

import Title from '../../components/Title/Title';

import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Footer from '../../components/FooterComponent/FooterComponent';

export const PickGamePage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="homelogocontainer">
        <div className="homelogo">
          <img src={GameLogo} alt="Game Logo" />
        </div>
        <Title title="Memory Game" subtitle="perserve culinary heritage" />
        <img src={Fork} alt="Fork" />
        <Link to="/pick-level-page">
          <SubmitButton buttonTitle="Smørrebrød" />
        </Link>
        <Link to="/pick-level-page">
          <SubmitButton buttonTitle="Wienerbrød" />
        </Link>

        <img src={Spoon} alt="Spoon" />
      </div>
      <Footer />
    </div>
  </section>
);
