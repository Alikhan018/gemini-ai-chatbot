"use client";

import { Spinner } from "flowbite-react";

export function SpinnerComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}
