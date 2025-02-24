/*------------dynamic components-----------------*/

// name="Praveen" 
// hostelName="SREE MAHA HOSTEL" 
// profileImage="/assets/man_7122917-removebg-preview (1) 1.png"

/*-----------------------------------------------*/

const ProfileComponent = ({ name, hostelName, profileImage }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div>
        <p className="text-black-800 text-[18px]">{name}</p>
        <p className="text-black-800 text-lg font-bold">{hostelName}</p>
      </div>

      <button className="cursor-pointer">
        <img
          src={profileImage}
          alt="Profile"
          className="w-15 h-15 rounded-full object-cover mr-5"
        />
      </button>
    </div>
  );
};

export default ProfileComponent;
