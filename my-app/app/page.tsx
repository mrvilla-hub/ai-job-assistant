import Layout from "@/components/Dashboard/Layout";
import StatCard from "@/components/dashboard/StatCard";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Jobs Found"
            value="0"
          />

          <StatCard
            title="Applications"
            value="0"
          />

          <StatCard
            title="Interviews"
            value="0"
          />

          <StatCard
            title="Saved Jobs"
            value="0"
          />

        </div>
      </div>
    </Layout>
  );
}