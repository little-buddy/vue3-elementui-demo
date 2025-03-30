// 因为七牛云免费，所以使用七牛云免费存储模块
import * as qiniu from 'qiniu-js';
import { Md5 } from 'ts-md5';

const token =
  'bK0UZ7N-QObpJeIBhnKcR9Zw7q5zqckcoMOn51Bl:fwzbzd1Fq9YVV1doX1D0wvD-VYE=:eyJzY29wZSI6ImJ1eHh5IiwiZGVhZGxpbmUiOjE3NDM0NDMwNzZ9';

// FIXME 七牛云这个api设计真有毒，还需要去后台拿一个token才可以上传，测试谁需要后台啊
export async function uploadImg(file: File) {
  if (file.size > 4 * 1024 * 1024) {
    throw new Error('仅支持4M以内图片上传');
  }

  const data = await qiniu.compressImage(file, {
    quality: 0.92,
    noCompressIfLarger: true,
  });

  return new Promise((resolve, reject) => {
    const observer = qiniu.upload(data.dist as File, undefined, token, {});
    observer.subscribe({
      // eslint-disable-next-line unused-imports/no-unused-vars
      next(res) {
        // 接收上传进度信息的回调函数，分片上传配置
      },
      error(err) {
        reject(err);
      },
      complete(res) {
        resolve(`http://sty4d32tm.hd-bkt.clouddn.com/${res.hash}`);
      },
    });
  });
}
