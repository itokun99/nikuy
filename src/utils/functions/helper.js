/* eslint-disable prefer-rest-params */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import { routePaths } from 'routes';

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
 * @name handleNavigationFromBanner
 * @description untuk handling navigasi dari banner depan
 * @param {*} navigation navigationState
 * @param {*} type type of banner
 * @param {*} params params for navigation
 */
export const handleNavigationFromBanner = (navigation, type, params) => {
  if (!navigation || !type) return null;

  const productDetail = 'product-detail';
  const productList = 'product-lists';

  const serviceDetail = 'service-detail';
  const serviceList = 'service-lists';

  if (type === productDetail || type === serviceDetail) {
    const productType = type === serviceDetail ? 'service' : 'product';
    return navigation.navigate(routePaths.PRODUCTDETAIL, {
      productId: params && params.productId,
      productType
    });
  }

  if (type === productList || type === serviceList) {
    return navigation.navigate(routePaths.SEARCH, {
      detail: params && params.detail,
      banner: params && params.banner
    });
  }
  return null;
};

/**
 * @name getTypeOfProduct
 * @description helper untuk mendapatkan id type produk dari API response berdasarkan nama
 * @param {*} type
 */
export const getTypeOfProduct = type => {
  switch (type) {
    case 'product':
    case 'products':
      return 1;

    case 'service':
    case 'services':
      return 2;
    default:
      return null;
  }
};

/**
 * @name isCloseToBottom()
 * @description for handle calculate screen height
 * @param {*} event
 */
export const isCloseToBottom = event => event;

export const getPriceFromItem = data => {
  let price = null;
  const priceOffered = (data && data.price && data.price.offered) || null;
  const priceListed = (data && data.price && data.price.listed) || null;

  price = priceListed || priceOffered;
  return price;
};

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

  let result = str.substr(0, limit);

  if (result.length >= limit) {
    result = `${result}${enter}`;
  }
  return result;
};

/**
 * @name getIdFromUrlPath
 * @description helper untuk mendapatkan id dari url path
 * @param {*} url full url
 * @param {*} index index setelah method split
 * @param {*} separator karakter pemisah pada metode split
 */
export const getIdFromUrlPath = (url, index, separator = '/') => {
  if (!url || typeof url !== 'string') {
    return null;
  }

  let result = null;
  const urlArr = url.split(separator);

  if (typeof index !== 'undefined' && index !== null) {
    result = urlArr[index];
  } else {
    const lastItem = urlArr.pop();
    result = lastItem;
  }

  return result;
};

/**
 * @name getTypeBannerFromRedirectUrl
 * @description untuk handle sementara redirect type banner dari api
 * @param {*} url full url
 * @param {*} original text string berisi tipe aslinya
 */
export const getTypeBannerFromRedirectUrl = (url, original) => {
  if (
    !url
    || typeof url !== 'string'
    || !original
    || typeof original !== 'string'
  ) {
    return null;
  }

  const isProductDetail = url.includes('product-detail');
  const isServiceDetail = url.includes('service-detail');
  const isProductList = url.includes('product-lists');
  const isServiceList = url.includes('service-lists');

  if (isProductDetail && !original.includes('product-detail')) {
    return 'product-detail';
  }

  if (isServiceDetail && !original.includes('service-detail')) {
    return 'service-detail';
  }

  if (isProductList && !original.includes('product-lists')) {
    return 'product-lists';
  }

  if (isServiceList && !original.includes('service-lists')) {
    return 'service-lists';
  }

  return original;
};

/**
 * @name createPayloadFilter
 * @description untuk membuat payload filter di halaman yang ada filternya
 * @param {*} params
 */
export const createPayloadFilter = params => {
  const type = params && params.type;
  const promos = (params && params.promos) || [];
  const locations = (params && params.locations) || [];
  const categories = (params && params.categories) || [];
  const sort = (params && params.sort) || null;
  const payload = (params && params.payload) || {};

  // create payload
  const requestPayload = {
    ...payload,
    params: {
      ...(type && { type }),
      perPage: 8,
      ...payload.params
    }
  };

  // mapping categories
  if (categories && categories.length > 0) {
    categories.map((val, index) => {
      if (val && val.id) {
        requestPayload.params[`categories[${index}]`] = val.id;
      }
    });
  }

  // mapping locations
  if (locations && locations.length > 0) {
    locations.map((val, index) => {
      if (val && val.id) {
        requestPayload.params[`locations[${index}]`] = val.id;
      }
    });
  }

  // mapping promos
  if (promos && promos.length > 0) {
    promos.map((val, index) => {
      if (val && val.id) {
        requestPayload.params[`promos[${index}]`] = val.id;
      }
    });
  }

  // mapping sorting
  if (sort && sort.name) {
    requestPayload.params.sort = sort.name;
  }

  return requestPayload;
};

