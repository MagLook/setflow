import { DEMO_CREW, AVAILABILITY_COLORS, AVAILABILITY_LABELS } from '@/shared/demo-data';

export default function ProjectCrewPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Команда проекта
          </h1>
          <p className="text-[11px] text-muted-foreground">{DEMO_CREW.length} человек назначено</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Добавить
        </button>
      </div>

      {/* Таблица — desktop */}
      <div className="hidden md:block">
        <table className="w-full border-separate border-spacing-y-1.5">
          <thead>
            <tr className="text-[10px] font-bold text-muted-foreground uppercase text-left">
              <th className="px-4 py-3">Имя</th>
              <th className="px-4 py-3">Роль в проекте</th>
              <th className="px-4 py-3">Компетенции</th>
              <th className="px-4 py-3">Ставка/день</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3">Контакт</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_CREW.map((member) => {
              const color = AVAILABILITY_COLORS[member.availability];
              return (
                <tr key={member.id} className="bg-di-surface-high hover:bg-di-surface-mid transition-colors">
                  <td className="px-4 py-4 first:rounded-l-xl last:rounded-r-xl">
                    <div className="font-semibold text-foreground text-sm">{member.name}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">{member.roleLabel}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-di-on-surface-variant">{member.projectRole}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {member.competencies.map((c) => (
                        <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-di-surface-mid text-di-on-surface-variant">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-headline font-bold text-foreground">
                      {member.ratePerDay.toLocaleString('ru-RU')} ₽
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full bg-${color}-500`} />
                      <span className={`text-[10px] font-bold uppercase text-${color}-600`}>
                        {AVAILABILITY_LABELS[member.availability]}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 first:rounded-l-xl last:rounded-r-xl text-sm text-di-on-surface-variant">
                    {member.phone}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Карточки — mobile */}
      <div className="md:hidden space-y-3">
        {DEMO_CREW.map((member) => {
          const color = AVAILABILITY_COLORS[member.availability];
          return (
            <div key={member.id} className={`bg-di-surface-mid rounded-xl p-3.5 border-l-4 border-l-blue-500`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground text-sm">{member.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full bg-${color}-500`} />
                  <span className={`text-[10px] font-bold uppercase text-${color}-600`}>
                    {AVAILABILITY_LABELS[member.availability]}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase">{member.roleLabel} — {member.projectRole}</p>
              <p className="text-sm text-di-on-surface-variant mt-1">{member.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
