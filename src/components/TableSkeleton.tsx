export function TableSkeleton() {
  return (
    <div className="flex w-full flex-col items-center rounded bg-zinc-800 p-4">
      <div className="w-full animate-pulse space-y-4">
        <div className="h-16 rounded bg-zinc-600" />
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <div key={colIndex} className="h-4 rounded bg-zinc-600" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
