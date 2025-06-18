#!/bin/bash

# 🎯 Script Rápido - Corrigir TODOS os Botões Marrons
echo "🎯 Aplicando correção universal de botões..."

# Verificar se estamos no lugar certo
if [ ! -f "src/index.css" ]; then
    echo "❌ Arquivo src/index.css não encontrado"
    exit 1
fi

# Fazer backup
echo "💾 Criando backup do CSS atual..."
cp src/index.css src/index.css.backup-buttons-$(date +%H%M%S)

# Adicionar CSS no final do arquivo
echo "🎨 Adicionando correções de botões..."
cat >> src/index.css << 'EOF'

/* ===== CORREÇÃO UNIVERSAL DE BOTÕES ===== */
/* Aplicado automaticamente pelo script */

/* BOTÕES PRIMÁRIOS MARRONS → AZUL */
.bg-amber-500, .bg-amber-600, .bg-amber-700,
.bg-orange-400, .bg-orange-500, .bg-orange-600,
.bg-stone-400, .bg-stone-500, .bg-stone-600, .bg-stone-700,
.bg-yellow-500, .bg-yellow-600,
.bg-brown-500, .bg-brown-600 {
  background-color: rgb(37, 99, 235) !important;
  color: white !important;
  border-color: rgb(37, 99, 235) !important;
}

.bg-amber-500:hover, .bg-amber-600:hover, .bg-amber-700:hover,
.bg-orange-400:hover, .bg-orange-500:hover, .bg-orange-600:hover,
.bg-stone-400:hover, .bg-stone-500:hover, .bg-stone-600:hover, .bg-stone-700:hover,
.bg-yellow-500:hover, .bg-yellow-600:hover,
.bg-brown-500:hover, .bg-brown-600:hover {
  background-color: rgb(29, 78, 216) !important;
  color: white !important;
}

/* BOTÕES OUTLINE MARRONS → SLATE */
.border-amber-300, .border-amber-400,
.border-orange-300, .border-orange-400,
.border-stone-300, .border-stone-400,
.border-yellow-300, .border-yellow-400,
.border-brown-300, .border-brown-400 {
  border-color: rgb(203, 213, 225) !important;
  color: rgb(71, 85, 105) !important;
  background-color: transparent !important;
}

.dark .border-amber-300, .dark .border-amber-400,
.dark .border-orange-300, .dark .border-orange-400,
.dark .border-stone-300, .dark .border-stone-400,
.dark .border-yellow-300, .dark .border-yellow-400,
.dark .border-brown-300, .dark .border-brown-400 {
  border-color: rgb(71, 85, 105) !important;
  color: rgb(203, 213, 225) !important;
}

/* HOVER DOS BOTÕES OUTLINE */
.border-amber-300:hover, .border-amber-400:hover,
.border-orange-300:hover, .border-orange-400:hover,
.border-stone-300:hover, .border-stone-400:hover,
.border-yellow-300:hover, .border-yellow-400:hover,
.border-brown-300:hover, .border-brown-400:hover {
  background-color: rgb(248, 250, 252) !important;
  color: rgb(15, 23, 42) !important;
}

.dark .border-amber-300:hover, .dark .border-amber-400:hover,
.dark .border-orange-300:hover, .dark .border-orange-400:hover,
.dark .border-stone-300:hover, .dark .border-stone-400:hover,
.dark .border-yellow-300:hover, .dark .border-yellow-400:hover,
.dark .border-brown-300:hover, .dark .border-brown-400:hover {
  background-color: rgb(30, 41, 59) !important;
  color: rgb(248, 250, 252) !important;
}

/* SELETORES GENÉRICOS */
button[class*="amber"],
button[class*="stone"],
button[class*="yellow"],
button[class*="brown"] {
  background-color: rgb(37, 99, 235) !important;
  color: white !important;
  border-color: rgb(37, 99, 235) !important;
}

button[class*="amber"]:hover,
button[class*="stone"]:hover,
button[class*="yellow"]:hover,
button[class*="brown"]:hover {
  background-color: rgb(29, 78, 216) !important;
}

/* EMERGÊNCIA - INLINE STYLES */
button[style*="background-color: rgb(120"],
button[style*="background-color: rgb(168"],
button[style*="background-color: rgb(245"],
button[style*="background: rgb(120"],
button[style*="background: rgb(168"],
button[style*="background: rgb(245"] {
  background-color: rgb(37, 99, 235) !important;
  background: rgb(37, 99, 235) !important;
  color: white !important;
}

/* MANTER CORES SEMÂNTICAS */
.bg-emerald-500, .bg-emerald-600, .bg-emerald-700,
.bg-green-500, .bg-green-600,
.bg-red-500, .bg-red-600,
.bg-purple-500, .bg-purple-600 {
  /* Preservar essas cores */
}
EOF

echo "✅ Correções aplicadas com sucesso!"
echo "🔄 Recarregue a página (F5) para ver as mudanças"
echo "📁 Backup salvo como: src/index.css.backup-buttons-*"
echo ""
echo "🎨 Resultado esperado:"
echo "  ✅ Todos os botões marrons → Azul corporativo"
echo "  ✅ Botões outline → Cinza neutro"
echo "  ✅ Cores semânticas mantidas (verde, vermelho, roxo)"