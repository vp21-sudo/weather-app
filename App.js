import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { getUserLocation } from "./utils/location-util";
import { getCurrenWteather } from "./utils/api-calls";
import CardWeather from "./components/weather-card";
import { StatusBar } from "expo-status-bar";
import TopNav from "./components/top-nav";

export default function App() {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userLocation = await getUserLocation();
        setLocation(userLocation);
      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (location) {
          const weatherData = await getCurrenWteather(
            location.latitude,
            location.longitude,
            setLoading
          );
          setCurrentWeather(weatherData);
        }
      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <SafeAreaView>
       <StatusBar
        animated={true}
        backgroundColor="#0f766e"
      />
      <View className=" w-full h-full">
      {
        loading? <View className=" w-full h-full flex justify-center items-center">
          <ActivityIndicator size="large" color={"#0000ff"}/>
        </View>:
        <View>
        <TopNav/>
        <View className=" flex px-4 justify-start items-center w-full h-full">
          {errorMsg && <Text>{errorMsg}</Text>}
          {currentWeather && <CardWeather currentWeather={currentWeather}/>}
        </View>
        </View>
      }
    </View>
    </SafeAreaView>
  );
}
