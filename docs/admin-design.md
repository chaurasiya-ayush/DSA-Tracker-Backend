# DSA Tracker Admin UI/UX Design Prompt

## Overview
This is a comprehensive design prompt for creating a complete, modern, and functional admin interface for the DSA Tracker application. Use this prompt to design the entire admin dashboard with all pages, components, and interactions.

## Design Requirements
- Modern, clean, professional interface
- Responsive design for desktop and mobile
- Consistent design language across all pages
- Focus on usability and efficiency for admin tasks
- Use modern UI frameworks (React, Vue, or similar)
- Implement proper data visualization and tables

## Color Scheme & Typography
- Primary Color: #2563eb (Blue)
- Secondary Color: #64748b (Gray)
- Success Color: #10b981 (Green)
- Warning Color: #f59e0b (Orange)
- Danger Color: #ef4444 (Red)
- Background: #f8fafc (Light Gray)
- Text: #1f2937 (Dark Gray)
- Font Family: Inter, -apple-system, BlinkMacSystemFont, sans-serif

---

## 1. Authentication Pages

### Login Page Design
**Layout:** Centered card design with gradient background
**Components:**
- Left side: App branding and illustration
- Right side: Login form card
- Background: Subtle gradient or pattern

**Form Elements:**
- Email field with icon
- Password field with show/hide toggle
- Remember me checkbox
- Login button (full width, primary color)
- Forgot password link (secondary style)
- "Don't have an account?" link to register

**Micro-interactions:**
- Input focus states with border color change
- Button hover effects
- Loading states for form submission
- Error message display with validation

### Register Page Design
**Layout:** Similar to login but with registration form
**Additional Elements:**
- Name field with icon
- Email field with icon
- Password field with strength indicator
- Confirm password field
- Role selection (if applicable)
- Terms and conditions checkbox
- Register button
- "Already have an account?" link to login

---

## 2. Dashboard Page

### Layout Structure
**Header:** Page title "Dashboard" with welcome message
**Main Grid:** 2x2 or 3x2 responsive grid for stats cards
**Sidebar:** Quick navigation to other sections
**Top Bar:** Date range selector, refresh button

### Stats Cards Design
**Card Structure:**
- Icon (large, colored)
- Main metric (large font, bold)
- Sub-metric (smaller font)
- Trend indicator (up/down arrow with percentage)
- Card background: White with subtle shadow
- Hover effect: Slight elevation increase

**Stats to Display:**
1. Total Students
2. Total Questions
3. Total Topics
4. Total Classes
5. Active Students
6. Completion Rate
7. Average Performance

### Charts Section
**Types:**
- Line chart for student progress over time
- Bar chart for topic-wise completion
- Pie chart for difficulty distribution
- Heat map for activity patterns

---

## 3. Topics Management Page

### Layout Structure
**Header:** Page title with "Add Topic" button
**Filters:** Horizontal filter bar with search and dropdowns
**Content:** Grid or table view toggle
**Pagination:** Bottom pagination controls

### Topic Cards/Table Design
**Card View:**
- Topic name (bold, larger font)
- Description (smaller, gray text)
- Stats badges (classes count, questions count)
- Progress bar (visual completion indicator)
- Action buttons (Edit, Delete) with icons
- Status indicator (active/inactive)

**Table View:**
- Checkbox for bulk actions
- Topic name column (sortable)
- Classes count column
- Questions count column
- Progress column (visual bar)
- Actions column (Edit, Delete)
- Status column

### Add/Edit Topic Modal
**Design:** Full-screen overlay with centered form
**Form Layout:**
- Topic name field (large, required)
- Description textarea (optional)
- Cancel and Save buttons
- Validation indicators
- Loading states

---

## 4. Classes Management Page

### Layout Structure
**Breadcrumb:** Topics > [Topic Name]
**Header:** Topic name with "Create Class" button
**Content:** Timeline or grid view of classes

