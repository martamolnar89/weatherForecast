import React, {
  useState,
  useEffect,
  FunctionComponent,
  useCallback,
} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import styles from './styles';
import { Forecast, RootState } from 'types/index';
import { getForecastData } from 'redux/actions/forecast';
import { wait } from 'utils/helpers';

interface HomeScreenProps {
  weatherData: Forecast | null;
  fetchErrorMessage: string | null;
}

function getForecastByCurrentPosition() {
  return new Promise((resolve, reject) =>
    Geolocation.getCurrentPosition(
      async position => {
        await getForecastData(
          position.coords.latitude,
          position.coords.longitude,
        );
        resolve();
      },
      error => {
        reject(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    ),
  );
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  weatherData,
  fetchErrorMessage,
}: HomeScreenProps) => {
  const [loading, setLoading] = useState(true);
  const [locationErrorMessage, setLocationErrorMessage] = useState<
    string | null
  >(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const refreshData = async () => {
      try {
        await getForecastByCurrentPosition();
      } catch (error) {
        setLocationErrorMessage(
          'Permission to access location was denied, weather forecast is unavailable!',
        );
      }
      setLoading(false);
    };
    refreshData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await getForecastByCurrentPosition();
    } catch (error) {
      console.warn(error);
    }
    await wait(2000);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      )}
      {locationErrorMessage && (
        <View style={styles.error}>
          <Text style={styles.title}>{locationErrorMessage}</Text>
        </View>
      )}
      {fetchErrorMessage && (
        <View testID="fetchErrorView" style={styles.error}>
          <Text style={styles.title}>{fetchErrorMessage}</Text>
        </View>
      )}
      {weatherData && weatherData.city && (
        <View testID="header" style={styles.header}>
          <Text style={styles.title}>
            {weatherData.city.name} weather forecast
          </Text>
        </View>
      )}
      {weatherData &&
        weatherData.list &&
        weatherData.list.map(data => (
          <View key={data.dt} style={styles.dataContainer}>
            <Text style={styles.title}>{data.dt_txt}</Text>
            <View style={styles.data}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                }}
              />
              <Text style={styles.title}>{data.main.temp} &#x2103; </Text>
              <Text style={styles.title}>{data.weather[0].main}</Text>
              <View style={styles.tempData}>
                <Text>min: {data.main.temp_min} &#x2103; </Text>
                <Text>max: {data.main.temp_max} &#x2103;</Text>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const mapStateToProps = (state: RootState) => ({
  weatherData: state.forecast.weatherData,
  fetchErrorMessage: state.forecast.errorMessage,
});

export const HomeScreenComponent = HomeScreen;
export default connect(mapStateToProps, {})(HomeScreen);
