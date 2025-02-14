
import BaseLayout from "../layouts/base-layout";

const Index = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center space-y-4 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
              Ready
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Clean Slate
          </h1>
          <p className="text-lg font-light text-muted-foreground">
            Foundation setup in progress
          </p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Index;