### Class Cards Design
**Card Elements:**
- Class name (title)
- Description (preview text)
- Date and duration (small icons + text)
- Questions count badge
- Progress indicator
- PDF link button
- Edit/Delete actions

### Add/Edit Class Modal
**Form Fields:**
- Class name (required)
- Description (optional, rich text)
- Duration (number input with minutes label)
- Date picker
- PDF URL (optional)
- Topic assignment (dropdown)

---

## 5. Questions Management

### Layout Structure
**Header:** "Questions Bank" with search and filters
**Sidebar:** Advanced filter panel
**Content:** Paginated table with question details

### Filter Panel Design
**Filter Categories:**
- Search bar (with search icon)
- Platform checkboxes (LeetCode, GFG, etc.)
- Difficulty checkboxes (Easy, Medium, Hard)
- Type checkboxes (Homework, Classwork)
- Topic multi-select
- Status filter (Solved, Unsolved)
- Clear filters button

### Questions Table Design
**Columns:**
- Checkbox for selection
- Question name (linked, blue color)
- Platform badge (colored)
- Difficulty badge (colored)
- Type badge
- Topic name
- Solved status (checkmark or X)
- Actions (Edit, Delete)

### Add/Edit Question Modal
**Form Layout:**
- Question name (required)
- Question URL (required, with validation)
- Platform dropdown
- Difficulty dropdown
- Type dropdown
- Topic selection
- Save/Cancel buttons

---

## 6. Student Management

### Layout Structure
**Header:** "Students" with "Add Student" button
**Filters:** Comprehensive filter bar
**Content:** Data table with student information

### Filter Design
**Filter Options:**
- Search by name, email, username
- City dropdown
- Batch dropdown
- Status filter (Active, Inactive)
- Date range picker
- Clear filters

### Student Table Design
**Columns:**
- Checkbox for bulk actions
- Student avatar (circular)
- Name and email
- Username
- Enrollment ID
- City and Batch badges
- Coding platform IDs
- Statistics (solved questions, streak)
- Actions (View, Edit, Delete)

### Student Profile Modal
**Tabs:** Personal Info, Academic Info, Coding Stats, Progress
**Read-only fields:** Name, email, enrollment ID
**Editable fields:** LeetCode ID, GFG ID, GitHub ID, LinkedIn

---

## 7. Leaderboard Page

### Layout Structure
**Header:** "Leaderboard" with filter controls
**Content:** Rankings table with special highlighting

### Filter Controls
**Filter Options:**
- Time period (All-time, Weekly, Monthly)
- City selection
- Batch selection
- Search by student name

### Rankings Table Design
**Special Features:**
- Top 3 students with special styling (gold, silver, bronze)
- Current user row highlighted
- Rank numbers with special styling for top positions
- Performance metrics with progress bars

### Ranking Cards (Alternative View)
**Card Design:**
- Rank badge (large, circular)
- Student avatar
- Name and username
- City and batch
- Performance metrics
- Achievement badges

---

## 8. Global Components

### Navigation Design
**Header:** Fixed top navigation
**Elements:**
- Logo (left)
- Main navigation tabs
- City/Batch switcher (dropdown)
- User profile (right, with avatar)
- Notifications (bell icon with badge)

### Sidebar Navigation
**Collapsible sidebar** with:
- Dashboard icon
- Topics icon
- Questions icon
- Students icon
- Leaderboard icon
- Settings icon
- Active state indicators

### Data Tables
**Features:**
- Sortable columns
- Pagination (page numbers, per page selector)
- Bulk selection checkboxes
- Search functionality
- Export options
- Responsive design

### Modals and Overlays
**Design Patterns:**
- Backdrop overlay with blur
- Centered modal with rounded corners
- Close button (X) and escape key support
- Loading states with spinners
- Error states with clear messaging