/**
 * @name mappingCartOrder
 * @description helper untuk mapping data cart
 * @param {*} merchant
 * @param {*} items
 * @param {*} carts
 */
export const mappingCartOrder = (merchant, items = [], carts = []) => {
  if (!items || !carts || !merchant) {
    return [];
  }

  let result = [];

  result = items.map(item => {
    carts.forEach(cart => {
      const itemId = (cart && cart.itemId) || null;
      const merchantId = (cart && cart.merchantId) || null;
      const isSelected = (cart && cart.isSelected) || false;
      const quantity = (cart && cart.quantity) || null;

      if (
        itemId
        && merchantId
        && item.id === itemId
        && merchant.id === merchantId
      ) {
        item.orderCart = {
          ...cart,
          isSelected,
          quantity
        };
      }
    });

    return item;
  });

  return result;
};

/**
 * @name mappingCartOrder
 * @description helper untuk mapping data cart
 * @param {*} merchant
 * @param {*} items
 * @param {*} carts
 */
export const mappingCartOrderService = (merchant, items = [], carts = []) => {
  if (!items || !carts || !merchant) {
    return [];
  }

  let result = [];

  result = items.map(item => {
    carts.forEach(cart => {
      const itemId = (cart && cart.itemId) || null;
      const merchantId = (cart && cart.merchantId) || null;
      const isSelected = (cart && cart.isSelected) || false;
      const date = (cart && cart.date) || null;

      if (
        itemId
        && merchantId
        && item.id === itemId
        && merchant.id === merchantId
      ) {
        item.orderCart = {
          ...cart,
          isSelected,
          date
        };
      }
    });

    return item;
  });

  return result;
};

/**
 * @name mappingToCartItem
 * @description mapping untuk data order cart setelah masukan ke keranjang
 * @param {*} store
 * @param {*} selector
 * @param {*} carts
 */
export const mappingToCartItem = (store, selector, carts) => {
  if (!store || !selector || !carts) {
    throw new Error('Need store | selector | carts params');
  }

  const state = store.getState();
  const orderCart = selector(state);
  const newCart = [];

  // mapping
  carts.forEach(cart => {
    if (cart && cart.merchant && cart.products) {
      const { merchant } = cart;
      const { products } = cart;

      products.forEach(product => {
        let cartObj = null;
        const existData = orderCart.filter(
          item => merchant
            && item
            && product
            && merchant.id === item.merchantId
            && product.id === item.itemId
        )[0];

        if (existData) {
          cartObj = {
            ...existData
          };
        } else {
          // map min order
          let quantity = 1;
          const productMinOrder = product?.minOrder;

          if (
            typeof productMinOrder !== 'undefined'
            && productMinOrder !== null
          ) {
            quantity = productMinOrder;
          }

          cartObj = {
            merchantId: merchant.id,
            itemId: product.id,
            isSelected: false,
            quantity
          };
        }

        if (cartObj) {
          newCart.push(cartObj);
        }
      });
    }
  });

  const mergeArr = [...newCart];

  const result = mergeArr.filter(item => {
    const existData = carts.filter(cart => {
      if (cart && cart.merchant && cart.products) {
        const { merchant } = cart;
        const { products } = cart;

        const existItem = products.filter(
          product => product
            && product.id === item.itemId
            && merchant.id === item.merchantId
        )[0];

        return !!existItem;
      }
    })[0];

    return !!existData;
  });

  return result;
};

/**
 * @name mappingToCartItemService
 * @param {*} store
 * @param {*} selector
 * @param {*} carts
 */
