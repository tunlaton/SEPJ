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
import { createStackNavigator} from 'react-navigation'; // Version can be specified in package.json

class ShowRecipes extends React.Component {
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
      <View style={styles2.navBar}>
  <View style={styles2.leftContainer}>
  <Text style={{fontSize: 30,fontWeight: 'bold'}} >Search</Text>
  </View>
  <Text style={styles2.text}>

  </Text>
  <View style={styles2.rightContainer}>

  <Icon name="cog" type="font-awesome" size={40} />

  </View>

  </View>

  <SearchBar
  lightTheme
   round
  platform="android"
  onChangeText={(term) => { this.searchUpdated(term) }}
  cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  placeholder='Search' />

  <ScrollView>
  <Grid>
  <Col>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
            itemId: email.user.name,
            otherParam: email.user.detail,
            pic: email.image1
          })} key={email.id} style={styles.emailItem}>
                <View>
                <Image source = {email.image1} style={{width: 150, height: 200}} borderRadius={10}/>
                  <Text>{email.user.name}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
            </Col>
            <Col>
            {filteredEmails2.map(email => {
              return (
                //()=>alert(email.user.name)
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
              itemId: email.user.name,
              otherParam: email.user.detail,
                pic: email.image1
            })} key={email.id} style={styles.emailItem}>
                  <View>
                  <Image source = {email.image1} style={{width: 150, height: 200}} borderRadius={10}/>
                    <Text>{email.user.name}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
            </Col>
  </Grid>
  </ScrollView>


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



class DetailsScreen extends React.Component {




  render() {
    const { navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam= navigation.getParam('otherParam', 'NO-ID');
    const pic= navigation.getParam('pic', 'NO-ID');
    return (
      <View>
        <ScrollView>
          <View style={styles4.container}>
            <View style={styles4.wrapImage}>
                <Image source = {pic} style={{width: 370, height: 300}} borderRadius={10}/>
            </View>
            <View style={styles4.wrapTopic}>

              <Text style={styles4.welcome}>{itemId}</Text>
            </View>
            <View style={styles4.wrapDetail}>
              <Text style={styles4.welcome}>{otherParam}</Text>

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: ShowRecipes,
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


const styles4 = StyleSheet.create({
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
    backgroundColor: 'darkcyan',
  },
  wrapDetail: {
    padding: 10,
    width: '100%',
    height: 450,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
});
