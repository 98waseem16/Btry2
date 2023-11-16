import Heading from "@/components/Heading";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function LoadingBotsPage() {
  return (
    <main>
      <Heading
        title="Datasets"
        description="Find all you chat conversations..."
      ></Heading>

      <section className="container mt-10">
        <h2 className="mb-5 text-lg font-medium">Your datasets</h2>
        <div className="w-full h-[16rem] flex flex-col items-center justify-center border border-zinc-300 rounded-lg border-dashed">
          <LoadingSpinner />
        </div>
      </section>
    </main>
  );
}
