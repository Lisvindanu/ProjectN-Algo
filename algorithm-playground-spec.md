# Interactive Algorithm Playground - Full Project Specification

## 📋 Project Overview

### Vision Statement
Build an **interactive algorithm playground** that helps users understand **how algorithms think**, not just what they produce. This is a visual learning platform where algorithms come alive through step-by-step execution, color-coded states, and multi-language implementations.

### Core Philosophy
> "Show what happens behind the scenes of algorithms, step by step."

### Key Differentiators
- **Visual-First Learning**: Animations replace verbose comments
- **Process Over Result**: Focus on the journey, not just the destination
- **Language-Agnostic Logic**: One algorithm, multiple implementations
- **Interactive Exploration**: Users learn by doing and seeing

---

## 🎯 Target Audience

1. **Computer Science Students** - Need to visualize data structure operations
2. **Self-Taught Developers** - Stuck understanding algorithmic logic
3. **Interview Preppers** - Need quick visual refreshers
4. **Educators** - Want interactive teaching materials

---

## 🧩 Core Features

### 1. Algorithm Visualization Engine
**What it does:**
- Executes algorithms step-by-step
- Highlights active elements (pointers, comparisons, swaps)
- Color-codes states (active, comparing, swapped, completed)
- Displays complexity metrics (time/space)

**Implementation:**
```
User Input → State Management → Visual Renderer → Animation Engine
```

### 2. Multi-Language Code Display
**Languages to support:**
- Python (primary educational language)
- JavaScript/TypeScript
- Java
- C++
- Go
- Rust (optional)

**Display format:**
- Syntax-highlighted
- Line-by-line execution indicator
- No boilerplate (focus on core logic)
- Collapsible sections

### 3. Interactive Input Panel
**Features:**
- Text input (for string algorithms)
- Array builder (drag-drop, manual entry)
- Number range slider
- Random data generator
- Preset examples

### 4. Mental Model Diagrams
**Visual representations:**
- Flowcharts (algorithm logic flow)
- State transition diagrams
- Pointer movement maps
- Before/After comparisons

### 5. Pseudocode Display
**Characteristics:**
- Human-readable, not language-specific
- Aligned with visual execution
- Numbered steps matching animation
- Conditional highlighting

---

## 🏗️ Technical Architecture

### Tech Stack

#### Frontend Framework
```
React 18+ with TypeScript
```

**Rationale:**
- Rich ecosystem for complex state management
- TypeScript ensures type safety across algorithm implementations
- Mature animation libraries
- Strong community support

#### Animation & Visualization
```
Primary: Framer Motion
Secondary: React Spring (for physics-based animations)
```

**Use cases:**
- Pointer movements (spring animations)
- Element highlighting (color transitions)
- State changes (scale, rotate, fade)
- Step transitions (orchestrated sequences)

#### UI Component System
```
Tailwind CSS + shadcn/ui + Radix UI
```

**Components needed:**
- Tabs (algorithm selection)
- Accordion (code blocks)
- Dialog (settings, help)
- Slider (speed control)
- Toggle (dark mode)
- Button (step controls)

#### Code Display & Highlighting
```
Prism.js or Shiki
```

**Requirements:**
- Multi-language support
- Line highlighting
- Custom theme support
- Performance optimized

#### Diagram & Flow Visualization
```
React Flow (or Xyflow)
```

**For:**
- Algorithm flowcharts
- Graph visualizations
- Tree structures
- State machines

#### State Management
```
Zustand
```

**State structure:**
```typescript
interface AlgorithmState {
  // Execution state
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  speed: number; // ms per step
  
  // Algorithm data
  input: string | number[];
  pointers: Record<string, number>;
  comparisons: [number, number][];
  highlights: number[];
  
  // Results
  output: any;
  complexity: {
    time: string;
    space: string;
  };
  
  // Actions
  play: () => void;
  pause: () => void;
  reset: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setSpeed: (speed: number) => void;
}
```

