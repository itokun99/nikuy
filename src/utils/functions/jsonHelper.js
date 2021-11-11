/* eslint-disable quotes */
/**
 * Helper untuk cek data bisa di stringify
 * @param {*} data
 */
export const isCanStringify = data => {
  if (!data) {
    return false;
  }
  return true;
};

/**
 * Helper untuk cek json bisa di parse
 * @param {*} dataString
 */
export const isCanParseJson = dataString => {
  if (!dataString && typeof dataString !== 'string') {
    return false;
  }
  return true;
};

/**
 * Helper untuk custom handle stringify
 * @param {*} data
 */
export const stringify = data => {
  try {
    if (!isCanStringify(data)) {
      throw new Error("Cant't Stringify of data");
    }
    const result = JSON.stringify(data);
    return result;
  } catch (err) {
    throw err;
  }
};

/**
 * Helper untuk custom handle parse json
 * @param {*} data
 */
export const parseJson = json => {
  try {
    // if (!isCanParseJson(json)) {
    //   throw new Error("Cant't Parse json of data json");
    // }
    const data = JSON.parse(json);
    return data;
  } catch (err) {
    throw err;
  }
};