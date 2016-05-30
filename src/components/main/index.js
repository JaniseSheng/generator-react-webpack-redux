
import React from 'react';
import styles from './styles.css';
let yeomanImage = require('../../images/3.jpg');

console.log(styles);
class AppComponent extends React.Component {
  render() {
    return (
      <div className={styles.index}>
        <img src={yeomanImage} alt="text img" />
        <p className={styles['post-P']}>this is copy123</p>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
