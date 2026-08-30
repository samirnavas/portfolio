import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] mx-auto pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 space-y-24 md:space-y-32 lg:space-y-40 animate-pulse">
        {/* Hero Section Skeleton */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6">
            <div className="space-y-4">
              <div className="h-12 md:h-16 bg-surface-container-highest rounded-2xl w-full"></div>
              <div className="h-12 md:h-16 bg-surface-container-highest rounded-2xl w-3/4"></div>
            </div>
            <div className="space-y-3 pt-4">
              <div className="h-5 bg-surface-container-highest rounded w-full"></div>
              <div className="h-5 bg-surface-container-highest rounded w-4/5"></div>
            </div>
            <div className="flex gap-3 pt-4">
              <div className="h-10 w-28 bg-surface-container-highest rounded-full"></div>
              <div className="h-10 w-28 bg-surface-container-highest rounded-full"></div>
              <div className="h-10 w-36 bg-surface-container-highest rounded-full"></div>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-end mt-12 lg:mt-0">
            <div className="w-full max-w-[460px] xl:max-w-[500px] aspect-square bg-surface-container-highest rounded-3xl"></div>
          </div>
        </section>

        {/* Capabilities Skeleton */}
        <section>
          <div className="mb-10 md:mb-14 border-b border-outline-variant pb-4">
            <div className="h-8 w-48 bg-surface-container-highest rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-8 lg:p-10 xl:p-12 border border-outline-variant rounded-3xl bg-surface-container-lowest h-60 flex flex-col justify-between"
              >
                <div className="h-5 w-32 bg-surface-container-highest rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-surface-container-highest rounded"></div>
                  <div className="h-4 w-4/5 bg-surface-container-highest rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Skeleton */}
        <section>
          <div className="mb-10 md:mb-14 border-b border-outline-variant pb-4 flex gap-8 items-end justify-between">
            <div className="h-8 w-56 bg-surface-container-highest rounded"></div>
            <div className="flex gap-8 hidden sm:flex">
              <div className="h-5 w-24 bg-surface-container-highest rounded"></div>
              <div className="h-5 w-20 bg-surface-container-highest rounded"></div>
              <div className="h-5 w-20 bg-surface-container-highest rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-start">
            {[1.25, 1.33, 1.33, 1.25, 1.25, 1.41, 1, 1].map((ratio, i) => (
              <div
                key={i}
                style={{ aspectRatio: `${ratio}` }}
                className="bg-surface-container-highest rounded-2xl md:rounded-3xl"
              ></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
