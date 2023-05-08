export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid place-self-center bg-gradient-to-b from-slate-600 to-slate-400 h-full">
      <div className="place-self-center flex flex-col justify-center items-center bg-white rounded p-8 shadow-xl shadow-stone-500">
        {children}
      </div>
    </div>
  );
}
