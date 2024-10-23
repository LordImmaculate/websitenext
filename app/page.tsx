import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-mono">
      <main className="flex-grow">
        <h1 className="font-extrabold text-2xl">Immaculate</h1>
        <br />
        <p>Average C# dev learning TS using next.js</p>
        <p>Learning Arduino at school</p>
        <br />
        <p>If you want to check out my projects:</p>
        <a href="https://github.com/LordImmaculate" target="_blank">Github</a>
        <br />
        <a href="https://discord.com/users/694817835209326652" target="_blank">Discord</a>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        <p className="text-xs">© 2024 LordImmaculate. All rights reserved.</p>
      </footer>
    </div>
  );
}
