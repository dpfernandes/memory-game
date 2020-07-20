import React from 'react';
import '../../App.css';
import GameLogo from '../../assets/images/logo/logo_3x.png';
import Fork from '../../assets/images/icons/fork_3x.png';
import Spoon from '../../assets/images/icons/spoon_3x.png';

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

        <SubmitButton
          buttonTitle="Smørrebrød"
          onClick={() => {
            location.href = '../';
          }}
        />

        <SubmitButton
          buttonTitle="Wienerbrød"
          onClick={() => {
            location.href = '../';
          }}
        />

        <img src={Spoon} alt="Spoon" />
      </div>
      <Footer />
    </div>
  </section>
);
