import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Modalize} from 'react-native-modalize';
import {useNavigation} from '@react-navigation/native';

export const LoginModal = ({modalizeRef}) => {
  const handleCloseModal = () => {
    modalizeRef.current.close();
  };

  const navigation = useNavigation();
  return (
    <>
      <Modalize
        ref={modalizeRef}
        closeOnOverlayTap={true}
        modalHeight={250}
        handleStyle={{backgroundColor: '#7159c1'}}
        handlePosition={'inside'}
        modalStyle={{
          backgroundColor: '#0e0e10',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 30,
        }}
      >
        <View style={{alignItems: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#fff',
                margin: 10,
              }}
            >
              Você deseja sair ?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 250,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#323234',
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginTop: 10,
              }}
              onPress={() => {
                navigation.navigate('Welcome');
              }}
            >
              <Text style={{fontSize: 20, color: '#fff'}}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#323234',
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginTop: 10,
              }}
              onPress={() => handleCloseModal()}
            >
              <Text style={{fontSize: 20, color: '#fff'}}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    </>
  );
};
