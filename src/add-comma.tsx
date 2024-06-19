import { Clipboard, showToast, Toast, closeMainWindow } from "@raycast/api";
import convert from "./util/core";
export default async function Command() {
  try {
    const input = (await Clipboard.readText()) || "";
    const result = convert(input, "");
    console.log(input);
    console.log(result);
    await Clipboard.copy(result);
    await closeMainWindow();
  } catch (error) {
    showToast({
      style: Toast.Style.Failure,
      title: "Error",
      message: `Error to copy to clipboard: ${error}`,
    });
  }
}