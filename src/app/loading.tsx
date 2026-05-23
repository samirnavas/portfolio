import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto space-y-section-gap animate-pulse">
        {/* Hero Section Skeleton */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 space-y-8 pr-0 md:pr-12">
            <div className="h-16 md:h-24 bg-surface-container-highest rounded-2xl w-full"></div>
            <div className="h-16 md:h-24 bg-surface-container-highest rounded-2xl w-3/4"></div>
            <div className="space-y-4 pt-4">
              <div className="h-4 bg-surface-container-highest rounded w-full"></div>
              <div className="h-4 bg-surface-container-highest rounded w-5/6"></div>
            </div>
            <div className="flex gap-3 pt-4">
              <div className="h-10 w-24 bg-surface-container-highest rounded-full"></div>
              <div className="h-10 w-24 bg-surface-container-highest rounded-full"></div>
              <div className="h-10 w-32 bg-surface-container-highest rounded-full"></div>
            </div>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0">
            <div className="w-full aspect-square bg-surface-container-highest rounded-2xl"></div>
          </div>
        </section>

        {/* Gallery Skeleton */}
        <section>
          <div className="mb-12 border-b border-outline-variant pb-4 flex gap-8 items-end">
             <div className="h-8 w-48 bg-surface-container-highest rounded mr-auto"></div>
             <div className="flex gap-8 hidden sm:flex">
                <div className="h-6 w-16 bg-surface-container-highest rounded"></div>
                <div className="h-6 w-16 bg-surface-container-highest rounded"></div>
                <div className="h-6 w-16 bg-surface-container-highest rounded"></div>
             </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-surface-container-highest rounded-2xl"></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
