import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox12() {
  return (
    <div className="relative flex items-start space-x-2 space-x-reverse p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground">
      <Checkbox 
        id="checkbox-12" 
        className="order-1 after:absolute after:inset-0" 
        aria-describedby="checkbox-12-description"
      />
      <div className="grow flex items-center gap-3">
        <svg 
          className="shrink-0"
          xmlns="http://www.w3.org/2000/svg" 
          width={32} 
          height={32} 
          aria-hidden="true"
        >
          <path fill="#1ED760" d="M16 0C7.168 0 0 7.168 0 16s7.168 16 16 16 16-7.168 16-16S24.832 0 16 0Z" />
          <path fill="#fff" d="M26.232 14.394c-.335 0-.542-.084-.832-.252-4.593-2.742-12.806-3.4-18.123-1.916-.232.064-.522.168-.832.168-.851 0-1.503-.665-1.503-1.523 0-.877.542-1.374 1.123-1.542 2.27-.664 4.812-.98 7.58-.98 4.71 0 9.645.98 13.252 3.083.503.29.832.69.832 1.458 0 .878-.71 1.504-1.497 1.504Zm-2 4.916c-.335 0-.561-.149-.793-.271-4.032-2.387-10.045-3.349-15.394-1.897-.31.084-.477.168-.768.168-.69 0-1.251-.562-1.251-1.252s.335-1.148 1-1.335c1.793-.504 3.626-.878 6.31-.878 4.187 0 8.232 1.039 11.419 2.936.522.31.729.71.729 1.27a1.25 1.25 0 0 1-1.252 1.259Zm-1.735 4.232c-.271 0-.439-.084-.69-.232-4.026-2.426-8.71-2.53-13.336-1.581-.252.065-.58.168-.768.168-.626 0-1.02-.497-1.02-1.02 0-.664.394-.98.878-1.083 5.284-1.168 10.684-1.065 15.29 1.69.394.251.626.477.626 1.064a.975.975 0 0 1-.98.994Z" />
        </svg>
        <div className="grid gap-1">
          <Label htmlFor="checkbox-12">
            Label <span className="font-normal text-xs leading-[inherit] text-muted-foreground">(Sublabel)</span>
          </Label>
          <p id="checkbox-12-description" className="text-xs text-muted-foreground">
          A short description goes here.
          </p>
        </div>
      </div>
    </div>
  );
}
