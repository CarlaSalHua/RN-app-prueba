import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '400',
    color: '#4F4F4F',
    marginLeft: 10,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 18,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
  },
  column: {
    marginBottom: 25,
    alignItems: 'center',
  },
  button_circle: {
    flex: 1,
    maxWidth: 62,
    width: 62,
    maxHeight: 62,
    height: 62,
    justifyContent: 'center',
    marginBottom: 5,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 1.5,
  },
  img_button: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  label: {
    color: '#4F4F4F',
    fontSize: 13,
    fontWeight: '100',
  },
});

export default styles;
