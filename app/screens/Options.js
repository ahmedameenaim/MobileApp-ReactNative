import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import {connectAlert} from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    Linking.openURL('http://fixor.io').catch(() => this.props.alertWithType('error', 'sorry', 'fixor cant open'));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connectAlert(Options);