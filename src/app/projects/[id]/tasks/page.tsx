import { DEMO_TASKS, DEMO_CREW, TASK_STATUS_META, TASK_PRIORITY_META } from '@/shared/demo-data';

export default function ProjectTasksPage() {
  const columns = ['todo', 'in_progress', 'done'] as const;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">Задачи</h1>
          <p className="text-[11px] text-muted-foreground">
            {DEMO_TASKS.length} задач · {DEMO_TASKS.filter((t) => t.status === 'done').length} выполнено
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Новая задача
        </button>
      </div>

      {/* Канбан */}
      <div className="grid grid-cols-3 gap-4">
        {columns.map((col) => {
          const meta = TASK_STATUS_META[col];
          const tasks = DEMO_TASKS.filter((t) => t.status === col);
          return (
            <div key={col}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full bg-${meta.color}-500`} />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {meta.label}
                </span>
                <span className="text-[10px] text-muted-foreground">({tasks.length})</span>
              </div>
              <div className="space-y-2">
                {tasks.map((task) => {
                  const prio = TASK_PRIORITY_META[task.priority];
                  return (
                    <div
                      key={task.id}
                      className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-3 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm text-foreground font-medium leading-snug">{task.title}</span>
                        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 bg-${prio.color}-500`} title={prio.label} />
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {task.tags.map((tag) => (
                          <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-di-surface-high text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                        <span>{task.assignee.split(' ')[0]}</span>
                        {task.shootDay && <span className="text-blue-500">{task.shootDay}</span>}
                        <span>{new Date(task.dueDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
