import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e10',
    height: '100%',
    alignItems: 'center',
  },
  backToWelcome: {
    marginTop: 50,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  textBackToWelcome: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    marginTop: 60,
  },
  principalText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // textInput: {
  //   backgroundColor: '#18181a',
  //   width: 370,
  //   borderRadius: 5,
  //   borderColor: '#9376c0',
  //   borderWidth: 2,
  // },
  gapToUsername: {
    marginTop: 18,
  },
  InputWithImage: {
    flexDirection: 'row',
    width: 345,
    alignItems: 'center',
  },
  // textInputOff: {
  //   backgroundColor: '#323234',
  //   width: 300,
  //   height: 50,
  //   borderTopLeftRadius: 5,
  //   borderBottomLeftRadius: 5,
  // },

  // imgInputBack: {
  //   backgroundColor: '#323234',
  //   width: 70,
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderTopRightRadius: 5,
  //   borderBottomEndRadius: 5,
  // },
  imgInput: {
    width: 25,
    height: 25,
    marginLeft: 20,
    tintColor: '#7c7a83',
  },
  textTrouble: {
    color: '#9376c0',
    marginTop: 20,
    fontWeight: '600',
    alignSelf: 'baseline',
  },
  loginButton: {
    backgroundColor: '#323234',
    width: 345,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textLogin: {
    color: '#fff',
  },
  TroubleAndButton: {
    width: 345,
  },
});
