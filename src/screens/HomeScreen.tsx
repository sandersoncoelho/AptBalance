import {useNavigation} from '../utils/hooks';
import {Button, Text, View} from 'react-native';

import React from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen123</Text>
      <Button
        title="Go to About12"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};
