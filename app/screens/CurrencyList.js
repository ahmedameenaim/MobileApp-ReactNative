import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import currencies from '../data/currencies';
import {ListItem, Separator} from '../components/List';
import { changeBaseCurrency , changeQuoteCurrency } from '../actions/currencies';
const TEMP_CURRENT_CURRENCY = "CAD";
import {connect} from 'react-redux';

class CurrencyList extends Component {

  static propTypes = {
   navigation: PropTypes.object,
   dispatch: PropTypes.func,
   baseCurrency: PropTypes.string,
   quotCurrency: PropTypes.string,
   primaryColor: PropTyeps.string,
  }
  
  handlePress = (currency) => {
    const {type} = this.props.navigation.state.params;
    if ( type === 'base') {
      //dispatch the action change base
      this.props.dispatch{changeBaseCurrency(currency)};
    } else if (type === 'quote') {
      //dispatch the action change quote
      this.props.dispatch{changeQuoteCurrency(currency)};
    }
    this.props.navigation.goBack(null);
  };
  
  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    };
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem = {({ item }) => (
          <ListItem 
          text = {item}
          selected = {item === comparsionCurrency}
          onPress = {()=> this.handlePress(item)}
          iconBackground = {this.props.primaryColor}
          />
    )}
          KeyExtractor = {item => item}
          ItemSeparatorComponent = {Separator}
        />
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);