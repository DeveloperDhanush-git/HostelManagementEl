// TermsOfAgreement.js
import React from 'react';

const TermsOfAgreement = () => {
  return (
    <div className="p-6">
      <div className="mt-0">
        <div className="font-semibold text-lg">Terms of Agreement</div>
        <div className="grid grid-cols-1 gap-2 mt-2">
          {[
            { label: 'Security deposit', value: '0.5 Months' },
            { label: 'Agreement duration', value: '1 Month' },
            { label: 'Lock-in period', value: '0.5 Months' },
            { label: 'Notice period', value: '0.5 Months' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#D9D9D9] p-1 rounded-lg flex justify-between">
              <div className="text-sm text-gray-600">{label}:</div>
              <div className="text-sm text-gray-600">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfAgreement;