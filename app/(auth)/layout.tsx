export default function AuthtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>{children}</main>
    </html>
  );
}
