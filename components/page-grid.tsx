export default function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <div className="-m-px grid grid-cols-12 -space-y-px -space-x-px *:px-1 *:py-12 sm:*:px-8 xl:*:px-12">
        {children}
      </div>
    </div>
  );
}
