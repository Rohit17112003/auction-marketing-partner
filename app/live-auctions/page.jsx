import LiveAuctions from "@/components/pages/live-auctions";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <LiveAuctions />
    </MainLayout>
  );
};

export default page;
