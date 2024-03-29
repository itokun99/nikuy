/**
 * @name resolveBackendValidationError
 * @description untuk handling error akibat validasi di backend
 * @param {*} errorData
 */
export const resolveBackendValidationError = errorData => {
  if (errorData && errorData.errors) {
    const errorKeys = Object.keys(errorData.errors);
    const firstErrorKey = errorKeys[0];

    if (firstErrorKey) {
      const firstErrorList = errorData.errors[firstErrorKey];
      const firstErrorMessage = firstErrorList[0];
      if (firstErrorMessage) {
        return {
          ...errorData,
          message: firstErrorMessage
        };
      }
    }
  }
  return errorData;
};

/**
 * @name isCloseToBottom()
 * @description for handle calculate screen height
 * @param {*} event
 */
export const isCloseToBottom = event => event;

/**
 * @name createInfiniteScroll()
 * @description for  handle scroll in first content scroll
 * @param {*} param0
 */
export const createInfiniteScroll = (event, meta, loading, callback) => {
  if (event && meta && callback) {
    const closeBottom = isCloseToBottom(event);
    const currentPage = meta && meta.current_page;
    const lastPage = meta && meta.last_page;
    const noLoadMore = currentPage >= lastPage;

    if (closeBottom && !noLoadMore && !loading) {
      callback({ event, meta, loading });
    }
  }
};

/**
 * @name createInfiniteScrollObject
 * @descriptions untuk membuat object infinite scroll
 * @param {*} store redux store
 * @param {*} selector redux selector
 * @param {*} response api response
 */
export const createInfiniteScrollObject = (store, selector, response) => {
  if (!store || !selector || !response) {
    throw new Error(
      'Require params redux store, selector, and repsonse to create this object'
    );
  }
  const state = store.getState();
  const otherData = selector(state);
  const prevData = otherData.data;
  const nextData = response.data;
  const metaData = response.meta;
  const result = [...prevData, ...nextData];

  return {
    state: otherData,
    meta: metaData,
    data: result
  };
};

/**
 * @name createInfiniteScrollObjectRevision
 * @descriptions untuk membuat object infinite scroll versi revisinya hehehe
 * @param {*} prevData api response
 * @param {*} response api response
 */
export const createInfiniteScrollObjectRevision = (prevData, response) => {
  if (!prevData || !response) {
    throw new Error('require previous data & response');
  }
  const nextData = response.data;
  const metaData = response.meta;
  const result = [...prevData, ...nextData];

  return {
    meta: metaData,
    data: result
  };
};

/**
 * @name remapingFilter
 * @description helper untuk filter di halaman search
 * @param {*} filters
 */
export const remapingFilter = filters => {
  let resultFilter = [];

  if (!filters) return resultFilter;

  const searchFilterKeys = Object.keys(filters);
  const searchFillterArray = searchFilterKeys.map(key => ({
    ...filters[key]
  }));

  resultFilter = [...resultFilter, ...searchFillterArray];
  return resultFilter;
};

/**
 * @name stringCutter
 * @description helper untuk memotong string text berdasarkan limitasi
 * @param {*} str string text
 * @param {*} limit limit karakter
 * @param {*} enter karakter pembatas di akhir pemotongan
 */
export const stringCutter = (str, limit = 250, enter = '...') => {
  if (!str || typeof str !== 'string') {
    return str;
  }

  let result = String(str).substr(0, limit);

  if (result.length >= limit) {
    result = `${result}${enter}`;
  }
  return result;
};

export const getCroppedImage = (image, crop) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  const imageData64 = canvas.toDataURL('image/jpeg');

  return imageData64;
};

export const dataURIToFile = dataURI => {
  const splitDataURI = dataURI.split(',');
  const byteString = splitDataURI[0].indexOf('base64') >= 0
    ? atob(splitDataURI[1])
    : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new File(
    [ia],
    `image.${mimeString.substr(
      mimeString.indexOf('/') + 1,
      mimeString.length
    )}`,
    {
      type: mimeString
    }
  );
};

export const getBaseUrl = () => {
  const defaultOrigin = 'https://elites.id';
  const origin = window.location?.origin;
  if (origin) {
    return `${origin}/api`;
  }
  return `${defaultOrigin}/api`;
};

export function isMobile() {
  const a = navigator.userAgent || navigator.vendor || window.opera;
  // eslint-disable-next-line no-useless-escape
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
    return true;
  }
  return false;
}

export function defaultImage(type) {
  switch (type) {
    case 'user':
      return '/assets/images/img-picture.svg';
    default:
      return '/assets/images/img-default.svg';
  }
}

export function isEven(n) {
  return n % 2 === 0;
}

export function isOdd(n) {
  return Math.abs(n % 2) === 1;
}