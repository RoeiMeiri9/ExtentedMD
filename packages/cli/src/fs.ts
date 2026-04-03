import { getOutPath } from "@emd/core";
import { Logger } from "./utils/logger.js";
import { readFile as fsReadFile, writeFile as fsWriteFile } from "fs/promises";

export async function getContent(path: string) {
  try {
    const content = await fsReadFile(path, "utf-8");
    return content;
  } catch (err) {
    throw err;
  }
}

export async function writeFile(content: string, path: string) {
  try {
    await fsWriteFile(path, content, "utf-8");
  } catch (err) {
    Logger.ERROR("Error writing file:", err);
  }
}
