import React from 'react';

function TermsAndConditions() {
  return (
    <div>
      {/* Terms and Conditions */}
      <div className="bg-[#FFFFFF] rounded-[0.6rem] shadow-lg p-[3.8rem] w-[46rem] mx-auto mt-[6.3rem] mb-[6.3rem]"> {/* Added margin-bottom */}
        <div className="rounded-t-[0.6rem] bg-[#97644E] text-[#FFFFFF] font-semibold text-[1.3rem] py-[1.5rem] px-[3.1rem]">
          Terms and Conditions
        </div>
        <div className="p-[3.1rem] text-[#666666]">
          <p>Please read these Terms and Conditions carefully before using our website.</p>

          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Interpretation and Definitions</h2>
          <p>Interpretation</p>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Accounts</h2>
          <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Artisan and its licensors.</p>

          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Links To Other Web Sites</h2>
          <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Artisan.</p>
          <p>Artisan has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Artisan shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such web sites or services.</p>

          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Termination</h2>
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

          {/* You can add more sections as needed */}

        </div>
      </div>

      
    </div>
  );
}

export default TermsAndConditions;
