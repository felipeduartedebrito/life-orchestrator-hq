
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUp, ArrowDown, BarChart } from "lucide-react"

export default function Finances() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Finanças</h1>
          <p className="text-muted-foreground">Controle suas receitas e despesas</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Transação
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-emerald-400 to-emerald-500 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Receitas</CardTitle>
              <ArrowUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.250,00</div>
            <p className="text-xs opacity-90">Este mês</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-rose-400 to-rose-500 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Despesas</CardTitle>
              <ArrowDown className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.800,00</div>
            <p className="text-xs opacity-90">Este mês</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-stone-400 to-stone-500 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Saldo</CardTitle>
              <BarChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.450,00</div>
            <p className="text-xs opacity-90 flex items-center gap-1">
              <ArrowUp className="h-3 w-3" />
              +12% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Transações Recentes</CardTitle>
            <CardDescription>Suas últimas movimentações financeiras</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Receita", description: "Salário", amount: 3500, date: "15/12/2024", category: "Trabalho" },
                { type: "Despesa", description: "Supermercado", amount: -150, date: "14/12/2024", category: "Alimentação" },
                { type: "Receita", description: "Freelance", amount: 750, date: "12/12/2024", category: "Extra" },
                { type: "Despesa", description: "Internet", amount: -89.90, date: "10/12/2024", category: "Contas" },
                { type: "Despesa", description: "Combustível", amount: -120, date: "08/12/2024", category: "Transporte" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      transaction.type === 'Receita' ? 'bg-emerald-100 dark:bg-emerald-900/20' : 'bg-rose-100 dark:bg-rose-900/20'
                    }`}>
                      {transaction.type === 'Receita' ? 
                        <ArrowUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> : 
                        <ArrowDown className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                      }
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.amount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Despesas por Categoria</CardTitle>
            <CardDescription>Onde você mais gasta seu dinheiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Alimentação", amount: 650, percentage: 36, color: "bg-amber-400" },
                { category: "Transporte", amount: 380, percentage: 21, color: "bg-emerald-400" },
                { category: "Contas", amount: 290, percentage: 16, color: "bg-stone-400" },
                { category: "Lazer", amount: 220, percentage: 12, color: "bg-rose-400" },
                { category: "Outros", amount: 260, percentage: 15, color: "bg-slate-400" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span>R$ {item.amount}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{item.percentage}% do total</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
