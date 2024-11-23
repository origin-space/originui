const page = () => {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-4">
          <div className="mx-auto max-w-3xl p-4">
            <h1 className="mb-6 text-4xl font-bold tracking-widest">Getting Started</h1>
            <p className="mb-4 text-lg tracking-widest">
              Origin UI is designed to integrate seamlessly with Next.js projects, but the
              components are also compatible with any React-based project. The components follow
              shadcn conventions, so they’ll feel familiar to anyone who has used shadcn before.
            </p>

            <div>
              <p className="my-6 text-lg text-gray-700">
                Note: If you're using shadcn, you may likely already have these files - however, I
                would recommend using our components over shadcn's for a consistent styling
                experience.
              </p>
              <h2 className="mb-4 text-2xl font-semibold tracking-widest">1. Set up the required files:</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Copy all <code>.tsx</code> files from Origin UI's <code>components/ui</code>{" "}
                  folder to your project's <code>components/ui</code> folder.
                </li>
                <li>
                  Copy <code>utils.ts</code> from Origin UI's <code>lib</code> folder to your
                  project's <code>lib</code> folder.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
