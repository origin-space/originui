export default function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <div className="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12">
        {children}
      </div>
    </div>
  );
}
