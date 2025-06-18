#!/bin/bash

# 🎨 DEPLOY TEMA LIMPO - CSS do Zero
echo "🎨 IMPLEMENTANDO TEMA COMPLETAMENTE NOVO"
echo "========================================"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json não encontrado${NC}"
    echo -e "${YELLOW}💡 Execute no diretório raiz do projeto${NC}"
    exit 1
fi

# Criar backup completo
echo -e "${BLUE}💾 Criando backup completo...${NC}"
timestamp=$(date +%Y%m%d_%H%M%S)
backup_dir="backups/tema-limpo-$timestamp"
mkdir -p "$backup_dir"

# Backup dos arquivos que vamos alterar
files_to_backup=(
    "src/index.css"
    "tailwind.config.ts"
    "components.json"
)

if [ -f "src/components/Layout.tsx" ]; then
    files_to_backup+=("src/components/Layout.tsx")
fi

for file in "${files_to_backup[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "$backup_dir/$(basename $file).backup"
        echo -e "${GREEN}✅ Backup: $file${NC}"
    fi
done

echo -e "${GREEN}✅ Backup completo em: $backup_dir${NC}"

# 1. APLICAR NOVO CSS (100% limpo)
echo -e "\n${BLUE}🎨 Aplicando CSS completamente novo...${NC}"
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* === TEMA NEUTRO PROFISSIONAL === */
    /* Fundo principal: BRANCO PURO */
    --background: 255 255 255;
    --foreground: 30 41 59;

    /* Cards: Branco com bordas sutis */
    --card: 255 255 255;
    --card-foreground: 30 41 59;

    /* Popover: Branco puro */
    --popover: 255 255 255;
    --popover-foreground: 30 41 59;

    /* Primary: Azul corporativo */
    --primary: 30 64 175;
    --primary-foreground: 255 255 255;

    /* Secondary: Cinza claro neutro */
    --secondary: 248 250 252;
    --secondary-foreground: 71 85 105;

    /* Muted: Cinza muito claro */
    --muted: 241 245 249;
    --muted-foreground: 100 116 139;

    /* Accent: Cinza médio */
    --accent: 226 232 240;
    --accent-foreground: 51 65 85;

    /* Destructive: Vermelho limpo */
    --destructive: 220 38 38;
    --destructive-foreground: 255 255 255;

    /* Bordas: Cinza claro */
    --border: 203 213 225;
    --input: 241 245 249;
    --ring: 30 64 175;

    /* Radius padrão */
    --radius: 0.5rem;

    /* === SIDEBAR === */
    --sidebar-background: 255 255 255;
    --sidebar-foreground: 51 65 85;
    --sidebar-primary: 30 64 175;
    --sidebar-primary-foreground: 255 255 255;
    --sidebar-accent: 241 245 249;
    --sidebar-accent-foreground: 71 85 105;
    --sidebar-border: 203 213 225;
    --sidebar-ring: 30 64 175;
  }

  .dark {
    /* === DARK MODE ELEGANTE === */
    /* Fundo: Azul escuro profissional */
    --background: 15 23 42;
    --foreground: 248 250 252;

    /* Cards: Azul escuro */
    --card: 30 41 59;
    --card-foreground: 248 250 252;

    /* Popover: Azul escuro */
    --popover: 30 41 59;
    --popover-foreground: 248 250 252;

    /* Primary: Azul claro */
    --primary: 59 130 246;
    --primary-foreground: 15 23 42;

    /* Secondary: Azul médio */
    --secondary: 51 65 85;
    --secondary-foreground: 226 232 240;

    /* Muted: Azul acinzentado */
    --muted: 51 65 85;
    --muted-foreground: 148 163 184;

    /* Accent: Azul médio */
    --accent: 71 85 105;
    --accent-foreground: 203 213 225;

    /* Destructive: Vermelho */
    --destructive: 239 68 68;
    --destructive-foreground: 248 250 252;

    /* Bordas: Azul escuro */
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
  /* Reset global */
  * {
    border-color: hsl(var(--border));
  }

  /* HTML e Body */
  html {
    background-color: rgb(255, 255, 255);
  }

  body {
    background-color: rgb(255, 255, 255);
    color: rgb(30, 41, 59);
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    font-feature-settings: "rlig" 1, "calt" 1;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Dark mode body */
  .dark body {
    background-color: rgb(15, 23, 42);
    color: rgb(248, 250, 252);
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.025em;
    color: rgb(30, 41, 59);
  }

  .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
    color: rgb(248, 250, 252);
  }

  /* Links */
  a {
    color: rgb(30, 64, 175);
    text-decoration: none;
  }

  .dark a {
    color: rgb(59, 130, 246);
  }

  a:hover {
    text-decoration: underline;
  }

  /* Root container */
  #root {
    background-color: rgb(255, 255, 255);
    min-height: 100vh;
  }

  .dark #root {
    background-color: rgb(15, 23, 42);
  }
}

