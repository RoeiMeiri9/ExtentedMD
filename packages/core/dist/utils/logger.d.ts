import { YAMLException } from "js-yaml";
import type { Status } from "../types.js";
export declare const Logger: {
    info: (msg: string, ...args: any[]) => void;
    reportCompilation: (path: string, durationInNanoseconds: bigint, logLevel: Status) => void;
    error: (msg: string, err: any) => void;
    yamlException: (err: YAMLException) => void;
};
//# sourceMappingURL=logger.d.ts.map