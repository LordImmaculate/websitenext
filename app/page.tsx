"use client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-mono">
      <main className="flex-grow p-2 sm:pl-40 sm:pt-20">
        <h1 className="font-extrabold text-2xl mb-4">Immaculate</h1>
        <div>Average C# dev learning TS using next.js</div>
        <div className="mb-4">Learning Arduino at school</div>
        <div className="mb-4">If you want to check out my projects:</div>
        <div>
          <a href="https://github.com/LordImmaculate" target="_blank" className="underline">Github</a>
        </div>
        <div>
          <a href="#" onClick={copyClipboard} onMouseOut={resetText} id="discord" className="underline">Discord: LordImmaculate</a>
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        <div className="text-xs">© 2024 LordImmaculate. All rights reserved.</div>
      </footer>
    </div>
  );
}

function copyClipboard() {
  navigator.clipboard.writeText("LordImmaculate");

  const discordElement = document.getElementById("discord");
  if (discordElement) {
    discordElement.innerHTML = "Copied!";
  }
}

async function resetText() {
  await new Promise(r => setTimeout(r, 500));
  const discordElement = document.getElementById("discord");
  if (discordElement) {
    discordElement.innerHTML = "Discord: LordImmaculate";
  }
}