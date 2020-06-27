import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value) => {
    try {
        let dataFormat = {
            type: 'signin',
            token: value,
          };
      await AsyncStorage.setItem('token', dataFormat);
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