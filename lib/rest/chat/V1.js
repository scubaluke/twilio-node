'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var CredentialList = require('./v1/credential').CredentialList;
var ServiceList = require('./v1/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Chat
 *
 * @constructor Twilio.Chat.V1
 *
 * @property {Twilio.Chat.V1.CredentialList} credentials - credentials resource
 * @property {Twilio.Chat.V1.ServiceList} services - services resource
 *
 * @param {Twilio.Chat} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._credentials = undefined;
  this._services = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'credentials', {
  get: function() {
    this._credentials = this._credentials || new CredentialList(this);
    return this._credentials;
  }
});

Object.defineProperty(V1.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

module.exports = V1;