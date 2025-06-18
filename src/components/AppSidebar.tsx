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

  // Função para verificar se a rota está ativa
  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(path)
  }

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
          <SidebarGroupLabel className={`${collapsed ? "sr-only" : ""} text-slate-600 dark:text-slate-400 px-2 py-2 text-xs font-medium uppercase tracking-wider`}>
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => {
                const active = isActive(item.url)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end={item.url === "/"}
                        style={{
                          backgroundColor: active ? 'rgb(239, 246, 255)' : 'transparent',
                          color: active ? 'rgb(29, 78, 216)' : 'rgb(71, 85, 105)',
                          border: active ? '1px solid rgb(191, 219, 254)' : '1px solid transparent'
                        }}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 ${
                          active ? 'shadow-sm' : ''
                        }`}
                      >
                        <item.icon className={`h-5 w-5 flex-shrink-0 ${
                          active 
                            ? "text-blue-600 dark:text-blue-300" 
                            : "text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                        }`} />
                        {!collapsed && (
                          <span className={`font-medium ${
                            active 
                              ? "text-blue-700 dark:text-blue-300" 
                              : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                          }`}>
                            {item.title}
                          </span>
                        )}
                        
                        {/* Indicador visual ativo */}
                        {active && !collapsed && (
                          <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className={`${collapsed ? "sr-only" : ""} text-slate-600 dark:text-slate-400 px-2 py-2 text-xs font-medium uppercase tracking-wider`}>
            Configurações
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => {
                const active = isActive(item.url)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url}
                        style={{
                          backgroundColor: active ? 'rgb(239, 246, 255)' : 'transparent',
                          color: active ? 'rgb(29, 78, 216)' : 'rgb(71, 85, 105)',
                          border: active ? '1px solid rgb(191, 219, 254)' : '1px solid transparent'
                        }}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 ${
                          active ? 'shadow-sm' : ''
                        }`}
                      >
                        <item.icon className={`h-5 w-5 flex-shrink-0 ${
                          active 
                            ? "text-blue-600 dark:text-blue-300" 
                            : "text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                        }`} />
                        {!collapsed && (
                          <span className={`font-medium ${
                            active 
                              ? "text-blue-700 dark:text-blue-300" 
                              : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                          }`}>
                            {item.title}
                          </span>
                        )}
                        
                        {/* Indicador visual ativo */}
                        {active && !collapsed && (
                          <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}