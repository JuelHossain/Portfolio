import { useQuery } from "@tanstack/react-query";
import {
  getAutoSkills,
  getComputerSkills,
  getDesignSkills,
  getDevSkills,
} from "./Skills";
export default function useSkillsQuery() {
  // development skills;
  const {
    data: devSkills,
    isLoading: devLoading,
    error: devError,
    refetch: refetchDev,
  } = useQuery(["devSkills"], getDevSkills);
  const development = [devSkills, devLoading, devError, refetchDev];

  //   automation skills
  const {
    data: autoSkills,
    isLoading: autoLoading,
    error: autoError,
    refetch: refetchAuto,
  } = useQuery(["autoSkills"], getAutoSkills);
  const automation = [autoSkills, autoLoading, autoError, refetchAuto];

  // design skills
  const {
    data: designSkills,
    isLoading: designLoading,
    error: designError,
    refetch: refetchDesign,
  } = useQuery(["design"], getDesignSkills);
  const design = [designSkills, designLoading, designError, refetchDesign];

  // computer skills
  const {
    data: computerSkills,
    isLoading: computerLoading,
    error: computerError,
    refetch: refetchComputer,
  } = useQuery(["computer"], getComputerSkills);
  const computer = [
    computerSkills,
    computerLoading,
    computerError,
    refetchComputer,
  ];

  return { development, automation, design, computer };
}
