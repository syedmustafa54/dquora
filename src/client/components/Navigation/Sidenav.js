import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import './Sidenav.less';

const isNews = (match, location) => location.pathname.match(/trending/);
const isWallet = (match, location) => location.pathname.match(/wallet/);
const isReplies = (match, location) => location.pathname.match(/replies/);

const Sidenav = ({ username }) => (
  <div>
    {username && (
      <ul className="Sidenav">
        <li>
          <NavLink to={`/@${username}`}>
            <i className="iconfont icon-mine" />
            <FormattedMessage id="my_profile" defaultMessage="My profile" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending/dquora" activeClassName="Sidenav__item--active" exact>
            <i className="iconfont icon-clock" />
            <FormattedMessage id="feed" defaultMessage="New Trending" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending" activeClassName="Sidenav__item--active" isActive={isNews}>
            
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/wallet" activeClassName="Sidenav__item--active" isActive={isWallet}>
            <i className="iconfont icon-wallet" />
            <FormattedMessage id="wallet" defaultMessage="Wallet" />
          </NavLink>
        </li>
      </ul>
    )}
  </div>
);

Sidenav.propTypes = {
  username: PropTypes.string,
};

Sidenav.defaultProps = {
  username: undefined,
};

export default Sidenav;
