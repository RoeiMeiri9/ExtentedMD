export function getEOL(content: string) {
  const endOfLineMatch = content.match(/\r\n|\r|\n/);
  const EOL = endOfLineMatch ? endOfLineMatch[0] : "\n";

  return EOL;
}
