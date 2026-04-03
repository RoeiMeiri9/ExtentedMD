#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { watchFile, clear } from "./watcher.js";
import { Logger } from "./utils/logger.js";

async function init() {
  const argv = yargs(hideBin(process.argv))
    .usage("Usage: emd --watch <file|folder>")
    .option("watch", {
      alias: "w",
      type: "string",
      description: "File or folder to watch",
    })
    .option("verbose", {
      alias: "v",
      type: "boolean",
      description:
        "Enable verbose output for detailed debugging and internal process logging",
    })
    .help("help") // enables --help
    .alias("help", "h").argv; // alias -h

  const { watch: path, verbose } = await argv;

  if (!path) {
    throw new Error("No file/folder specified. Use --help for usage.");
  }
  Logger.INFO("Watching:", path);
  if (verbose) {
    Logger.INFO("Verbose mode is enabled");
  }

  watchFile(path, verbose);
  process.stdin.resume();
  process.on("beforeExit", clear);
}

init();
