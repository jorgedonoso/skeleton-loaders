export function DeepDiveSkeleton() {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded bg-zinc-800 p-4">
      <div className="w-full animate-pulse space-y-4">
        <div className="w-3/4 h-16 rounded bg-zinc-600" />
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-4 w-full rounded bg-zinc-600" />
        ))}
      </div>
    </div>
  );
}
