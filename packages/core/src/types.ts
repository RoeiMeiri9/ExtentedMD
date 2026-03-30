export type BenchmarksTimes = { start: number; end: number };
export type FMContent = Record<string, any>;
export type VariablesMatcher = {
  encounteredError: boolean;
  variables?: Record<string, string>;
  newFMContent?: string;
  EOL?: string;
  fmMatch?: RegExpMatchArray;
};
export type Status = "SUCCESS" | "WARN" | "ERROR";

export type OrchestratorOutput = {
  content: string;
  status: Status;
};
