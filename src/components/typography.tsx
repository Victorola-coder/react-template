import clsx from "clsx";
import { HTMLAttributes } from "react";

export function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={clsx(
        "text-[36px] font-normal leading-[34px] lg:text-[96px] lg:leading-[32.143px] lg:font-medium text-black",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={clsx(
        "text-[32px] font-semibold text-[#000] text-center leading-[36px] tracking-[0.96px] lg:text-left lg:text-[60px] lg:leading-[64px] lg:tracking-[1.8px]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={clsx(
        "text-black text-[32px] md:text-[20px] md:leading-[20px] leading-[36px] lg:text-[48px] lg:leading-[53px] font-semibold capitalize tracking-[1.44px]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function P({
  children,
  className,
  onClick,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      onClick={onClick}
      className={clsx(
        "text-[18px] leading-[28px] tracking-[0.54px] font-normal text-black md:text-[14px] md:leading-[18px] lg:text-[22px] lg:leading-[34px] lg:tracking-[0.66px] lg:text-left",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Text({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx(
        "text-center font-normal text-[#3A3A3A] tracking-[0.48px] text-[16px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
