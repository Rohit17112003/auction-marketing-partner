import MainLayout from "@/components/templates/MainLayout";
import VendorCommentCard from "@/components/pages/complaints-cancellation/VendorCommentCard";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <VendorCommentCard />
    </MainLayout>
  );
};

export default page;
