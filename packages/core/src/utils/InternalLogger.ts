import { YAMLException } from "js-yaml";
import os from "os";
import type { Status, EmdLogger } from "../types.js";

export class InternalLogger {
  api!: EmdLogger;

  constructor() {}

  setAPI(loggerAPI: EmdLogger) {
    this.api = loggerAPI;
  }

  info(msg: string, ...args: any[]) {
    this.api.info(`[INFO]`, msg, ...args);
  }

  reportCompilation(path: string, durationNanos: bigint, status: Status) {
    const message = `Compiled ${path}. Time: ${formatHrTime(durationNanos)}`;
    status === "SUCCESS" ? this.api.success(message) : this.api.warn(message);
  }

  error(...args: any[]) {
    this.api.error(args);
  }

  yamlException(err: YAMLException) {
    this.api.error(
      `[ERROR] Parsing failed:`,
      os.EOL,
      err.reason,
      os.EOL,
      err.stack,
    );
  }
}

function formatHrTime(nanos: bigint): string {
  const ms = Number(nanos) / 1_000_000;

  if (ms < 1) {
    return `${Number(nanos).toLocaleString()} ns`;
  }
  if (ms < 1000) {
    return `${ms.toFixed(2)}ms`;
  }

  const seconds = (ms / 1000).toFixed(2);
  return `${seconds}s`;
}
