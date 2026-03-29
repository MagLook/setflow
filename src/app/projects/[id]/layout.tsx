import { AppShell } from '@/components/layout/app-shell';
import { TopBar } from '@/components/layout/top-bar';
import { ProjectNav, ProjectNavCollapsed } from './project-nav';
import { ProjectLeftPanel, ProjectLeftPanelIcons } from './project-left-panel';
import { ProjectRightPanel, ProjectRightPanelIcons } from './project-right-panel';
import { ProjectTabs } from './project-tabs';

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
      leftPanel={<ProjectLeftPanel projectId={id} />}
      leftPanelIcons={<ProjectLeftPanelIcons />}
      centerTabs={<ProjectTabs projectId={id} />}
      center={<div className="p-6">{children}</div>}
      rightPanel={<ProjectRightPanel projectId={id} />}
      rightPanelIcons={<ProjectRightPanelIcons />}
    />
  );
}
