<div align="center">

# 🏘️ APAQ - Associação PA Quilombo

### *30 Anos de Raízes. Um Futuro que a Gente Planta Agora.*

Website institucional da **Associação dos Produtores Agroecológicos do PA Quilombo** — 30 anos de resistência, regeneração e conquistas na Chapada dos Guimarães, Mato Grosso.

[![Deploy Status](https://github.com/catitodev/siteapaq_pa_quilombo/actions/workflows/deploy.yml/badge.svg)](https://github.com/catitodev/siteapaq_pa_quilombo/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)

[🌐 **Ver Site ao Vivo**](https://catitodev.github.io/siteapaq_pa_quilombo/) • [📝 Reportar Bug](https://github.com/catitodev/siteapaq_pa_quilombo/issues) • [💡 Sugerir Feature](https://github.com/catitodev/siteapaq_pa_quilombo/issues)

---

</div>

## 📖 Sobre o Projeto

Este site foi desenvolvido para a **APAQ - Associação PA Quilombo**, uma organização comunitária que há 30 anos protege as águas do Cerrado&Pantanal, promove agricultura familiar e luta pela regularização fundiária na região do Lago do Manso, Chapada dos Guimarães - MT.

O projeto digital nasceu da necessidade de amplificar a voz da comunidade quilombola, apresentar seus programas de impacto socioambiental e fortalecer conexões com apoiadores e parceiros.

### 🎯 Objetivo do Site

- Apresentar a história e missão da APAQ
- Divulgar os 4 programas estruturantes (Brigada Pantaneira, Frutos do Cerrado, Vetiver Reviver, Águas que Falam)
- Criar canal de comunicação com a comunidade
- Atrair parceiros e apoiadores para os projetos
- Documentar conquistas e celebrações da comunidade

---

## ✨ Features & Destaques

### 🎨 **Design & UX de Alto Nível**

- **Cursor Customizado Animado** - Trail de partículas com 12 pontos seguindo o mouse em tempo real
- **Animações Líquidas** - Efeito morphing nos botões usando `@keyframes` personalizados
- **Scroll Reveal** - Intersection Observer para revelar elementos conforme scroll
- **Hero com Vídeo Background** - Apresentação imersiva com vídeo em loop
- **Carrosséis Infinitos** - Animações CSS puras (normal e reverso) para galeria e parceiros
- **Grain Texture Overlay** - Textura de grão SVG para estética orgânica
- **Glassmorphism** - Efeitos de vidro fosco com `backdrop-blur`
- **Tipografia Dupla** - Plus Jakarta Sans (corpo) + Playfair Display (títulos)

### 🌐 **Páginas & Navegação**

| Página | Função | Destaques |
|--------|--------|-----------|
| 🏠 **Home** | Hero + Localização + Pilares + Call-to-Action | Vídeo background, mapas integrados, carrosséis |
| 📜 **Nossa Jornada** | História de 30 anos + Liderança | Timeline visual, fotos históricas, equipe |
| 🚀 **Programas & Projetos** | 4 programas estruturantes | Modais com descrições completas, ícones Lucide |
| 📰 **Vozes PA Quilombo** | Timeline de eventos 2022-2025 | Layout de linha do tempo, categorização por ano |
| 📞 **Fale com a Gente** | Formulário de contato + Info | Validação, estados de loading/sucesso |

### 🛠️ **Arquitetura Técnica**

```
Frontend Stack:
├── React 19.2.4 (últimas features)
├── TypeScript 5.8.2 (type safety)
├── Vite 6.2.0 (build ultra-rápido)
├── React Router DOM 7.13.0 (SPA routing)
└── Lucide React 0.563.0 (ícones)

Styling:
├── Tailwind CSS via CDN
├── Custom CSS (animations, grain, cursor)
└── Google Fonts (Plus Jakarta Sans + Playfair Display)
```

### ♿ **Acessibilidade & Performance**

- ✅ ARIA labels em botões e navegação
- ✅ Contraste de cores WCAG AA
- ✅ Lazy loading de imagens
- ✅ `will-change` para animações otimizadas
- ✅ Scroll suave (`scroll-behavior: smooth`)
- ✅ Responsivo mobile-first (breakpoints estratégicos)
- ✅ Fallbacks para fontes e vídeos

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+ 
- [Git](https://git-scm.com/)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/catitodev/siteapaq_pa_quilombo.git

# 2. Entre na pasta
cd siteapaq_pa_quilombo

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O site estará rodando em: **http://localhost:3000** 🎉

---

## 📂 Estrutura do Projeto

```
siteapaq_pa_quilombo/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD - Deploy automático GitHub Pages
│
├── components/                  # Componentes reutilizáveis
│   ├── CustomCursor.tsx        # Cursor animado com trail de partículas
│   ├── Header.tsx              # Navbar com menu lateral
│   └── Footer.tsx              # Rodapé institucional
│
├── pages/                       # Páginas da aplicação
│   ├── Home.tsx                # Hero + Pilares + Carrosséis + CTA
│   ├── About.tsx               # História + Liderança
│   ├── Projects.tsx            # 4 Programas com modais
│   ├── Blog.tsx                # Timeline de eventos
│   └── Contact.tsx             # Formulário + Contatos
│
├── App.tsx                      # Componente raiz + Router
├── index.tsx                    # Entry point (React 19 createRoot)
├── index.html                   # HTML base + Tailwind CDN + Fonts
├── vite.config.ts              # Configuração Vite + base path
├── tsconfig.json               # Config TypeScript (strict mode)
├── package.json                # Dependências + Scripts
└── README.md                   # 👈 Você está aqui!
```

---

## 🔨 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento na porta 3000 |
| `npm run build` | Cria versão de produção otimizada em `/dist` |
| `npm run preview` | Visualiza a build de produção localmente |

---

## 🌐 Deploy Automático

O site usa **GitHub Actions** para deploy automático no **GitHub Pages**:

### Como Funciona

1. 📝 Você faz commit na branch `main`
2. 🤖 GitHub Actions detecta mudança
3. 🏗️ Roda `npm run build` (cria pasta `/dist`)
4. 📦 Upload dos arquivos para GitHub Pages
5. ✅ Site atualizado em: **https://catitodev.github.io/siteapaq_pa_quilombo/**

### Workflow (`.github/workflows/deploy.yml`)

```yaml
- ✅ Checkout do código
- ✅ Setup Node.js 20
- ✅ Install dependencies (npm ci)
- ✅ Build do projeto
- ✅ Deploy para GitHub Pages
```

---

## 🎨 Design System

### Paleta de Cores

```css
Primária:   #059669 (Emerald 600)  - Natureza, Vida
Secundária: #10b981 (Emerald 500)  - Energia, Crescimento
Neutra:     #faf9f6 (Off-white)    - Pureza, Clareza
Acento:     #1a1f1f (Quase Preto)  - Profundidade
```

### Tipografia

- **Títulos**: Playfair Display (Serif, Elegante, Tradicional)
- **Corpo**: Plus Jakarta Sans (Sans-serif, Moderna, Legível)

### Componentes Chave

- **Botões**: Rounded-full, hover com scale, shadow-xl
- **Cards**: Rounded-[2.5rem], hover lift, transition 700ms
- **Inputs**: Rounded-2xl, focus ring emerald-500
- **Modal**: Backdrop-blur, z-index 100, scroll interno

---

## 📊 Programas em Destaque

### 🔥 Brigada Pantaneira Voluntária
- 40+ voluntários capacitados
- Redução de 75-80% dos incêndios desde 2020
- Única brigada estruturada num raio de 55km

### 🍎 MicroAgroIndústria Frutos do Cerrado
- Fortalecimento da agricultura familiar
- 30% das sementes para propagação de nativas
- 100% da água reaproveitada

### 💧 Programa Vetiver Reviver
- 3,75 milhões de mudas planejadas
- 750 km de barreira verde na orla do Lago
- Controle de erosão + Geração de renda

### 🌊 Águas que Falam
- Monitoramento de qualidade hídrica
- Restauração de nascentes
- Prevenção de incêndios integrada

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Para contribuir:

1. 🍴 Faça um **Fork** do projeto
2. 🌿 Crie uma **Branch** (`git checkout -b feature/MinhaFeature`)
3. 💾 **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. 📤 Faça **Push** (`git push origin feature/MinhaFeature`)
5. 🔃 Abra um **Pull Request**

### Ideias de Contribuição

- 🌍 Adicionar internacionalização (i18n)
- 📸 Galeria de fotos interativa
- 📊 Dashboard de impacto dos projetos
- 🗺️ Mapa interativo da região
- 🎥 Seção de vídeos/depoimentos
- 📱 App mobile (React Native)

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Desenvolvedor

<div align="center">

### Desenvolvido com 💚 por **[@catitodev](https://github.com/catitodev)**

*"Transformando comunidades em código, pixel por pixel."*

<br>

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/catitodev)
[![Portfolio](https://img.shields.io/badge/-Portfolio-059669?style=for-the-badge&logo=react&logoColor=white)](https://catitodev.github.io/siteapaq_pa_quilombo/)

</div>

---

## 🌿 Sobre a APAQ

> *"Nascemos em 1994. Às margens do Rio Quilombo, aprendemos que a terra não é apenas chão, é direito."*

**Associação dos Produtores Agroecológicos do PA Quilombo**
- 📍 Estrada do Quilombo, Lago do Manso
- 🌎 Chapada dos Guimarães, Mato Grosso
- 📅 Fundada em 1994 (30 anos de história)
- 🏆 Utilidade Pública Municipal (Lei 2.107-2025)
- 👥 Centenas de famílias beneficiadas

### Liderança

- **Presidente**: Edimar Joaquim
- **Vice-Presidente**: Braz Divino F.S.
- **Tesouraria**: Lucinete C.C. Joaquim
- **Secretaria**: Rozeli Campos
- **Contador**: Antônio Gonçalves

---

## 📞 Contato APAQ

Para mais informações sobre a associação:

- 📧 Email: contato@apaquilombo.org.br
- 📱 WhatsApp: (65) 99999-0000
- 📍 Localização: [Google Maps](https://maps.app.goo.gl/exemplo)
- 🌐 Site: [apaquilombo.org.br](https://catitodev.github.io/siteapaq_pa_quilombo/)

---

<div align="center">

### ⭐ Se este projeto te inspirou, deixe uma estrela!

**Made with 💚 for the PA Quilombo Community**

*"Do produtor para a mesa. Da terra para o futuro."*

---

![Footer](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200&h=200)

</div>
