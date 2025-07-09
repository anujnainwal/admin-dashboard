"use client";

import { toast } from "sonner";

type AlertOptions = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: {
    label: string;
    onClick: () => void;
  };
};

export function showAlert({
  title,
  description,
  variant = "default",
  action,
}: AlertOptions) {
  const toastFn = variant === "destructive" ? toast.error : toast;

  toastFn(title, {
    description,
    action,
  });
}
