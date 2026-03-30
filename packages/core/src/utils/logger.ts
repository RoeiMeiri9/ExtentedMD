import { YAMLException } from "js-yaml";
import os from "os";
import type { Status } from "../types.js";

export const Logger = {
  info: (msg: string, ...args: any[]) => console.log(`[INFO] ${msg}`, ...args),

  reportCompilation: (
    path: string,
    durationInNanoseconds: bigint,
    logLevel: Status,
  ) => {
    console.log(
      `[${logLevel}] Compiled ${path}. Time: ${formatHrTime(durationInNanoseconds)}`,
    );
  },

  error: (msg: string, err: any) => {
    console.error(`[ERROR]`, msg, err);
  },

  yamlException: (err: YAMLException) => {
    console.error(
      `[ERROR]`,
      "Error parsing file:",
      os.EOL,
      err.reason,
      os.EOL,
      err.stack,
    );
  },
};

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
