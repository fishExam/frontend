import { Link } from 'react-router-dom';

import { type TUser, useUserStore } from '@/entities/user';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared';

import { studentItems, teacherItems } from '../model/consts';

export const ProfileSidebar = () => {
  const user = useUserStore((state) => state.user) as TUser;
  const userItems = user.role === 'student' ? studentItems : teacherItems;

  return (
    <Sidebar>
      <SidebarHeader className="font-bold text-lg">Профиль</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link to={item.url}>
                    <SidebarMenuButton>
                      <item.icon />
                      <p>{item.title}</p>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
