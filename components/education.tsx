"use client";

import { ReactNode, useState } from "react";

import Dialog from "@/components/dialog";

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
      <button
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-slate-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        onClick={setIsOpen.bind(null, true)}
      >
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
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
