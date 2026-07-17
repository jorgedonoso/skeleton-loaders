import { EntryCardSkeleton } from "./components/EntryCardSkeleton";
import { DeepDiveSkeleton } from "./components/DeepDiveSkeleton";
import { SentenceSkeleton } from "./components/SentenceSkeleton";
import { TableSkeleton } from "./components/TableSkeleton";
import { ProjectSkeleton } from "./components/ProjectSkeleton";
import { Repeat } from "./components/helpers";

function App() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 text-zinc-100">
      <h1 className="text-4xl">Skeleton Loaders</h1>
      <Repeat title="Project">
        <ProjectSkeleton />
      </Repeat>
      <Repeat title="Entry Card">
        <EntryCardSkeleton />
      </Repeat>
      <Repeat title="Sentence">
        <SentenceSkeleton />
      </Repeat>
      <Repeat title="Deep Dive">
        <DeepDiveSkeleton />
      </Repeat>
      <Repeat title="Table">
        <TableSkeleton />
      </Repeat>
    </div>
  );
}

export default App;
