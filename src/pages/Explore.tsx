import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const algorithms = [
  {
    id: 'palindrome',
    name: 'Palindrome Checker',
    category: 'String Algorithms',
    difficulty: 'Easy',
    description: 'Check if a string reads the same forwards and backwards using two-pointer technique.',
    available: true,
  },
  {
    id: 'reverse-string',
    name: 'Reverse String',
    category: 'String Algorithms',
    difficulty: 'Easy',
    description: 'Reverse a string in-place using two pointers.',
    available: false,
  },
  {
    id: 'two-sum',
    name: 'Two Sum',
    category: 'Array Algorithms',
    difficulty: 'Easy',
    description: 'Find two numbers that add up to a target value.',
    available: false,
  },
];

export function Explore() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Algorithms</h1>
            <p className="text-xl text-muted-foreground">
              Browse our collection of interactive algorithm visualizations
            </p>
          </div>

          {/* Algorithm Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algorithms.map((algo) => (
              <div
                key={algo.id}
                className={`p-6 rounded-lg border ${
                  algo.available
                    ? 'bg-card border-border hover:border-primary transition-colors'
                    : 'bg-muted border-border opacity-60'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{algo.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {algo.category}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      algo.difficulty === 'Easy'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                    }`}
                  >
                    {algo.difficulty}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {algo.description}
                </p>

                {algo.available ? (
                  <Link
                    to={`/algorithm/${algo.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Try it out
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Coming soon...
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Explore;
