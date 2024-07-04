import { Clipboard, showToast, Toast, showHUD, closeMainWindow, getPreferenceValues } from "@raycast/api";
import { QuoteConfig } from "./config/quote";
import convert from "./util/core";
export default async function Command() {
  try {
    const config = getPreferenceValues<QuoteConfig>();
    const input = (await Clipboard.readText()) || "";
    const result = convert(input, "");
    console.log(input);
    console.log(result);
    await Clipboard.copy(result);
    await closeMainWindow();
    showHUD("Copied to clipboard");
  } catch (error) {
    showToast({
      style: Toast.Style.Failure,
      title: "Error",
      message: `Error to copy to clipboard: ${error}`,
    });
  }
}
