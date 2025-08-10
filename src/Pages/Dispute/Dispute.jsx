import React from 'react';

const Dispute = () => {
    return (
        <div className="max-w-[1300px] mx-auto my-14 px-5 lg:px-0">
      <h1 className="text-4xl md:text-5xl font-semibold mb-5">
        Dispute Resolution Policy
      </h1>
      <div className="flex flex-col gap-6 text-lg text-gray-600">
        <p>
          At SportSync, we aim to resolve all disputes quickly and fairly. This policy explains how disagreements will be handled between users and SportSync.
        </p>
        <p>
          <span className="text-gray-800 font-bold">1. Informal Resolution</span><br />
          If you have an issue, please first contact our customer support team at contact@sportsync.com with details of your complaint. We will attempt to resolve it within 14 business days.
        </p>
        <p>
          <span className="text-gray-800 font-bold">2. Mediation</span><br />
          If the issue cannot be resolved informally, both parties agree to attempt resolution through a neutral mediation service before taking legal action. Costs of mediation will be shared equally unless agreed otherwise
        </p>
        <p>
          <span className="text-gray-800 font-bold">3. Arbitration</span><br />
          If mediation fails, disputes will be resolved by binding arbitration under the rules of [Insert Arbitration Body], conducted in Berlin, Germany, in English. The arbitrator’s decision will be final and enforceable in court.
        </p>
        <p>
          <span className="text-gray-800 font-bold">4. Governing Law</span><br />
          This policy is governed by the laws of Germany.
        </p>
        <p>
          <span className="text-gray-800 font-bold">5. Exceptions</span><br />
          This policy does not prevent either party from seeking urgent legal remedies, such as injunctions, in appropriate circumstances.
        </p>
      </div>
    </div>
    );
};

export default Dispute;