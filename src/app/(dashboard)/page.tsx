export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Обзор дня</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Съёмки сегодня" value="0" />
        <DashboardCard title="Команда" value="0 чел." />
        <DashboardCard title="Оборудование" value="0 ед." />
        <DashboardCard title="Активные проекты" value="0" />
      </div>
    </div>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
