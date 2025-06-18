import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, Clock, Check, MoreHorizontal } from "lucide-react"

export default function Tasks() {
  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Tarefas</h1>
          <p className="text-slate-600 dark:text-slate-400">Gerencie suas atividades e compromissos</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4" />
          Nova Tarefa
        </Button>
      </div>

      {/* Stats Cards - NEUTRAS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-700 dark:text-slate-300">Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">8</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">tarefas abertas</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-700 dark:text-slate-300">Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">este mês</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-700 dark:text-slate-300">Atrasadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">3</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">precisam atenção</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-700 dark:text-slate-300">Esta Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">15</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">programadas</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Tarefas - FUNDO LIMPO */}
      <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">Lista de Tarefas</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">Organize suas atividades por prioridade</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                title: "Finalizar apresentação para cliente", 
                description: "Criar slides e preparar demo do produto",
                priority: "Alta", 
                dueDate: "Hoje, 16:00",
                completed: false
              },
              { 
                title: "Revisar código do projeto", 
                description: "Code review da feature de autenticação",
                priority: "Média", 
                dueDate: "Amanhã, 10:00",
                completed: false
              },
              { 
                title: "Reunião semanal da equipe", 
                description: "Alinhamento de objetivos e retrospectiva",
                priority: "Alta", 
                dueDate: "Amanhã, 14:00",
                completed: false
              },
              { 
                title: "Estudar novas tecnologias", 
                description: "Pesquisar sobre React Server Components",
                priority: "Baixa", 
                dueDate: "Sex, 18:00",
                completed: true
              },
            ].map((task, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${
                  task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-400 dark:border-slate-500'
                }`}>
                  {task.completed && <Check className="h-3 w-3 text-white" />}
                </div>
                
                <div className="flex-1 space-y-1">
                  <h3 className={`font-medium ${
                    task.completed 
                      ? 'line-through text-slate-500 dark:text-slate-400' 
                      : 'text-slate-900 dark:text-slate-100'
                  }`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{task.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs">
                    {/* BADGES NEUTROS */}
                    <Badge className={`px-2 py-1 rounded-full ${
                      task.priority === 'Alta' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                      task.priority === 'Média' 
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {task.priority}
                    </Badge>
                    
                    <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Clock className="h-3 w-3" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="mt-1">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filtros e Ações - CORES NEUTRAS */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Todas
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Pendentes
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Concluídas
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Atrasadas
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Filtrar por Data
          </Button>
        </div>
      </div>
    </div>
  )
}
