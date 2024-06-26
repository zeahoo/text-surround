export default function convert(value: string, surround_mark: string) {
  console.log(value);
  const list = value
    .split(/\r?\n|\r/)
    .filter((line) => line.trim() !== "")
    .map((line) => {
      return surround_mark + line + surround_mark;
    });
  const result = list.join(",\n");
  return result;
}
