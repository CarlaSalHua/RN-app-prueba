import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn_title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  animated: {
    overflow: 'hidden',
  },
  expanded: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'justify',
    color: '#000000',
    paddingBottom: 20,
  },
});

export default styles;
