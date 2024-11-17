import { SEO } from "../components/global";

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-primary text-[40px]">
        404 - Page not found
      </div>
    </>
  );
}
