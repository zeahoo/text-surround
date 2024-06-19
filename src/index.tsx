import { Form, ActionPanel, Action, showToast, Clipboard } from "@raycast/api";
import convert from "./util/core";
type Values = {
  textarea: string;
  dropdown: string;
};

export default function Command() {
  async function handleSubmit(values: Values) {
    const surround_mark = values.dropdown || "";
    const result = convert(values.textarea, surround_mark);
    console.log(values.textarea);
    console.log(result);
    await Clipboard.copy(result);
    showToast({ title: "Add quote", message: "You can paste it from your clipboard!" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Add text line by line, make it surround quotes" />
      <Form.TextArea id="textarea" title="Ready Surround lines" placeholder="Enter multi-line text" />
      <Form.Dropdown id="dropdown" title="Quote">
        <Form.Dropdown.Item value="'" title="'" />
        <Form.Dropdown.Item value='"' title='"' />
        <Form.Dropdown.Item value="" title="<blank>" />
      </Form.Dropdown>
      <Form.Separator />
    </Form>
  );
}
