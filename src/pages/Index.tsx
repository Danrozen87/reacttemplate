
const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="text-center space-y-4 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
              Ready
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Clean Slate
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Index;
