import { Code2, Heart, Lightbulb } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Algorithm Playground</h1>
            <p className="text-xl text-muted-foreground">
              Making algorithms visual, interactive, and fun to learn
            </p>
          </div>

          {/* Mission */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <div className="pl-13 space-y-4 text-muted-foreground">
              <p>
                Algorithm Playground was built with a simple goal: to help developers and students
                understand <strong>how algorithms think</strong>, not just what they produce.
              </p>
              <p>
                Traditional learning often focuses on the final result or abstract complexity analysis.
                We believe that seeing the step-by-step process—every comparison, every pointer movement,
                every decision—is the key to true understanding.
              </p>
            </div>
          </section>

          {/* Philosophy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Philosophy</h2>
            </div>
            <div className="pl-13 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Visual-First Learning</h3>
                <p className="text-muted-foreground">
                  Animations and color-coding replace verbose comments and explanations.
                  Watch the algorithm unfold before your eyes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Process Over Result</h3>
                <p className="text-muted-foreground">
                  It's not about knowing the answer—it's about understanding the journey.
                  Every step matters.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Language-Agnostic Logic</h3>
                <p className="text-muted-foreground">
                  The same algorithm, multiple implementations. Learn the pattern,
                  not just the syntax.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Interactive Exploration</h3>
                <p className="text-muted-foreground">
                  Control the speed, pause, step backward and forward. Learn at your own pace,
                  in your own way.
                </p>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Who This Is For</h2>
            </div>
            <div className="pl-13 grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">CS Students</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize what you're learning in class. Turn abstract concepts into
                  concrete understanding.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Self-Taught Developers</h3>
                <p className="text-sm text-muted-foreground">
                  Bridge the gap between reading about algorithms and truly understanding them.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Interview Preppers</h3>
                <p className="text-sm text-muted-foreground">
                  Get quick visual refreshers before technical interviews. Solidify your knowledge.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2">Educators</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive teaching materials that engage students and make concepts stick.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="space-y-6 pb-12">
            <h2 className="text-2xl font-bold">Built With</h2>
            <div className="flex flex-wrap gap-3">
              {['React 18', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Zustand', 'Vite'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
