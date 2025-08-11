import BidderEnrollment from "@/components/pages/calculate-commission/BidderEnrollment";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <BidderEnrollment />
    </MainLayout>
  );
};

export default page;
