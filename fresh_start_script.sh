#!/bin/bash

# 🎨 SCRIPT FRESH START - CSS Completamente Novo
echo "🎨 APLICANDO CSS COMPLETAMENTE NOVO DO ZERO"
echo "=========================================="

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Verificar estrutura do projeto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json não encontrado${NC}"
    echo -e "${YELLOW}💡 Execute na pasta raiz do projeto${NC}"
    exit 1
fi

echo -e "${BLUE}🗂️ Estrutura do projeto verificada${NC}"

# Criar backup completo
echo -e "\n${BLUE}💾 Criando backup completo...${NC}"
timestamp=$(date +%Y%m%d_%H%M%S)
backup_dir="backups/fresh-start-$timestamp"
mkdir -p "$backup_dir"

# Fazer backup de todos os arquivos que vamos substituir
files_to_backup=(
    "src/index.css"
    "tailwind.config.ts"
    "components.json"
)

for file in "${files_to_backup[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "$backup_dir/$(basename $file).backup"
        echo -e "${GREEN}✅ Backup: $file${NC}"
    fi
done

echo -e "${GREEN}✅ Backup completo salvo em: $backup_dir${NC}"

# 1. APLICAR NOVO CSS PRINCIPAL
echo -e "\n${BLUE}🎨 Aplicando CSS completamente novo...${NC}"
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* === SISTEMA DE CORES NEUTRO E PROFISSIONAL === */
    
    /* Fundos principais */
    --background: 255 255 255;
    --foreground: 15 23 42;
    
    /* Cards e superfícies */
    --card: 255 255 255;
    --card-foreground: 15 23 42;
    
    /* Popover */
    --popover: 255 255 255;
    --popover-foreground: 15 23 42;
    
    /* Azul corporativo como cor primária */
    --primary: 37 99 235;
    --primary-foreground: 255 255 255;
    
    /* Cinza neutro para secundário */
    --secondary: 248 250 252;
    --secondary-foreground: 71 85 105;
    
    /* Cinza claro para muted */
    --muted: 241 245 249;
    --muted-foreground: 100 116 139;
    
    /* Cinza médio para accent */
    --accent: 226 232 240;
    --accent-foreground: 51 65 85;
    
    /* Vermelho para destrutivo */
    --destructive: 239 68 68;
    --destructive-foreground: 255 255 255;
    
    /* Bordas e inputs neutros */
    --border: 226 232 240;
    --input: 248 250 252;
    --ring: 37 99 235;
    
    --radius: 0.5rem;
    
    /* === SIDEBAR NEUTRA === */
    --sidebar-background: 255 255 255;
    --sidebar-foreground: 71 85 105;
    --sidebar-primary: 37 99 235;
    --sidebar-primary-foreground: 255 255 255;
    --sidebar-accent: 248 250 252;
    --sidebar-accent-foreground: 71 85 105;
    --sidebar-border: 226 232 240;
    --sidebar-ring: 37 99 235;
  }

  .dark {
    /* === DARK MODE ELEGANTE === */
    
    /* Fundos escuros */
    --background: 15 23 42;
    --foreground: 241 245 249;
    
    /* Cards escuros */
    --card: 30 41 59;
    --card-foreground: 241 245 249;
    
    /* Popover escuro */
    --popover: 30 41 59;
    --popover-foreground: 241 245 249;
    
    /* Azul claro para primary no dark */
    --primary: 59 130 246;
    --primary-foreground: 15 23 42;
    
    /* Slate médio para secondary */
    --secondary: 51 65 85;
    --secondary-foreground: 226 232 240;
    
    /* Slate escuro para muted */
    --muted: 51 65 85;
    --muted-foreground: 148 163 184;
    
    /* Slate médio para accent */
    --accent: 71 85 105;
    --accent-foreground: 203 213 225;
    
    /* Vermelho para destrutivo */
    --destructive: 239 68 68;
    --destructive-foreground: 241 245 249;
    
    /* Bordas e inputs escuros */
    --border: 51 65 85;
    --input: 51 65 85;
    --ring: 59 130 246;
    
    /* === SIDEBAR DARK === */
    --sidebar-background: 30 41 59;
    --sidebar-foreground: 203 213 225;
    --sidebar-primary: 59 130 246;
    --sidebar-primary-foreground: 15 23 42;
    --sidebar-accent: 51 65 85;
    --sidebar-accent-foreground: 203 213 225;
    --sidebar-border: 51 65 85;
    --sidebar-ring: 59 130 246;
  }
}

