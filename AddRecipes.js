import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { AsyncStorage, Text, View, TextInput, StyleSheet,Button,Navigator,ScrollView,Alert} from 'react-native'
import MultiSelect from 'react-native-multiple-select';
import PrintRecipes from './printRecipes.js'

class HomeScreen extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       name: null,
       recipes:null,
     }
   }

  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value}))
  componentDidMount = () => AsyncStorage.getItem('recipes').then((value2) => this.setState({ 'recipes': value2}))

  setName = (value) => {
     AsyncStorage.setItem('name', value);
     this.setState({ 'name': value });
  }
  setRecipes = (value2) => {
     AsyncStorage.setItem('recipes', value2);
     this.setState({ 'recipes': value2 });
  }

  validateAddRecipes = (email) => {
       const { name } = this.state;
       const { recipes } = this.state;
       if(name == null)  {
          Alert.alert('Please fill topic');
       }
       else if(recipes == null)  {
          Alert.alert('Please fill recipes');
       }
       else {
          Alert.alert('Add Recipes done!');
       }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.wrapTopic}>
          <Text style={styles.welcome}>Topic</Text>
          <TextInput style = {styles.topicInput}
               multiline = {true}
               placeholderTextColor = "Red"
               autoCapitalize = "none"
               onChangeText={this.setName}
          />
        </View>
        <View style={styles.wrapDetail}>
          <Text style={styles.welcome}>Recipes</Text>
          <TextInput style = {styles.detailInput}
               multiline = {true}
               placeholderTextColor = "Red"
               autoCapitalize = "none"
               onChangeText={this.setRecipes}
          />
        </View>

      </View>
        <Button
          title="Creat!"
          color = "salmon"
          onPress={this.validateAddRecipes}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: ' ',
       Recipes:' '
     }
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value}))


  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles2.container}>
            <View style={styles2.wrapImage}>
            </View>
            <View style={styles2.wrapTopic}>
              <Text style={styles2.welcome}>{this.state.name}</Text>
            </View>
            <View style={styles2.wrapDetail}>
              <Text style={styles2.welcome}>{this.state.Recipes}</Text>
              <PrintRecipes/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
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
    height: '60%',
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
