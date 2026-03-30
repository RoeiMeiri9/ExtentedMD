import { YAMLException } from "js-yaml";
import os from "os";
export const Logger = {
    info: (msg, ...args) => console.log(`[INFO] ${msg}`, ...args),
    reportCompilation: (path, durationInNanoseconds, logLevel) => {
        console.log(`[${logLevel}] Compiled ${path}. Time: ${formatHrTime(durationInNanoseconds)}`);
    },
    error: (msg, err) => {
        console.error(`[ERROR]`, msg, err);
    },
    yamlException: (err) => {
        console.error(`[ERROR]`, "Error parsing file:", os.EOL, err.reason, os.EOL, err.stack);
    },
};
function formatHrTime(nanos) {
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
//# sourceMappingURL=logger.js.map