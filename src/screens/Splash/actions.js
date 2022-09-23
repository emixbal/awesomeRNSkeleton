

const key = "SPLASH"

export const type = {
  RESET: `${key}_RESET`,
  CHANGE_LOADING: `${key}_CHANGE_LOADING`,
};

export const reset = (value) => ({
  type: type.RESET,
  value,
});

export const changeLoading = (value) => ({
  type: type.CHANGE_LOADING,
  value,
});

export default type;