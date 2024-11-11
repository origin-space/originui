import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio10() {
  return (
    <RadioGroup className="gap-2" defaultValue="r1">
      {/* Radio card #1 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="r1"
          id="radio-10-r1"
          aria-describedby="radio-10-r1-description"
          className="order-1 after:absolute after:inset-0"
        />
        <div className="flex grow items-center gap-3">
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="16" fill="#121212" />
            <g clipPath="url(#sb-a)">
              <path
                fill="url(#sb-b)"
                d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
              />
              <path
                fill="url(#sb-c)"
                fillOpacity=".2"
                d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
              />
              <path
                fill="#3ECF8E"
                d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z"
              />
            </g>
            <defs>
              <linearGradient
                id="sb-b"
                x1="15.907"
                x2="23.02"
                y1="15.73"
                y2="18.713"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#249361" />
                <stop offset="1" stopColor="#3ECF8E" />
              </linearGradient>
              <linearGradient
                id="sb-c"
                x1="12.753"
                x2="15.997"
                y1="11.412"
                y2="17.519"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <clipPath id="sb-a">
                <path fill="#fff" d="M6.354 6h19.292v20H6.354z" />
              </clipPath>
            </defs>
          </svg>
          <div className="grid grow gap-2">
            <Label htmlFor="radio-10-r1">
              Label{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (Sublabel)
              </span>
            </Label>
            <p id="radio-10-r1-description" className="text-xs text-muted-foreground">
              You can use this card with a label and a description.
            </p>
          </div>
        </div>
      </div>
      {/* Radio card #2 */}
      <div className="relative flex items-center gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="r2"
          id="radio-10-r2"
          aria-describedby="radio-10-r2-description"
          className="order-1 after:absolute after:inset-0"
        />
        <div className="flex grow items-start gap-3">
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="16" fill="#090A15" />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M8.004 19.728a.996.996 0 0 1-.008-1.054l7.478-12.199a.996.996 0 0 1 1.753.104l6.832 14.82a.996.996 0 0 1-.618 1.37l-10.627 3.189a.996.996 0 0 1-1.128-.42l-3.682-5.81Zm8.333-9.686a.373.373 0 0 1 .709-.074l4.712 10.904a.374.374 0 0 1-.236.506L14.18 23.57a.373.373 0 0 1-.473-.431l2.63-13.097Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="grid grow gap-2">
            <Label htmlFor="radio-10-r2">
              Label{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (Sublabel)
              </span>
            </Label>
            <p id="radio-10-r2-description" className="text-xs text-muted-foreground">
              You can use this card with a label and a description.
            </p>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
