import { createFileRoute } from "@tanstack/react-router";
import { AnniversaryPage } from "@/components/AnniversaryPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy 3rd Anniversary ❤️" },
      { name: "description", content: "A love letter in pixels — celebrating three beautiful years together." },
    ],
  }),
});

function Index() {
  return <AnniversaryPage />;
}
