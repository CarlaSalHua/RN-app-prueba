import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub_container: {
    height: 'auto',
    alignItems: 'center',
    width: '80%',
    paddingBottom: 30,
    backgroundColor: '#F4F4F4',
    elevation: 5,
  },
  title_container: {
    width: '100%',
    paddingVertical: 17,
    backgroundColor: '#29367C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  formik: {
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  btn: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
    color: '#1469BE',
    borderBottomWidth: 1,
    borderBottomColor: '#1469BE',
  },
  btn_green: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 25,
  },
});

export default styles;
