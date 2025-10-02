const StatContainer = ({ index, icon, title, value }) => {
  return (
    <div
      className={` space-y-1 rounded-lg p-3 font-poppins ${index % 2 === 0 ?  "bg-yellow" : "bg-gray" }`}
    >
      <h2 className="flex items-center gap-3">
        <i className={`${icon} ri-2x font-extralight text-darkyellow`}></i>
        <span className="text-lg leading-5 font-medium text-dark">{title}</span>
      </h2>
      <p className="text-xl font-semibold text-center md:pt-6 pt-10 text-dark">{value}</p>
    </div>
  );
};

export default StatContainer;
