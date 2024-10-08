import { useState } from "react";
import { faqs } from "../data/data";
import { P, H2 } from "./typography";
import { motion } from "framer-motion";
import { Eyes, MinusIcon, PlusIcon } from "./svgs";

interface Faq {
  question: string;
  answer: string;
}

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  toggle: () => void;
}

const FaqItem = ({ faq, isOpen, toggle }: FaqItemProps) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <div className={`mx-auto block`}>
      <motion.div
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
        onClick={toggle}
        className={`cursor-pointe border-[1.5px] border-black border-solid lg:min-w-[820px] w-full flex flex-row space-x-2 justify-between items-center rounded-[16px] md:rounded-[20px] p-[16px] md:p-[20px] md:pl-3 lg:p-[28px] lg:pl-[14px] ${
          isOpen ? "bg-[#FFE3DB] text-black" : "bg-[#FFE3DB]/80 text-black"
        }`}
      >
        <p className="text-[#000000] !pl-1 w-full text-[15px] md:text-[30px] lg:text-[30px] max-w-[640px] tracking-[0.9px] leading-[1] font-semibold">
          {faq.question}
        </p>

        {isOpen ? (
          <div className="bg-white border-[1.5px] rounded-[5px] md:rounded-[9px] lg:rounded-[11px] border-black ">
            <MinusIcon
              className={`transition-all duration-200 w-[16px] h-[16px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]`}
            />
          </div>
        ) : (
          <div className="bg-white border-[1.5px] rounded-[5px] md:rounded-[9px] lg:rounded-[11px] border-black ">
            <PlusIcon
              className={`transition-all duration-200 w-[16px] h-[16px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]`}
            />
          </div>
        )}
      </motion.div>

      <div
        className={`h-aut transition-all duration-300 ${
          isOpen
            ? "md:backdrop:max-h-[255px] py-[14px] rounded-[16px] md:rounded-[20px] border-[1.5px] border-solid border-black md:py-[25px]"
            : "h-0 pb-0 pt-0"
        } overflow-hidden bg-[#FFE3DB]  max-w-[400px] md:max-w-max px-[14px] lg:max-w-[820px] mx-auto mt-2 transition-all duration-200 md:mt-1.5 md:px-[25px] `}
      >
        <p className="text-[#000000] text-[15px] max-w-max w-full md:text-[20px] lg:max-w-max font-normal tracking-[0.6px] leading-[28px]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <section
      id="faqs"
      className="mt-[40px] mx-[32px] lg:mx-[66px] lg:mt-[55px] "
    >
      <div className="flex flex-col items-center gap-[23px] lg:gap-[30px]">
        <span className="duration-300 animate-pulse">
          <Eyes />
        </span>
        <H2>Curious Cats</H2>
        <P className="text-center md:text-left">
          Your Top Questions, Our Awesome Answers!
        </P>
      </div>

      <div className="lg:cursor-pointer mt-[30px] space-y-3 lg:space-y-0 lg:flex lg:items-center lg:flex-col lg:gap-[14px] lg:mt-[60px]">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={index === openIndex}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
