import React from "react";
import DocsHeader from "../../components/public/docs/DocsHeader";
import DocsSections from "../../components/public/docs/DocsSections";
import DocsCodeExample from "../../components/public/docs/DocsCodeExample";
import DocsFAQ from "../../components/public/docs/DocsFAQ";
import Footer from "../../components/public/global/Footer";

const Docs = () => {
  return (
    <div className="bg-[#121216] min-h-screen pt-[100px] pb-[40px] px-6">
      <DocsHeader />
      <DocsSections />
      <DocsCodeExample />
      <DocsFAQ />
      <Footer />
    </div>
  );
};

export default Docs;
