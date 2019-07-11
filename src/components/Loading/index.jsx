import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './style.scss';

class Loading extends PureComponent {
  render() {
    const {
      showLoading,
    } = this.props;

    if (!showLoading) {
      return null;
    }

    return (
      <div className="loading__container">
        <CSSTransition
          classNames="fade"
          timeout={300}
        >
          <div className="overlay">
            <span className="loading">
              &nbsp;
            </span>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

Loading.propTypes = {
  showLoading: PropTypes.bool.isRequired,
};

export default Loading;
