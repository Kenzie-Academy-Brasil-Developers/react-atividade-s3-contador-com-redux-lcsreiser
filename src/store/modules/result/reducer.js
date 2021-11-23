const reducerCounter = (state = 0, action) => {
  console.log(action);

  switch (action.type) {
    //Aqui voce criara os cases do switch

    case "AUMENTAR_NUM":
      return state + action.payload;

    case "DIMINUIR_NUM":
      return state - action.payload;

    default:
      return state;
  }
};

export default reducerCounter;
