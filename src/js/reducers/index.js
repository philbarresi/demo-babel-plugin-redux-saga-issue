import { combineReducers } from "redux";
import test from "testApp.reducers/test";

// Reducers are responsible for a slice of the application state. When an action happens, if
// A reducer handles that action, it can operate on its slice of the state and return a new copy
// of its slice
//
// A reducer is a pure function which takes in as an argument, State and Action. The action
// tells the reducer how to manipulate state, or, which portion of state to return
//
// combineReducers is how Redux manages splitting application state logically.
// Combine reducers will return a single redux state from the result of combining multiple redux reducers.

const WebpackTest = combineReducers({
  test
});

export default WebpackTest;
