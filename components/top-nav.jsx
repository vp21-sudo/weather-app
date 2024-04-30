import { SafeAreaView, Text, View } from 'react-native'

const TopNav = () => {
  return (
    <SafeAreaView>
        <View className=" flex px-4 justify-start items-center w-full h-16 mt-20">
            <Text className="text-start text-teal-700 font-bold text-4xl w-full">Weather App</Text>
        </View>
    </SafeAreaView>
  )
}

export default TopNav