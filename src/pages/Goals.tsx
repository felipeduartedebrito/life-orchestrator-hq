import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, BarChart, Check, Target, TrendingUp, Clock } from "lucide-react"

export default function Goals() {
  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Metas</h1>
          <p className="text-slate-600 dark:text-slate-400">Defina e acompanhe seus objetivos pessoais</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4" />
          Nova Meta
        </Button>
      </div>

      {/* Cards de Estatísticas - NEUTROS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-blue-700 dark:text-blue-300">Metas Ativas</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">em andamento</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-emerald-700 dark:text-emerald-300">Concluídas</CardTitle>
              <Check className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">7</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">este ano</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-orange-700 dark:text-orange-300">Próximas do Prazo</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">2</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">vencendo em 30 dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Metas - FUNDO LIMPO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            title: "Economizar R$ 5.000",
            description: "Para emergências e investimentos",
            category: "Financeiro",
            progress: 49,
            current: 2450,
            target: 5000,
            deadline: "31/12/2024",
            priority: "Alta"
          },
          {
            title: "Ler 12 livros",
            description: "Desenvolver conhecimento e hábito de leitura",
            category: "Pessoal",
            progress: 58,
            current: 7,
            target: 12,
            deadline: "31/12/2024",
            priority: "Média"
          },
          {
            title: "Perder 10kg",
            description: "Melhorar saúde e qualidade de vida",
            category: "Saúde",
            progress: 40,
            current: 4,
            target: 10,
            deadline: "30/06/2025",
            priority: "Alta"
          },
          {
            title: "Aprender React Avançado",
            description: "Dominar conceitos avançados para crescer na carreira",
            category: "Profissional",
            progress: 25,
            current: 25,
            target: 100,
            deadline: "28/02/2025",
            priority: "Média"
          },
        ].map((goal, index) => (
          <Card key={index} className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-slate-900 dark:text-slate-100">{goal.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">{goal.description}</CardDescription>
                </div>
                <Badge 
                  variant="outline"
                  className={`${
                    goal.priority === 'Alta' 
                      ? 'border-red-300 text-red-700 dark:border-red-500 dark:text-red-300' 
                      : 'border-orange-300 text-orange-700 dark:border-orange-500 dark:text-orange-300'
                  }`}
                >
                  {goal.priority}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-300">Progresso</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {goal.category === "Financeiro" ? `R$ ${goal.current} / R$ ${goal.target}` : `${goal.current} / ${goal.target}`}
                  </span>
                </div>
                {/* PROGRESS BAR COLORIDA */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      goal.progress >= 75 ? 'bg-emerald-600' :
                      goal.progress >= 50 ? 'bg-blue-600' :
                      goal.progress >= 25 ? 'bg-yellow-500' :
                      'bg-orange-500'
                    }`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">{goal.progress}% concluído</p>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                    {goal.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Calendar className="h-3 w-3" />
                  <span>{goal.deadline}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 text-slate-700 dark:text-slate-300">
                  Editar
                </Button>
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  Atualizar Progresso
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Estatísticas de Performance - FUNDO LIMPO */}
      <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">Performance Geral</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">Seu progresso geral com metas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">43%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Progresso Médio</p>
            </div>
            <div className="text-center space-y-2">
              <Check className="h-8 w-8 text-emerald-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">7</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Metas Concluídas</p>
            </div>
            <div className="text-center space-y-2">
              <Target className="h-8 w-8 text-purple-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Metas Ativas</p>
            </div>
            <div className="text-center space-y-2">
              <Calendar className="h-8 w-8 text-orange-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">67</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Dias Restantes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ações Rápidas */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-slate-700 dark:text-slate-300">
            Todas
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
            Ativas
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
            Concluídas
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
            Atrasadas
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-slate-700 dark:text-slate-300">
            Filtrar por Categoria
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nova Meta
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-slate-700 dark:text-slate-300">
            Filtrar por Categoria
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nova Meta
          </Button>
        </div>
      </div>
    </div>
  )
}
