import React from 'react';

function PrivacyPolicy() {
  return (
    <div>
      {/* Privacy Policy */}
      <div className="bg-[#FFFFFF] rounded-[0.6rem] shadow-lg p-[3.8rem] w-[46rem] mx-auto mt-[6.3rem] mb-[6.3rem]"> {/* Added margin-bottom */}
        <div className="rounded-t-[0.6rem] bg-[#97644E] text-[#FFFFFF] font-semibold text-[1.3rem] py-[1.5rem] px-[3.1rem]">
          Privacy Policy
        </div>
        <div className="p-[3.1rem] text-[#666666]">
          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Information We Collect</h2>
          <p>We may collect various types of information when you visit our Website, including:</p>
          <ul className="list-disc list-inside">
            <li>Personal Information: We may collect personal information such as your name, email address, postal address, and phone number when voluntarily submitted by you.</li>
            <li>Log Data: We may also collect information that your browser sends whenever you visit our Website. This may include your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</li>
            <li>Cookies: We use cookies and similar tracking technologies to track the activity on our Website and hold certain information.</li>
          </ul>
          
          {/* Additional Sections */}
          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul className="list-disc list-inside">
            <li>Providing, maintaining, and improving our services</li>
            <li>Personalizing content and advertisements</li>
            <li>Analyzing usage and trends</li>
            <li>Communicating with you</li>
          </ul>

          <h2 className="text-[#97644E] text-[1.6rem] font-semibold mb-[1.5rem]">Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with:</p>
          <ul className="list-disc list-inside">
            <li>Service providers who assist us in operating our website or providing services to you</li>
            <li>Third-party vendors who help us analyze our website's performance and user engagement</li>
            <li>Legal authorities when required by law or to protect our rights and safety</li>
          </ul>

          {/* You can add more sections as needed */}

        </div>
      </div>
      </div>

      
  );
}

export default PrivacyPolicy;
