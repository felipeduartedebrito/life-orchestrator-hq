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

  const getNavCls = ({ isActive: active }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
      active 
        ? "bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100 shadow-sm" 
        : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
    }`

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700`} collapsible="icon">
      {/* Header da Sidebar */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">LifeOS</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">Versão 1.0</p>
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo da Sidebar */}
      <SidebarContent className="px-2 bg-white dark:bg-slate-900">
        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? "sr-only" : ""} text-slate-600 dark:text-slate-400`}>
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
          <SidebarGroupLabel className={`${collapsed ? "sr-only" : ""} text-slate-600 dark:text-slate-400`}>
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