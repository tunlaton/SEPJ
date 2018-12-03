import React, {Component} from 'react';
import {AsyncStorage,Platform, StyleSheet, Text, View,Button,TextInput,Image,ScrollView, Alert} from 'react-native';
import PrintEmail from './printEmail.js'
import PrintPassword from './printPassword.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const instructions = Platform.select({
  ios: 'the data privacy policy.',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Registration extends Component<Props> {

    constructor(props) {
       super(props);
       this.state = {
         Username: null,
         Email: null,
         Password: null,
         Password1: null,
       }
     }

    componentDidMount = () => AsyncStorage.getItem('Username').then((value) => this.setState({ 'Username': value}))
    componentDidMount = () => AsyncStorage.getItem('Email').then((value2) => this.setState({ 'Email': value2}))
    componentDidMount = () => AsyncStorage.getItem('Password').then((value3) => this.setState({ 'Password': value3}))
    componentDidMount = () => AsyncStorage.getItem('Password1').then((value4) => this.setState({ 'Password1': value4}))

    setUserName = (value) => {
       AsyncStorage.setItem('Username', value);
       this.setState({ 'Username': value });
    }
    setEmail = (value2) => {
       AsyncStorage.setItem('Email', value2);
       this.setState({ 'Email': value2 });
    }
    setPassword = (value3) => {
       AsyncStorage.setItem('Password', value3);
       this.setState({ 'Password': value3 });
    }
    setConfirmPasswoed = (value4) => {
       AsyncStorage.setItem('Password1', value4);
       this.setState({ 'Password1': value4 });
    }

    validateEmail = (email) => {
      const {Username} = this.state;
      const {Password} = this.state;
      //const {Password1} = this.state;

         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (!re.test(this.state.Email)) {
            Alert.alert('Email format not correct. please try again');
         } else if(Username == null ) {
            Alert.alert('Please input Name!');
         } else if(Password == null) {
           Alert.alert('Please input Password!');
         }else if(this.state.Email == null) {
            Alert.alert('Please input Email!');
          }
         else {
            Alert.alert('Sign up done!');
         }
    };


  render() {
    return (
<ScrollView>
      <View style={styles3.container}>
        <Text style={styles3.welcome}>Kitchen GO</Text>

       <Image source={require('./pic/264037-kitchen.png')} style={{width: 150, height: 150}}/>

        <View style={styles3.Wrap}>

        <View style={styles3.detailInput}>
             <TextInput
             autoCapitalize = "none"
             />
           </View>

           <View style={styles3.detailInput}>
            <TextInput
            placeholder='  Name'
            placeholderTextColor='gray'
            underlineColorAndroid='gray'
            autoCapitalize = "none"
            onChangeText={this.setUserName}

            />
          </View>

          <View style={styles3.detailInput}>
           <TextInput
            placeholder='  Email'
            placeholderTextColor='gray'
            underlineColorAndroid='gray'
            autoCapitalize = "none"
            onChangeText={this.setEmail}

          />
          </View>

          <View style={styles3.detailInput}>
            <TextInput
              placeholder='  Password'
              placeholderTextColor='gray'
              underlineColorAndroid='gray'
              autoCapitalize = "none"
              onChangeText={this.setPassword}

            />
          </View>
 </View>

 <View style={styles3.buttons}>
<Button
  title='Sign up'
  color = 'darkcyan'
  //onPress={() => this.props.navigation.navigate('Details')}
  onPress={this.validateEmail }
/>


 </View>





<View style={styles3.Wrap2}>
        <Text style={styles3.instructions}>Already have an account?</Text>

         <View style={styles3.buttons1}>
<Button
  title='Log in here'
  color = 'darkcyan'
/>


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

            <View style={styles2.wrapTopic}>
              <Text style={styles2.welcome}>Username:{this.state.Username}</Text>
            </View>
            <View style={styles2.wrapDetail}>

              <Text>Email:</Text><PrintEmail/>
              <Text>Password:</Text><PrintPassword/>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }

}

const RootStack = createStackNavigator(
  {
    Home: Registration,
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
const styles3 = StyleSheet.create({
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
    height: 120,
    marginTop: 80,
    width: 300,
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
    marginTop: 160
  },

   buttons1: {
    fontSize: 10,
    justifyContent: 'space-around',

  },

  input: {
    marginTop: 10,
    borderBottomWidth: 0.4,
    color : "blue",
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
