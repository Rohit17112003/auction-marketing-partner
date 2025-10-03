import MainLayout from "@/components/templates/MainLayout";
import AddComplaints from "@/components/pages/complaints-cancellation/AddComplaints";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <AddComplaints />
    </MainLayout>
  );
};

export default page;
