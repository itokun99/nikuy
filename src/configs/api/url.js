import { appActiveConfig } from '../appConfig';

// api endpoint list
const apiEndpoint = {
  // global / common endpoint
  url: '',

  // authentication
  login: `${appActiveConfig.api.baseUrl}/api/v1/customer/login`,
  googleLogin: `${appActiveConfig.api.baseUrl}/api/v1/customer/google`,
  register: `${appActiveConfig.api.baseUrl}/api/v1/customer/registration`,
  forgotPassword: `${appActiveConfig.api.baseUrl}/api/v1/customer/forgot-password`,

  // account management
  profile: `${appActiveConfig.api.baseUrl}/api/v1/customer/profile`,
  changePassword: `${appActiveConfig.api.baseUrl}/api/v1/customer/change-password`,
  addresses: `${appActiveConfig.api.baseUrl}/api/v1/customer/addresses`,
  provinces: `${appActiveConfig.api.baseUrl}/api/v1/region/provinces`,

  // merchant
  merchant: `${appActiveConfig.api.baseUrl}/api/v1/customer/merchant`,
  merchantDetail: `${appActiveConfig.api.baseUrl}/api/v1/customer/merchants`,
  merchantProfile: `${appActiveConfig.api.baseUrl}/api/v1/merchant/profile`,
  merchantList: `${appActiveConfig.api.baseUrl}/api/v1/content/home/merchants`,

  // home
  mainBanner: `${appActiveConfig.api.baseUrl}/api/v1/content/home/main_banner`,
  highLightBanner: `${appActiveConfig.api.baseUrl}/api/v1/content/home/highlight_banner`,
  miniBanner: `${appActiveConfig.api.baseUrl}/api/v1/content/home/mini_banner`,
  categories: `${appActiveConfig.api.baseUrl}/api/v1/content/home/categories`,
  otherProducts: `${appActiveConfig.api.baseUrl}/api/v1/content/home/other_items`,

  // wishlists
  wishlists: `${appActiveConfig.api.baseUrl}/api/v1/customer/wishlists`,

  // carts
  carts: `${appActiveConfig.api.baseUrl}/api/v1/customer/carts`,

  // product
  productDetail: `${appActiveConfig.api.baseUrl}/api/v1/customer/product-detail/products`,
  productReview: `${appActiveConfig.api.baseUrl}/api/v1/customer/product-detail/reviews`,
  productDiscussion: `${appActiveConfig.api.baseUrl}/api/v1/customer/product-detail/discussions`,
  productOtherItems: `${appActiveConfig.api.baseUrl}/api/v1/customer/product-detail/other-products`,

  serviceDetail: `${appActiveConfig.api.baseUrl}/api/v1/customer/service-detail/services`,
  serviceReview: `${appActiveConfig.api.baseUrl}/api/v1/customer/service-detail/reviews`,
  serviceDiscussion: `${appActiveConfig.api.baseUrl}/api/v1/customer/service-detail/discussions`,
  serviceOtherItems: `${appActiveConfig.api.baseUrl}/api/v1/customer/service-detail/other-services`,

  // search
  searchProduct: `${appActiveConfig.api.baseUrl}/api/v1/customer/search/items`,

  // order
  checkout: `${appActiveConfig.api.baseUrl}/api/v1/customer/checkouts`,
  order: `${appActiveConfig.api.baseUrl}/api/v1/customer/orders`,

  // notification
  notifSubscribe: `${appActiveConfig.api.baseUrl}/api/v1/customer/notifications/subscribes`,
  notifSetting: `${appActiveConfig.api.baseUrl}/api/v1/customer/notifications/settings`,
  notifInbox: `${appActiveConfig.api.baseUrl}/api/v1/customer/notifications`,

  // review
  customerReview: `${appActiveConfig.api.baseUrl}/api/v1/customer/reviews`
};

export { apiEndpoint };