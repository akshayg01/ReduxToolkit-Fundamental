const reduxToolkit = require("@reduxjs/toolkit");
const configureStore = reduxToolkit.configureStore;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const cakeSlice = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");

/*
const rootReducer = reduxToolkit.combineReducers({
  cake: cakeSlice.reducer,
  icecream: icecreamReducer,
});
*/

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
