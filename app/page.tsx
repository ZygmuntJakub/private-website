import { HeroFigure } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center text-xs">
      <button>in progress...</button>

      <div className="flex justify-center items-center absolute">
        <HeroFigure />
      </div>
      <div className="fixed bottom-2 underline text-xs text-blue-600">
        <a href="https://www.linkedin.com/in/zygmunt-jakub/" target="_blank">
          linkedin
        </a>
      </div>
    </main>
  );
}
