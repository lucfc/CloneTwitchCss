import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: '100%',
    width: '100%',
    backgroundColor: '#0e0e10',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    height: 40,
    alignItems: 'center',
  },
  icons: {
    width: 23,
    height: 23,
  },
  primaryTexts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
    color: '#fff',
  },
  profileIcon: {
    backgroundColor: '#d2d1e6',
    borderRadius: 50,
    marginLeft: 10,
    padding: 3,
  },
  boxes: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0e0e10',
    width: '100%',
    height: 50,
  },
  boxNavBar: {
    alignItems: 'center',
  },
  textNavMain: {
    fontSize: 12,
    color: '#573b7d',
  },
  textNav: {
    fontSize: 12,
    color: '#fff',
  },
});
