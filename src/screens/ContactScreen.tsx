import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {
    signIn,
    authState: {isLogging},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>
      {!isLogging && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};
