export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Ottech. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-slate-400">
          <a href="mailto:hello@ottech.kz" className="transition-colors hover:text-white">
            hello@ottech.kz
          </a>
          <a href="#home" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
