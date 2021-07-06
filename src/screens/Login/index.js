import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {style} from './style';

import IconLeftArrow from '../../assets/icons/arrow.png';
import IconEye from '../../assets/icons/eye.png';
import IconVisibility from '../../assets/icons/visibility.png';
import {useState} from 'react';

export const Login = ({navigation}) => {
  const [changeSecure, setChangeSecure] = useState(true);
  const secureTypeChange = () => {
    setChangeSecure(!changeSecure);
  };

  const [getText, setGetText] = useState('');
  const colorChange = getText ? '#9376c0' : '#323234';

  const [onFocusChangeUsername, setOnFocusChangeUsername] = useState(false);
  const backgroundUsername = onFocusChangeUsername ? '#18181a' : '#323234';
  const borderHighlightUsername = onFocusChangeUsername ? '#9376c0' : '#323234';
  const [onFocusChangePassword, setOnFocusChangePassword] = useState(false);
  const backgroundPassword = onFocusChangePassword ? '#18181a' : '#323234';
  const borderHighlightPassword = onFocusChangePassword ? '#9376c0' : '#323234';

  const inputStyle = StyleSheet.create({
    textInputOff: {
      backgroundColor: `${backgroundPassword}`,
      width: 275,
      height: 49,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderColor: `${borderHighlightPassword}`,
      borderWidth: 2,
      borderRightWidth: 0,
      color: '#fff',
    },

    imgInputBack: {
      backgroundColor: `${backgroundPassword}`,
      width: 70,
      height: 49,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: `${borderHighlightPassword}`,
      borderWidth: 2,
      borderLeftWidth: 0,
      borderTopRightRadius: 5,
      borderBottomEndRadius: 5,
    },
    textInput: {
      backgroundColor: `${backgroundUsername}`,
      width: 345,
      height: 49,
      borderRadius: 5,
      borderColor: `${borderHighlightUsername}`,
      borderWidth: 2,
      color: '#fff',
    },
    loginButton: {
      backgroundColor: `${colorChange}`,
      width: 345,
      height: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
    },
  });

  return (
    <View style={style.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={style.backToWelcome}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image style={style.img} source={IconLeftArrow} />
        </TouchableOpacity>
        <Text style={style.textBackToWelcome}>Log In</Text>
      </View>
      <View style={style.userName}>
        <Text style={style.principalText}>Username</Text>
        <TextInput
          // style={[style.textInput, {backgroundColor: `${backgroundPassword}`}]}
          style={inputStyle.textInput}
          selectionColor="#5a13c1"
          autoFocus
          onFocus={() => setOnFocusChangeUsername(true)}
          onBlur={() => setOnFocusChangeUsername(false)}
          paddingLeft={12}
        />
      </View>
      <View style={style.gapToUsername}>
        <Text style={style.principalText}>Password</Text>
        <View style={style.InputWithImage}>
          <TextInput
            style={inputStyle.textInputOff}
            selectionColor="#5a13c1"
            secureTextEntry={changeSecure}
            onFocus={() => setOnFocusChangePassword(true)}
            onBlur={() => setOnFocusChangePassword(false)}
            onChangeText={text => setGetText(text)}
            paddingLeft={12}
          />
          <View style={inputStyle.imgInputBack}>
            <TouchableOpacity onPress={() => secureTypeChange()}>
              <Image
                style={style.imgInput}
                source={changeSecure ? IconEye : IconVisibility}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={style.TroubleAndButton}>
        <Text style={style.textTrouble}>Trouble logging in?</Text>
        <TouchableOpacity
          disabled={!getText}
          style={inputStyle.loginButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={style.textLogin}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
