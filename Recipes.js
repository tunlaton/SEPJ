import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet,Button,RefreshControl,ScrollView} from 'react-native'

class RecipesExample extends Component {

   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

   setName = (value) => {
      AsyncStorage.setsetTimeout(() => {
    this.setState({time: true})
}, 1000)
Item('name', value);
      this.setState({ 'name': value });
   }

   constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetch().then(() => {
      this.setState({refreshing: false});
    });
  }

   render() {
      return (


        <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
                }
              >
         <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>

            <Text>
               {this.state.name}
            </Text>


         </View>
         </ScrollView>
      )
   }
}
export default RecipesExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 5,
      height: 100,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})
