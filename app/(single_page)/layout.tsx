export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" place-self-center">
      <h1>Sub Layout</h1>
      {children}
    </main>
  );
}
