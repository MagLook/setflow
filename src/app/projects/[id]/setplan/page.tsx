import { DEMO_SET_PLANS } from '@/shared/demo-data';
import { Map } from 'lucide-react';

export default function ProjectSetPlanPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            План площадки
          </h1>
          <p className="text-[11px] text-muted-foreground">{DEMO_SET_PLANS.length} плана</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Новый план
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {DEMO_SET_PLANS.map((plan) => (
          <div
            key={plan.id}
            className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4 cursor-pointer group"
          >
            {/* Превью canvas — заглушка */}
            <div className="aspect-video rounded-lg bg-di-surface-lowest border border-di-outline-variant/15 flex items-center justify-center mb-4">
              <div className="text-center">
                <Map className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <span className="text-[10px] text-muted-foreground">2D-редактор</span>
              </div>
            </div>

            <h3 className="font-headline font-bold text-foreground group-hover:text-blue-500 transition-colors">
              {plan.name}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground">
              <span>{plan.shootDay}</span>
              <span>·</span>
              <span>{plan.elements} элементов</span>
              <span>·</span>
              <span>Обновлён {new Date(plan.updatedAt).toLocaleDateString('ru-RU')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
