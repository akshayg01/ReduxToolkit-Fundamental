const store = require("./app/store");
const cakeSlice = require("./features/cake/cakeSlice");
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(cakeSlice.actions.ordered());
store.dispatch(cakeSlice.actions.ordered());
store.dispatch(fetchUsers());

// store.dispatch(cakeSlice.actions.ordered());
// store.dispatch(cakeSlice.actions.restock(100));
// store.dispatch(cakeSlice.actions.restock(100));
store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));
//console.log("Updated State", store.getState());
