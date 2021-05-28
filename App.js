import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdatabase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displaychunks: [],
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'orange'}
            centerComponent={{
              text: 'Monkey Chunky',
              style: { color: 'black', fontSize: 20 },
            }}></Header>

            <Image style = {styles.image1}>
            source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}} 
          </Image>

          <TextInput
            style={styles.textbox}
            onChangeText={(text) => {
              this.setState({
                text: text,
              });
            }}
            value={this.state.text}></TextInput>

          <TouchableOpacity
            style={styles.searchbutton}
            onPress={() => {
              this.setState({
                displaychunks: db[this.state.text].chunks,
              });
            }}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
          <View>
            {this.state.displaychunks.map((data) => {
              return (
                <TouchableOpacity>
                  <Text>{data}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  searchbutton: {
    width: '30%',
    height: 10,
    alignSelf: 'center',
    padding: 10,
    margin: 15,
    borderRadius: 3,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    border: 'solid',
  },
  text: {
    margineTop: 20,
  },
  textbox: {
    backgroundColor: 'yellow',
  },
  image1:{
    marginLeft:100,
    width:100,
    height:100,
   
  }
});
