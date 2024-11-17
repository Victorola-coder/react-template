import clsx from "clsx";
import { Email, User } from "./svgs";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export default function Input(props: InputProps) {
  const { type, className, ...prop } = props;

  // Render input element if type isn't, "email" or "user text"
  if (!/^(email|user\stext)$/.test(type)) {
    return (
      <input
        type="text"
        className={clsx(
          "flex justify-between items-center w-[386.1px]_ w-full px-[14.18px] py-[10.51px] rounded-[2.1px] text-black placeholder:text-[#A9A9A9] bg-white lg:rounded-[8px] lg:w-[370px] lg:px-[24px] lg:py-[17px] outline-none font-normal lg:text-[14px] leading-[21px] gap-3",
          className
        )}
        {...prop}
      />
    );
  }

  return (
    <div
      className={clsx(
        "flex justify-between items-center w-[386.1px]_ w-full px-[14.18px] py-[10.51px] rounded-[2.1px] text-black placeholder:text-[#A9A9A9] bg-white lg:rounded-[8px] lg:w-[370px] lg:px-[24px] lg:py-[17px] outline-none font-normal lg:text-[14px] leading-[21px] gap-3",
        className
      )}
    >
      {/* USER ICON */}
      {type === "user text" && <User className="md:w-[28px] w-[14px]" />}

      {/* EMAIL ICON */}
      {type === "email" && (
        <Email className="lg:w-[24px] md:w-[15px] w-[12.61px]" />
      )}
      {/* inputtt */}
      <input
        {...prop}
        className="outline-none flex-1 bg-transparent"
        type={type === "email" ? " email" : "text"}
      />
    </div>
  );
}
