import { Header } from "@/components/organisms/header";
import { Sidebar } from "@/components/organisms/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-full relative flex flex-col">
        <div className="flex overflow-y-hidden h-full">
          <Sidebar />
          <div className="flex max-w-full flex-1 flex-col items-center overflow-y-auto p-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
