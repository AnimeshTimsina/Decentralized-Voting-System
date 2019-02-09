import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity, Image,TouchableHighlight, ListView } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { createStackNavigator, createAppContainer} from "react-navigation";
import voterData from "./Election.json"


//
// class TestScreen extends React.Component {
//   render() {
//     return (
//       <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent: 'center',}}
//     )
//   }
// }

class Start extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
        <View style={styles.homeContainer}>

        <View style={{flex:2}}>
        <Image style={styles.icon} source={require('./assets/images/logo.png')}/>
        </View>
        <View style={{flex:1}}>
        <Text style={styles.titleheading}>Nepal Election 2075
        </Text>
        </View>

        <View style={{flex:2}}>
        <TouchableHighlight style={[styles.buttonContainer,styles.loginButton]} onPress={()=>this.props.navigation.navigate('Scan')}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableHighlight>
        </View>
        </View>
    )
  }
}

class Authenticated extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return(

      <View style={styles.container}>
   <Image style={styles.icon} source={require('./assets/images/congrats.png')}/>
   <Text style={styles.title}>Authentication Successful</Text>
   <Text style={styles.description}>You can start voting from the computer</Text>
   <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this.props.navigation.navigate('Home')}>
     <Text style={styles.buttonText}>Home</Text>
   </TouchableHighlight>
   </View>

    )
  }
}

class NotAuthenticated extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return(

      <View style={styles.container}>
   <Image style={styles.icon} source={require('./assets/images/error.png')}/>
   <Text style={styles.title}>Authentication Failed</Text>
   <Text style={styles.description}>Please provide a valid Voter ID</Text>
   <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this.props.navigation.navigate('Home')}>
     <Text style={styles.buttonText}>Home</Text>
   </TouchableHighlight>
   </View>
    )
  }
}

class BarcodeScannerExample extends React.Component {

  constructor(props){
  super(props);
  this.state ={
    dataSource:[],
  }
}
componentDidMount(){
   //set state value
   this.setState({
     dataSource:voterData.Keys
   });
 }


  static navigationOptions = { header: null };

  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }


  render() {

    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (


      <View style={{flex:1,alignItems: 'center',}}>
        <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
          style={[StyleSheet.absoluteFill,styles.qrcontainer]}
        />
        <Text style={styles.description2}>Scan your QR code</Text>
        <Image
          style={styles.qr}
          source={require('./assets/images/Qr.png')}
        />

      </View>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {

    voter = voterData.Keys;

  for (i=0;i<10;i++){
    if (data==voter[i].keyId) {
      this.props.navigation.navigate('Auth');
      return
    }
    else {
      if ((i==9) && data != voter[i].keyId) {
        this.props.navigation.navigate('NotAuth');
       }
      }
  }



}

}

const AppNavigator = createStackNavigator(

  {
     Home: {screen: NotAuthenticated},
     Scan: {screen: BarcodeScannerExample},
     NotAuth: {screen:NotAuthenticated},
     Auth: {screen : Authenticated},
  },
  {
    headerMode:'screen'
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:100,
  },
  icon:{
    width:200,
    height:200,
  },
  barCodeContainer: {
    paddingTop:100,
     backgroundColor: '#EEEEEE',
     flex: 1,
     flexDirection: 'column',
  },
  qrcontainer :{
    flex:1,
    alignItems: 'center',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:100,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:22,
    color: "#5F6D7A"
  },
  titleheading:{
    fontSize:34,
    textAlign: 'center',
    color: "#5F6D7A"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:16,
    margin:40,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:120,
    borderRadius:30,
  },
  qr: {
    marginTop: '15%',
    marginBottom: '20%',
    color:'white',
  },
description2: {
  fontSize: 40,
marginTop: '10%',
textAlign: 'center',
width: '70%',
color: 'white',
fontFamily: 'sans-serif-condensed',
},
  loginButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
  }
});
