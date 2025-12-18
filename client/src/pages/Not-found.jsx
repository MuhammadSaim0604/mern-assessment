import { ArrowUpRight } from "lucide-react";
import forestImage from "/generated_images/404_forest_illustration.png";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-[#EEF4F1] px-6">
      <div className="mx-auto max-w-xl text-center">

        {/* Illustration */}
        <img
          src={forestImage}
          alt="404 not found"
          className="mx-auto mb-10 w-full max-w-md rounded-xl"
        />

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Ohh! Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-500">
          We're sorry but we can’t seem to find the page you requested.
          This might be because you have typed the web address incorrectly.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-[#2E9C7A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#278a6c]"
        >
          Back To Home
          <ArrowUpRight size={16} />
        </a>

      </div>
    </section>
  );
}
