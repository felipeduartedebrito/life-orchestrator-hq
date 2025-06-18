
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Check, Clock, Calendar } from "lucide-react"

export default function Habits() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Hábitos</h1>
          <p className="text-muted-foreground">Desenvolva rotinas saudáveis e produtivas</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Hábito
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-emerald-700 dark:text-emerald-300">Completados Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">3/5</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">60% de conclusão</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-800/20 border-stone-200 dark:border-stone-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-stone-700 dark:text-stone-300">Maior Sequência</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">23 dias</p>
            <p className="text-xs text-stone-600 dark:text-stone-400">Beber 2L de água</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 border-rose-200 dark:border-rose-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-rose-700 dark:text-rose-300">Hábitos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-rose-900 dark:text-rose-100">8</p>
            <p className="text-xs text-rose-600 dark:text-rose-400">em desenvolvimento</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hábitos de Hoje</CardTitle>
            <CardDescription>Marque como concluído conforme for realizando</CardDescription>
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
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <Button
                      variant={habit.completed ? "default" : "outline"}
                      size="sm"
                      className={`w-10 h-10 p-0 ${habit.completed ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    >
                      {habit.completed && <Check className="h-4 w-4" />}
                    </Button>
                    
                    <div>
                      <h3 className={`font-medium ${habit.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {habit.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {habit.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {habit.streak} dias
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-semibold">{habit.streak}</div>
                    <div className="text-xs text-muted-foreground">dias seguidos</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progresso Semanal</CardTitle>
            <CardDescription>Visualize sua consistência ao longo da semana</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { name: "Meditar", days: [true, true, false, true, true, true, false] },
                { name: "Exercitar-se", days: [true, false, true, true, false, true, true] },
                { name: "Ler", days: [true, true, true, false, true, true, false] },
                { name: "Dormir 8h", days: [false, true, true, true, false, false, true] },
              ].map((habit, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">{habit.name}</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, dayIndex) => (
                      <div key={dayIndex} className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">{day}</div>
                        <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                          habit.days[dayIndex] 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-muted-foreground'
                        }`}>
                          {habit.days[dayIndex] && <Check className="h-3 w-3 text-white" />}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {habit.days.filter(Boolean).length}/7 dias esta semana
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
