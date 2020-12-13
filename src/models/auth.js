import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        return token;
    }
    catch (error) {
        return Promise.reject(error);
    }
};

const setToken = async (token) => {
    try {
        await AsyncStorage.setItem("token", token);
    }
    catch (error) {
        return Promise.reject(error);
    }
};

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem("token");
    }
    catch (error) {
        return Promise.reject(error);
    }
};

export {
    getToken,
    setToken,
    removeToken
};