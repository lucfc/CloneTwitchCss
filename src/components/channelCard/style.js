import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  img: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
  },
  viewsCount: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgIcon: {
    width: 10,
    height: 10,
    marginLeft: 3,
    resizeMode: 'contain',
  },
  textIcon: {
    color: 'white',
    fontWeight: 'bold',
    left: 8,
    color: '#fff',
  },

  descriptionCard: {
    marginHorizontal: 10,
  },
  titleCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCard: {
    marginRight: 8,
    width: 30,
    height: 30,
  },
  textCard: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  descriptionTextCard: {
    fontWeight: '500',
    width: 250,
    marginTop: 6,
    color: '#fff',
  },
  categoryTextCard: {
    fontSize: 14,
    marginTop: 3,
    color: '#fff',
  },
  languageTextCard: {
    backgroundColor: 'gray',
    width: 90,
    textAlign: 'center',
    borderRadius: 50,
    color: 'white',
    fontSize: 13,
    marginTop: 5,
  },
});
