
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, BarChart, Clock, Plus, Check, ArrowUp, ArrowDown } from "lucide-react"

export default function Dashboard() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Bom dia! 👋
        </h1>
        <p className="text-lg text-muted-foreground capitalize">
          {today}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Tarefas Hoje</CardTitle>
              <Calendar className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs opacity-90">3 concluídas</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Saldo</CardTitle>
              <BarChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.450</div>
            <p className="text-xs opacity-90 flex items-center gap-1">
              <ArrowUp className="h-3 w-3" />
              +12% este mês
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Hábitos</CardTitle>
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs opacity-90">Hoje cumpridos</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Metas Ativas</CardTitle>
              <Plus className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs opacity-90">2 próximas do prazo</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tarefas de Hoje */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Tarefas de Hoje</CardTitle>
                <CardDescription>Suas atividades programadas</CardDescription>
              </div>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Nova Tarefa
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { task: "Revisar relatório mensal", time: "09:00", completed: true },
              { task: "Reunião com equipe", time: "14:00", completed: false },
              { task: "Exercitar-se", time: "18:00", completed: false },
              { task: "Estudar React", time: "20:00", completed: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    item.completed ? 'bg-green-500 border-green-500' : 'border-muted-foreground'
                  }`}>
                    {item.completed && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <div>
                    <p className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {item.task}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Progresso de Metas */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progresso de Metas</CardTitle>
              <CardDescription>Suas metas em andamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Economizar R$ 5.000</span>
                  <span>R$ 2.450 / R$ 5.000</span>
                </div>
                <Progress value={49} className="h-2" />
                <p className="text-xs text-muted-foreground">49% concluído</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ler 12 livros</span>
                  <span>7 / 12</span>
                </div>
                <Progress value={58} className="h-2" />
                <p className="text-xs text-muted-foreground">58% concluído</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Perder 10kg</span>
                  <span>4kg / 10kg</span>
                </div>
                <Progress value={40} className="h-2" />
                <p className="text-xs text-muted-foreground">40% concluído</p>
              </div>
            </CardContent>
          </Card>

          {/* Hábitos de Hoje */}
          <Card>
            <CardHeader>
              <CardTitle>Hábitos de Hoje</CardTitle>
              <CardDescription>Mantenha sua rotina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { habit: "Beber 2L de água", completed: true, streak: 15 },
                { habit: "Meditar 10min", completed: true, streak: 8 },
                { habit: "Exercitar-se", completed: false, streak: 12 },
                { habit: "Ler 30 páginas", completed: true, streak: 5 },
                { habit: "Dormir 8h", completed: false, streak: 3 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      item.completed ? 'bg-green-500 border-green-500' : 'border-muted-foreground'
                    }`}>
                      {item.completed && <Check className="h-2.5 w-2.5 text-white" />}
                    </div>
                    <span className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {item.habit}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.streak} dias
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
