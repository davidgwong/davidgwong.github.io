import Router from "../Router";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Open Sans Condensed, sans-serif",
        headings: { fontFamily: "Sofia Sans Extra Condensed, sans-serif" },
      }}
    >
      <Router />
    </MantineProvider>
  );
}

export default App;
