export function EntryCardSkeleton() {
  return (
    <div className="flex w-full flex-col items-center rounded bg-zinc-800 p-4">
      <div className="w-full animate-pulse space-y-4">
        <div className="mx-auto h-8 w-32 rounded bg-zinc-600" />
        <div className="mx-auto h-24 w-48 rounded bg-zinc-600" />
        <div className="mx-auto h-16 rounded bg-zinc-600" />
        <div className="h-8 rounded bg-zinc-600" />
      </div>
    </div>
  );
}
