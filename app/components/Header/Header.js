import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({onPress}) => (
    <View style = {styles.container}> 
        <TouchableOpacity onPress = {onPress} style = {styles.button}> 
            <Image style = {styles.icon} resizeMode = "contain" source = {require('./images/gear.png')} />
        </TouchableOpacity>
    </View>

);

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;