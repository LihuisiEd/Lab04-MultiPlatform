
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import ContactForm from './ContactForm';
import PizzaTable from './PizzaTable';
import PizzaDetails from './PizzaDetails';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Inicio' component={Home}/>
        <Drawer.Screen name='Detalles' component={PizzaDetails}/>
        <Drawer.Screen name='Precios' component={PizzaTable}/>
        <Drawer.Screen name='Contactanos' component={ContactForm}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

