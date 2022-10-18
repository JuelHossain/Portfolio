import { Link } from "@chakra-ui/react";

export default function VisitMore({ section, link, children }) {
  return (
    <div className=" flex-col md:flex-row rounded py-3 px-5 max-w-3xl mx-auto text-center bg-gradient-to-l from-white to-white via-yellow-500 dark:from-zinc-900 dark:via-red-500 dark:to-zinc-900 flex justify-center items-center gap-1 mt-7 md:mt-10">
      {children ? (
        children
      ) : (
        <>
          <p>Please Visit the {section} sections to know </p>
          <Link textDecorationLine={"underline"} href={link}>
            all the {section} i have got &rarr;
          </Link>
        </>
      )}
    </div>
  );
}
