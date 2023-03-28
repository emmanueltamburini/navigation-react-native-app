import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {
    logout,
    authState: {isLogging},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumScreen</Text>
      {isLogging && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
