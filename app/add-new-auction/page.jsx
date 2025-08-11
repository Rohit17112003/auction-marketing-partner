import AddAuction from "@/components/pages/add-new-auction";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <AddAuction />
    </MainLayout>
  );
};

export default page;
