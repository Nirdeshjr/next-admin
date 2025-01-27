import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Banquet from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Banquet",
  description:
    "This is to Contact the Banquet",
};

const contactform = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Contact Banquet" />
        <Banquet />
      </div>
    </DefaultLayout>
  );
};

export default contactform;
