import { Outlet } from 'react-router-dom';

import { ProfileSidebar } from '@/widgets/profile-sidebar';

import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar';

export const ProfileLayout = () => {
  return (
    <SidebarProvider>
      <ProfileSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
