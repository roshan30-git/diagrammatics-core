# Diagrammatics Core

**A visual-first AI education operating system with persistent academic memory, grounded retrieval, and AI-native study workflows.**

---

## 🧠 Core Philosophy

Most AI tools fail engineering education because they return walls of text. Students learn from visuals, patterns, structured repetition, and active recall.

Diagrammatics Core is a locally-hosted, visual-first academic operating system designed to convert lecture PDFs and image scans into interactive visual assets—including KaTeX formula cards, side-by-side comparison tables, and Mermaid flowcharts—grounded by custom local RAG and NotebookLM MCP augmentation.

---

## 🚀 Key Features (MVP v1.0)

- **Visual Output Engine**: Natively generates high-retention visual study materials (Formula Card Grids, Comparison Cards, Mermaid system diagrams, and Quick Recall Cards).
- **Persistent Academic Memory**: Tracks subjects, session topics, and language preferences dynamically over the semester (powered by local `sqlite-vec` + `mem0`).
- **Bilingual Ingestion & OCR**: High-performance local text extraction from complex multi-column academic PDFs and raw hand-written scans (powered by `PyMuPDF` + `PaddleOCR`).
- **Grounded Local RAG**: Fast, offline semantic searches within your exact syllabus without internet reliance or cloud telemetry (powered by `FastEmbed`).
- **NotebookLM MCP Bridge**: Dual-engine augmentation. Proxies deeper, highly grounded research queries directly to Google's NotebookLM RAG interface for premium accuracy.
- **Bilingual Hinglish Support**: Visual explanation logic customizable to mixed Hindi-English context.

---

## 🛠️ The 2026 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Orchestration** | AgentScope Multi-Agent Hub (Python) |
| **API Bridge** | FastAPI + WebSockets (Real-time thought streaming) |
| **Frontend Cockpit** | Next.js 15 (React 19) + Zustand |
| **Visual Rendering** | Mermaid.js, KaTeX, Plotly.js |
| **Vector DB / Embed** | `sqlite-vec` (C-extension) + `FastEmbed` |
| **User Memory** | `mem0` (Fully Local mode) |
| **Static Site** | Vanilla HTML5 / CSS3 (Brutalist OS Identity) |

---

## 📂 Project Structure

- `index.html`: Technical brutalist landing site & OS dashboard entry point.
- `style.css`: Mechanical, grid-based layout styling, technical typography, and mockup templates.
- `main.js`: Interactive OS window logic and active mock visualizations.

---

*Built with ❤️ for the Visual-First Local-First Revolution.*
