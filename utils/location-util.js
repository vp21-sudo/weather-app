// get user location
import * as Location from 'expo-location';
const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
}

export {getUserLocation}