# RepoMind 🧠🚀

RepoMind is a cutting-edge platform that allows users to connect their GitHub repositories and gain insights into their project's activity. It provides a summary of chats, commits, and integrates an AI-powered LLM (Large Language Model) to answer questions about the repository. Built with the **T3 stack** (Next.js, TypeScript, tRPC, TailwindCSS, and Prisma), styled with **shadcn/ui**, and secured with **Clerk** for authentication, RepoMind is designed for developers who want to streamline their workflow and understand their projects better.

---

## Features ✨

- **GitHub Integration**: Seamlessly connect your GitHub repository to RepoMind.
- **Commit Summarization**: Get a concise summary of recent commits.
- **Chat Summarization**: Summarize discussions and pull request comments.
- **AI-Powered Q&A**: Ask questions about your repository and get instant answers powered by an LLM.
- **Modern Tech Stack**: Built with the T3 stack for scalability, type safety, and developer productivity.
- **Beautiful UI**: Powered by **shadcn/ui** for a sleek and responsive user interface.
- **Secure Authentication**: Managed by **Clerk** for seamless and secure user authentication.

---

## Tech Stack 🛠️

- **Frontend**: Next.js, TailwindCSS, shadcn/ui
- **Backend**: tRPC, Next.js API routes
- **Database**: Prisma (with PostgreSQL or SQLite)
- **Authentication**: Clerk
- **LLM Integration**: OpenAI API (or any other LLM provider)
- **GitHub API**: For repository data and activity

---

## Getting Started 🚀

### Prerequisites

- Node.js v18 or higher
- GitHub account
- OpenAI API key (or any other LLM provider)
- PostgreSQL or SQLite database
- Clerk account (for authentication)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/repo-mind.git
   cd repo-mind

   ```

2. **install dependencies**

```bash
npm install
```

3. **set up enviornment variables**
   Copy .env.example to .env

```bash
cp .env.example .env
```

fill in the required info

```bash
DATABASE_URL="your_database_url"
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
OPENAI_API_KEY="your_openai_api_key"
```

4. **Run database migrations:**

```bash
npm run db:migrate
```

5. **start development server**

```bash
npm run dev
```

## folder structure

repo-mind/
├── prisma/ # Prisma schema and migrations
├── src/
│ ├── components/ # React components (built with shadcn/ui)
│ ├── pages/ # Next.js pages
│ ├── server/ # tRPC routers and API logic
│ ├── styles/ # TailwindCSS styles
│ ├── utils/ # Utility functions
│ └── types/ # TypeScript types
├── .env.example # Environment variables template
├── package.json # Project dependencies
├── tailwind.config.js # TailwindCSS configuration
└── README.md # You're here!
