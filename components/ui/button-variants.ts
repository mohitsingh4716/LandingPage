import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#0052FF] text-white hover:bg-[#90B1F3]",
        outline: "border-2 border-[#0052FF] text-[#0052FF] hover:bg-[#E7EFFF]",
      },
      size: {
        default: "h-10 px-6 py-2",
        lg: "h-12 px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);