export default async function ProjectDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Обзор проекта</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Статус" value="Планирование" />
        <DashboardCard title="Команда" value="0 чел." />
        <DashboardCard title="Съёмочные дни" value="0" />
        <DashboardCard title="Бюджет" value="—" />
      </div>
      <p className="text-sm text-muted-foreground mt-6">ID проекта: {id}</p>
    </div>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
