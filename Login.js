/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage,Platform, StyleSheet, Text, View,Button,TextInput,Image,ScrollView, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
const instructions = Platform.select({
  ios: 'the data privacy policy.',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
class Login extends Component<Props> {

  constructor(props) {
     super(props);
     this.state = {
       LoginEmail:null,
       LoginPassword:null,
     }
   }

  componentDidMount = () => AsyncStorage.getItem('LoginEmail').then((value2) => this.setState({ 'LoginEmail': value2}))
  componentDidMount = () => AsyncStorage.getItem('LoginPassword').then((value3) => this.setState({ 'LoginPassword': value3}))

  setLoginUserName = (value) => {
     AsyncStorage.setItem('LoginEmail', value);
     this.setState({ 'LoginEmail': value });
  }
  setLoginPassword = (value2) => {
     AsyncStorage.setItem('LoginPassword', value2);
     this.setState({ 'LoginPassword': value2 });
  }

  validateLogin = (email) => {
    const {LoginPassword} = this.state;
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if (!re.test(this.state.LoginEmail)) {
          Alert.alert('Email format not correct. please try again');
       } else if(LoginPassword == null) {
         Alert.alert('Please input Password!');
       }
       else {
          Alert.alert('Log in up done!');
          this.state.LoginPassword = null;
       }
  };
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Kitchen GO</Text>

       <Image source={require('./pic/264037-kitchen.png')} style={{width: 150, height: 150}}/>

        <View style={styles.Wrap}>
          <View style={styles.detailInput}>
           <TextInput
            placeholder='  Email'
            placeholderTextColor='gray'
            underlineColorAndroid='gray'
            onChangeText={this.setLoginUserName}

          />
          </View>

          <View style={styles.detailInput}>
            <TextInput
              placeholder='  Password'
              placeholderTextColor='gray'
              underlineColorAndroid='gray'
              onChangeText={this.setLoginPassword}
            />
          </View>
 </View>




 <View style={styles.buttons}>
<Button
  title='Log in'
  color = 'darkcyan'
  onPress={this.validateLogin}
/>
 </View>



<View style={styles.Wrap2}>
        <Text style={styles.instructions}>Forgot your password?</Text>

  <View style={styles.buttons1}>
    <Button
      title='Reset here'
      color = 'darkcyan'

    />

  </View>


 <View style={styles.Wrap1}>
        <Text style={styles.instructions}>No account yet?</Text>

  <View style={styles.buttons1}>
    <Button
      title='Sign up now!'
      color = 'darkcyan'

    />

  </View>
</View>
   </View>
      </View>
      </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       Recipes:'',
       Email:'',
       Password:'',
       Username:''
     }
   }
   componentDidMount = () => AsyncStorage.getItem('Username').then((value) => this.setState({ 'Username': value}))


  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles2.container}>
            <View style={styles2.wrapImage}>

            </View>
            <View style={styles2.wrapDetail}>

              <Text>Login Success</Text>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }

}

const RootStack = createStackNavigator(
  {
    Home: Login,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,

  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Wrap: {

    justifyContent: 'space-between',
    height: 70,
    marginTop: 80,
    width: 350,
  },

  Wrap1: {

   // justifyContent: 'space-between',
    height: 70,
    marginTop: 30
  },

  Wrap2: {

   // justifyContent: 'space-between',
    height: 70,
    marginTop: 10
  },

   buttons: {
    width: 200,
    justifyContent: 'space-around',
    backgroundColor: 'darkcyan',
    marginTop: 60
  },

   buttons1: {
    fontSize: 10,
    justifyContent: 'space-around',

  },

  input: {
    marginTop: 10,
    borderBottomWidth: 0.4,
    borderColor: 'gray',
    width: 350,
    height: 20,
  },
});


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  topicInput: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: '80%',
    height: 35,
  },
  detailInput: {
    borderColor: 'gray',
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: '80%',
    height: '80%',
  },
  wrapTopic: {
    alignItems: 'center',
    //flexDirection: 'row',
    backgroundColor: 'salmon',
    width: '100%',
    height: 50,
  },
  wrapImage: {
    width: '100%',
    height: 300,
    backgroundColor: 'lightgray',
  },
  wrapDetail: {
    marginTop: 10,
    width: '100%',
    height: 450,
    alignItems: 'center',
    backgroundColor: 'lightsalmon',

  },
});