#### Code Execution (Optional Advanced Feature)
```
Web Workers + Pyodide (Python in browser)
```

**For:**
- User custom code execution
- Sandboxed environment
- No backend needed

#### Deployment
```
Vercel or Netlify
```

**Features:**
- Auto-deploy on push
- Edge functions (if needed)
- Analytics integration
- Preview deployments

---

## 📁 Project Structure

```
algorithm-playground/
├── public/
│   ├── algorithms/           # Algorithm metadata & examples
│   └── assets/               # Icons, images
│
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── algorithm/
│   │   │   ├── VisualizationCanvas.tsx
│   │   │   ├── ControlPanel.tsx
│   │   │   ├── InputPanel.tsx
│   │   │   ├── CodeDisplay.tsx
│   │   │   ├── PseudocodeDisplay.tsx
│   │   │   └── ComplexityMetrics.tsx
│   │   └── visualizers/
│   │       ├── PalindromeVisualizer.tsx
│   │       ├── BubbleSortVisualizer.tsx
│   │       └── ... (one per algorithm)
│   │
│   ├── lib/
│   │   ├── algorithms/
│   │   │   ├── palindrome/
│   │   │   │   ├── logic.ts        # Core algorithm logic
│   │   │   │   ├── steps.ts        # Step-by-step generator
│   │   │   │   ├── implementations/ # Multi-language code
│   │   │   │   │   ├── python.ts
│   │   │   │   │   ├── javascript.ts
│   │   │   │   │   ├── java.ts
│   │   │   │   │   └── cpp.ts
│   │   │   │   └── metadata.ts     # Description, complexity
│   │   │   └── ... (other algorithms)
│   │   ├── utils/
│   │   └── types/
│   │
│   ├── store/
│   │   ├── algorithmStore.ts
│   │   ├── uiStore.ts
│   │   └── userStore.ts (optional)
│   │
│   ├── hooks/
│   │   ├── useAlgorithmExecution.ts
│   │   ├── useVisualization.ts
│   │   └── useStepControls.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── AlgorithmPage.tsx
│   │   ├── Explore.tsx
│   │   └── About.tsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🎨 UI/UX Design Specifications

### Color System (Tailwind-based)

```javascript
// Algorithm States
const stateColors = {
  idle: 'bg-gray-200 dark:bg-gray-700',
  active: 'bg-blue-500',
  comparing: 'bg-yellow-400',
  success: 'bg-green-500',
  error: 'bg-red-500',
  completed: 'bg-purple-500'
};

// Pointer Indicators
const pointerColors = {
  left: 'bg-indigo-500 ring-indigo-300',
  right: 'bg-pink-500 ring-pink-300',
  current: 'bg-amber-500 ring-amber-300'
};
```

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo | Algorithm Selector | Settings           │
├──────────────┬──────────────────────────────────────────┤
│              │  Visualization Canvas                    │
│   Sidebar    │  ┌────────────────────────────────────┐  │
│              │  │  [Interactive Visual Area]         │  │
│   - Steps    │  │                                    │  │
│   - Pseudo   │  │  Array: [■][■][■][■][■]          │  │
│   - Flow     │  │         ↑         ↑                │  │
│              │  │        left      right             │  │
│              │  └────────────────────────────────────┘  │
│              │                                          │
│              │  Control Panel                           │
│              │  [◄] [►] [▶] [■] [Speed: ──●───]      │
│              │                                          │
│              │  Code Display (Tabbed)                   │
│              │  [Python] [JavaScript] [Java] [C++]      │
│              │  ┌────────────────────────────────────┐  │
│              │  │ 1  def is_palindrome(s):           │  │
│              │  │ 2 →  left, right = 0, len(s)-1    │  │
│              │  │ 3    while left < right:           │  │
│              │  └────────────────────────────────────┘  │
└──────────────┴──────────────────────────────────────────┘
```

### Animation Timings

