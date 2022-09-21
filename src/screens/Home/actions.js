const key = "HOME"

export const type = {
  RESET: `${key}_RESET`,
  CHANGE_LOADING: `${key}_CHANGE_LOADING`,
};

export const reset = (value) => ({
  type: type.RESET,
  value,
});

export const change_loading = (value) => ({
  type: type.CHANGE_LOADING,
  value,
});

export default type;