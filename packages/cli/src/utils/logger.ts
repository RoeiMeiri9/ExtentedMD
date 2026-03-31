import { EmdLogger } from "@emd/core";

export const Logger: EmdLogger = {
  info: (...args: any[]) => console.log("[INFO]", ...args),
  success: (...args: any[]) => console.log("[SUCCESS]", ...args),
  warn: (...args: any[]) => console.warn("[WARN]", ...args),
  error: (...args: any[]) => console.error("[ERROR]", ...args),
};
