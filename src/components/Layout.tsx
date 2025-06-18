import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white dark:bg-slate-900">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header Moderno e Conectado */}
          <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 shadow-sm">
            {/* Lado Esquerdo */}
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md p-2 transition-colors text-slate-600 dark:text-slate-400" />
              
              {/* Logo e Título */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <div className="hidden md:block">
                  <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    LifeOS
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Sistema de Gestão Pessoal
                  </p>
                </div>
              </div>
            </div>

            {/* Centro - Barra de Pesquisa */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Buscar tarefas, hábitos, metas..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:bg-white dark:focus:bg-slate-700 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Lado Direito */}
            <div className="flex items-center gap-2">
              {/* Botão de Pesquisa Mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden w-9 h-9 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Notificações */}
              <Button
                variant="ghost"
                size="sm"
                className="relative w-9 h-9 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
                  3
                </span>
              </Button>

              {/* Configurações */}
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                <Settings className="h-4 w-4" />
              </Button>

              {/* Toggle de Tema */}
              <div className="border-l border-slate-200 dark:border-slate-700 pl-2 ml-2">
                <ThemeToggle />
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

// Manter compatibilidade
export default Layout