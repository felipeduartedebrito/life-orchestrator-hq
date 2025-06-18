
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Calendar, Clock, Check } from "lucide-react"

export default function Tasks() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tarefas</h1>
          <p className="text-muted-foreground">Gerencie suas atividades e compromissos</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Tarefa
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-700 dark:text-blue-300">Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">8</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-700 dark:text-green-300">Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">12</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-orange-700 dark:text-orange-300">Atrasadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">3</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-purple-700 dark:text-purple-300">Esta Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">15</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Tarefas</CardTitle>
          <CardDescription>Organize suas atividades por prioridade</CardDescription>
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
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${
                  task.completed ? 'bg-green-500 border-green-500' : 'border-muted-foreground'
                }`}>
                  {task.completed && <Check className="h-3 w-3 text-white" />}
                </div>
                
                <div className="flex-1 space-y-1">
                  <h3 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs">
                    <span className={`px-2 py-1 rounded-full ${
                      task.priority === 'Alta' ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300' :
                      task.priority === 'Média' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300' :
                      'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                    }`}>
                      {task.priority}
                    </span>
                    
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
