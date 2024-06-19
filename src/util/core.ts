export default function convert(value: string, surround_mark: string) {
  const list = value
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      return surround_mark + line + surround_mark;
    });
  const result = list.join(",\n");
  return result;
}
