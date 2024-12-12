//  DEFINE and Export type definitions here as per typescript.

interface SVGProps {
  className?: string;
  onClick?: () => void;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  noDefault?: boolean;
}

interface Faq {
  question: string;
  answer: string;
}

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  toggle: () => void;
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}
