export const sumNumber = (payload) => {
  return {
    type: "AUMENTAR_NUM",
    payload,
  };
};

export const subNumber = (payload) => {
  return {
    type: "DIMINUIR_NUM",
    payload,
  };
};
