import useSkillsQuery from "./Helper/useSkillsQuery";

export default function useSkills() {
    const { development, automation, design, computer } = useSkillsQuery();
    
  return { development, automation, design, computer };
}
