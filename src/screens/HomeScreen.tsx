import {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  return (
    <View>
      <Text>HomeScreen</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={text => setUserName(text)}
      />
      <Button
        title="Join call"
        onPress={() =>
          navigation.navigate('VideoScreen', {
            username: userName,
          })
        }
      />
    </View>
  );
};
