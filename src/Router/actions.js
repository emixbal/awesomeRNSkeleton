import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "ROUTER"

export const type = {
  RESET: `${key}_RESET`,
  CHANGE_LOADING: `${key}_CHANGE_LOADING`,
  CHANGE_SPLASH_SHOW: `${key}_CHANGE_SPLASH_SHOW`,
  CHANGE_ACCESS_TOKEN: `${key}_CHANGE_ACCESS_TOKEN`,
};

export const reset = (value) => ({
  type: type.RESET,
  value,
});

export const changeLoading = (value) => ({
  type: type.CHANGE_LOADING,
  value,
});

export const changeSplashShow = (value) => ({
  type: type.CHANGE_SPLASH_SHOW,
  value,
});

export const changeAccessToken = (value) => ({
  type: type.CHANGE_ACCESS_TOKEN,
  value,
});

export const handleCheckAccessToken = () => {
  console.log("handleCheckAccessToken hitted");
  return async (dispatch, getState) => {
    try {
      const accessToken = await AsyncStorage.getItem('@access_token')
      if (typeof accessToken !== 'undefined') {
        if (accessToken != "") {
          dispatch(changeAccessToken(accessToken))
          dispatch(changeSplashShow(false))
          return
        }
      }
    } catch (e) {
      console.log("err getData access token");
      console.log(e);
    }

    return
  }
}

export const handleRemoveAccessToken = () => {
  return async (dispatch, getState) => {
    try {
      await AsyncStorage.removeItem('@access_token')
      dispatch(changeAccessToken(''))
      return
    } catch (e) {
      console.log("err handleRemoveAccessToken");
      console.log(e);
    }
    return
  }
}

export default type;