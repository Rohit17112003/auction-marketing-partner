import AllVendors from "@/components/pages/all-vendors";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <AllVendors />
    </MainLayout>
  );
};

export default page;
