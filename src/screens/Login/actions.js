import AsyncStorage from '@react-native-async-storage/async-storage';

import { BASE_DATA_URL } from "../../../config";
import { Post } from "../../helpers/ajax";
import * as RootNavigation from '../../RootNavigation';

const key = "LOGIN"

export const type = {
  RESET: `${key}_RESET`,
  CHANGE_LOADING: `${key}_CHANGE_LOADING`,
  CHANGE_USERNAME: `${key}_CHANGE_USERNAME`,
  CHANGE_PASSWORD: `${key}_CHANGE_PASSWORD`,
};

export const reset = (value) => ({
  type: type.RESET,
  value,
});

export const changeLoading = (value) => ({
  type: type.CHANGE_LOADING,
  value,
});

export const changeUsername = (value) => ({
  type: type.CHANGE_USERNAME,
  value,
});

export const changePassword = (value) => ({
  type: type.CHANGE_PASSWORD,
  value,
});

export const handleSignIn = () => {
  return async (dispatch, getState) => {

    const state = getState()
    const { email, password } = state.login

    const cred = {
      email,
      password
    }

    if((email=="")||(password=="")){
      alert("empty credential")
      return
    }

    await dispatch(changeLoading(true))
    const res = await Post(`${BASE_DATA_URL}/auth/login`, cred)
    await dispatch(changeLoading(false))
    
    if (!res) {
      alert("Connection action error")
      return
    }

    if (!res.access_token) {
      alert(res.message)
      return
    }

    if(await storeData(res.access_token)){
      RootNavigation.navigate('Home', {});
      return
    }

    alert("gagal")
    return
  }
}

const storeData = async (access_token) => {
  try {
    await AsyncStorage.setItem('@access_token', access_token)
    console.log("sukses storeData");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}



export default type;