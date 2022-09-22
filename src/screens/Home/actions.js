

const key = "HOME"

export const type = {
  RESET: `${key}_RESET`,
  changeLoading: `${key}_changeLoading`,
};

export const reset = (value) => ({
  type: type.RESET,
  value,
});

export const changeLoading = (value) => ({
  type: type.changeLoading,
  value,
});

export default type;