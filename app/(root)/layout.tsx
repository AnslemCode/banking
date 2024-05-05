import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedInUser = await getLoggedInUser();
  if (!LoggedInUser) redirect("/sign-in");
  return (
    <html lang="en">
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={LoggedInUser} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="Logo" />
            <div>
              <MobileNav user={LoggedInUser} />
            </div>
          </div>
          {children}
        </div>
      </main>
    </html>
  );
}
