import { Image, Text, View } from "react-native"


const CardWeather = (props) => {
    const region = props.currentWeather.location.region
    const country = props.currentWeather.location.country
    const currentTemp = props.currentWeather.current.temp_c
    const lastUpdated = props.currentWeather.current.last_updated
    const windSpeed = props.currentWeather.current.wind_kph
    const windDirection = props.currentWeather.current.wind_dir
    const humidity = props.currentWeather.current.humidity
    const feelsLike = props.currentWeather.current.feelslike_c
    const currentConditionText = props.currentWeather.current.condition.text
    const currentConditionIcon = props.currentWeather.current.condition.icon
  return (
    <View className=" flex w-full h-fit border-2 border-teal-700 justify-around items-center p-4 rounded-lg">
        <View className=" flex flex-row justify-between items-center w-full">
            <Text className=" text-5xl font-bold text-start w-fit text-slate-700">{currentConditionText}</Text>
            <Image source={{uri: `https:${currentConditionIcon}`}} width={500} height={500} alt="Img" className=" w-10 h-10"/>
        </View>
        <View className=" flex flex-row justify-between items-center w-full">
            <Text className=" text-lg font-bold text-slate-700">Current Temp: {currentTemp}&deg;C</Text>
            <Text className=" text-lg font-bold text-slate-700">Feels Like: {feelsLike}&deg;C</Text>
        </View>
        <View className=" flex flex-wrap flex-row justify-between items-center w-full">
            <Text className=" text-lg font-bold text-slate-700">Wind speed: {windSpeed} km/h</Text>
            <Text className=" text-lg font-bold text-slate-700">Humidity: {humidity}%</Text>
            <Text className=" text-lg font-bold text-slate-700">Wind Direction: {windDirection}</Text>
        </View>
        <View className=" flex flex-wrap flex-row justify-between items-center w-full">
            <Text className=" text-base font-bold text-slate-700">Location: {region}, {country}</Text>
        </View>
        <View className=" border-t-2 border-teal-600 w-full mt-3 pt-2 px-2">
            <Text className=" text-right">Last Updated: {lastUpdated}</Text>
        </View>
    </View>
  )
}

export default CardWeather