/*
  Email validator function to be used in registration form

  Email validation rules:

  The recipient name (the part before @) may be a maximum of 64 characters long and consist of:
  * Uppercase and lowercase letters in English (A-Z, a-z)
  * Digits from 0 to 9
  * Special characters such as {code}. ! # $ % & ' * + - / = ? ^ _ ` { |{code}
  A special character cannot:
  * appear as the first or last character
  * appear consecutively two or more times

  The domain name (the part after @) may be a maximum of 253 characters and consist of:
  * Uppercase and lowercase letters in English (A-Z, a-z)
  * Digits from 0 to 9 
  * Special characters such as: hyphen (-) and period (.)
  A special character cannot:
  * appear as the first or last character
  * appear consecutively two or more times

  The length of the complete email address is limited to 255 characters.

  No validation of the top-level domain (TLD) is performed against a database of existing TLDs.
  Internationalized domain names are not supported. 
*/

/**
 * Email address validator
 * @param {String} email 
 * @returns {Boolean} 
 */
function isValidEmail(email) {
  const MAX_USERNAME_LENGTH = 64;
  const MAX_DOMAIN_LENGTH = 253;
  const MAX_TOTAL_LENGTH = 255;
  const rule = '^([A-Za-z0-9]+([!#$%\'*+/=?^_`{|}.\x26-]{1,1}[A-Za-z0-9]+)*)@([A-Za-z0-9])+([.-]{1,1}[A-Za-z0-9]+)+$';
  const regEx = new RegExp(rule);
  const isValidRegex = regEx.test(email);

  let username = '';
  let domain = '';
  let isValidLength = false;

  if (isValidRegex) {
    [username, domain] = email.split('@');

    isValidLength = (
      username.length <= MAX_USERNAME_LENGTH &&
      domain.length <= MAX_DOMAIN_LENGTH &&
      email.length <= MAX_TOTAL_LENGTH
    );
  }

  return isValidRegex && isValidLength;
}

export {
  isValidEmail
};
