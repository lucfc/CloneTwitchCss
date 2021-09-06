import React, { useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import IconCustomer from '../../assets/icons/customer.png';
import IconCamera from '../../assets/icons/videoCamera.png';
import IconToolBox from '../../assets/icons/toolBox.png';
import IconMessage from '../../assets/icons/message.png';
import IconSearch from '../../assets/icons/search.png';
import IconHeart from '../../assets/icons/heart.png';
import IconDiscover from '../../assets/icons/compass.png';
import IconBrowse from '../../assets/icons/browse.png';
import IconTrophy from '../../assets/icons/trophy.png';

import { style } from './style';
import { Category } from '../../components/categoryCards';
import { Channels } from '../../components/channelCard';
import { LoginModal } from '../../components/Modal/LoginModal/loginModal';

export const Home = () => {
  const modalizeRef = useRef(null);

  const onOpenModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={style.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={style.header} horizontal={true}>
        <View style={style.profileIcon}>
          <TouchableOpacity onPress={() => onOpenModal()}>
            <Image style={style.icons} source={IconCustomer} />
          </TouchableOpacity>
        </View>
        <View style={style.boxes}>
          <Image style={style.icons} source={IconCamera} />
          <Image style={style.icons} source={IconToolBox} />
          <Image style={style.icons} source={IconMessage} />
          <Image style={style.icons} source={IconSearch} />
        </View>
      </View>
      <ScrollView>
        <Text style={style.primaryTexts}>Followed Categories</Text>
        <Category />
        <Text style={style.primaryTexts}>Your Live Channel</Text>
        <Channels />
      </ScrollView>
      <View style={style.navbar}>
        <View style={style.boxNavBar}>
          <Image style={style.icons} source={IconHeart} />
          <Text style={style.textNavMain}>Following</Text>
        </View>
        <View style={style.boxNavBar}>
          <Image style={style.icons} source={IconDiscover} />
          <Text style={style.textNav}>Discover</Text>
        </View>
        <View style={style.boxNavBar}>
          <Image style={style.icons} source={IconBrowse} />
          <Text style={style.textNav}>Browse</Text>
        </View>
        <View style={style.boxNavBar}>
          <Image style={style.icons} source={IconTrophy} />
          <Text style={style.textNav}>Esports</Text>
        </View>
      </View>
      <LoginModal modalizeRef={modalizeRef} />
    </View>
  );
};
