/* eslint-disable no-useless-escape */
const regex = {};

regex.email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
regex.phoneNumber = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
regex.typingPhoneNumber = /^[0-9+#-]*$/;
regex.whitespace = /\s/;

export { regex };