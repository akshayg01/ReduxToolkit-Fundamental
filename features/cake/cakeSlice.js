const reduxToolkit = require("@reduxjs/toolkit");
const createSlice = reduxToolkit.createSlice;

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "Cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes = state.numberOfCakes - 1;
    },
    restock: (state, action) => {
      state.numberOfCakes = state.numberOfCakes + action.payload;
    },
  },
});

//module.exports.cakeActions = cakeSlice.actions;

module.exports = cakeSlice;
