import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContatoScreen } from '../screens/ContatoScreen';
import { Homescreen } from '../screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { Navigator, Screen } = createBottomTabNavigator();

export function PortifolioRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Homescreen} options={{ tabBarIcon: ({ size = 20, color = '#fff' }) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
      <Screen name="Contato" component={ContatoScreen} options={{ tabBarIcon: ({ size = 20, color = '#fff' }) => <MaterialCommunityIcons name="contacts" size={size} color={color} /> }}/>
    </Navigator>
  );
}