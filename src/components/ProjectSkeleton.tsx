export function ProjectSkeleton() {
  return (
    <div className="flex w-full flex-col rounded bg-zinc-800 p-4">
      <div className="mb-4 h-16 w-3/4 animate-pulse rounded bg-zinc-600" />

      <div className="flex items-start gap-4">
        <div className="h-32 w-32 shrink-0 animate-pulse bg-zinc-600" />

        <div className="flex-1 animate-pulse space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-4 w-full rounded bg-zinc-600" />
          ))}

          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, colIndex) => (
              <div key={colIndex} className="h-4 rounded bg-zinc-600" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
