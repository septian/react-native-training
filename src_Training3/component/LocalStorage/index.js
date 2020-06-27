import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value);
      console.log("sukses");
    } catch (e) {
      // saving error
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
            console.log(value);
        }
    } catch(e) {
        console.log("data token not found");
    }
}