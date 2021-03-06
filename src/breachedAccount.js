import fetchFromApi from './internal/fetchFromApi';

/**
 * Fetches breach data for a specific account.
 *
 * @param {string} account a username or email address
 * @param {Object} [options] a configuration object
 * @param {string} [options.domain] a domain by which to filter the results
 * (default: all domains)
 * @param {boolean} [options.truncate] truncate the results to only include
 * the name of each breach (default: false)
 * @returns {Promise} a Promise which resolves to an array of breach objects
 * (or null if no breaches were found), or rejects with an Error
 * @example
 * breachedAccount('foo')
 *   .then((data) => {
 *     if (data) {
 *       // ...
 *     } else {
 *       // ...
 *     }
 *   })
 *   .catch((err) => {
 *     // ...
 *   });
 * @example
 * breachedAccount('bar', { truncate: true })
 *   .then((data) => {
 *     if (data) {
 *       // ...
 *     } else {
 *       // ...
 *     }
 *   })
 *   .catch((err) => {
 *     // ...
 *   });
 * @example
 * breachedAccount('baz', { domain: 'adobe.com', truncate: true })
 *   .then((data) => {
 *     if (data) {
 *       // ...
 *     } else {
 *       // ...
 *     }
 *   })
 *   .catch((err) => {
 *     // ...
 *   });
 * @alias module:breachedAccount
 */
const breachedAccount = (account, options = {}) => {
  const endpoint = `/breachedaccount/${encodeURIComponent(account)}?`;
  const params = [];
  if (options.domain) {
    params.push(`domain=${encodeURIComponent(options.domain)}`);
  }
  if (options.truncate) {
    params.push('truncateResponse=true');
  }
  return fetchFromApi(`${endpoint}${params.join('&')}`);
};

/**
 * A module for retrieving breach data for a specific account.
 *
 * @module breachedAccount
 * @example
 * import { breachedAccount } from 'hibp';
 */
export default breachedAccount;
