import qiniu from 'qiniu';

// TEST info
const AK = 'bK0UZ7N-QObpJeIBhnKcR9Zw7q5zqckcoMOn51Bl';
const SK = 'yd-FkTgmVffJY3ZK4bZtmQ6Mu5hVEjCsPe4jd-PQ';

const bucket = 'buxxy';

const mac = new qiniu.auth.digest.Mac(AK, SK);

const options = {
  scope: bucket,
  expires: 3600 * 24,
};

const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

console.log(uploadToken);
