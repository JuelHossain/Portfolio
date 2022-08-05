import { useQuery } from "@tanstack/react-query";
import { getCourses, getEducations, getExperiences } from "./Helper/About";
const useAbout = () => {
  // getting educations
  const {
    data: edu,
    isLoading: eduLoading,
    error: eduError,
    refetch: refetchEdu,
  } = useQuery(["educations"], getEducations);
  const educations = [edu, eduLoading, refetchEdu, eduError];

  // getting courses
  const {
    data: course,
    isLoading: coursesLoading,
    error: coursesError,
    refetch: refetchCourses,
  } = useQuery(["courses"], getCourses);
  const courses = [course, coursesLoading, refetchCourses, coursesError];

  // getting courses
  const {
    data: exp,
    isLoading: expLoading,
    error: expError,
    refetch: refetchExp,
  } = useQuery(["experiences"], getExperiences);
  const experiences = [exp, expLoading, refetchExp, expError];

  return { educations, courses, experiences };
};

export default useAbout;
