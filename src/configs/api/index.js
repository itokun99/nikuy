import apiRequest from './config';
import { apiEndpoint } from './url';

const API = {};

// Global / common
API.getUrl = apiRequest.get(apiEndpoint.url);

// Authentication
API.login = apiRequest.post(apiEndpoint.login);
API.register = apiRequest.post(apiEndpoint.register);
API.googleLogin = apiRequest.get(apiEndpoint.googleLogin);
API.forgotPassword = apiRequest.post(apiEndpoint.forgotPassword);

// Account Management
API.profile = apiRequest.get(apiEndpoint.profile, true);
API.address = apiRequest.get(apiEndpoint.addresses, true);
API.updateProfile = apiRequest.post(apiEndpoint.profile, true);
API.createAddress = apiRequest.post(apiEndpoint.addresses, true);
API.updateAddress = apiRequest.patch(apiEndpoint.addresses, true);
API.changePassword = apiRequest.patch(apiEndpoint.changePassword, true);
API.provinces = apiRequest.get(apiEndpoint.provinces, true);

// Merchant
API.merchant = apiRequest.get(apiEndpoint.merchantProfile, true);
API.merchantDetail = apiRequest.get(apiEndpoint.merchantDetail);
API.createMerchant = apiRequest.post(apiEndpoint.merchant, true);
API.merchantList = apiRequest.get(apiEndpoint.merchantList);

// Home
API.mainBanner = apiRequest.get(apiEndpoint.mainBanner, true);
API.miniBanner = apiRequest.get(apiEndpoint.miniBanner, true);
API.categories = apiRequest.get(apiEndpoint.categories, true);
API.highLightBanner = apiRequest.get(apiEndpoint.highLightBanner, true);
API.otherProducts = apiRequest.get(apiEndpoint.otherProducts, true);

// wishlists
API.wishlists = apiRequest.get(apiEndpoint.wishlists, true);
API.addWishlist = apiRequest.post(apiEndpoint.wishlists, true);
API.removeWishlist = apiRequest.delete(apiEndpoint.wishlists, true);

// carts
API.carts = apiRequest.get(apiEndpoint.carts, true);
API.addToCart = apiRequest.post(apiEndpoint.carts, true);
API.removeFromCart = apiRequest.delete(apiEndpoint.carts, true);

// Product / Service
API.productDetail = apiRequest.get(apiEndpoint.productDetail, true);
API.productReview = apiRequest.get(apiEndpoint.productReview, true);
API.productDiscussion = apiRequest.get(apiEndpoint.productDiscussion, true);
API.productOtherItems = apiRequest.get(apiEndpoint.productOtherItems, true);
API.productAddDiscussion = apiRequest.post(apiEndpoint.productDiscussion, true);

API.serviceDetail = apiRequest.get(apiEndpoint.serviceDetail, true);
API.serviceReview = apiRequest.get(apiEndpoint.serviceReview, true);
API.serviceDiscussion = apiRequest.get(apiEndpoint.serviceDiscussion, true);
API.serviceOtherItems = apiRequest.get(apiEndpoint.serviceOtherItems, true);
API.serviceAddDiscussion = apiRequest.post(apiEndpoint.serviceDiscussion, true);

// Search
API.searchProduct = apiRequest.get(apiEndpoint.searchProduct, true);

// Order
API.checkout = apiRequest.get(apiEndpoint.checkout, true);
API.createCheckout = apiRequest.post(apiEndpoint.checkout, true);
API.createOrder = apiRequest.post(apiEndpoint.order, true);
API.orders = apiRequest.get(apiEndpoint.order, true);
API.updateStatusOrder = apiRequest.patch(apiEndpoint.order, true);

// Notification

API.notifSubscribe = apiRequest.post(apiEndpoint.notifSubscribe, true);
API.notifSetting = apiRequest.get(apiEndpoint.notifSetting, true);
API.updateNotifSetting = apiRequest.post(apiEndpoint.notifSetting, true);
API.notifInbox = apiRequest.get(apiEndpoint.notifInbox, true);
API.readInbox = apiRequest.post(apiEndpoint.notifInbox, true);

// Review
API.customerReview = apiRequest.post(apiEndpoint.customerReview, true);

export default API;