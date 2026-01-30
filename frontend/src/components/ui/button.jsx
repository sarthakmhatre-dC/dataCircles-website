import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------- */
/*  1.  One-off CSS: inside moving border that darkens on hover   */
/* -------------------------------------------------------------- */
const movingBorderCSS = `
@keyframes move-streak {
  0%   { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
}

.btn-moving-inner {
  position: relative;
  overflow: hidden;               /* keeps the bar inside */
}
.btn-moving-inner::before {
  content: "";
  position: absolute;
  inset: 0;                       /* covers the whole button */
  border-radius: inherit;
  padding: 1px;                   /* 1 px “border” thickness */
  background: 
    linear-gradient(90deg,
      transparent 0%,
      #60a5fa 45%,                 /* blue-400 streak */
      #60a5fa 55%,
      transparent 100%
    ) 0% 0% / 200% 1px;            /* 200% width → sliding room */
  -webkit-mask:
     linear-gradient(#fff 0 0) content-box,
     linear-gradient(#fff 0 0);
  mask:
     linear-gradient(#fff 0 0) content-box,
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: move-streak 1.2s linear infinite;
  transition: background 250ms ease;
}
.btn-moving-inner:hover::before {
  background: 
    linear-gradient(90deg,
      transparent 0%,
      #1d4ed8 45%,                 /* blue-700 when hovered */
      #1d4ed8 55%,
      transparent 100%
    ) 0% 0% / 200% 1px;
}
`;

/* -------------------------------------------------------------- */
/*  2.  Button component (unchanged API)                          */
/* -------------------------------------------------------------- */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 btn-moving-inner",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <style>{movingBorderCSS}</style>
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </>
  );
}

export { Button, buttonVariants };
