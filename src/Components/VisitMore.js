import { Link, Text } from "@chakra-ui/react";

export default function VisitMore({ section, link }) {
  return (
    <Text
      fontSize={"sm"}
      className="rounded py-3 text-center my-3 bg-yellow-400 dark:bg-red-500 flex justify-center items-center gap-1"
    >
      <p>Please Visit the {section} sections to know </p>
      <Link textDecorationLine={"underline"} href={link}>
        all the {section} i have got &rarr;
      </Link>
    </Text>
  );
}
