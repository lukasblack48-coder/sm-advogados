"use client";

import type { ComponentProps, HTMLAttributes } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetPortal = Dialog.Portal;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;

const sheetVariants = cva(
  "fixed z-50 flex flex-col gap-4 bg-surface p-6 shadow-lg transition ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-border",
        bottom: "inset-x-0 bottom-0 border-t border-border",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l border-border sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);

export function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: ComponentProps<typeof Dialog.Content> & VariantProps<typeof sheetVariants>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
      <Dialog.Content className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <Dialog.Close
          className="absolute top-4 right-4 text-muted hover:text-fg"
          aria-label="Fechar"
        >
          <X className="size-4" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-2 text-left", className)} {...props} />;
}

export function SheetFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 border-t border-border pt-6", className)}
      {...props}
    />
  );
}
