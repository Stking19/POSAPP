import Sidebar from "@/components/admin/sidebar/sidebar";
import Navbar from "@/components/admin/navbar/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col w-[81%]">
        <Navbar />
        <main className="w-full h-full flex flex-col p-6 bg-gray-100 rounded-tl-xl">{children}</main>
      </div>
    </div>
  );
}
