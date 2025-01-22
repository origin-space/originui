export default function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-6 *:px-1 *:py-12 sm:*:px-8 xl:*:px-12 -space-x-px -space-y-px -m-px">
        {children}
      </div>
    </div>
  );
}
