import React from 'react';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  img: {
    // marginHorizontal: 4,
    marginTop: 5,
    marginBottom: 5,
    height: 150,
    width: 120,
  },
  textCategory: {
    fontWeight: 'bold',
    marginHorizontal: 4,
    width: 120,
    color: '#fff',
  },
  viewsCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginHorizontal: 4,
  },
  imgIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  textViewCount: {
    marginLeft: 5,
    color: '#fff',
  },
});
