import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
  },
  column: {
    width: '30%',
    marginBottom: 10,
    //backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  button_circle: {
    flex: 1,
    maxWidth: 62,
    width: 62,
    maxHeight: 62,
    height: 62,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 0.8,
  },
  img_button: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default styles;