```javascript
const animationDurations = {
  fast: 300,      // Quick highlights
  normal: 600,    // Pointer movements
  slow: 1000,     // Complex transitions
  
  // User-adjustable speed multiplier
  speedMultiplier: 1.0 // 0.5x to 2.0x
};
```

---

## 🔄 Algorithm Implementation Pattern

### Example: Palindrome Checker

#### 1. Core Logic (`lib/algorithms/palindrome/logic.ts`)

```typescript
export interface PalindromeStep {
  step: number;
  description: string;
  left: number;
  right: number;
  comparing: boolean;
  result?: boolean;
  highlights: number[];
}

export function* generatePalindromeSteps(text: string): Generator<PalindromeStep> {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  let step = 0;

  yield {
    step: step++,
    description: "Initialize pointers at both ends",
    left,
    right,
    comparing: false,
    highlights: [left, right]
  };

  while (left < right) {
    yield {
      step: step++,
      description: `Compare '${cleaned[left]}' and '${cleaned[right]}'`,
      left,
      right,
      comparing: true,
      highlights: [left, right]
    };

    if (cleaned[left] !== cleaned[right]) {
      yield {
        step: step++,
        description: "Characters don't match - not a palindrome",
        left,
        right,
        comparing: false,
        result: false,
        highlights: [left, right]
      };
      return;
    }

    left++;
    right--;
    
    yield {
      step: step++,
      description: "Move pointers inward",
      left,
      right,
      comparing: false,
      highlights: [left, right]
    };
  }

  yield {
    step: step++,
    description: "All characters matched - it's a palindrome!",
    left,
    right,
    comparing: false,
    result: true,
    highlights: []
  };
}
```

#### 2. Implementations (`lib/algorithms/palindrome/implementations/`)

**python.ts:**
```typescript
export const pythonImplementation = `def is_palindrome(s: str) -> bool:
    # Remove non-alphanumeric and convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    
    left, right = 0, len(cleaned) - 1
    
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    
    return True`;
```

**javascript.ts:**
```typescript
export const javascriptImplementation = `function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}`;
```

#### 3. Visualizer (`components/visualizers/PalindromeVisualizer.tsx`)

```typescript
import { motion } from 'framer-motion';
import { useAlgorithmStore } from '@/store/algorithmStore';

export function PalindromeVisualizer() {
  const { currentStep, input } = useAlgorithmStore();
  
  if (!currentStep) return null;
  
  const chars = input.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  const { left, right, comparing, highlights } = currentStep;

  return (
    <div className="flex gap-2 justify-center p-8">
      {chars.map((char, index) => {
        const isLeft = index === left;
        const isRight = index === right;
        const isHighlighted = highlights.includes(index);
        
        return (
          <motion.div
            key={index}
            className={`
              w-16 h-16 flex items-center justify-center
              text-2xl font-mono rounded-lg
              ${isLeft || isRight ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}
              ${comparing && isHighlighted ? 'ring-4 ring-yellow-400' : ''}
            `}
            animate={{
              scale: isHighlighted ? 1.2 : 1,
              rotate: comparing && isLeft ? -10 : comparing && isRight ? 10 : 0,
              y: isHighlighted ? -10 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            {char}
          </motion.div>
        );
      })}
      
      {/* Pointer Labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
        <motion.div
          className="text-sm font-semibold text-blue-600"
          animate={{ x: left * 72 }}
          transition={{ type: "spring" }}
        >
          ↑ Left
        </motion.div>
        <motion.div
          className="text-sm font-semibold text-pink-600"
          animate={{ x: right * 72 }}
          transition={{ type: "spring" }}
        >
          ↑ Right
        </motion.div>
      </div>
    </div>
  );
}
```

#### 4. Metadata (`lib/algorithms/palindrome/metadata.ts`)

