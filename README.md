# Algorithm Playground 🎮

> Interactive algorithm visualization platform that helps you understand **how algorithms think**, not just what they produce.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- **Visual-First Learning** - Watch algorithms come alive with color-coded states and animated pointers
- **Step-by-Step Execution** - Control the speed, pause, or navigate manually through each step
- **Multi-Language Support** - See implementations in Python, JavaScript, Java, and C++
- **Interactive Input** - Try your own data or use quick examples
- **Dark Mode** - Easy on the eyes during late-night coding sessions
- **Responsive Design** - Works seamlessly on desktop and tablet

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Lisvindanu/ProjectN-Algo.git
cd ProjectN-Algo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:5173`

## 🎯 Available Algorithms (MVP)

### Palindrome Checker ✅
Check if a string reads the same forwards and backwards using the two-pointer technique.
- **Difficulty**: Easy
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Coming Soon
- Reverse String
- Two Sum
- Bubble Sort
- Binary Search

## 🏗️ Project Structure

```
algorithm-playground/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── algorithm/      # Algorithm-specific components
│   │   ├── layout/         # Layout components (Header, Sidebar, Footer)
│   │   ├── visualizers/    # Algorithm visualizers
│   │   └── ui/             # Reusable UI components
│   ├── lib/
│   │   ├── algorithms/     # Algorithm implementations
│   │   │   └── palindrome/ # Palindrome algorithm
│   │   │       ├── logic.ts
│   │   │       ├── implementations/
│   │   │       └── metadata.ts
│   │   ├── types/          # TypeScript types
│   │   └── utils.ts        # Utility functions
│   ├── pages/              # Page components
│   ├── store/              # Zustand state management
│   ├── styles/             # Global styles
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router
- **Code Highlighting**: Prism.js
- **Icons**: Lucide React

## 🎨 Design System

### Color Palette

The app uses a semantic color system that adapts to light and dark modes:

- **Primary**: Algorithm active states
- **Success**: Completed operations
- **Warning**: Comparisons in progress
- **Error**: Failed conditions
- **Muted**: Background elements

### Algorithm States

- `idle` - Initial state (gray)
- `active` - Currently processing (blue)
- `comparing` - Elements being compared (yellow)
- `success` - Successful result (green)
- `error` - Failed condition (red)
- `completed` - Finished processing (purple)

## 📖 Usage Guide

### Basic Workflow

1. **Enter Input**: Type a string or select a quick example
2. **Visualize**: Click the "Visualize" button to generate steps
3. **Watch**: Press "Play" to see the algorithm in action
4. **Control**: Use speed slider, pause, or step through manually
5. **Learn**: Read the code, pseudocode, and complexity analysis

### Keyboard Shortcuts (Coming Soon)

- `Space` - Play/Pause
- `→` - Next step
- `←` - Previous step
- `R` - Reset
- `D` - Toggle dark mode

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Adding a New Algorithm

1. Create algorithm directory:
   ```bash
   mkdir src/lib/algorithms/your-algorithm
   ```

2. Implement the core files:
   - `logic.ts` - Step generator function
   - `metadata.ts` - Algorithm metadata
   - `implementations/` - Multi-language code

3. Create visualizer:
   ```bash
   src/components/visualizers/YourAlgorithmVisualizer.tsx
   ```

4. Add to routing in `App.tsx`

See the palindrome implementation as a reference.

## 🚢 Deployment

The project is optimized for deployment on:

- **Vercel** (Recommended)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
# Build for production
npm run build

# The dist/ folder contains the production build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

Inspired by:
- [VisuAlgo](https://visualgo.net/)
- [Algorithm Visualizer](https://algorithm-visualizer.org/)
- [LeetCode](https://leetcode.com/)

## 📧 Contact

Project Link: [https://github.com/Lisvindanu/ProjectN-Algo](https://github.com/Lisvindanu/ProjectN-Algo)

---

**Made with ❤️ for visual learners**
