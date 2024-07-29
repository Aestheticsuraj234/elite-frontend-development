import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { Typewriter } from 'react-simple-typewriter'



export default function Component() {


const handleType = (count) => {
// access word count number
console.log(count)
}

const handleDone = () => {
console.log(`Done after 5 loops!`)
}

return (
<div className="flex flex-col min-h-[100vh]">
<header className="px-4 lg:px-6 h-14 flex items-center">
<div  className="flex items-center justify-center"  >
<CodeIcon className="h-6 w-6" />
<span className="sr-only">John Does Portfolio</span>
</div>

<nav className="ml-auto flex gap-4 sm:gap-6">
<div  className="text-sm font-medium hover:underline underline-offset-4" >
Home
</div>
<div  className="text-sm font-medium hover:underline underline-offset-4" >
Projects
</div>
<div  className="text-sm font-medium hover:underline underline-offset-4" >
Skills
</div>
<div  className="text-sm font-medium hover:underline underline-offset-4" >
Contact
</div>
</nav>
</header>
<main className="flex-1">
<section className="w-full py-8 md:py-6 lg:py-2">
<div className="container px-4 md:px-6">
<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
<div className="flex flex-col justify-center space-y-4">
  <div className="space-y-2">
  <h1 id="typewriter" className="text-[#FF3E00] text-5xl truncate font-bold tracking-tighter py-2">
      <Typewriter
        words={['Hey👋 , I am Suraj Kumar Jha' , "Fullstack Software Engineer" , "Coding Instructor" , "Content Creator"]}
        loop={5}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
    </h1>
    <h2 className="text-xl font-semibold text-muted-foreground">Full-Stack Developer</h2>
    <p className="max-w-[600px] text-muted-foreground md:text-xl">
      Im a passionate full-stack developer with expertise in building modern, scalable, and user-friendly
      web applications.
    </p>
  </div>
  <div className="flex flex-col gap-2 min-[400px]:flex-row">
    <div
      
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      
    >
      View Projects
    </div>
    <div
      
      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      
    >
      Contact Me
    </div>
  </div>
</div>
<img
  src="https://keelanjon.com/static/illustration-keelanjon-68a9ba2959b48c1bef6a8a8246779e2b.png"
  width="350"
  height="350"
  alt="Hero"
  className="mx-auto aspect-auto overflow-hidden object-cover sm:w-full "
/>
</div>
</div>
</section>
<section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
<div className="container px-4 md:px-6">
<div className="flex flex-col items-center justify-center space-y-4 text-center">
<div className="space-y-2">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    Check out some of my recent web development projects.
  </p>
</div>
</div>
<div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
<Card>
  <CardHeader>
    <img
      src="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4c0b775c-bafa-47f5-9df7-a43ff714b83a-2xy2q2.png&w=1920&q=75"
      width="550"
      height="310"
      alt="Project 1"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  </CardHeader>
  <CardContent>
    <div className="grid gap-1">
      <h3 className="text-lg font-bold">Project 1</h3>
      <p className="text-sm text-muted-foreground">
        A modern web application built with React, Node.js, and MongoDB.
      </p>
    </div>
    <div className="flex gap-2 mt-4">
      <div
        
        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
      >
        Live Demo
      </div>
      <div
        
        className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
      >
        GitHub
      </div>
    </div>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <img
      src="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F3fd4e9e6-8489-4005-a6a7-29f0338745b1-jbkgcj.jpg&w=1920&q=75"
      width="550"
      height="310"
      alt="Project 2"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  </CardHeader>
  <CardContent>
    <div className="grid gap-1">
      <h3 className="text-lg font-bold">Project 2</h3>
      <p className="text-sm text-muted-foreground">
        A responsive e-commerce website built with Next.js and Stripe.
      </p>
    </div>
    <div className="flex gap-2 mt-4">
      <div
        
        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
      >
        Live Demo
      </div>
      <div
        
        className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
      >
        GitHub
      </div>
    </div>
  </CardContent>
</Card>
<Card>
  <CardHeader>
    <img
      src="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F08857d36-2392-4182-9f6f-5fb93a8e8543-2ytnxz.jpg&w=1920&q=75"
      width="550"
      height="310"
      alt="Project 3"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
  </CardHeader>
  <CardContent>
    <div className="grid gap-1">
      <h3 className="text-lg font-bold">Project 3</h3>
      <p className="text-sm text-muted-foreground">
        A real-time chat application built with Socket.IO and React.
      </p>
    </div>
    <div className="flex gap-2 mt-4">
      <div
        
        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
      >
        Live Demo
      </div>
      <div
        
        className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        
      >
        GitHub
      </div>
    </div>
  </CardContent>
</Card>
</div>
</div>
</section>
<section id="skills" className="w-full py-12 md:py-24 lg:py-32">
<div className="container px-4 md:px-6">
<div className="flex flex-col items-center justify-center space-y-4 text-center">
<div className="space-y-2">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    Here are some of the technologies Im proficient in.
  </p>
</div>
</div>
<div className="mx-auto grid mt-10 max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-5">
<img
  src="https://www.svgrepo.com/show/303500/react-1-logo.svg"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>
  <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1NAnlhSMbhwPtdLoWbm4WkAQu5qpPH_Hzw&s"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>
  <img
  src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=webp"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>
  <img
  src="https://e7.pngegg.com/pngimages/170/924/png-clipart-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-thumbnail.png"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>

<img
  src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
  width="150"
  height="150"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>            </div>
</div>
</section>
<section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
<div className="container px-4 md:px-6">
<div className="flex flex-col items-center justify-center space-y-4 text-center">
<div className="space-y-2">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    Have a project in mind? Lets discuss how I can help.
  </p>
</div>
<div className="mx-auto w-full max-w-sm space-y-2">
  <form className="flex flex-col gap-4">
    <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
    <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
    <Textarea placeholder="Message" className="max-w-lg flex-1" />
    <Button type="submit">Submit</Button>
  </form>
</div>
</div>
</div>
</section>
</main>
<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
<p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
<nav className="sm:ml-auto flex gap-4 sm:gap-6">
<div  className="text-xs hover:underline underline-offset-4" >
Privacy
</div>
<div  className="text-xs hover:underline underline-offset-4" >
Terms
</div>
</nav>
</footer>
</div>
)
}

function CodeIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<polyline points="16 18 22 12 16 6" />
<polyline points="8 6 2 12 8 18" />
</svg>
)
}


function XIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M18 6 6 18" />
<path d="m6 6 12 12" />
</svg>
)
}