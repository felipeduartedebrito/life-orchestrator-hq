
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
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-700 dark:text-blue-300">Metas Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">4</p>
            <p className="text-xs text-blue-600 dark:text-blue-400">em andamento</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-700 dark:text-green-300">Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">7</p>
            <p className="text-xs text-green-600 dark:text-green-400">este ano</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-orange-700 dark:text-orange-300">Próximas do Prazo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">2</p>
            <p className="text-xs text-orange-600 dark:text-orange-400">vencendo em 30 dias</p>
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
                  goal.priority === 'Alta' ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300' :
                  'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
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
