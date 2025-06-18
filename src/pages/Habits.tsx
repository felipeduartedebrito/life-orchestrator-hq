import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, Check, Clock, Calendar, TrendingUp, Target } from "lucide-react"

export default function Habits() {
  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Hábitos</h1>
          <p className="text-slate-600 dark:text-slate-400">Desenvolva rotinas saudáveis e produtivas</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4" />
          Novo Hábito
        </Button>
      </div>

      {/* Stats Cards - NEUTRAS E LIMPAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-emerald-700 dark:text-emerald-300">Completados Hoje</CardTitle>
              <Check className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">3/5</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">60% de conclusão</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-slate-700 dark:text-slate-300">Maior Sequência</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">23 dias</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Beber 2L de água</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-slate-700 dark:text-slate-300">Hábitos Ativos</CardTitle>
              <Target className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">8</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">em desenvolvimento</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hábitos de Hoje - FUNDO LIMPO */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Hábitos de Hoje</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">Marque como concluído conforme for realizando</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Beber 2L de água", completed: true, streak: 23, time: "Durante o dia" },
                { name: "Meditar 10 minutos", completed: true, streak: 15, time: "07:00" },
                { name: "Exercitar-se 30min", completed: false, streak: 12, time: "18:00" },
                { name: "Ler 30 páginas", completed: true, streak: 8, time: "20:00" },
                { name: "Dormir 8 horas", completed: false, streak: 5, time: "22:00" },
              ].map((habit, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                  <div className="flex items-center gap-4">
                    <Button
                      variant={habit.completed ? "default" : "outline"}
                      size="sm"
                      className={`w-10 h-10 p-0 ${
                        habit.completed 
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                          : 'border-slate-300 dark:border-slate-500 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {habit.completed && <Check className="h-4 w-4" />}
                    </Button>
                    
                    <div>
                      <h3 className={`font-medium ${
                        habit.completed 
                          ? 'text-slate-900 dark:text-slate-100' 
                          : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {habit.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{habit.time}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-500">
                      {habit.streak} dias
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progresso Semanal - FUNDO LIMPO */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Progresso Semanal</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">Performance dos seus hábitos esta semana</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Beber água</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">6/7 dias</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Meditação</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">5/7 dias</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Exercícios</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">4/7 dias</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '57%' }}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Leitura</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">7/7 dias</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estatísticas Gerais - FUNDO LIMPO */}
      <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">Estatísticas Gerais</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">Seu desempenho geral com hábitos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">72%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Taxa de Sucesso</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">23</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Maior Sequência</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">45</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Dias Ativos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">8</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hábitos Ativos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}