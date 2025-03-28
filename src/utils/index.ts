export function delayTime(time = 1000) {
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, time);
  });
}
