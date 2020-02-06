import { all } from "redux-saga/effects";
import testSagas from "testApp.sagas/test";

export default function* rootSaga() {
  yield all([...testSagas]);
}
