const ProfileComponent = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div>
        <h2 className="text-gray-600 text-[18px]">Praveen</h2>
        <p className="text-gray-900 text-lg font-bold ">SREE MAHA HOSTEL</p>
      </div>
       {/* Profile Image */}
       <img
          src="/assets/man_7122917-removebg-preview (1) 1.png"
          alt="Profile"
          className="w-15 h-15 rounded-full object-cover mr-5"
        />
      
    </div>
  );
};

export default ProfileComponent;
