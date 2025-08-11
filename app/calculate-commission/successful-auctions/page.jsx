import SuccessfulAuctions from "@/components/pages/calculate-commission/SuccessfulAuctions";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <SuccessfulAuctions />
    </MainLayout>
  );
};

export default page;
