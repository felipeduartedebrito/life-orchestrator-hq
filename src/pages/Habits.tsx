
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
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-700 dark:text-green-300">Completados Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">3/5</p>
            <p className="text-xs text-green-600 dark:text-green-400">60% de conclusão</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-700 dark:text-blue-300">Maior Sequência</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">23 dias</p>
            <p className="text-xs text-blue-600 dark:text-blue-400">Beber 2L de água</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-purple-700 dark:text-purple-300">Hábitos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">8</p>
            <p className="text-xs text-purple-600 dark:text-purple-400">em desenvolvimento</p>
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
