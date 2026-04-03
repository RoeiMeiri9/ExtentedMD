import { FSWatcher, watch } from "chokidar";
import { Logger } from "./utils/logger.js";
import { compileFile } from "./compile.js";

let watcher: FSWatcher;

export function watchFile(pathToWatch: string, verbose = false) {
  watcher = watch(pathToWatch, {
    ignored: (filePath, stats) => {
      if (!stats) return false;
      return stats.isFile() && !filePath.endsWith(".emd");
    },
    persistent: true,
  });
  watcher.on("change", (path) => compileFile(path, verbose));
}

export async function clear() {
  await watcher.close().then(() => Logger.INFO("closed"));
}
