export default async function PortalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Клиентский портал</h1>
        <p className="text-muted-foreground">Проект: {slug}</p>
        <p className="text-sm text-muted-foreground mt-4">
          Статус, расписание, галерея, видео-пруфинг, чат.
        </p>
      </div>
    </div>
  );
}
