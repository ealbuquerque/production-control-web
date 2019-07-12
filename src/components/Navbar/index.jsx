import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const getMenu = pathname => ({
  label,
  path,
}, index) => {
  const isCurrentPath = path === `/${pathname.split('/')[1]}`;

  return (
    <Link
      key={index}
      className={`navbar-item ${isCurrentPath ? 'is-tab is-active' : ''}`}
      to={path}
    >
      {label}
    </Link>
  );
};

function Component(props) {
  const {
    location: {
      pathname,
    },
    menus,
  } = props;

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          to="/"
        >
          <img
            alt=""
            height="28"
            src="https://png.pngtree.com/svg/20170823/control_1221871.png"
            width="28"
          />
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarFull"
          href="/"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarFull"
        className="navbar-menu"
      >
        <div className="navbar-start">
          {menus.map(getMenu(pathname))}
        </div>
      </div>
    </nav>
  );
}

Component.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  menus: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default Component;
