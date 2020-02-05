import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';


import Main from './Main'
import PokeScreen from './PokeScreen'


const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Poke-Api'
            },
    },
    PokeScreen: {
        screen: PokeScreen,
        navigationOptions: {
            title: 'Pokémon'
        }
    }
    },{
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerStyle: {
            backgroundColor: 'orange'
            }
        }
    })
)





export default Routes;