export const mappingToCartItemService = (store, selector, carts) => {
  if (!store || !selector || !carts) {
    throw new Error('Need store | selector | carts params');
  }

  const state = store.getState();
  const orderCart = selector(state);
  const newCart = [];

  // mapping
  carts.forEach(cart => {
    if (cart && cart.merchant && cart.products) {
      const { merchant } = cart;
      const { products } = cart;

      products.forEach(product => {
        let cartObj = null;
        const existData = orderCart.filter(
          item => merchant
            && item
            && product
            && merchant.id === item.merchantId
            && product.id === item.itemId
        )[0];

        if (existData) {
          cartObj = {
            ...existData
          };
        } else {
          // set initial date
          const date = null;

          cartObj = {
            merchantId: merchant.id,
            itemId: product.id,
            isSelected: true,
            date
          };
        }

        if (cartObj) {
          newCart.push(cartObj);
        }
      });
    }
  });

  const mergeArr = [...newCart];

  const result = mergeArr.filter(item => {
    const existData = carts.filter(cart => {
      if (cart && cart.merchant && cart.products) {
        const { merchant } = cart;
        const { products } = cart;

        const existItem = products.filter(
          product => product
            && product.id === item.itemId
            && merchant.id === item.merchantId
        )[0];

        return !!existItem;
      }
    })[0];

    return !!existData;
  });

  return result;
};

/**
 * @name getPriceBywholesalePrices
 * @description helper untuk mendapatkan harga grosir dari detail produk
 * @param {*} defaultPrice
 * @param {*} wholesalePrices
 * @param {*} quantity
 */
export const getPriceBywholesalePrices = (
  defaultPrice,
  wholesalePrices,
  quantity
) => {
  if (!wholesalePrices || wholesalePrices.length === 0 || !quantity) {
    return defaultPrice;
  }

  let newPrice = defaultPrice;

  wholesalePrices.forEach(data => {
    if (data && quantity >= data.min) {
      newPrice = data.price;
    }
  });

  return newPrice;
};

/**
 * @name getTotalPriceFromCart
 * @description helper untuk mendapatkan total harga
 *  dari keranjang sesuai kuantitas dan harga grosirnya
 * @param {*} carts
 * @param {*} orderCart
 */
export const getTotalPriceFromCart = (
  carts,
  orderCart,
  productType = 'product'
) => {
  if (!carts || !orderCart) {
    return null;
  }
  const orderCartData = [...orderCart];
  const cartData = [...carts];

  // mapping data untuk mendapatkan harga item keranjang mau pun grosirannya
  const filterOrderCart = orderCartData.map(data => {
    let storeData = { ...data };
    cartData.forEach(cartItem => {
      if (cartItem && cartItem.products && cartItem.merchant) {
        const { products } = cartItem;
        const { merchant } = cartItem;
        products.forEach(product => {
          const productPrice = (product && product.price && product.price.offered) || null;
          const productWholesalePrices = (product && product.wholesalePrices) || [];
          if (
            storeData
            && storeData.merchantId
            && storeData.itemId
            && storeData.merchantId === merchant.id
            && storeData.itemId === product.id
          ) {
            if (productType === 'product') {
              const priceFiltered = getPriceBywholesalePrices(
                productPrice,
                productWholesalePrices,
                storeData.quantity
              );
              storeData = {
                ...storeData,
                price: priceFiltered
              };
            }
            if (productType === 'service') {
              storeData = {
                ...storeData,
                price: productPrice
              };
            }
          }
        });
      }
    });
    return storeData;
  });

  const filterSelectedOrderCart = filterOrderCart.filter(
    data => data && data.isSelected
  );

  // set 0 untuk mencegah error
  let totalPrice = 0;

  if (productType === 'product') {
    // menjumlahkan total harga berdasarkan data filter dari keranjang
    if (filterSelectedOrderCart && filterSelectedOrderCart.length > 0) {
      filterSelectedOrderCart.forEach(data => {
        if (data && data.price && data.quantity) {
          totalPrice += data.price * data.quantity;
        }
      });
    }
  }

  if (productType === 'service') {
    // menjumlahkan total harga berdasarkan data filter dari keranjang
    if (filterSelectedOrderCart && filterSelectedOrderCart.length > 0) {
      filterSelectedOrderCart.forEach(data => {
        if (data && data.price) {
          totalPrice += data.price;
        }
      });

      const zeroDate = filterSelectedOrderCart.filter(data => !data?.date)[0];
      if (zeroDate) {
        totalPrice = null;
      }
    }
  }

  // jika keranjang kosong maka total harga tidak dimunculkan
  if (!filterSelectedOrderCart || filterSelectedOrderCart.length === 0) {
    totalPrice = null;
  }

  return totalPrice;
};

