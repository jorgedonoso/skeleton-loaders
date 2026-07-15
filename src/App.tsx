import { EntryCardSkeleton } from "./components/EntryCardSkeleton";
import { DeepDiveSkeleton } from "./components/DeepDiveSkeleton";
import { SentenceSkeleton } from "./components/SentenceSkeleton";
import { TableSkeleton } from "./components/TableSkeleton";

function App() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4 p-4 text-zinc-100">
      <h1 className="text-4xl">Skeleton Loaders</h1>
      <h2 className="text-2xl">Entry Card</h2>
      <EntryCardSkeleton />
      <h2 className="text-2xl">Sentence</h2>
      <SentenceSkeleton />
      <h2 className="text-2xl">Deep Dive</h2>
      <DeepDiveSkeleton />
      <h2 className="text-2xl">Table</h2>
      <TableSkeleton />
    </div>
  );
}

export default App;
