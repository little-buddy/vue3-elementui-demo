export function delayTime(time = 2000) {
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, time);
  });
}