/**
 * @name createOrderPayloadFromOrderCart
 * @description helper untuk membuat payload dari order cart
 * @param {*} orderCart
 */
export const createOrderCheckoutPayloadFromOrderCart = (
  orderCart,
  productType
) => {
  if (!orderCart || !orderCart.length) {
    throw new Error('order cart is empty!');
  }
  const orderCartArr = [...orderCart];
  const filterCartItems = orderCartArr.filter(
    item => item && item.isSelected
  );
  const itemList = filterCartItems.map(item => {
    const itemId = item && item.itemId;
    const quantity = item && item.quantity;
    const date = item && item.date;
    const description = (item && item.description) || '';

    if (productType === 'service') {
      return {
        item_id: itemId,
        date
      };
    }
    return {
      item_id: itemId,
      quantity,
      description
    };
  });
  return itemList;
};
export const createCheckoutDataFromCart = (carts, orderCarts) => {
  if (!carts || !carts.length || !orderCarts || !orderCarts.length) {
    return carts;
  }
  const cartData = [...carts];
  const orderCartData = [...orderCarts];

  // maaping order cart to cart
  const mergeCartData = cartData.map(cart => {
    const { merchant } = cart;
    const { products } = cart;

    const mappingProduct = products.map(product => {
      orderCartData.forEach(orderCart => {
        if (
          orderCart
          && orderCart.itemId === product.id
          && orderCart.merchantId === merchant.id
        ) {
          product.orderCart = {
            ...orderCart
          };
        }
      });
      return {
        ...product
      };
    });

    const selectedProduct = mappingProduct.filter(
      product => product && product.orderCart && product.orderCart.isSelected
    );

    return {
      merchant,
      shippingCourier: null,
      notes: '',
      products: selectedProduct
    };
  });

  const filteredCarts = mergeCartData.filter(
    cart => cart && cart.products && cart.products.length > 0
  );

  const result = [...filteredCarts];

  return result;
};

export const createLongAddress = (addressData, userData) => {
  const roadName = (addressData && addressData.detail && `${addressData.detail}`) || '';

  const subDistrictName = (addressData?.subDistrict?.name && `, ${addressData.subDistrict.name}`)
    || '';

  const districtName = (addressData?.district?.name && `, ${addressData.district.name}`) || '';
  const cityName = (addressData
      && addressData.city
      && addressData.city.name
      && `, ${addressData.city.name}`)
    || '';
  const provinceName = (addressData
      && addressData.province
      && addressData.province.name
      && `, ${addressData.province.name}`)
    || '';
  const postalCode = (addressData && addressData.postalCode && `, ${addressData.postalCode}`)
    || '';
  const recipientName = (userData && userData.name && `${userData.name} `) || '';
  const phoneNumber = (userData && userData.phone && `(${userData.phone}), `) || '';

  const longAddress = `${recipientName}${phoneNumber}${roadName}${subDistrictName}${districtName}${cityName}${provinceName}${postalCode}`;

  return longAddress;
};

/**
 * @name createDraftCheckout
 * @description create mutalble state for checkout permutaion
 * @param {*} orderCheckout
 * @param {*} draftCheckout
 */
export const createDraftCheckout = (orderCheckout, draftCheckout = []) => {
  if (!orderCheckout) {
    return draftCheckout;
  }

  const orderId = orderCheckout?.orderId;
  const checkoutItems = orderCheckout?.items || [];
  const draftBucket = [];

  checkoutItems.forEach(item => {
    const merchantId = item?.merchant?.id;

    const existDraft = draftCheckout.filter(
      data => data?.merchantId === merchantId && data?.orderId === orderId
    )[0];

    if (existDraft) {
      draftBucket.push({ ...existDraft });
    } else {
      draftBucket.push({
        orderId,
        merchantId,
        description: ''
      });
    }
  });

  return draftBucket;
};