```typescript
export const palindromeMetadata = {
  id: 'palindrome',
  name: 'Palindrome Checker',
  category: 'String Algorithms',
  difficulty: 'Easy',
  description: 'Determines if a string reads the same forwards and backwards using two-pointer technique.',
  
  keyIdeas: [
    'Two-pointer approach',
    'String normalization',
    'Early termination',
    'Linear time complexity'
  ],
  
  complexity: {
    time: 'O(n)',
    space: 'O(1)',
    timeExplanation: 'Single pass through half the string',
    spaceExplanation: 'Only two pointer variables needed'
  },
  
  realWorldUses: [
    'DNA sequence analysis',
    'Text validation',
    'Data integrity checks'
  ],
  
  relatedAlgorithms: [
    'two-sum',
    'reverse-string',
    'valid-parentheses'
  ]
};
```

---

## 🎮 User Interaction Flow

### 1. Landing Page
```
User arrives → See hero demo (auto-playing palindrome) → Call-to-action: "Try it yourself"
```

### 2. Algorithm Selection
```
Browse categories → Select algorithm → Load visualization interface
```

### 3. Input Phase
```
Enter data → Validate → Generate algorithm steps → Ready to visualize
```

### 4. Execution Phase
```
Click Play → Step-by-step animation → Pause/Resume → Navigate steps manually
```

### 5. Learning Phase
```
Read pseudocode → Compare implementations → View flowchart → Understand complexity
```

---

## 🚀 MVP Feature Set (Phase 1)

### Must-Have Features
1. ✅ Single algorithm: Palindrome Checker
2. ✅ Visual execution with 2-pointer animation
3. ✅ Code display: Python, JavaScript
4. ✅ Play/Pause/Reset controls
5. ✅ Speed adjustment slider
6. ✅ Pseudocode panel
7. ✅ Dark mode support
8. ✅ Responsive design (desktop-first)

### MVP Algorithms
- Palindrome Checker (entry point)
- Reverse String
- Two Sum

---

## 📈 Future Roadmap (Post-MVP)

### Phase 2: Algorithm Expansion
- Sorting: Bubble Sort, Quick Sort, Merge Sort
- Searching: Binary Search, Linear Search
- Arrays: Remove Duplicates, Rotate Array
- Linked Lists: Reverse, Detect Cycle

### Phase 3: Advanced Features
- User accounts (save progress)
- Custom algorithm challenges
- Code execution sandbox
- Export animations as GIF/Video
- Collaborative learning mode

### Phase 4: Platform Growth
- Mobile app (React Native)
- API for educators
- Algorithm marketplace (community contributions)
- Interview prep mode

---

## 🛠️ Development Guidelines

### Code Style
```typescript
// Use descriptive variable names
const leftPointer = 0; // ✅
const lp = 0; // ❌

// Comment the "why", not the "what"
// ✅ Check both ends to avoid redundant comparisons
while (left < right) { ... }

// ❌ Loop while left is less than right
while (left < right) { ... }

// Prefer pure functions
function generateSteps(input: string): Step[] // ✅
function generateSteps() // ❌ (relies on global state)
```

### Component Patterns
```typescript
// Separate logic from presentation
const useAlgorithmLogic = () => { /* business logic */ };
const AlgorithmVisualizer = () => { /* UI only */ };

// Compose small, focused components
<AlgorithmPage>
  <VisualizationCanvas />
  <ControlPanel />
  <CodeDisplay />
</AlgorithmPage>
```

