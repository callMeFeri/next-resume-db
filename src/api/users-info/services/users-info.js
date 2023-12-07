'use strict';

/**
 * users-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-info.users-info');
