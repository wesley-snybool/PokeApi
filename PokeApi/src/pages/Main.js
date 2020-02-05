import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Image, FlatList } from 'react-native';
import PokeScreen from './PokeScreen'
import axios from 'axios'


function Main({ navigation }) {

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const nomePokemon = 'bulbasaur'
      // chamar os nomes dos pokemons
      
 

     


      const pokemonIndex = 20;
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;
      const poke_name = 'bulbasau'
      const pokemon_id_image = `https://pokeapi.co/api/v2/pokemon-form/${poke_name}`   

      const pokemonRes = await axios.get(pokemonUrl);
      const getAllPokes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/`);
      const poke_id_form = await axios.get('https://pokeapi.co/api/v2/pokemon-form/bulbasaur')

      const get_pokes = getAllPokes.data



      const data_name = poke_id_form.data.name
      const data_id = poke_id_form.data.id
      const data_front_img = poke_id_form.data.sprites.front_default

      const array_data_pokes = [{
        id: data_id,
        name: data_name,
        img: data_front_img
      }] 
      console.log(array_data_pokes)
      console.log(get_pokes)

      
   
      setFeed(array_data_pokes, ...array_data_pokes)


    }

    loadFeed();

  }, [])




  return (
    <>

      <View style={styles.container}>
        <Image style={styles.img}
          source={require('../../assets/charizard.png')}
        ></Image>
        <View style={styles.flat_list}>
          <FlatList
            data={feed}
            keyExtractor={item => item.name}
            renderItem={({ item }) =>
                     
              
              <View style={styles.flat_list}>                
                <TouchableOpacity  onPress={() => {
                   navigation.navigate('Profile', { poke_name: item.name });
                }}>
                  <Text style={styles.p_name}>{item.name}</Text>
                  <Image style={styles.pokeImg} source={{ uri: item.img }} />
                </TouchableOpacity>
              </View>
            }

          />

        </View>

      </View>








    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'

  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 230,
    marginTop: 30

  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',

  },
  inputText: {
    height: 50,
    width: 350,
    borderColor: 'orange',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 30,


  },
  img: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 100

  },
  flat_list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  pokeImg: {
    backgroundColor: '#E8BA79',
    width: 300,
    height: 300,
    alignItems: 'baseline',
    borderRadius: 20
  },
  p_name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  }
});



export default Main;