import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Icon = ({checkmark, visible, iconBackground}) => {
  const iconStyles = [styles.icon];
  if (visible) {
      iconStyles.push(styles.iconVisible);
  }

  if (iconBackground) {
      iconStyles.push({backgroundColor : iconBackground});
  }

  return (<View style = {iconStyles}> 
  {checkmark ? <Image source ={ require('./images/check.png')} style = {styles.checkIcon} resizeMode = "contain"/> : null}
  </View>)
};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
};

export default Icon;