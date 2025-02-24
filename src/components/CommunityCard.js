const CommunityCard = ({ image, text }) => {
    return (
      <div className="p-3 flex flex-col sm:flex-row gap-3 items-center">
        <img src={image} alt="Community" className="w-10 h-9" />
        <p className="text-[15px] text-gray-600">{text}</p>
      </div>
    );
  };
  
  export default CommunityCard;
  