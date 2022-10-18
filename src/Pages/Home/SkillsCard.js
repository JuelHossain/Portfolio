const SkillsCard = ({ skill }) => {
  const { bg, title, text, icon } = skill;
  return (
    <div className={`${bg} relative block overflow-hidden bg  rounded-xl `}>
      <span className="absolute z-10 inline-flex items-center px-3 py-1 text-3xl font-semibold text-white rounded-full  right-4 top-4">
        {icon}
      </span>
      <div className="p-8 pt-20 text-white ">
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};
export default SkillsCard;