export const mappingOrderCheckoutWithDraft = (
  orderCheckout,
  draftCheckout = []
) => {
  if (!orderCheckout) return orderCheckout;

  const orderId = orderCheckout?.orderId;
  const checkoutItems = orderCheckout?.items || [];

  const newItems = checkoutItems.map(item => {
    const merchantId = item?.merchant?.id;

    const existDraftCheckout = draftCheckout.filter(
      data => data?.orderId === orderId && data?.merchantId === merchantId
    )[0];

    if (existDraftCheckout) {
      return {
        ...item,
        draftCheckout: {
          ...existDraftCheckout
        }
      };
    }

    return {
      ...item
    };
  });

  return {
    ...orderCheckout,
    items: newItems
  };
};

/**
 * @name debounce
 * @description debounce helper
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * @name createOrderNotesPayload
 * @description untuk membuat payload update notes order checkout
 * @param {*} productType
 * @param {*} draftCheckout
 */
export const createOrderNotesPayload = (productType, draftCheckout = []) => {
  const checkouts = draftCheckout.map(item => ({
    merchant_id: item?.merchantId,
    description: item?.description
  }));

  return {
    type: productType,
    checkouts
  };
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

/**
 * @name getColorFromOrderStatus
 * @description membacca warna status order
 * @param {*} transactionStatus
 */
export const getColorFromOrderStatus = transactionStatus => {
  switch (transactionStatus) {
    case 'CHECKOUT':
    case 'DIPROSES':
    case 'DIKIRIM':
    case 'MENUNGGU_PEMBAYARAN':
    case 'MENUGGU_PEMBAYARAN':
      return 'secondary';
    case 'GAGAL':
    case 'DITOLAK':
      return 'danger';
    case 'DITERIMA':
    case 'DIBAYAR':
    case 'SELESAI':
      return 'green';
    default:
      return 'secondary';
  }
};

/**
 * @name getLabelFromOrderStatus
 * @description membaca label status order
 * @param {*} transactionStatus
 */
export const getLabelFromOrderStatus = transactionStatus => {
  switch (transactionStatus) {
    case 'CHECKOUT':
      return 'Checkout';
    case 'MENUNGGU_PEMBAYARAN':
    case 'MENUGGU_PEMBAYARAN':
      return 'Menunggu Pembayaran';
    case 'DIBAYAR':
      return 'Dibayar';
    case 'DIPROSES':
      return 'Diproses';
    case 'DIKIRIM':
      return 'Dikirim';
    case 'DITERIMA':
      return 'Diterima';
    case 'SELESAI':
      return 'Selesai';
    case 'GAGAL':
      return 'Gagal';
    case 'DITOLAK':
      return 'Ditolak';
    default:
      return transactionStatus;
  }
};

/**
 * @name convertCourierObjectToArray
 * @description untuk konversi respon data courier ke array select option
 * @param {*} list
 * @returns
 */
export const convertCourierObjectToArray = (list = []) => {
  const result = [];

  Object.keys(list).forEach(key => {
    if (list[key] && list[key].length !== 0) {
      list[key].forEach(item => {
        const name = item?.name === 'BY_MERCHANT' ? 'Oleh Toko' : item?.name;
        const longName = `${name} (Rp. ${item?.price || item?.finalRate})`;
        const subtitle = key === 'merchant'
          ? 'Pengiriman oleh toko'
          : `Sampai ${item?.min_day} - ${item?.max_day} Hari`;
        result.push({
          key,
          label: longName,
          subtitle,
          ...item
        });
      });
    }
  });

  return result;
};

/**
 * @name createOrderCouriers
 * @description untuk membuat payload update notes order checkout
 * @param {*} productType
 * @param {*} draftCheckout
 */
export const createOrderCouriersPayload = (productType, draftCheckout = []) => {
  const filterCouriers = draftCheckout.filter(item => item?.courier);

  const couriers = filterCouriers.map(item => {
    const courierName = item?.courier?.name;
    const isMerchant = courierName === 'BY_MERCHANT';
    const type = !isMerchant ? 'BY_SHIPPER' : 'BY_MERCHANT';
    const rate = (!isMerchant && item?.courier?.rate_id) || null;
    const finalRate = (!isMerchant && item?.courier?.finalRate) || null;

    return {
      merchant: item?.merchantId,
      type,
      rate,
      finalRate
    };
  });

  return {
    type: productType,
    couriers
  };
};