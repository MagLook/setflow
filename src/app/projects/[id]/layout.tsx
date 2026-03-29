import { AppShell } from '@/components/layout/app-shell';
import { TopBar } from '@/components/layout/top-bar';
import { ProjectNav, ProjectNavCollapsed } from './project-nav';
import { ProjectLeftPanel, ProjectLeftPanelIcons } from './project-left-panel';
import { ProjectRightPanel, ProjectRightPanelIcons } from './project-right-panel';
import { ProjectTabs } from './project-tabs';
import { ProjectMobileNav } from './project-mobile-nav';

function LeftHeader() {
  return (
    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
      Контекст
    </span>
  );
}

function RightHeader() {
  return (
    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest ml-2">
      AI-ассистент
    </span>
  );
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AppShell
      topBar={<TopBar />}
      nav={<ProjectNav projectId={id} />}
      navCollapsedContent={<ProjectNavCollapsed projectId={id} />}
      mobileNav={<ProjectMobileNav projectId={id} />}
      leftPanel={<ProjectLeftPanel projectId={id} />}
      leftPanelIcons={<ProjectLeftPanelIcons />}
      leftPanelHeader={<LeftHeader />}
      centerTabs={<ProjectTabs projectId={id} />}
      center={<div className="p-4 md:p-6">{children}</div>}
      rightPanel={<ProjectRightPanel projectId={id} />}
      rightPanelIcons={<ProjectRightPanelIcons />}
      rightPanelHeader={<RightHeader />}
    />
  );
}
