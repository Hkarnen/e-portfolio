# Houston Karnen – E-Portfolio

Portfolio showcasing my projects, technical skills, and background.

> **Note**: Work In Progress

Built with **React Router 7 App Router**, **Vite**, **Tailwind CSS**, and **Motion** animations.

## Project Structure

app/                     
├─ routes/  
│  ├─ home.tsx           
│  ├─ about.tsx         
│  └─ projects.tsx      
├─ components/  
│  └─ Navbar.tsx        
public/                 
app.css                 
Dockerfile               
package.json             
tsconfig.json            
vite.config.ts           
README.md              


## Tech Stack

| Layer            | Library / Tool                                    |
|------------------|---------------------------------------------------|
| Build & Dev      | **Vite**                                          |
| Routing / SSR    | **React Router 7 App Router**                     |
| Styling          | **Tailwind CSS**                                  |
| Animations       | **Motion** (`motion/react`)                       |
| Type Safety      | **TypeScript**                                    |
| Hosting          | **Vercel** — auto-deploy on every `main` push <br> 🔗 <https://e-portfolio-houston-karnens-projects.vercel.app/> |

> **Next up:** containerise with Docker/Fargate for fun and get a custom domain for hosting.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Lint & Type-check
```bash
npm run typecheck
```

## Building for Production

Create a production build:

```bash
npm run build

npm start
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```


Built with ❤️ using React Router.
