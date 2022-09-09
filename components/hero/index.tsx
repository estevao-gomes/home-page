export function Hero() {
  return (
    <section id="home" className="flex h-screen border-2 border-green-500">
      {/* Margin top to keep navbar appearing */}
      <div className="h-full flex-1 border-2 border-green-900">
        <h1 className="mt-6">Hero Text</h1>
      </div>
      <div className="h-full flex-1 border-2 border-green-900">
        <h1 className="mt-6">Hero Image</h1>
      </div>
    </section>
  );
}
