export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-5 sm:px-10 py-5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-paper text-sm font-display font-bold">
          V
        </div>
        <span className="font-display font-semibold tracking-tight">Vikas</span>
      </div>
      <span className="text-sm text-muted font-medium tracking-wide">
        Full-Stack Dev Portfolio
      </span>
    </div>
  );
}