### Performance Considerations
- Lazy load algorithm modules
- Memoize expensive computations
- Use `React.memo` for static components
- Debounce user input
- Progressive loading (show skeleton UI)

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "typescript": "^5.0.0",
  "framer-motion": "^11.0.0",
  "zustand": "^4.5.0",
  "react-router-dom": "^6.22.0"
}
```

### UI Dependencies
```json
{
  "tailwindcss": "^3.4.0",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-slider": "^1.1.2",
  "@radix-ui/react-dialog": "^1.0.5",
  "lucide-react": "^0.344.0"
}
```

### Visualization Dependencies
```json
{
  "prismjs": "^1.29.0",
  "react-flow-renderer": "^10.3.17"
}
```

### Development Dependencies
```json
{
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.2.0",
  "autoprefixer": "^10.4.18",
  "postcss": "^8.4.35"
}
```

---

## 🧪 Testing Strategy

### Unit Tests
- Algorithm logic (`*.logic.ts`)
- Step generators
- Utility functions

### Integration Tests
- Component rendering
- State management
- User interactions

### E2E Tests (Playwright/Cypress)
- Full algorithm execution flow
- Multi-language code switching
- Animation playback

---

## 🎯 Success Metrics

### User Engagement
- Average session duration > 5 minutes
- Step-through completion rate > 70%
- Return visitor rate > 30%

### Learning Outcomes
- User surveys: "I understand the algorithm better" > 80%
- Code implementation attempts after visualization

### Technical Metrics
- Time to Interactive (TTI) < 2 seconds
- Largest Contentful Paint (LCP) < 1.5 seconds
- Animation frame rate: 60 FPS

---

## 📝 Documentation Requirements

### For Developers
- README with setup instructions
- Architecture decision records (ADRs)
- Algorithm contribution guide
- Component API documentation

### For Users
- Interactive tutorial on first visit
- Tooltips for all UI elements
- FAQ section
- Algorithm complexity explainers

---

## 🔐 Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation for all controls
- Screen reader support (ARIA labels)
- Color contrast ratios > 4.5:1
- Reduced motion mode (respects `prefers-reduced-motion`)
- Focus indicators on all interactive elements

---

## 🌐 Internationalization (Future)

### Supported Languages
- English (primary)
- Indonesian (Bahasa)
- Spanish
- Mandarin

### Translatable Content
- UI labels
- Algorithm descriptions
- Pseudocode (optional)
- Error messages

---

## 💡 Implementation Priorities

### Week 1: Foundation
- [ ] Project setup (Vite + React + TypeScript)
- [ ] Tailwind + shadcn/ui configuration
- [ ] Folder structure
- [ ] Routing setup
- [ ] Basic layout components

### Week 2: Core Algorithm Engine
- [ ] Zustand store setup
- [ ] Palindrome algorithm logic
- [ ] Step generator
- [ ] Basic visualizer component

### Week 3: Animation & UI
- [ ] Framer Motion integration
- [ ] Palindrome visual animation
- [ ] Control panel (play/pause/step)
- [ ] Speed slider

### Week 4: Code Display & Polish
- [ ] Prism.js integration
- [ ] Multi-language code tabs
- [ ] Pseudocode display
- [ ] Dark mode
- [ ] Responsive design

### Week 5: Testing & Deployment
- [ ] Unit tests
- [ ] E2E tests
- [ ] Performance optimization
- [ ] Deploy to Vercel
- [ ] Analytics setup

---

## 🎨 Design Resources

### Color Palette
```css
/* Light Mode */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 221.2 83.2% 53.3%;
--secondary: 210 40% 96.1%;
--accent: 210 40% 96.1%;
--success: 142 76% 36%;
--warning: 38 92% 50%;
--error: 0 84% 60%;

/* Dark Mode */
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 217.2 91.2% 59.8%;
/* ... */
```

### Typography
```css
font-family: 'Inter', system-ui, sans-serif; /* UI text */
font-family: 'JetBrains Mono', monospace; /* Code */
```

### Spacing Scale
```
2 → 0.125rem (2px)
4 → 0.25rem (4px)
8 → 0.5rem (8px)
12 → 0.75rem (12px)
16 → 1rem (16px)
24 → 1.5rem (24px)
32 → 2rem (32px)
48 → 3rem (48px)
64 → 4rem (64px)
```

---

## 🤖 AI Agent Instructions

### Setup Commands
```bash
# Initialize project
npm create vite@latest algorithm-playground -- --template react-ts
cd algorithm-playground

# Install dependencies
npm install framer-motion zustand react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install @radix-ui/react-tabs @radix-ui/react-slider @radix-ui/react-dialog
npm install lucide-react prismjs
npm install reactflow

