import { takeEvery, call, race, put } from "redux-saga/effects";
import { MANIFEST_FETCH, receiveManifest } from "testApp.actions/test";
// WATCHERS

const testSagas = [takeEvery(MANIFEST_FETCH, fetchManifest)];

// Good
function* fetchManifest(action) {
  try {
    const manifest = yield call(getManifest);

    const clonedManifest = Object.assign({}, manifest);
    const manifestKeys = Object.keys(manifest);
    const manifestValues = Object.values(manifest);

    const manifestEntries = Object.entries(manifest);
    const keyFound = manifestEntries.find(x => x[0] === "icons");
    const keyIndexFound = manifestEntries.findIndex(x => x[0] === "icons");

    const response = receiveManifest(
      manifest,
      clonedManifest,
      manifestKeys,
      manifestValues,
      manifestEntries,
      keyFound,
      keyIndexFound
    );

    yield put(response);
  } catch (e) {
    console.error(e);
  }

  throw "Testing error plugin";
}

/* 
function* bad() {
  yield race({ posts: yield call(getManifest) });
}

function* bad2() {
  yield race({
    watchers: yield [call(getManifest)]
  });
}
 */

// export all watcher sagas as an array to be composed in the top level
// root saga

export default testSagas;

function getManifest() {
  return Promise.resolve({
    icons: ["$pac", "0xbtc", "2give", "abt", "act", "zrx"]
  });
}