### Forms Design
**Principles:**
- Clear labeling with required field indicators
- Real-time validation
- Helper text for complex fields
- Group related fields
- Primary/secondary button hierarchy

---

## 9. API Integration Specifications

### Authentication API
**Login Endpoint:** POST /auth/admin/login
**Request:** { email, password }
**Response:** { accessToken, refreshToken, user }
**Error Handling:** Invalid credentials, network issues

### Data Fetching
**Topics API:** GET /admin/topics
**Students API:** GET /admin/students
**Questions API:** GET /admin/questions
**Leaderboard API:** POST /admin/leaderboard

### Error States
**Network Errors:** Retry buttons, clear messaging
**Validation Errors:** Field-specific error messages
**Loading States:** Skeleton screens, spinners
**Empty States:** Illustrations with CTAs

---

## 10. Responsive Design

### Desktop Layout (1200px+)
**Grid:** 12-column grid
**Tables:** Full-width with horizontal scroll
**Modals:** 600px max width
**Sidebar:** Fixed 240px width

### Tablet Layout (768px-1199px)
**Grid:** 8-column grid
**Tables:** Responsive columns
**Modals:** 90% width
**Sidebar:** Collapsible

### Mobile Layout (<768px)
**Grid:** 4-column grid
**Tables:** Stack cards vertically
**Modals:** Full-screen
**Sidebar:** Hidden behind hamburger

---

## 11. Accessibility Requirements

### Standards Compliance
- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- Focus indicators
- Color contrast ratios
- Alt text for images

### Interactive Elements
- All buttons have focus states
- Form fields properly labeled
- Error messages announced
- Skip navigation links
- ARIA labels for dynamic content

---

## 12. Performance Considerations

### Loading Optimization
- Lazy loading for large datasets
- Virtual scrolling for tables
- Image optimization
- Code splitting for routes
- Caching strategies

### User Experience
- Skeleton loading states
- Smooth transitions
- Micro-interactions
- Error recovery
- Offline considerations

---

## 13. Design System

### Component Library
**Buttons:** Primary, Secondary, Danger, Ghost
**Inputs:** Text, Email, Password, Select, Textarea
**Cards:** Stats, Data, Profile, Navigation
**Badges:** Status, Difficulty, Platform
**Modals:** Form, Confirmation, Alert

### Spacing System
**Scale:** 4px base unit
**Margins:** 8px, 16px, 24px, 32px
**Padding:** 4px, 8px, 16px, 24px
**Component spacing:** Consistent 16px grid

### Typography Scale
**Headings:** H1 (32px), H2 (24px), H3 (20px), H4 (18px)
**Body:** Large (18px), Normal (16px), Small (14px), X-Small (12px)
**Weights:** 300, 400, 500, 600, 700

---

## 14. Animation Guidelines

### Transitions
**Duration:** 200-300ms for UI elements
**Easing:** ease-in-out for natural movement
**Types:** Fade, slide, scale, color transitions

### Micro-interactions
**Button hover:** Color change, slight scale
**Card hover:** Elevation increase, shadow
**Input focus:** Border color, shadow
**Loading:** Smooth spinner animations
**Success:** Checkmark animations

---

## 15. Testing Requirements

### Cross-browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (Chrome Mobile, Safari Mobile)
- Tablet responsiveness

### User Testing
- Admin user workflows
- Error scenario testing
- Performance testing
- Accessibility testing

---

## Final Deliverables

### Design Assets
- UI kit with all components
- Icon library (consistent style)
- Illustration set for empty states
- Logo variations (light/dark)

### Documentation
- Component usage guide
- Interaction patterns
- Animation specifications
- Accessibility guidelines

### Prototypes
- Interactive prototype for user testing
- Responsive mockups
- Micro-interaction demonstrations

---

Use this comprehensive prompt to create a professional, modern, and user-friendly admin interface that meets all functional requirements while providing an excellent user experience for administrators managing the DSA Tracker platform.
