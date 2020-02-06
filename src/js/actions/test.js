export const MANIFEST_ERROR = "MANIFEST_ERROR";
export const MANIFEST_FETCH = "MANIFEST_FETCH";
export const MANIFEST_RECEIVE = "MANIFEST_RECEIVE";
export const MANIFEST_REQUEST = "MANIFEST_REQUEST";

export const fetchManifest = testArg => {
  return { type: MANIFEST_FETCH, arg: testArg };
};

export const requestManifest = () => {
  return { type: MANIFEST_REQUEST };
};

export const receiveManifest = (
  manifest,
  manifestKeys,
  manifestEntries,
  manifestValues,
  keyFound,
  keyIndexFound,
  clonedManifest
) => {
  return {
    type: MANIFEST_RECEIVE,
    manifest,
    manifestKeys,
    manifestEntries,
    manifestValues,
    keyFound,
    keyIndexFound,
    clonedManifest
  };
};

export const receiveManifestError = error => {
  return { type: MANIFEST_ERROR, error };
};
