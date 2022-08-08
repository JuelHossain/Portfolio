import { Link } from "@chakra-ui/react";

export default function VisitMore({ section, link,children }) {
  return (
    <div className=" flex-col md:flex-row rounded p-5 text-center bg-gradient-to-l from-yellow-500 dark:from-red-500 flex justify-center items-center gap-1 mt-7 md:mt-10">
     {children ?children: <><p>Please Visit the {section} sections to know </p>
      <Link textDecorationLine={"underline"} href={link}>
        all the {section} i have got &rarr;
      </Link></>}
    </div>
  );
}
