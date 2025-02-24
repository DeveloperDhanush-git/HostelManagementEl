const TenantsStaffCard = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md">
          <img src="/assets/avatar-male__8_-removebg-preview 1.png" alt="Tenants" className="w-28 h-28 mx-auto mb-2" />
          <p className="text-gray-700 font-semibold">Tenants</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md">
          <img src="/assets/bb-removebg-preview 2.png" alt="Staff" className="w-28 h-28 mx-auto mb-2" />
          <p className="text-gray-700 font-semibold">Staff</p>
        </div>
      </div>
    );
  };
  
  export default TenantsStaffCard;
  