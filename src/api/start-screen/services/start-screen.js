'use strict';

/**
 * start-screen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::start-screen.start-screen');
