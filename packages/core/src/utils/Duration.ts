export class Duration {
  constructor(private nanos: bigint) {}

  toString() {
    const ms = Number(this.nanos) / 1_000_000;

    if (ms < 1) {
      return `${Number(this.nanos).toLocaleString()} ns`;
    }
    if (ms < 1000) {
      return `${ms.toFixed(2)}ms`;
    }

    const seconds = (ms / 1000).toFixed(2);
    return `${seconds}s`;
  }

  valueOf(): bigint {
    return this.nanos;
  }

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Duration(${this.toString()})`;
  }
}
