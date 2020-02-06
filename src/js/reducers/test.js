import { MANIFEST_REQUEST, MANIFEST_RECEIVE } from "testApp.actions/test";

// intial state, eventually we'll restore this from local storage (per user)
const initialState = {
  manifest: undefined,
  manifestKeys: undefined,
  manifestValues: undefined,
  manifestEntries: undefined,
  keyFound: undefined,
  keyIndexFound: undefined,
  clonedManifest: undefined,
  manifestLoaded: false
};

const testState = (state = initialState, action) => {
  switch (action.type) {
    case MANIFEST_REQUEST: {
      return {
        ...state,
        manifestLoaded: false
      };
    }
    case MANIFEST_RECEIVE: {
      const {
        manifest,
        manifestKeys,
        manifestEntries,
        manifestValues,
        keyFound,
        keyIndexFound,
        clonedManifest
      } = action;

      return {
        ...state,
        manifest,
        manifestKeys,
        manifestEntries,
        manifestValues,
        keyFound,
        keyIndexFound,
        clonedManifest,
        manifestLoaded: true
      };
    }
    default:
      return state;
  }
};

export default testState;
