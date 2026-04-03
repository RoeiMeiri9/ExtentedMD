import type { Status } from "./logger.types.js";

export type OrchestratorOutput = {
  content: string;
  status: Status;
  reportCompilation: (
    path: string,
    durationNanos: bigint,
    status: Status,
  ) => void;
};

export type FMContent = Record<string, any>;

export type VariableCall = {
  name: string;
  line: number;
  column: number;
  raw: string;
  index: number;
  error?: string; // TODO: Make an actual error in a different commit
};

export type varPosition = { line: number; column: number };
