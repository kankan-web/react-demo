import { ThemeToggle } from './components/ThemeToggle';
function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ThemeToggle />

      <main className="flex-1 flex flex-col">
        <h1 className="text-4xl font-bold text-foreground py-4 items-center">tiptap编辑器</h1>

        <div className="flex-1 bg-card rounded-lg shadow-sm m-12 border border-border"></div>
      </main>
    </div>
  );
}

export default App;
