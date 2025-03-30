export function delayTime(time = 1000) {
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, time);
  });
}

export function emailValidator(emial: string) {
  return /^\w+(?:[-+.]\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/.test(emial);
}

export function phoneValidator(phone: string) {
  return /^(?:13\d|14[014-9]|15[0-35-9]|16[2567]|17[0-8]|18\d|19[0-35-9])\d{8}$/.test(
    phone
  );
}

export function idCardValidator(id: string) {
  return /^[1-9]\d{5}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:[0-2][1-9]|10|20|30|31)\d{3}[0-9X]$/i.test(
    id
  );
}

export * from './upload';
