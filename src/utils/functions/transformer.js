import moment from 'moment';
import {
  stringCutter,
  getIdFromUrlPath,
  createLongAddress,
  getPriceBywholesalePrices
} from './helper';

/**
 * @name profileTransformer
 * @description transformer untuk konversi data profile
 * @param {*} data
 */
export const profileTransformer = (data = {}) => {
  const dob = data.dob && data.dob * 1000;
  const dobUserFormated = moment(dob, 'x').format('DD MMMM YYYY');
  const dobFormFormated = moment(dob, 'x').format('YYYY-MM-DD');
  const gender = data?.gender;
  let genderName = null;
  if (gender && gender.id === 1) {
    genderName = 'Laki-laki';
  }

  if (gender && gender.id === 2) {
    genderName = 'Perempuan';
  }

  return {
    ...data,
    dob,
    dobUserFormated,
    dobFormFormated,
    gender: {
      ...gender,
      name: genderName
    }
  };
};

/**
 * @name authDataTransformer
 * @description transformer untuk konversi data authentikasi
 * @param {*} data
 */
export const authDataTransformer = (data = {}) => ({
  ...data,
  accessToken: data?.access_token || data?.access,
  tokenType: data?.token_type,
  expiresIn: data?.expires_in || data?.exp
});

/**
 * @name addressTransformer
 * @description transformer untuk konversi data address
 * @param {*} data
 */
export const addressTransformer = (data = {}) => {
  let city = data?.address?.city;

  if (city) {
    city = {
      ...city,
      cityId: city.id
    };
  }

  const longAddress = createLongAddress(data.address, data.recipient);

  return {
    id: data?.id,
    title: data?.title,
    receiverName: data?.recipient?.name,
    phone: data?.recipient?.phone,
    email: data?.recipient?.email,
    addressDetail: data?.address?.detail,
    postalCode: data?.address?.postalCode && `${data.address.postalCode}`,
    province: data?.address?.province,
    district: data?.address?.district,
    subDistrict: data?.address?.subDistrict,
    city,
    longAddress
  };
};

/**
 * @name highlightBannerTransformer
 * @description transformer untuk konversi data banner highlight
 * @param {*} data
 */
export const highlightBannerTransformer = (data = {}) => {
  const id = data?.components?.id;
  const image = data?.components?.image;
  const type = data?.components?.type;
  const dataList = data?.components?.products || [];

  return {
    id, image, type, data: dataList
  };
};

/**
 * @name miniBannerTransformer
 * @description transformer untuk konversi data minibanner
 * @param {*} data
 */
export const miniBannerTransformer = (data = {}) => ({
  id: data?.components?.id,
  type: data?.components?.type,
  total: data?.components?.total || 0,
  data: data?.components?.banners || []
});

/**
 * @name highlightProductItemTransformer
 * @description tranformer untuk konversi data product item list
 * @param {*} data
 */
export const highlightProductItemTransformer = (data = {}) => ({
  id: data?.id,
  name: data?.name,
  image: data?.image,
  price: data?.price?.offered || null,
  discount: data?.price?.listDiscount || null,
  priceListed: data?.price?.listed || null,
  merchant: data?.merchantInfo || null,
  review: data?.review || null
});

/**
 * @name productTransformer
 * @description transformer untuk konversi data item product / service
 * @param {*} data
 */
export const productTransformer = (data = {}) => ({
  id: data?.id,
  name: data?.name,
  image: data?.images || data?.image,
  price: data?.price?.offered || null,
  discount: data?.price?.listDiscount || null,
  priceListed: data?.price?.listed || null,
  rate: data?.review?.result || 0,
  count: data?.review?.count || 0,
  location:
      data?.location
      || data?.merchant?.location
      || data?.merchantInfo?.location,
  productType: data?.productType,
  merchant: data?.merchant || data?.merchantInfo,
  review: data?.review
});

/**
 * @name productDetailTransformer
 * @description transformer untuk konversi data product detail
 * @param {*} data
 */
