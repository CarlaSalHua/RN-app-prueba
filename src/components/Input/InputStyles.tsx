import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#505050',
    paddingTop: 10,
    position: 'relative',
  },
  input: {
    paddingLeft: 15,
  },
  btn_icon: {
    position: 'absolute',
    right: 0,
  },
});

export default styles;
