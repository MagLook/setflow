import { DEMO_NOTES, NOTE_TYPE_COLORS } from '@/shared/demo-data';
import { FileText, Search } from 'lucide-react';

export default function ProjectKnowledgePage() {
  const allTags = [...new Set(DEMO_NOTES.flatMap((n) => n.tags))];

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            База знаний
          </h1>
          <p className="text-[11px] text-muted-foreground">
            {DEMO_NOTES.length} записей — сценарии, мудборды, заметки, справочники
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Новая запись
        </button>
      </div>

      {/* Поиск + теги */}
      <div className="bg-di-surface-mid rounded-xl border border-transparent p-4 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 flex items-center gap-2 border border-di-outline-variant/20 bg-di-surface-lowest rounded-md px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Поиск по базе знаний...</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-md bg-di-surface-high text-di-on-surface-variant hover:bg-di-surface-lowest cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Список записей */}
      <div className="space-y-3">
        {DEMO_NOTES.map((note) => {
          const color = NOTE_TYPE_COLORS[note.type] || 'gray';
          return (
            <div
              key={note.id}
              className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-${color}-500/15 text-${color}-500`}>
                      {note.typeLabel}
                    </span>
                    <div className="flex gap-1">
                      {note.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-di-surface-high text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-headline font-bold text-foreground group-hover:text-blue-500 transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-sm text-di-on-surface-variant mt-1 line-clamp-2">
                    {note.content.split('\n').filter(l => l.trim() && !l.startsWith('#') && !l.startsWith('|')).slice(0, 2).join(' ').slice(0, 150)}...
                  </p>
                </div>
                <FileText className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-center gap-3 mt-3 text-[10px] text-muted-foreground">
                <span>{note.author}</span>
                <span>·</span>
                <span>{new Date(note.updatedAt).toLocaleDateString('ru-RU')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
