import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {style} from './style';
import ImgFifa from '../../assets/images/fifa21.png';
import ImgCyberPunk from '../../assets/images/cyberpunk.jpg';
import ImgTLou1 from '../../assets/images/tlou1.jpg';
import ImgTLou2 from '../../assets/images/tlou2.jpg';
import ImgRedCircle from '../../assets/icons/red-circle.png';

export const Category = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={style.container}>
        <View>
          <Image style={style.img} source={ImgFifa} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Fifa 21 Collection Edition
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>172k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgCyberPunk} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            CyberPunk
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>12k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgTLou1} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The Last Of us 1
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>72k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgTLou2} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The Last Of us 2 Ultra
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>172k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgTLou2} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The Last Of us 2 Ultra
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>172k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgTLou2} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The Last Of us 2 Ultra
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>172k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgTLou2} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The Last Of us 2 Ultra
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>172k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgTLou2} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The Last Of us 2 Ultra
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>172k</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