# Initialize Tailwind
npx tailwindcss init -p

# Setup shadcn/ui
npx shadcn-ui@latest init
```

### Implementation Order
1. Create folder structure as specified
2. Setup Tailwind configuration
3. Implement Zustand stores
4. Build layout components (Header, Sidebar)
5. Implement Palindrome algorithm logic
6. Create PalindromeVisualizer component
7. Build ControlPanel
8. Integrate Prism.js for code display
9. Add Framer Motion animations
10. Implement dark mode
11. Add responsive design
12. Write tests
13. Deploy to Vercel

### Key Files to Create First
1. `src/store/algorithmStore.ts` - State management
2. `src/lib/algorithms/palindrome/logic.ts` - Core logic
3. `src/components/visualizers/PalindromeVisualizer.tsx` - Main visualizer
4. `src/components/algorithm/ControlPanel.tsx` - User controls
5. `src/pages/AlgorithmPage.tsx` - Main page layout

### Testing Checklist
- [ ] Palindrome execution works correctly
- [ ] Animations are smooth (60 FPS)
- [ ] Speed control works
- [ ] Step navigation works (prev/next)
- [ ] Code highlighting shows active line
- [ ] Dark mode toggles correctly
- [ ] Mobile responsive (at least tablet size)

---

## 📞 Support & Resources

### Documentation Links
- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Zustand Guide](https://github.com/pmndrs/zustand)

### Community
- GitHub Discussions (for algorithm suggestions)
- Discord server (for real-time help)
- Twitter/X (for updates)

---

## ✅ Definition of Done

### For Each Algorithm
- [ ] Logic implemented with step generator
- [ ] Visual component with animations
- [ ] Code implementations (min. 2 languages)
- [ ] Pseudocode written
- [ ] Metadata completed
- [ ] Unit tests passing
- [ ] Complexity analysis accurate
- [ ] Responsive on all screen sizes

### For MVP Release
- [ ] 3 algorithms fully working
- [ ] All core features functional
- [ ] Performance metrics met
- [ ] Accessibility requirements satisfied
- [ ] Documentation complete
- [ ] Deployed to production
- [ ] Analytics tracking active

---

## 🎓 Educational Philosophy

### Learning Principles
1. **Show, Don't Tell** - Visualize instead of explaining
2. **Active Learning** - Users interact, not just watch
3. **Incremental Understanding** - Build complexity gradually
4. **Multi-Modal Learning** - Visual + Code + Text
5. **Immediate Feedback** - See results of each step

### Pedagogical Goals
- Users should be able to implement algorithms in their preferred language after using the app
- Users should understand the "why" behind each algorithmic decision
- Users should develop pattern recognition for similar problems

---

## 🔄 Version History

- **v0.1.0** (MVP) - Palindrome + 2 basic algorithms
- **v0.2.0** - Add 5 sorting algorithms
- **v0.3.0** - User accounts & progress tracking
- **v1.0.0** - Full launch with 20 algorithms

---

## 📄 License

MIT License - Open source with attribution required

---

## 🙏 Acknowledgments

This project is inspired by:
- VisuAlgo (algorithm visualization)
- Algorithm Visualizer (interactive learning)
- Leetcode (problem-solving platform)

---

**Document Version:** 1.0  
**Last Updated:** January 31, 2026  
**Author:** Generated for AI Agent Implementation  
**Status:** Ready for Development 🚀

---

## Quick Start for AI Agent

```bash
# Clone and setup
git init algorithm-playground
cd algorithm-playground

# Copy this spec
# Save as PROJECT_SPEC.md

# Run setup commands from "Setup Commands" section above

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Next Steps:**
1. Read through entire specification
2. Create folder structure
3. Implement core features in priority order
4. Test each component before moving to next
5. Deploy MVP to Vercel

**Questions?** Refer to relevant section in this document or check documentation links.

---

**END OF SPECIFICATION**
