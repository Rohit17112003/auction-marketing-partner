import ComplaintsCancellation from "@/components/pages/complaints-cancellation";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <ComplaintsCancellation />
    </MainLayout>
  );
};

export default page;
