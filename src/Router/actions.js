import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "ROUTER"

export const type = {
  RESET: `${key}_RESET`,
  CHANGE_LOADING: `${key}_CHANGE_LOADING`,
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

export const changeAccessToken = (value) => ({
  type: type.CHANGE_ACCESS_TOKEN,
  value,
});

export const handleCheckAccessToken = () => {
  return async (dispatch, getState) => {
    try {
      const accessToken = await AsyncStorage.getItem('@access_token')
      if (typeof accessToken !== 'undefined') {
        if (accessToken != "") {
          dispatch(changeAccessToken(accessToken))
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