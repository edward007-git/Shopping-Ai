import { useState } from "react";
import DefaultChatScreen from "./pages/DefaultChatScreen";
import ProductChat from "./pages/ProductChat";

export default function App() {
  const [view, setView] = useState("default");
  const [query, setQuery] = useState("");

  return view === "default" ? (
    <DefaultChatScreen
      query={query}
      setQuery={setQuery}
      onSubmit={() => setView("product")}
    />
  ) : (
    <ProductChat query={query}
        onReset={() => setView("default")}
         />
  );
}

