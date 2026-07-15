export function SentenceSkeleton() {
  return (
    <div className="flex w-full flex-col items-center rounded bg-zinc-800 p-4">
      <div className="w-full animate-pulse space-y-4">
        <div className="mx-auto h-8 w-32 rounded bg-zinc-600" />
        <div className="mx-auto h-24 w-3/4 rounded bg-zinc-600" />
        <div className="mx-auto h-4 w-1/2 rounded bg-zinc-600" />
        <div className="h-4 rounded bg-zinc-600" />
      </div>
    </div>
  );
}
