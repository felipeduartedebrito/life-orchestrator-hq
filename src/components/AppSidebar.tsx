
import { useState } from "react"
import { Calendar, Settings, User, BarChart, Clock, Plus } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Dashboard", url: "/", icon: BarChart },
  { title: "Tarefas", url: "/tasks", icon: Calendar },
  { title: "Finanças", url: "/finances", icon: BarChart },
  { title: "Hábitos", url: "/habits", icon: Clock },
  { title: "Metas", url: "/goals", icon: Plus },
]

const settingsItems = [
  { title: "Perfil", url: "/profile", icon: User },
  { title: "Configurações", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive: active }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
      active 
        ? "bg-primary text-primary-foreground shadow-sm" 
        : "hover:bg-accent text-foreground hover:text-accent-foreground"
    }`

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <div className="p-4 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
            <span className="text-white dark:text-slate-900 font-bold text-sm">L</span>
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-foreground">LifeOS</h2>
              <p className="text-xs text-muted-foreground">Versão 1.0</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Configurações
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
