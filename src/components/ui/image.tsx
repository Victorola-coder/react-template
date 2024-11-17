interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export default function Image({ ...props }: ImageProps) {
  return (
    <img
      {...props}
      loading="lazy"
      draggable={false}
      decoding="async"
      fetchPriority="high"
      referrerPolicy="no-referrer"
    />
  );
}
