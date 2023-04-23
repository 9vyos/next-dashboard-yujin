export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Main Layout</h1>
      {children}
    </>
  );
}
