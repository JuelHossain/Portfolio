import { Link } from "react-router-dom";

export default function VisitMore({ section, link, children, m }) {
  return (
    <div
      className={` flex-col md:flex-row rounded py-3 px-5 max-w-3xl mx-auto text-center bg-gradient-to-l from-white/0 to-white/0 via-yellow-400 dark:from-zinc-900/0 dark:via-red-500 dark:to-zinc-900/0 flex justify-center items-center gap-1 w-full border border-gray-200/50 dark:border-zinc-700/50 ${
        m || "mt-7 md:mt-10"
      }`}
    >
      {children ? (
        children
      ) : (
        <>
          <p>Please Visit the {section} sections to know </p>
          <Link className="underline" to={link}>
            all the {section} i have got &rarr;
          </Link>
        </>
      )}
    </div>
  );
}
