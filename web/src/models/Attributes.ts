export class Attributes<T> {
  constructor(private data: T) {}

  // K will be type of T's key (every object key is a string, string can be type in ts)
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
