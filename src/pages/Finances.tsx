import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, ArrowUp, ArrowDown, BarChart, DollarSign, TrendingUp, CreditCard } from "lucide-react"

export default function Finances() {
  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Finanças</h1>
          <p className="text-slate-600 dark:text-slate-400">Controle suas receitas e despesas</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4" />
          Nova Transação
        </Button>
      </div>

      {/* Cards de Resumo - NEUTROS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">Receitas</CardTitle>
              <ArrowUp className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 4.250,00</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Este mês</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-red-700 dark:text-red-300 text-sm font-medium">Despesas</CardTitle>
              <ArrowDown className="h-4 w-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 1.800,00</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Este mês</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-blue-700 dark:text-blue-300 text-sm font-medium">Saldo</CardTitle>
              <BarChart className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 2.450,00</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <ArrowUp className="h-3 w-3 text-emerald-600" />
              <span className="text-emerald-600">+12%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transações Recentes - FUNDO LIMPO */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Transações Recentes</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">Suas últimas movimentações financeiras</CardDescription>
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
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      transaction.type === 'Receita' 
                        ? 'bg-emerald-100 dark:bg-emerald-900/30' 
                        : 'bg-red-100 dark:bg-red-900/30'
                    }`}>
                      {transaction.type === 'Receita' ? 
                        <ArrowUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> : 
                        <ArrowDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                      }
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">{transaction.description}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.amount > 0 
                      ? 'text-emerald-600 dark:text-emerald-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Despesas por Categoria - FUNDO LIMPO */}
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100">Despesas por Categoria</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">Onde você mais gasta seu dinheiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Alimentação", amount: 650, percentage: 36, color: "bg-orange-500" },
                { category: "Transporte", amount: 380, percentage: 21, color: "bg-blue-500" },
                { category: "Contas", amount: 290, percentage: 16, color: "bg-purple-500" },
                { category: "Lazer", amount: 220, percentage: 12, color: "bg-emerald-500" },
                { category: "Outros", amount: 260, percentage: 15, color: "bg-slate-500" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-900 dark:text-slate-100">{item.category}</span>
                    <span className="text-slate-600 dark:text-slate-400">R$ {item.amount}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{item.percentage}% do total</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resumo Mensal - FUNDO LIMPO */}
      <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100">Resumo Mensal</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">Visão geral das suas finanças nos últimos meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <DollarSign className="h-8 w-8 text-emerald-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 12.750</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Receitas Totais</p>
            </div>
            <div className="text-center space-y-2">
              <CreditCard className="h-8 w-8 text-red-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 5.400</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Despesas Totais</p>
            </div>
            <div className="text-center space-y-2">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">R$ 7.350</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Economia Total</p>
            </div>
            <div className="text-center space-y-2">
              <BarChart className="h-8 w-8 text-purple-600 mx-auto" />
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">58%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Taxa de Economia</p>
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
            Receitas
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
            Despesas
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-slate-700 dark:text-slate-300">
            Exportar Relatório
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Receita
          </Button>
        </div>
      </div>
    </div>
  )
}
