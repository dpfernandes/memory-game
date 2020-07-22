import React from 'react';
import HeaderTitle from '../../components/Title/Title';
import ButtonComponent from '../../components/SubmitButton/SubmitButton.js';
import FooterComponent from '../../components/FooterComponent/FooterComponent.js';
import '../../App.css';
import './404Page.styles.css';

export const ErrorPage = () => {
  return (
    <div className="bodycontainer error-page-container">
      <HeaderTitle title="Error 404" subtitle=" " />
      <div className="bodywrapper">
        <div className="error-logo-container">
          <h3>Oh no!</h3>
          <p>We could not find what you are looking for.</p>
        </div>
        <ButtonComponent
          buttonTitle="Go back"
          onClick={() => window.history.go(-1)}
        />
      </div>
      <FooterComponent />
    </div>
  );
};
