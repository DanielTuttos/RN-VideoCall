import {StyleSheet, Text, View} from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {APP_ID, APP_SIGN} from '../../config';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';

interface Props extends NativeStackNavigationProp<RootStackParams, 'VideoScreen'>{}

export function VideoCallScreen({navigation, route}: Props) {
  const {username} = route.params;
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={APP_ID}
        appSign={APP_SIGN}
        userID={`user-${Math.random().toString(36).substring(7)}`} // userID can be something like a phone number or the user id on your own user system.
        userName={username}
        callID={`call-Prueba`} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            navigation.navigate('HomeScreen');
          },
          onHangUp: () => {
            navigation.navigate('HomeScreen');
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
