import React, {useContext, useEffect, useRef} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({navigation, route}: Props) => {
  const {params} = route;
  const {changeUsername} = useContext(AuthContext);

  const changeUsernameStatic = useRef(changeUsername);

  useEffect(() => {
    changeUsernameStatic.current(params.name);
  }, [params.name]);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
      <Button
        title="Go page 1"
        onPress={() => navigation.navigate('Page1Screen')}
      />
    </View>
  );
};
