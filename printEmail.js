import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { AsyncStorage, Text, View, TextInput, StyleSheet,Button,Navigator,ScrollView } from 'react-native'
import MultiSelect from 'react-native-multiple-select';


class PrintEmail extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       Email:''
     }
   }
   componentDidMount = () => AsyncStorage.getItem('Email').then((value2) => this.setState({ 'Email': value2 }))

   validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
   };
   
   render() {
      return (

        <View>
           <Text>
              {this.state.Email}
           </Text>


        </View>
      )
   }
}
export default PrintEmail
