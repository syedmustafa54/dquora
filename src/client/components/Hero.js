import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Hero.less';

const Hero = () => (
  <div className="Hero">
    <div className="container container-small">
      <h1 className="hero-message">
        <FormattedMessage
          id="heros"
          defaultMessage="Ask Question Or Give Answer Both Are Now In Profit."
        />
      </h1>
      <a target="_blank" rel="noopener noreferrer" href={process.env.SIGNUP_URL}>
        <button className="ant-btn-lg hero-signup">
          <FormattedMessage id="signup" defaultMessage="Sign up" />
        </button>
      </a>
    </div>
  </div>
);

export default Hero;
