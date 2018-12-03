/**
 * react-native-search-filter Sample App
 */
import React, { Component } from 'react';
import { Dimensions,StyleSheet, Text, View, ScrollView, TouchableOpacity,Image,StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
import menu from './menu';
import Images from './images';
import SearchHeader from 'react-native-search-header';
const DEVICE_WIDTH = Dimensions.get(`window`).width;
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import { SearchBar} from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
import {Container,Header,Title, Left, Right, Body,Button } from 'native-base';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';





export default class App extends Component {

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
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Home!</Text>
     </View>
  <Grid>
  <Col>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
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
                <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
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
  }
});
