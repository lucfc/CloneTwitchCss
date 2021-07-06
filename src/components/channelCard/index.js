import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {style} from './style';

import ImgRedCircle from '../../assets/icons/red-circle.png';

import ImgTomb from '../../assets/images/tbr.jpg';
import LogoTbr from '../../assets/images/logoTbr.png';
import ImgMinecraft from '../../assets/images/minecraft.jpg';
import LogoMinecraft from '../../assets/images/logoMinecraft.png';
import ImgZelda from '../../assets/images/zelda.jpg';
import LogoZelda from '../../assets/images/logoZelda.png';
import ImgUmbreon from '../../assets/images/umbreon.png';
import LogoUmbreon from '../../assets/images/logoUmbreon.jpg';

export const Channels = () => {
  return (
    <View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgTomb} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>17k</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoTbr} />
            <Text style={style.textCard}>Tomb Rider</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Descrição do canal: O canal mais assistido do Brasil
          </Text>
          <Text style={style.categoryTextCard}>Categoria do Canal</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgMinecraft} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>1.2k</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoMinecraft} />
            <Text style={style.textCard}>Minecraftzada</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Descrição do canal: O canal mais assistido do Brasil
          </Text>
          <Text style={style.categoryTextCard}>Categoria do Canal</Text>
          <Text style={style.languageTextCard}>English</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgZelda} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>23k</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoZelda} />
            <Text style={style.textCard}>Link não é Zelda</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Descrição do canal: O canal mais assistido do Brasil
          </Text>
          <Text style={style.categoryTextCard}>Categoria do Canal</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgUmbreon} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>300k</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoUmbreon} />
            <Text style={style.textCard}>Umbreon</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Descrição do canal: O canal mais assistido do Brasil
          </Text>
          <Text style={style.categoryTextCard}>Categoria do Canal</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
    </View>
  );
};
