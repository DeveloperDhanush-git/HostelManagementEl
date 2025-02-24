const RecordMoneyCard = () => {
    return (
      <div className="p-3 bg-[rgba(124,157,179,0.2)] rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-3 mb-4">
        <img src="/assets/speech-bubble_4429060-removebg-preview 1.png" alt="Money" className="w-8 h-8" />
        <p className="text-[14px] text-gray-600">
          Record money received in cash, DD, Cheque or others
        </p>
      </div>
    );
  };
  
  export default RecordMoneyCard;
  