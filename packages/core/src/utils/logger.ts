import type { EmdLogger } from "../types.js";
import { InternalLogger } from "./InternalLogger.js";

export const logger = new InternalLogger();
export function subscribeLogs(loggerAPI: EmdLogger) {
  logger.setAPI(loggerAPI);
}
