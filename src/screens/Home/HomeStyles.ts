import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'stretch',
    // justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  upperContainer: {
    // flex: 1,
  },
  lowerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});

export default styles;
