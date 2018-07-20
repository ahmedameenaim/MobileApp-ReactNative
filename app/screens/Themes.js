import React, {Component} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {ListItem, Separator, } from '../components/List';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import {changePrimaryColor} from '../actions/themes';
import {connect} from 'react-redux';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});

class Themes extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    }
   
     handleThemePressed = (color) => {
     this.props.dispatch(changePrimaryColor(color));
     this.props.navigation.navigate.goBack();
   }

   render() {
       return(
           <ScrollView> 
               <StatusBar translucent = {false} barStyle = "default"/>
               <ListItem 
               text = "blue"
               onPress = {() => this.handleThemePressed(styles.$blue)}
               selected
               checkmark = {false} 
               iconBackground = {styles.$blue}
               />
               <Separator />
               <ListItem 
               text = "orange"
               onPress = {()=> this.handleThemePressed(styles.$orange)}
               selected
               checkmark = {false}
               iconBackground = {styles.$orange}
               />
               <Separator />
               <ListItem 
               text = "green"
               onPress = {() => this.handleThemePressed(styles.$green)}
               selected
               checkmark = {false}
               iconBackground = {styles.$green}
               />
               <Separator />
               <ListItem 
               text = "purple"
               onPress = {() => this.handleThemePressed(styles.$purple)}
               selected
               checkmark = {false}
               iconBackground = {styles.$purple}
               />
               
           </ScrollView>
       );
   }
}


export default connect()(Themes);