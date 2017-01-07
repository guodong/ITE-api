module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "ite-api",
      script    : "index.js",
      watch     : ["./"],
      env: {
        MONGO_URL: "mongodb://localhost:27017/ite",
        PORT : 3000
      },
      env_production : {
        NODE_ENV: "production",
        MONGO_URL: "mongodb://localhost:27017/ite",
        PORT : 3000
      }
    }
  ]
}
