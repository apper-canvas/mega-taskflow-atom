# TaskFlow - Modern Task Management Application

A clean and efficient task management application built with React, Vite, and Tailwind CSS. TaskFlow helps users organize their daily tasks with a beautiful, minimalist interface that reduces cognitive load and enhances productivity.

## Features

- **Create Tasks**: Add tasks with titles and optional descriptions through an elegant modal interface
- **Task Management**: View all tasks in a clean, scrollable list with instant visual feedback
- **Complete Tasks**: Mark tasks as complete with satisfying checkbox animations and visual strikethrough effects
- **Delete Tasks**: Remove tasks with confirmation dialogs to prevent accidental deletion
- **Persistent Storage**: All tasks are automatically saved to localStorage and survive page refreshes
- **Empty State**: Friendly guidance when no tasks exist with clear call-to-action
- **Responsive Design**: Works seamlessly across all device sizes from mobile to desktop
- **Premium UI**: Modern, sophisticated design with smooth animations and gradients

## Technology Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing
- **React Toastify** - Elegant toast notifications
- **date-fns** - Modern date utility library

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components (Button, Input, Checkbox)
│   ├── molecules/      # Composite components (FormField, Modal, TaskCard)
│   ├── organisms/      # Complex components (Header, TaskList, TaskForm)
│   ├── pages/          # Page components (HomePage, NotFound)
│   ├── ui/             # State components (Loading, Error, Empty)
│   └── ApperIcon.jsx   # Icon wrapper component
├── services/
│   ├── api/            # Service layer for data operations
│   └── mockData/       # JSON data files
├── router/             # Route configuration
├── utils/              # Utility functions
├── App.jsx
├── main.jsx
└── index.css
```

## Key Features Explained

### Task Creation
- Clean modal interface with form validation
- Title is required, description is optional
- Real-time error feedback
- Smooth modal animations with backdrop blur

### Task Completion
- Animated checkbox with scale and color transitions
- Strikethrough effect on completed tasks
- Visual opacity reduction to distinguish completed items
- Instant feedback with toast notifications

### Task Deletion
- Confirmation dialog to prevent accidents
- Shows task title in confirmation for clarity
- Smooth removal animations
- Success feedback via toast

### Data Persistence
- All tasks automatically saved to localStorage
- Instant loading on page refresh
- No backend required
- UUID-based task identification

## Design Philosophy

TaskFlow embraces minimalism that feels warm, not cold. The design prioritizes:

- **Clarity**: Clear visual hierarchy with generous whitespace
- **Speed**: Instant interactions and feedback
- **Calm**: Soothing color palette that reduces stress
- **Delight**: Smooth animations that reward actions
- **Focus**: Single-column layout eliminates distractions

## Color System

- **Primary**: #6366f1 (Indigo) - Main actions and active states
- **Secondary**: #8b5cf6 (Purple) - Hover states
- **Accent**: #ec4899 (Pink) - Delete and warnings
- **Success**: #10b981 (Green) - Completed tasks
- **Background**: #f8fafc (Slate 50) - Main app background

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.