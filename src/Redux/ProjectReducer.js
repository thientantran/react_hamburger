const burgerState = {
  burger: { salad: 1, cheese: 3, beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: function () {
    let a =
      this.burger["salad"] * this.menu["salad"] +
      this.burger["cheese"] * this.menu["cheese"] +
      this.burger["beef"] * this.menu["beef"];
    return a;
  },
};

export const BurgerReducer = (state = burgerState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_BREADMID":
      let { propsBurger, amount } = action;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;
      return { ...state };
  }
  return { ...state };
};
