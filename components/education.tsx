"use client";

import { ReactNode, useState } from "react";

import Dialog from "@/components/dialog";
import Button from "./button";

export default function Education({
  description,
  descriptionModal,
}: {
  description: string;
  descriptionModal: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <p>{description}</p>
      <Button onClick={setIsOpen.bind(null, true)}>
        Final Project{" "}
        <svg
          className="w-3 h-3 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={setIsOpen.bind(null, false)}
        title={description}
      >
        {descriptionModal}
      </Dialog>
    </div>
  );
}
