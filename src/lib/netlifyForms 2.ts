function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

/**
 * Submits a Netlify Forms payload via AJAX (fetch to "/"), per Netlify's
 * documented pattern for JS-driven forms: https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
 * `data` must include `form-name` matching the form's static declaration.
 */
export async function submitNetlifyForm(data: Record<string, string>): Promise<void> {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData(data),
  });
  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
