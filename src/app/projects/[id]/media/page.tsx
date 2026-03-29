import { DEMO_ALBUMS, DEMO_MEDIA_FILES, DEMO_REVIEW_ROUNDS } from '@/shared/demo-data';
import { Image, Film, Star, Upload, Eye, MessageSquare, Clock } from 'lucide-react';

export default function ProjectMediaPage() {
  const totalPhotos = DEMO_MEDIA_FILES.filter((f) => f.type === 'photo').length;
  const totalVideos = DEMO_MEDIA_FILES.filter((f) => f.type === 'video').length;
  const favorites = DEMO_MEDIA_FILES.filter((f) => f.favorited).length;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Медиа
          </h1>
          <p className="text-[11px] text-muted-foreground">
            {totalPhotos} фото, {totalVideos} видео · {favorites} в избранном
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Загрузить
        </button>
      </div>

      {/* KPI */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Альбомы</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">{DEMO_ALBUMS.length}</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Файлы</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">{DEMO_MEDIA_FILES.length}</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Избранное</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">{favorites}</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Видео-ревью</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">{DEMO_REVIEW_ROUNDS.length}</span>
        </div>
      </div>

      {/* Альбомы */}
      <div className="mb-8">
        <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Альбомы
        </h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {DEMO_ALBUMS.map((album) => (
            <div
              key={album.id}
              className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all cursor-pointer group overflow-hidden"
            >
              <div className={`aspect-square bg-gradient-to-br ${album.coverColor} flex items-center justify-center`}>
                <Image className="h-8 w-8 text-white/60" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors truncate">
                  {album.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-muted-foreground">{album.count} файлов</span>
                  {album.isClientVisible && (
                    <span className="flex items-center gap-1 text-[10px] text-green-600">
                      <Eye className="h-3 w-3" />
                      Клиент
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Видео-пруфинг */}
      <div className="mb-8">
        <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Видео-пруфинг
        </h2>
        <div className="space-y-3">
          {DEMO_REVIEW_ROUNDS.map((round) => (
            <div
              key={round.id}
              className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              {/* Превью */}
              <div className="w-full sm:w-32 h-20 flex-shrink-0 rounded-lg bg-di-surface-lowest flex items-center justify-center">
                <Film className="h-6 w-6 text-blue-500" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                    round.status === 'review'
                      ? 'bg-amber-500/15 text-amber-500'
                      : 'bg-di-surface-high text-muted-foreground'
                  }`}>
                    {round.statusLabel}
                  </span>
                  <span className="text-[10px] text-muted-foreground">v{round.version}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">{round.title}</h3>
                <div className="flex items-center gap-4 mt-1.5 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {round.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {round.comments} комментариев
                  </span>
                  <span>Дедлайн: {new Date(round.deadline).toLocaleDateString('ru-RU')}</span>
                </div>
              </div>

              {round.status === 'review' && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5 text-xs font-semibold transition-colors flex-shrink-0">
                  Открыть
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Последние файлы */}
      <div>
        <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Последние файлы
        </h2>
        <table className="hidden md:table w-full border-separate border-spacing-y-1.5">
          <thead>
            <tr className="text-[10px] font-bold text-muted-foreground uppercase text-left">
              <th className="px-4 py-2">Файл</th>
              <th className="px-4 py-2">Альбом</th>
              <th className="px-4 py-2">Теги</th>
              <th className="px-4 py-2">Размер</th>
              <th className="px-4 py-2">Дата</th>
              <th className="px-4 py-2 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {DEMO_MEDIA_FILES.map((file) => (
              <tr key={file.id} className="bg-di-surface-high hover:bg-di-surface-mid transition-colors">
                <td className="px-4 py-3 first:rounded-l-xl">
                  <div className="flex items-center gap-2">
                    {file.type === 'photo' ? (
                      <Image className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Film className="h-4 w-4 text-purple-500" />
                    )}
                    <span className="text-sm text-foreground font-mono">{file.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-di-on-surface-variant">{file.album}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    {file.tags.map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-di-surface-mid text-di-on-surface-variant">{t}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{file.size}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{file.date.split(' ')[1]}</td>
                <td className="px-4 py-3 last:rounded-r-xl">
                  {file.favorited && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Mobile cards */}
        <div className="md:hidden space-y-2">
          {DEMO_MEDIA_FILES.map((file) => (
            <div key={file.id} className="bg-di-surface-mid rounded-xl p-3 flex items-center gap-3">
              {file.type === 'photo' ? (
                <Image className="h-5 w-5 text-blue-500 flex-shrink-0" />
              ) : (
                <Film className="h-5 w-5 text-purple-500 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <span className="text-sm text-foreground font-mono block truncate">{file.name}</span>
                <span className="text-[10px] text-muted-foreground">{file.size} · {file.date.split(' ')[1]}</span>
              </div>
              {file.favorited && <Star className="h-4 w-4 text-amber-500 fill-amber-500 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
