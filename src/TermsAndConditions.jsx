import React from "react";
import Footer from "./footer.jsx";
import logo from "./logo.png";
import puv from "./puv.png";

export default function TermsAndConditions() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <div className="p-8 flex items-center justify-between border-b bg-white shadow-md">
          <h1
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "#277cfcf9" }}
          >
             పట్టుసాళి ఉపాది వేదిక
          </h1>
        <img
          src={puv}
          alt="Pattusalli Upadi Vedika Logo"
          className="h-16 md:h-20 lg:h-24"
        />
      </div>

      {/* Main Content – Two clearly separated sections */}
      <div className="p-8 flex-1 space-y-8 text-gray-900">
        {/* SECTION 1: Applicants */}
        <section className="border rounded-xl p-6 bg-white shadow-sm">
          {/* Tag / identifier */}
          <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
            For Applicants
          </span>

          {/* Telugu Heading */}
          <h1
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "#2380dcf9" }}
          >
            🎯 పట్టుసాళి ఉపాది వేదిక
          </h1>

          <h2
            className="text-xl font-semibold mt-2 mb-4"
            style={{ color: "#fc4327f9" }}
          >
           📜 Terms &amp; Conditions
          </h2>

          <ol className="list-decimal pl-6 space-y-3 mt-2">
            <li>
              The information provided in your CV will be kept confidential and
              will be circulated only as required for the purpose mentioned.
            </li>

            <li>
              Please note this is not a guarantee for employment; we make
              an effort to refer your application to an appropriate employer or
              connect you with respective industry experts from Pattusalli
              Community.
            </li>

            <li>
              All communications from the Upadi Vedika will be in the form of
              email only. Any communications on WhatsApp or social media are not
              entertained at this point of time.
            </li>

            <li>
              This service is provided strictly on a voluntary basis.
            </li>

            <li>
              Applicants are not required or mandated to remit any form of
              fee or compensation for this service. Furthermore, any commercial
              agreements or transactions entered into between the applicant and any
              third party are conducted at the applicant&apos;s sole discretion, and the
              platform owner assumes no liability or responsibility for such
              arrangements.
            </li>
          </ol>
        </section>

        {/* SECTION 2: Volunteers */}
        <section className="border rounded-xl p-6 bg-white shadow-sm">
          {/* Tag / identifier */}
          <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
            For Volunteers
          </span>

          {/* Telugu Heading */}
          <h1
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "#2380dcf9" }}
          >
           🙌 పట్టుసాళి ఉపాది వేదిక – స్వచ్ఛంధ సేవకులు
          </h1>

          <h2
            className="text-xl font-semibold mt-2 mb-4"
            style={{ color: "#fc4327f9" }}
          >
           🤝 Guidelines for Volunteers
          </h2>

          <ol className="list-decimal pl-6 space-y-3 mt-2">
            <li>
              The data you share shall remain confidential.
            </li>

            <li>
              Based on requests received through email
              (<span className="font-mono">UpadhiVedika@startitnow.co.in</span>),
              only relevant data will be provided to the respective volunteer
              regarding the applicants.
            </li>

            <li>
              Data provided to volunteers is expected to be kept confidential,
              and volunteers are equally responsible for maintaining privacy.
            </li>

            <li>
              All communications from the Upadhi Vedika will be in the form of
              email only. Any communications on WhatsApp or social media are not
              entertained at this point of time.
            </li>
          </ol>
        </section>
      </div>

      <Footer />
    </div>
  );
}
