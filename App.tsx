import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {VideoCallScreen} from './src/screens/VideoCallScreen';

export interface RootStackParams {
  HomeScreen: undefined;
  VideoScreen: {username: string}
}

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VideoScreen" component={VideoCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
