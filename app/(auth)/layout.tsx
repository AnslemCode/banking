import Image from "next/image";

export default function AuthtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="flex w-full min-h-screen justify-between font-inter">
        {children}
        <div className="auth-asset">
          <div>
            <Image
              src="/icons/auth-image.svg"
              alt="Auth image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </main>
    </html>
  );
}
