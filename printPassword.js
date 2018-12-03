import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { AsyncStorage, Text, View, TextInput, StyleSheet,Button,Navigator,ScrollView } from 'react-native'
import MultiSelect from 'react-native-multiple-select';


class PrintPassword extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       Email:'',
       Password:''
     }
   }
   componentDidMount = () => AsyncStorage.getItem('Password').then((value3) => this.setState({ 'Password': value3}))

   render() {
      return (

        <View>
           <Text>
              {this.state.Password}
           </Text>


        </View>
      )
   }
}
export default PrintPassword
