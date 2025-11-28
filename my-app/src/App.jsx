import { useState } from "react";
import DefaultChatScreen from "./Pages/DefaultChatScreen";
import ProductChat from "./Pages/ProductChat";

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

