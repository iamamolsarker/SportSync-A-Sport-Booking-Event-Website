import React from 'react';

const Cookie = () => {
    return (
        <div className="max-w-[1300px] mx-auto my-14 px-5 lg:px-0">
      <h1 className="text-4xl md:text-5xl font-semibold mb-5">
        Cookie Policy
      </h1>
      <div className="flex flex-col gap-6 text-lg text-gray-600">
        <p>
          This Cookie Policy explains how SportSync uses cookies and similar technologies to improve your browsing experience on our Platform.
        </p>
        <p>
          <span className="text-gray-800 font-bold">1. What Are Cookies?</span><br />
          Cookies are small text files placed on your device when you visit a website. They help remember your preferences, improve website performance, and provide analytics.
        </p>
        <p>
          <span className="text-gray-800 font-bold">2. Types of Cookies We Use</span>
          <ul className="list-disc pl-5">
            <li>Essential Cookies: Necessary for the operation of the Platform, such as enabling secure logins and ticket purchases.</li>
            <li>Performance Cookies: Collect anonymous data about how visitors use our Platform to help improve functionality.</li>
            <li>Functional Cookies: Remember your preferences, such as language and location.</li>
            <li>Marketing Cookies: Track browsing habits to provide relevant advertising.</li>
          </ul>
        </p>
        <p>
          <span className="text-gray-800 font-bold">3. Managing Cookies</span><br />
          You can control or delete cookies through your browser settings. Disabling cookies may affect your experience on our Platform.
        </p>
        <p>
          <span className="text-gray-800 font-bold">4. Third-Party Cookies</span><br />
         Some cookies may be placed by third-party service providers, such as analytics or payment gateways.
        </p>
        <p>
          <span className="text-gray-800 font-bold">5. Changes</span><br />
         We may update this Cookie Policy at any time. Updates will be posted on this page with a new effective date.
        </p>
      </div>
    </div>
    );
};

export default Cookie;