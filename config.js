// Set environment variables to configure the application.

module.exports = {

  email: process.env.ANALYTICS_REPORT_EMAIL,
  key: process.env.ANALYTICS_KEY_PATH,

  account: {
    ids: process.env.ANALYTICS_REPORT_IDS
  },

  mongo: {
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE
  }

};