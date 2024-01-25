import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SigIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome"  
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="SignIn"  
        component={SigIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
