import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Dimensions.get('screen').height - 60,
  },
  loading: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
  },
  dataContainer: {
    paddingHorizontal: 20,
  },
  data: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  tempData: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  error: {
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default styles;
