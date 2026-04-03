import { type Diagnostic, Status } from "../types/logger.types.js";

export function getMaxStatus(current: Status, incoming: Status): Status {
  return Math.max(current, incoming) as Status;
}

export function determineStatus(diagnostics: Diagnostic[]) {
  return diagnostics.reduce(
    (currentStatus, diagnostics) =>
      getMaxStatus(currentStatus, diagnostics.level),
    Status.SUCCESS,
  );
}