@layer components {
  /* === COMPONENTES PERSONALIZADOS === */

  /* Card com sombra suave */
  .card-modern {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(203, 213, 225);
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
  }

  .dark .card-modern {
    background-color: rgb(30, 41, 59);
    border-color: rgb(51, 65, 85);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  .card-modern:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  .dark .card-modern:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }

  /* Background gradiente sutil */
  .gradient-bg {
    background: linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(248, 250, 252) 100%);
  }

  .dark .gradient-bg {
    background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%);
  }

  /* Glass effect */
  .glass-effect {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(203, 213, 225, 0.5);
  }

  .dark .glass-effect {
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(51, 65, 85, 0.5);
  }

  /* Header */
  .header-modern {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgb(203, 213, 225);
  }

  .dark .header-modern {
    background-color: rgba(30, 41, 59, 0.95);
    border-bottom-color: rgb(51, 65, 85);
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

# 4. ATUALIZAR LAYOUT (se existir)
if [ -f "src/components/Layout.tsx" ]; then
    echo -e "\n${BLUE}🏗️ Atualizando Layout.tsx...${NC}"
    cat > src/components/Layout.tsx << 'EOF'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { ThemeToggle } from "@/components/ThemeToggle"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white dark:bg-slate-900">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 header-modern flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md p-2 transition-colors" />
              <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  LifeOS
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Gestão Pessoal Inteligente
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </header>
          
          <main className="flex-1 main-content">
            <div className="max-w-7xl mx-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
EOF
    echo -e "${GREEN}✅ Layout.tsx atualizado${NC}"
fi

# Status final
echo -e "\n${GREEN}🎉 TEMA LIMPO IMPLEMENTADO COM SUCESSO!${NC}"
echo "========================================"
echo -e "${BLUE}📁 Backups salvos em:${NC} $backup_dir"
echo -e "${BLUE}🎨 Arquivos atualizados:${NC}"
echo "   • src/index.css (CSS completamente novo)"
echo "   • tailwind.config.ts (configuração limpa)"
echo "   • components.json (baseColor: slate)"
if [ -f "src/components/Layout.tsx" ]; then
    echo "   • src/components/Layout.tsx (classes neutras)"
fi

echo -e "\n${BLUE}🚀 Resultado esperado:${NC}"
echo "✅ Fundo BRANCO PURO (rgb(255, 255, 255))"
echo "✅ Zero tons amarelados ou quentes"
echo "✅ Paleta azul/cinza profissional"
echo "✅ Dark mode azul escuro elegante"

echo -e "\n${BLUE}🔄 Próximos passos:${NC}"
echo "1. Recarregue a página (F5)"
echo "2. Teste tema claro e escuro"
echo "3. Se houver cache, limpe (Ctrl+Shift+R)"

echo -e "\n${BLUE}🔄 Para reverter (se necessário):${NC}"
echo "cd $backup_dir && cp *.backup ../../../src/"

echo -e "\n${GREEN}✨ Seu LifeOS agora tem um visual neutro e profissional!${NC}"