export const productDetailTransformer = (data = {}) => {
  const type = data?.type;
  const typeName = type === 'service' ? 'Jasa' : 'Produk';
  const description = data?.description;
  const summary = stringCutter(description);
  let lastDiscussion = data?.lastDiscussion || null;
  const topReview = data?.topReview || null;

  if (lastDiscussion && lastDiscussion.length === 0) {
    lastDiscussion = null;
  }

  return {
    id: data?.id,
    name: data?.name,
    price: data?.price || null,
    images: data?.images || [],
    categories: data?.categories,
    merchant: data?.merchant || {},
    review: data?.review || {},
    stock: data?.stock || 0,
    workingHours: data?.workingHours || [],
    options: data?.options || {},
    wholesalePrices: data?.wholesalePrices || [],
    heavy: data?.heavy || null,
    condition: data?.condition || null,
    lastDiscussion,
    description,
    typeName,
    summary,
    type,
    topReview
  };
};

/**
 * @name merchantTransformer
 * @description transformer untuk data merchant
 * @param {*} data
 */
export const merchantTransformer = (data = {}) => ({
  id: data?.merchantInfo?.id,
  name: data?.merchantInfo?.name,
  username: data?.merchantInfo?.username,
  phone: data?.merchantInfo?.phone,
  description: data?.merchantInfo?.description,
  merchantStatus: data?.merchantInfo?.merchantStatus,
  image: data?.merchantInfo?.image,
  bankInfo: data?.merchantInfo?.bankInfo,
  urlMerchant: data?.merchantInfo?.urlMerchant,
  province: data?.merchantInfo?.province,
  city: data?.merchantInfo?.city,
  address: data?.merchantInfo?.address,
  postalCode: data?.merchantInfo?.postalCode,
  workingHour: data?.merchantInfo?.workingHour,
  verified: data?.merchantInfo?.verified,
  joinedAt: data?.merchantInfo?.joinedAt,
  cityName: data?.merchantInfo?.city?.name,
  provinceName: data?.merchantInfo?.province?.name,
  status: data?.merchantInfo?.status,
  statusName: data?.merchantInfo?.merchantStatus?.name,
  addressDetail: `${data?.merchantInfo?.address || ''}, ${
    data?.merchantInfo?.subDistrict?.name || ''
  }, ${data?.merchantInfo?.district?.name || ''}, ${
    data?.merchantInfo?.city?.name || ''
  }, ${data?.merchantInfo?.province?.name}`
});

/**
 * @name cartTransformer
 * @description transformer data untuk response cart / keranjang
 * @param {*} response
 */
export const cartTransformer = response => {
  const responseData = response?.data;
  const data = responseData?.items || [];
  const meta = response?.meta || null;
  return {
    data,
    meta
  };
};

/**
 * @name cartItemTransformer
 * @description transformer data untuk data item keranjang
 * @param {*} data
 */
export const cartItemTransformer = (data = {}) => {
  const price = data?.price?.offered || null;
  const wholesalePrices = data?.wholesalePrices || [];
  const orderCart = data?.orderCart;
  const quantity = orderCart?.quantity || 0;
  const priceFiltered = getPriceBywholesalePrices(
    price,
    wholesalePrices,
    quantity
  );
  return {
    id: data?.id,
    name: data?.name,
    price,
    image: data?.image,
    wholesalePrices: data?.wholesalePrices || [],
    priceFiltered,
    orderCart,
    minOrder: data?.minOrder
  };
};

/**
 * @name searchTransformer
 * @description transformer untuk response pencarian
 * @param {*} response
 */
export const searchTransformer = (response = {}) => ({
  searchTerm: response?.data?.searchTerm || '',
  data: response?.data?.items || [],
  meta: response?.meta,
  filters: (response?.data?.filters && response.data.filters[0]) || {},
  sorting: response?.data?.sorting || []
});

/**
 * @name wishListItemTransformer
 * @description transformer data untuk item pada halaman wishlist
 * @param {*} data
 */
export const wishListItemTransformer = data => {
  const id = data?.wishlistId;
  const itemId = data?.itemId;
  const name = data?.name;
  const type = data?.type;
  const typeName = data?.type?.name?.toLowerCase();
  const createdAt = data?.createdAt;
  const image = data?.image;
  const price = data?.price?.offered || null;
  const discount = data?.price?.listDiscount || null;
  const priceListed = data?.price?.listed || null;
  const merchant = data?.merchant;
  const productUrl = data?.productUrl;
  const productId = getIdFromUrlPath(productUrl);
  return {
    id,
    itemId,
    name,
    type,
    typeName,
    createdAt,
    image,
    price,
    discount,
    priceListed,
    merchant,
    productUrl,
    productId
  };
};

