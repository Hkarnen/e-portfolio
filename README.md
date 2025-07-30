# Houston Karnen – E-Portfolio

My portfolio website built with React Router 7, showcasing my projects and technical background.

## Live Site

**Production**: [https://e-portfolio-houston-karnens-projects.vercel.app/](https://e-portfolio-houston-karnens-projects.vercel.app/)

Built with React Router 7, Vite, Tailwind CSS, and some Motion animations.

## Project Structure

```
app/
├─ routes/               # Pages
│  ├─ home.tsx        # Home page
│  ├─ about.tsx         # About me
│  └─ projects.tsx      # Projects
├─ components/           # Reusable components
│  ├─ ProjectCard.tsx   # Project cards
│  ├─ MediaPicker.tsx   # Video/image switcher
│  ├─ ImageCarousel.tsx   # Image Carousel
│  └─ VideoPlayer.tsx     # Video Player
terraform/               # AWS infrastructure
Dockerfile              # Docker setup
```
## Work Experience (Placements / Internship)

- **Clinical Reasoning Simulations** - Medical training platform for students at University of Eastern Finland
- **Queue Solutions** - University project planning tool
- **StudyGenie** - AI quiz app startup
- **Longbeach Scheduler** - Staff booking system

## Selected Projects
> University projects that are relevant

Under development

## Tech Stack

- **React Router 7** - routing and SSR
- **Vite** - build tool
- **Tailwind CSS** - styling
- **Motion** - animations - plans to remove
- **TypeScript** - type safety
- **Vercel** - hosting
- **Docker** - containerization
- **Terraform** - AWS infrastructure for hands on experience

## AWS Infrastructure Setup

I added AWS infrastructure using Terraform to demonstrate cloud skills for job applications. The setup includes:

- Custom VPC (10.0.0.0/16) in Sydney region
- Public subnet with internet gateway
- Security groups for HTTP and SSH access
- EC2 instance running Amazon Linux 2023
- Automated Docker deployment via user data script

The infrastructure code is in the `terraform/` folder. You can deploy it with:
```bash
cd terraform
terraform init
terraform apply
```

Note: I've taken down the actual deployment to save costs, but the infrastructure code remains as a demonstration.

## Development

```bash
npm install
npm run dev 
npm run typecheck
```

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Deployment

Currently deployed on Vercel with automatic deployments from the main branch. The Docker setup makes it deployable to any platform (AWS ECS, Google Cloud Run, etc.).

---

Built with React Router 7 and deployed on Vercel.
