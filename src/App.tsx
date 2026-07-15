import { SentenceSkeleton } from "./components/SentenceSkeleton";

function App() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 mt-4">
      <h1 className="text-4xl text-zinc-100">Skeleton Loaders</h1>
      <h2 className="text-2xl text-zinc-100">Sentence</h2>
      <SentenceSkeleton />
    </div>
  );
}

export default App;
