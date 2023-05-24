import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#505050',
    position: 'relative',
  },
  btn_icon: {
    position: 'absolute',
    right: 0,
  },
});

export default styles;
