import { Helmet } from "react-helmet-async";
import {
  META_DESCRIPTION,
  META_TITLE,
  META_AUTHOR,
  META_IMAGE,
  META_KEYWORDS,
  META_TYPE,
  META_URL,
} from "../constants";

interface Props {
  title: string;
  children?: React.ReactNode;
  description?: string;
  author?: string;
  image?: string;
  keywords?: string;
  type?: string;
  url?: string;
}

export default function SEO({
  title,
  description = META_DESCRIPTION,
  author = META_AUTHOR,
  image = META_IMAGE,
  keywords = META_KEYWORDS,
  type = META_TYPE,
  url = META_URL,
  children,
}: Props) {
  const siteTitle = title ? title + " || " + META_TITLE : title;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="author" content={author} />
      <meta name="twitter:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {children}
    </Helmet>
  );
}
