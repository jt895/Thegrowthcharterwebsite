import { renderToString } from "react-dom/server";
import App from "./App";
import { pageFromPath, siteRoutes } from "./routes";

export { siteRoutes };

export function render(pathname: string): string {
  return renderToString(<App initialPage={pageFromPath(pathname)} />);
}
