
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Plus, Calendar, BarChart, Check } from "lucide-react"

export default function Goals() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Metas</h1>
          <p className="text-muted-foreground">Defina e acompanhe seus objetivos pessoais</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Meta
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-sage-50 to-sage-100 dark:from-green-900/20 dark:to-green-800/20 border-sage-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sage-700 dark:text-green-300">Metas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-sage-900 dark:text-green-100">4</p>
            <p className="text-xs text-sage-600 dark:text-green-400">em andamento</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-emerald-700 dark:text-emerald-300">Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">7</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">este ano</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-800/20 border-slate-200 dark:border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-700 dark:text-slate-300">Próximas do Prazo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">2</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">vencendo em 30 dias</p>
          </CardContent>
        </Card>
      </div>

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
            description: "Desenvolver conhecimento e cultura",
            category: "Educação", 
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
            title: "Aprender React Native",
            description: "Desenvolver habilidades em mobile",
            category: "Profissional",
            progress: 25,
            current: 25,
            target: 100,
            deadline: "31/03/2025",
            priority: "Média"
          }
        ].map((goal, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{goal.title}</CardTitle>
                  <CardDescription>{goal.description}</CardDescription>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  goal.priority === 'Alta' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300' :
                  'bg-slate-100 text-slate-700 dark:bg-slate-900/20 dark:text-slate-300'
                }`}>
                  {goal.priority}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso</span>
                  <span>{goal.current} / {goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-3" />
                <p className="text-xs text-muted-foreground">{goal.progress}% concluído</p>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {goal.deadline}
                </span>
                <span className="px-2 py-1 rounded bg-muted text-xs">
                  {goal.category}
                </span>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Editar
                </Button>
                <Button size="sm" className="flex-1">
                  Atualizar Progresso
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
