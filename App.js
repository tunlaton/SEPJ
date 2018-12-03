import React from 'react';
import { Dimensions,StyleSheet, Text, View, ScrollView, TouchableOpacity,Image,StatusBar,Navigator,Button,AsyncStorage,TextInput} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
import menu from './menu';
import Images from './images';
import SearchHeader from 'react-native-search-header';
const DEVICE_WIDTH = Dimensions.get(`window`).width;
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import { SearchBar} from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
import {Container,Header,Title, Left, Right, Body } from 'native-base';
import AsyncStorageExample from './async_storage_example.js'
import AddRecipesExample from './AddRecipes.js'
import RecipesExample from './Recipes.js'
import Registration from './Registration.js'
import Login from './Login.js'
import ShowRecipes from './showRecipes.js'
import { createStackNavigator} from 'react-navigation'; // Version can be specified in package.json


class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      }
    }

    searchUpdated(term) {
      this.setState({ searchTerm: term })
    }

    tabs = [
        {
          key: 'games',
          icon: 'gamepad-variant',
          label: 'Home',
          barColor: 'white',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'movies-tv',
          icon: 'movie',
          label: 'Search',
          barColor: 'white',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'music',
          icon: 'music-note',
          label: 'Schedule',
          barColor: 'white',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'favourite',
          icon: 'music-note',
          label: 'Favourite',
          barColor: 'white',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'profile',
          icon: 'music-note',
          label: 'Profile',
          barColor: 'white',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        }
      ]

  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const filteredEmails2 = menu.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <View style={styles.container}>
      <ShowRecipes/>

      </View>

    );
  }

    renderTab = ({ tab, isActive }) => {
      return (
        <FullTab
          key={tab.key}
          isActive={isActive}
          label={tab.label}
          renderIcon={this.renderIcon}
          labelStyle={{color: isActive ? 'black' : 'black'}}
        />
      )
    }
    renderIcon = iconName => ({ isActive }) => {
      return <Icon size={24} color="black" name={iconName} />
    }
}

type Props = {};
class SettingsScreen extends React.Component {
  render() {
    return (
<Registration/>
    );
  }
}

export class AddRecipes extends React.Component<Props> {
  render() {
    return (
     <AddRecipesExample/>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
<Login/>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Register:{screen: SettingsScreen},
  Login:{screen:Login},
  AddRecipes:{screen: AddRecipes}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});


const styles2 = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'green'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    //backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions2: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  b1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%'
  },
  b2: {
    width:'50%'
  },
});


const addRecipes = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  wrapDetail: {
    marginTop: 30,
    width: '100%',
    height: 450,
    alignItems: 'center',
  },
});

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
    marginTop: 80
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

export default createAppContainer(TabNavigator);
