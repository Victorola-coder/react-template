type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQList = FAQItem[];

export const faqs: FAQList = [
  {
    id: 1,
    question: "What is TypeScript?",
    answer:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    id: 2,
    question: "How do I install TypeScript?",
    answer:
      "You can install TypeScript globally using npm by running the command: npm install -g typescript",
  },
  {
    id: 3,
    question: "What are the benefits of using TypeScript?",
    answer:
      "TypeScript offers several benefits, including static typing, improved tooling and IDE support, early error detection, and better code organization and maintainability.",
  },
  {
    id: 4,
    question: "Can I use TypeScript with React?",
    answer:
      "Yes, TypeScript can be used with React. Many developers find that TypeScript enhances their React development experience by providing better type checking and autocompletion.",
  },
  {
    id: 5,
    question: "How do I compile TypeScript code?",
    answer:
      "You can compile TypeScript code using the TypeScript compiler (tsc). Run 'tsc filename.ts' in your terminal to compile a TypeScript file to JavaScript.",
  },
];