@layer base {
  /* === RESET E BASE === */
  * {
    border-color: hsl(var(--border));
  }

  html {
    background-color: rgb(255, 255, 255);
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(255, 255, 255);
    color: rgb(15, 23, 42);
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    font-feature-settings: "rlig" 1, "calt" 1;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .dark html {
    background-color: rgb(15, 23, 42);
  }

  .dark body {
    background-color: rgb(15, 23, 42);
    color: rgb(241, 245, 249);
  }

  /* === TIPOGRAFIA === */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.025em;
    color: rgb(15, 23, 42);
  }

  .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
    color: rgb(241, 245, 249);
  }

  /* === ROOT CONTAINER === */
  #root {
    background-color: rgb(255, 255, 255);
    min-height: 100vh;
  }

  .dark #root {
    background-color: rgb(15, 23, 42);
  }
}

@layer components {
  /* === COMPONENTES CUSTOMIZADOS === */

  /* Header principal */
  .header-main {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgb(226, 232, 240);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .dark .header-main {
    background-color: rgba(30, 41, 59, 0.95);
    border-bottom-color: rgb(51, 65, 85);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  /* Main content */
  .main-content {
    background-color: rgb(255, 255, 255);
    min-height: 100vh;
  }

  .dark .main-content {
    background-color: rgb(15, 23, 42);
  }
}

@layer utilities {
  /* === UTILITIES CUSTOMIZADAS === */

  /* Animações */
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .slide-up {
    animation: slideUp 0.4s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Hover effects */
  .hover-lift {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .dark .hover-lift:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
}
EOF

echo -e "${GREEN}✅ Novo CSS aplicado${NC}"

# 2. ATUALIZAR TAILWIND CONFIG
echo -e "\n${BLUE}⚙️ Atualizando tailwind.config.ts...${NC}"
cat > tailwind.config.ts << 'EOF'
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
EOF

echo -e "${GREEN}✅ tailwind.config.ts atualizado${NC}"

# 3. ATUALIZAR COMPONENTS.JSON
echo -e "\n${BLUE}📦 Atualizando components.json...${NC}"
cat > components.json << 'EOF'
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
EOF

echo -e "${GREEN}✅ components.json atualizado${NC}"

# 4. VERIFICAR SE O SERVIDOR ESTÁ RODANDO
echo -e "\n${BLUE}🔍 Verificando servidor...${NC}"
if lsof -i :5173 >/dev/null 2>&1; then
    echo -e "${YELLOW}🔄 Servidor detectado - mudanças aplicadas automaticamente${NC}"
elif lsof -i :3000 >/dev/null 2>&1; then
    echo -e "${YELLOW}🔄 Servidor detectado na porta 3000${NC}"
else
    echo -e "${BLUE}💡 Inicie o servidor: npm run dev${NC}"
fi

# RESULTADO FINAL
echo -e "\n${GREEN}🎉 CSS COMPLETAMENTE NOVO APLICADO!${NC}"
echo "====================================="
echo -e "${BLUE}📁 Backups salvos em:${NC} $backup_dir"
echo -e "${BLUE}🎨 Arquivos criados do zero:${NC}"
echo "   • src/index.css (sistema limpo)"
echo "   • tailwind.config.ts (configuração neutra)"
echo "   • components.json (baseColor: slate)"

echo -e "\n${BLUE}✨ Resultado esperado:${NC}"
echo "✅ Fundo BRANCO PURO (rgb(255, 255, 255))"
echo "✅ Cores primárias AZUL CORPORATIVO"
echo "✅ Textos em tons SLATE (cinza neutro)"
echo "✅ ZERO cores marrons/amarelas/quentes"
echo "✅ Dark mode azul escuro elegante"
echo "✅ Sistema de cores completamente consistente"

echo -e "\n${BLUE}🚀 Próximos passos:${NC}"
echo "1. Recarregue a página (F5)"
echo "2. Limpe o cache se necessário (Ctrl+Shift+R)"
echo "3. Teste modo claro e escuro"
echo "4. Navegue por todas as páginas para verificar"

echo -e "\n${BLUE}🔄 Para reverter (se necessário):${NC}"
echo "cd $backup_dir && cp *.backup ../../"

echo -e "\n${GREEN}🎨 Seu LifeOS agora tem um sistema visual COMPLETAMENTE LIMPO!${NC}"