import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import BanquetTable from "@/components/Banquetlist";

export const metadata: Metadata = {
  title: "List Of Banquet",
  description:
    "This is the List Of the Banquet",
};

const ListPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Banquet List" />
        <BanquetTable />
      </div>
    </DefaultLayout>
  );
};

export default ListPage;


