const TenantsStaffCard = ({ tenantsImage, tenantsTitle, staffImage, staffTitle }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-4" role="button" tabIndex="0">
      <div className="p-4 bg-[#DFDFDF] rounded-[12px] text-center shadow-md">
        <div className="cursor-pointer">
          <img src={tenantsImage} alt={tenantsTitle} className="w-28 h-28 mx-auto mb-2" />
          <p className="text-black-800 font-semibold">{tenantsTitle}</p>
        </div>
      </div>

      <div className="p-4 bg-[#DFDFDF] rounded-lg text-center shadow-md">
        <div className="cursor-pointer">
          <img src={staffImage} alt={staffTitle} className="w-28 h-28 mx-auto mb-2" />
          <p className="text-black-800 font-semibold">{staffTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TenantsStaffCard;
  