const createClient = () => {
  const redis = require('redis');
  const bluebird = require('bluebird');

  const options = {
    host: process.env.REDIS_SERVICE_HOST || 'localhost',
    port: process.env.REDIS_SERVICE_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
  };

  bluebird.promisifyAll(redis.RedisClient.prototype);

  return redis.createClient(options);
};

module.exports = createClient();
