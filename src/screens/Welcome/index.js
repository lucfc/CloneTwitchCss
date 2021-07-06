import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {style} from './style';

export const Welcome = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Text style={style.WecomeText}>Welcome to Twitch</Text>
      <TouchableOpacity
        style={style.buttonLogin}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={style.text}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonSignUp}>
        <Text style={style.text}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={style.skip}>Skip</Text>
    </View>
  );
};
