export const contentObjectId = "content/site.json";

export function editableField(fieldPath: string) {
  return {
    "data-sb-object-id": contentObjectId,
    "data-sb-field-path": fieldPath,
  };
}
