import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { AsyncStorage, Text, View, TextInput, StyleSheet,Button,Navigator,ScrollView } from 'react-native'
import MultiSelect from 'react-native-multiple-select';


class PrintRecipes extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       Recipes:''
     }
   }
   componentDidMount = () => AsyncStorage.getItem('Recipes').then((value) => this.setState({ 'Recipes': value }))

   render() {
      return (

        <View>
           <Text>
              {this.state.Recipes}
           </Text>


        </View>
      )
   }
}
export default PrintRecipes
