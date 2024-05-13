import React from "react";

export default function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Get answers to the most common questions about our products. If you can't find what you're looking for, feel
            free to ask a question.
          </p>
          <button className="mt-4 bg-white border border-gray-300 px-4 py-2 rounded-md text-base text-gray-800 shadow-sm hover:shadow-md">
            Ask a Question
          </button>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <button className="flex w-full items-center justify-between gap-4 px-6 py-4 text-lg font-medium transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:hover:bg-gray-800 dark:focus-visible:ring-primary-400">
              What is the pricing structure?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="px-6 pb-4 text-gray-500 dark:text-gray-400">
              Our pricing is based on the number of users and the features you need. We offer a range of plans to fit
              the needs of businesses of all sizes. You can view our pricing page for more details.
            </div>
          </div>
          {/* Other collapsible items go here */}
        </div>
      </div>
    </section>
  );
}
