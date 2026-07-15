import { EntryCardSkeleton } from "./components/EntryCardSkeleton";
import { DeepDiveSkeleton } from "./components/DeepDiveSkeleton";
import { SentenceSkeleton } from "./components/SentenceSkeleton";

function App() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4 p-4">
      <h1 className="text-4xl text-zinc-100">Skeleton Loaders</h1>
      <h2 className="text-2xl text-zinc-100">Entry Card</h2>
      <EntryCardSkeleton />
      <h2 className="text-2xl text-zinc-100">Sentence</h2>
      <SentenceSkeleton />
      <h2 className="text-2xl text-zinc-100">Deep Dive</h2>
      <DeepDiveSkeleton />
    </div>
  );
}

export default App;
