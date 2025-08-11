import VendorEnrollment from "@/components/pages/calculate-commission/VendorEnrollment";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <VendorEnrollment />
    </MainLayout>
  );
};

export default page;
