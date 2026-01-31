import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Interactive Algorithm Visualization
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Learn How Algorithms
              <span className="text-primary block mt-2">Think, Not Just Work</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step through algorithms visually. See every comparison, every movement,
              every decision. Transform abstract code into concrete understanding.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/algorithm/palindrome"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Try Palindrome Checker
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Explore All Algorithms
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Algorithm Playground?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visual-First Learning</h3>
                <p className="text-muted-foreground">
                  Watch algorithms come alive with color-coded states, animated pointers,
                  and step-by-step execution.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Interactive Exploration</h3>
                <p className="text-muted-foreground">
                  Control the speed, step through manually, or let it play.
                  Learn at your own pace.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Multi-Language Code</h3>
                <p className="text-muted-foreground">
                  See the same algorithm in Python, JavaScript, Java, and C++.
                  Learn the pattern, not just the syntax.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6 bg-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to See Algorithms Differently?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start with our palindrome checker and experience
              the power of visual learning.
            </p>
            <Link
              to="/algorithm/palindrome"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
