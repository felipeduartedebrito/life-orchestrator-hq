import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Calendar, 
  CheckCircle, 
  Clock,
  Plus,
  ArrowUp,
  ArrowDown
} from "lucide-react"

export default function Dashboard() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="space-y-6 fade-in">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Bom dia! 👋
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 capitalize">
          {today}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Receita Mensal
            </CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 12.450</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <ArrowUp className="h-3 w-3 text-emerald-600" />
              <span className="text-emerald-600">+12%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Metas Alcançadas
            </CardTitle>
            <Target className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">7/10</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              3 metas restantes este mês
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Produtividade
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">89%</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <ArrowUp className="h-3 w-3 text-emerald-600" />
              <span className="text-emerald-600">+5%</span> esta semana
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Tarefas Pendentes
            </CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">23</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              5 com prazo hoje
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tarefas de Hoje */}
        <Card className="lg:col-span-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-slate-900 dark:text-slate-100">Tarefas de Hoje</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">5 tarefas programadas</CardDescription>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Nova Tarefa
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { task: "Revisar orçamento mensal", completed: true, priority: "Alta", time: "09:00" },
              { task: "Agendar consulta médica", completed: false, priority: "Média", time: "14:00" },
              { task: "Estudar React avançado", completed: false, priority: "Baixa", time: "19:00" },
              { task: "Pagar contas do cartão", completed: false, priority: "Alta", time: "16:00" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                  item.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 dark:border-slate-500'
                }`}>
                  {item.completed && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${item.completed ? 'line-through text-slate-500' : 'text-slate-900 dark:text-slate-100'}`}>
                    {item.task}
                  </p>
                  <div className="flex gap-2 mt-1">
                    {/* BADGES NEUTROS */}
                    <Badge 
                      variant={item.completed ? "secondary" : "default"}
                      className={`text-xs ${
                        item.completed 
                          ? "bg-slate-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300" 
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      }`}
                    >
                      {item.completed ? "Concluída" : "Pendente"}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs border-slate-300 text-slate-600 dark:border-slate-500 dark:text-slate-400 ${
                        item.priority === "Alta" ? "border-red-300 text-red-600 dark:border-red-500 dark:text-red-400" :
                        item.priority === "Média" ? "border-orange-300 text-orange-600 dark:border-orange-500 dark:text-orange-400" :
                        "border-slate-300 text-slate-600 dark:border-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {item.priority}
                    </Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sidebar Right */}
        <div className="space-y-6">
          {/* Progresso de Metas */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-slate-100">Progresso de Metas</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">Suas metas para este mês</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">Economizar R$ 5.000</span>
                  <span className="text-slate-600 dark:text-slate-400">R$ 2.450 / R$ 5.000</span>
                </div>
                {/* PROGRESS BAR AZUL */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '49%' }}></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">49% concluído</p>
              </div>
              
              <Separator className="bg-slate-200 dark:bg-slate-600" />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">Ler 12 livros</span>
                  <span className="text-slate-600 dark:text-slate-400">7 / 12</span>
                </div>
                {/* PROGRESS BAR VERDE */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">58% concluído</p>
              </div>
              
              <Separator className="bg-slate-200 dark:bg-slate-600" />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">Perder 10kg</span>
                  <span className="text-slate-600 dark:text-slate-400">4kg / 10kg</span>
                </div>
                {/* PROGRESS BAR ROXO */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">40% concluído</p>
              </div>
            </CardContent>
          </Card>

          {/* Hábitos de Hoje */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-slate-100">Hábitos de Hoje</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">Mantenha sua rotina</CardDescription>
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
                      item.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 dark:border-slate-500'
                    }`}>
                      {item.completed && <CheckCircle className="h-3 w-3 text-white" />}
                    </div>
                    <span className={`text-sm ${item.completed ? 'line-through text-slate-500' : 'text-slate-700 dark:text-slate-300'}`}>
                      {item.habit}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-500">
                    {item.streak} dias
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ações Rápidas - SEM AMARELO */}
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-slate-100">Ações Rápidas</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">Acesso rápido às funcionalidades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* BOTÃO AZUL PRINCIPAL */}
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                <DollarSign className="mr-2 h-4 w-4" />
                Nova Transação
              </Button>
              {/* BOTÃO VERDE */}
              <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
                <Target className="mr-2 h-4 w-4" />
                Definir Meta
              </Button>
              {/* BOTÃO ROXO */}
              <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Tarefa
              </Button>
              {/* BOTÃO OUTLINE NEUTRO */}
              <Button variant="outline" className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" size="sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                Ver Relatórios
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}