import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
const urlImage = 'https://cdn.traction.one/pokedex/pokemon/';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getListPokemon();
  }

  getListPokemon = async () => {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      console.log('RES:', res);
      if (res) {
        this.setState({
          data: res.data.results
        })
      }
    } catch (error) {
      console.log('error:', error);
    }
  }

  onDeleteImg =()=>{
    console.log("dp")
  };

    footer = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>This is the footer</Text>
      </View>
    )
  };

  addition =() => {(<Text>enter name</Text>)}
        // <a href='addt.html'>add new</a>

  renderItem = ({ item, index }) => {
    let url = item.url;
    const idPokemon = url.split('https://pokeapi.co/api/v2/pokemon/');
    const link = urlImage + idPokemon[1].substring(0, idPokemon[1].length - 1) + ".png";
    console.log('link', link)

    return (
    <>
    <View style={styles.item}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: link }}
      />
      <Text style={styles.text}>{item.name}</Text>
      <Text style = {styles.text}>{item.types}</Text>
      <Button title='Delete' 
      color='red'
      onPress= {()=>onDeleteImg(item.name)} />
      <Button title='Edit' 
      color='green'
      onPress= {()=>onEditimg(item.name)} />

      {/* <TouchableOpacity 
      style= {{
        borderWidth: 1,
        borderColor:"red",
        alignItems:"center",
        width:70,
        position:"absolute",
        bottom:30,
        right:20,
        height:70,
        backgroundColor:'green',
        
        borderRadius:100,
        elevation:,
        justifyContent:'center',
      }}>
        <Text>Edit</Text>
      </TouchableOpacity> */}

 {/* ListFooterComponent={() => <Text>Footer content</Text>} */}
      
    </View>
    <View style= {styles.footer} >
      
    <Image
        style={styles.stretch}
        source={require('../poket/assets/logo.jpg')}
      />
    
    </View>

    {/* ListFooterComponent={() => <Text>Footer content</Text>} */}
    {/* ListFooterComponent={footer}
        renderItem={({item}) => <Text>{item.title}</Text>} */}
        {/* ListFooterComponent={footer} = ()=> <Text>hii</Text>  */}

               
        
    </>
  )}

  // const footer = () => {
  //   return (
  //     <View style={styles.headerStyle}>
  //       <Text style={styles.titleStyle}>This is the footer</Text>
  //     </View>
  //   );
  // };

  
  render() {
    const { data } = this.state;
    
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          style={styles.container}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => `key-${item.name}`}

        //   ListFooterComponent={footer}
        // renderItem={({item}) => <Text>{item.name}</Text>}

          
        ListFooterComponent={(footer) => <Button title='Add new pokemon' onPress={()=>{this.props.navigation.navigate('addt');}} ></Button>}
         />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding:4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    color: 'blue',
    fontWeight:'bold'
  },
  Button: {
    //display: 'flex',
    display: 'inline',
    //flex: 33%
    
  },
  div:{
    position:"absolute"
   
  },
  footer: {
    backgroundColor:"gold",
    justifyContent:"center",
    position:"absolute",
    bottom:"10px"
   
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },

  headerStyle: {
    flex: 1,
    height: 40,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
  },
})