/**
 * @name discussionItemTransformer
 * @description transformer data untuk item diskusi produk
 * @param {*} data
 */
export const discussionItemTransformer = data => {
  const createdAt = data?.createdAt;
  const date = createdAt && moment(createdAt * 1000, 'x').fromNow();
  return {
    id: data?.id,
    customerName: data?.customer?.name,
    customerPhoto: data?.customer?.photo,
    message: data?.inquiry,
    answers: data?.answers || [],
    createdAt,
    date
  };
};

/**
 * @name replyItemTransformer
 * @description transformer data untuk item diskusi produk
 * @param {*} data
 */
export const replyItemTransformer = data => {
  const createdAt = data?.createdAt;
  const date = createdAt && moment(createdAt * 1000, 'x').fromNow();
  const isCustomer = data?.type === 'CUSTOMER';
  const isMerchantUser = data?.type === 'MERCHANT';
  return {
    id: data?.id,
    customerName: data?.name,
    customerPhoto: data?.image,
    message: data?.replyValue,
    createdAt,
    date,
    isCustomer,
    isMerchantUser
  };
};

/**
 * @name merchantListTransformer
 * @description transformer untuk list official store
 * @param {*} response
 */
export const merchantListTransformer = response => ({
  data: response?.data?.items,
  meta: response?.meta
});

export const merchantListItemTransformer = data => {
  const merchant = data?.merchant || {};
  let products = data?.products || [];
  let services = data?.services || [];
  let items = [];

  if (products?.length > 0) {
    products = products.map(item => ({
      ...item,
      productType: 'product'
    }));
  }

  if (services?.length > 0) {
    services = services.map(item => ({
      ...item,
      productType: 'service'
    }));
  }

  if (products && services) {
    items = [...products, ...services];
  }

  return {
    merchant,
    products,
    services,
    items
  };
};

/**
 * @name merchantDetailProductTransformer
 * @description transformer untuk response merchant detail
 * @param {*} response
 */
export const merchantDetailProductTransformer = (response = {}) => ({
  data: response?.data?.items || [],
  meta: response?.meta,
  filters: (response?.data?.filters && response.data.filters[0]) || {},
  sorting: response?.data?.sorting || []
});

/**
 * @name productByCategoryTransformer
 * @description transformer untuk response detail category prodyct
 * @param {*} response
 */
export const productByCategoryTransformer = (response = {}) => ({
  data: response?.data?.items || [],
  meta: response?.meta,
  filters: (response?.data?.filters && response.data.filters[0]) || {},
  sorting: response?.data?.sorting || []
});

/**
 * @name checkoutItemTransformer
 * @description transformer data untuk data item keranjang
 * @param {*} data
 */
export const checkoutItemTransformer = (data = {}) => {
  const price = data?.price?.offered || data?.price?.original || null;
  const wholesalePrices = data?.wholesalePrices || [];
  const quantity = data?.quantity || 0;
  const priceFiltered = getPriceBywholesalePrices(
    price,
    wholesalePrices,
    quantity
  );
  return {
    id: data?.id,
    name: data?.name,
    price,
    quantity,
    image: data?.image,
    wholesalePrices: data?.wholesalePrices || [],
    priceFiltered,
    draftCheckout: data?.draftCheckout
  };
};

/**
 * @name lastDiscusItemTrasnformer
 * @description transformer untuk diskusi di detail produk
 * @param {*} data
 */
export const lastDiscusItemTrasnformer = data => {
  const type = data?.type;
  const isCustomer = type === 'CUSTOMER';
  const isMerchant = type === 'MERCHANT';
  return {
    id: data?.id,
    name: data?.name,
    type: data?.type,
    comment: data?.comment,
    image: data?.image,
    answers: data?.answers?.map(item => lastDiscusItemTrasnformer(item)) || [],
    isCustomer,
    isMerchant
  };
};

/**
 * @name notificationSettingTransformer
 * @description transformer untuk notif setting
 * @param {*} data
 * @returns
 */
export const notificationSettingTransformer = data => {
  const pushNotification = data?.pushNotification?.status === 1;
  const emailNotification = data?.emailNotification?.status === 1;

  return {
    pushNotification,
    emailNotification
  };
};