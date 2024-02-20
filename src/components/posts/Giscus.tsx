import { GISCUS } from "@config";
import { useEffect, useState } from "preact/hooks";

export default function Giscus() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    setTheme(theme);
  }, [theme]);

  return (
    <div
      class="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
      id="comment"
    >
      <script {...GISCUS} data-theme={theme} async></script>
    </div>
  );
}
