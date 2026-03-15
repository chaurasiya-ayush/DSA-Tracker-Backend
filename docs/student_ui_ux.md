# DSA Tracker Student Module 

## Overview
This document outlines the complete user interface and user experience design for the DSA Tracker Student Module. It describes the fields, user flow, and functionality for each student page based on available APIs.

## Purpose
This specification serves as a comprehensive guide for developers and designers to implement the student interface with consistent user experience across all pages.

## Scope
- Student authentication and session management
- Homepage with motivational content and top topics
- Topic navigation with progress tracking
- Class and question management
- Practice page with comprehensive filtering
- Leaderboard with performance rankings
- Student profile with statistics and editing

---

# 1. Authentication Flow

## Login Page

**Page Title:**  
`DSA Tracker – Student Login`

### Description
The Login Page allows registered students to access the DSA Tracker platform using their credentials or Google authentication.

### Input Fields
- **Email or Username**
  - Single input field that accepts either the user's **registered email** or **username**
  - Field is **required**

- **Password**
  - User’s account password
  - Field is **required**
  - Input should be **masked** for security

### Additional Links
- **Forgot Password**
  - Redirects the user to the **password recovery page**

- **Register Now**
  - Redirects the user to the **Student Registration Page** for creating a new account

### Google Authentication
- **Sign in with Google**
  - Allows users to log in using their **Google account**
  - If the Google account is already linked to an existing user, the user is logged in
  - If the account is new, a student account is automatically created

### Actions
- **Login Button**
  - Submits the login credentials
  - Validates the email/username and password before authenticating the user

---

## Registration Page

**Page Title:**  
`DSA Tracker – Student Registration`

### Description
The Registration Page allows new students to create an account on the DSA Tracker platform.

### Input Fields
- **Email**
  - User’s valid email address
  - Field is **required**
  - Must be **unique** in the system

- **New Password**
  - Password chosen by the user
  - Field is **required**
  - Should follow password strength requirements

- **Confirm Password**
  - Must match the **New Password** field
  - Used to verify correct password entry

### Google Authentication
- **Register with Google**
  - Allows users to quickly create an account using their **Google account**
  - The system automatically retrieves the user's email and basic profile details

### Actions
- **Register Button**
  - Creates a new student account after validating all input fields
  - On successful registration, the user is redirected to the **Student Dashboard** or **Login Page**

### Profile Completion Check
- **Flow:** After first login, check if student has completed profile
- **Popup Modal:** "Profile Not Completed"
- **Message:** "Please complete your profile by adding LeetCode ID and GFG ID"

**Fields to Complete**
- LeetCode ID
- GeeksforGeeks ID

**Buttons**
- Complete Profile
- Skip for Now

---

# 2. Global Header Navigation

## Header Elements
- **Logo / Title:** "DSA Tracker"

### Navigation Buttons
- Topics Route
- Practice Route
- Leaderboard Route

### Profile Icon
On click shows dropdown with:
- Profile
- Logout

---

# 3. Homepage

## Page Elements

### Hero Section
- Motivational tagline:  
  **"Track your progress, get your rank up"**
- Engaging visuals and graphics

### Top Topics Section
- Section Title: **"Top Topics"**
- Topic Cards with recent/featured topics (backend logic)

### Scrolling Content
- Continuous scroll of motivational content
- Visual elements and animations

---

## Topic Card Display

Each topic card shows:

- Topic Name
- Student's solved questions count
- Total classes in topic
- Total questions in topic
- Progress Bar: `(solved questions / total questions)`
- Locked/Unlocked status indicator
- Click to navigate to specific topic details page

### Navigation Button
- **"Show More Topics" button**
  - Navigates to full topics page

---

# 4. Topics Page

## Page Elements
- **Page Title:** "Topics"  
- **Subtitle:** "Explore all learning modules"

### Stats Display
- Total Topics count
- Unlocked Topics count
- Locked Topics count
- Overall Progress: `(total solved / total assigned)`

---

## Topics Display

Each topic shows:

- Topic Name
- Total Classes
- Total Questions
- Solved Questions
- Progress Bar `(solved questions / total questions)`
- Locked/Unlocked status
- Click to navigate to topic details

### Topic States
- **Unlocked Topics**
  - Full card
  - Clickable
  - Shows progress

- **Locked Topics**
  - Grayed out
  - Not clickable
  - Shows lock icon

---

# 5. Topic Details Page (Classes Page)

## Page Elements
- **Breadcrumb Navigation:**  
  Topics → `[Topic Name]`

- **Page Title:** Topic name  
- **Subtitle:** "Classes under this topic"

- **Back Button**
  - Navigate back to topics list

---

## Overall Progress Section
- Total Classes count
- Total Questions count
- Solved Questions count
- Overall Progress Bar

---

## Classes Display

Each class shows:

- Class Name
- Total Questions
- Solved Questions
- Progress Bar `(solved questions / total questions)`
- PDF URL → **"View Notes" button** (if available)
- Click to navigate to class details

---

# 6. Class Details Page (Questions Page)

## Page Elements
- **Breadcrumb Navigation:**  
  Topics → `[Topic Name]` → `[Class Name]`

- **Page Title:** Class name  
- **Subtitle:** "Questions for this class"

### Class Information
- Description
- Duration in minutes
- Class Date
- PDF URL → **"View Notes" button** (if available)

### Progress Summary
- Total Questions
- Solved Questions
- Progress Bar

---

## Questions Display

Each question shows:

- Question Name (clickable link to question)
- Question Link
- Platform (LEETCODE, GFG, etc.)
- Level (EASY, MEDIUM, HARD)
- Type (HOMEWORK, CLASSWORK)

### Solved Status
- **Solved:** Green background
- **Unsolved:** Normal background

### Action
- **"Solve" button**
  - Opens question in new tab

---

## Question States
- **Solved Questions**
  - Green background
  - Marked as completed

- **Unsolved Questions**
  - Normal background
  - Clickable to solve

---

# 7. Practice Page (Question Bank)

## Page Elements

**Page Title:**  
"Practice"

**Subtitle:**  
"Solve questions from all topics"

---

## Filter Section

- **Search Bar**
  - Placeholder: `"Search by question name..."`

- **Topic Dropdown**
  - All Topics
  - Specific topics

- **Difficulty Dropdown**
  - All Levels
  - Easy
  - Medium
  - Hard

- **Platform Dropdown**
  - All Platforms
  - LeetCode
  - GFG
  - InterviewBit
  - Other

- **Type Dropdown**
  - All Types
  - Homework
  - Classwork

- **Status Dropdown**
  - All Status
  - Solved
  - Unsolved

- **Clear Filters Button**

---

## Stats Display
- Total Questions count
- Solved Questions count

---

## Questions Table Display

**Note:** Table is paginated

### Table Columns
- Question Name (clickable link)
- Platform
- Level
- Type
- Topic Name
- Solved Status
- Action → **Solve Button**

---

## Pagination

- Pagination controls with page numbers
- Items per page selector
- Total pages indicator

---

# 8. Leaderboard Page

## Page Elements

**Page Title:**  
"Leaderboard"

**Subtitle:**  
"Student performance rankings"

---

## Filter Section

- **City Dropdown**
  - All Cities
  - Bangalore
  - Noida
  - Pune
  - Lucknow

- **Batch Year Dropdown**
  - 2024
  - 2025
  - 2026

- **Time Period Dropdown**
  - All-Time
  - Weekly
  - Monthly

- Reset Filters button
- Apply Filters button

---

## Leaderboard Display

**Note:** No pagination — shows all relevant rankings

### Special Highlighting

- **Top 3 positions**
  - Special cards/designs for 1st, 2nd, 3rd place

- **Current Student**
  - Highlighted row with **"You" indicator**

- If student is in top 3  
  - No separate highlighting needed

---

## Leaderboard Columns

- Rank
- Student Name
- Username
- City
- Batch Year
- Total completion percentage
- Hard completion percentage
- Medium completion percentage
- Easy completion percentage
- Max Streak
- Total Solved
- City Rank

---

# 9. Student Profile Page

## Page Elements

**Page Title:**  
"Student Profile"

**Edit Button**
- Located at top-right corner
- Opens profile editing modal

---

## Student Information Section

- Name
- Username
- Enrollment ID
- City
- Batch
- Year

### Social Handles
- GitHub ID
- LinkedIn URL
- LeetCode ID
- GeeksforGeeks ID

---

## Coding Statistics Section

- Total Solved
- Total Assigned

### Difficulty Breakdown
- Easy → Assigned, Solved
- Medium → Assigned, Solved
- Hard → Assigned, Solved

---

## Streak Information
- Current Streak
- Max Streak

---

## Leaderboard Rankings
- Global Rank
- City Rank

---

## Heatmap Activity

Displays coding activity in **GitHub-style heatmap**

- Date
- Count of problems solved

---

## Recent Activity

Shows recently solved problems

- Problem Title (clickable)
- Difficulty
- Solved At timestamp

---

## Topic Progress (Top 5)

- Topic Name
- Progress Bar `(solved / total)`
- Solved count / Total count

---

## Edit Profile Modal

**Modal Title:**  
`Edit Profile`

### Editable Fields
- Username
- GitHub ID
- LinkedIn URL
- **LeetCode ID** *(Editable only once)*
- **GeeksforGeeks ID** *(Editable only once)*

### Read-Only Fields
- Name
- Email
- Enrollment ID
- City
- Batch
- Year

### Special Behavior
- **LeetCode ID** and **GeeksforGeeks ID** can be edited **only once**
- Once the user adds and saves these IDs, the **edit option must be disabled on the frontend**
- After the first update, these fields should appear as **disabled/read-only inputs**

### Buttons
- Cancel
- Update Profile

---

# 10. Public Student Profile

## Flow

When anyone clicks on a student's **username/profile link**

### Behavior
- Shows public view of student profile
- Same layout as private profile
- **No edit functionality**
- All fields are **read-only**

---

# 11. Navigation Flow Summary

## Primary Navigation Paths

1. **Homepage → Topics Page**  
   Click **"Explore All Topics"**

2. **Topics Page → Topic Details**  
   Click topic card

3. **Topic Details → Class Details**  
   Click class card

4. **Class Details → Question**  
   Click question name or **Solve** button

5. **Homepage → Practice Page**  
   Navigate via header/menu

6. **Header → Profile**  
   Click profile icon → Profile

7. **Header → Logout**  
   Click profile icon → Logout

---

## Secondary Features

- **Search**
  - Global search in header for problems, users, topics

- **Filters**
  - Comprehensive filtering on practice page

- **Progress Tracking**
  - Visual progress bars across topics and classes

- **Social Links**
  - External links to coding platforms

---

# 12. Special Features

## Progress Indicators
- Topic-level progress bars
- Class-level progress bars
- Individual question solved status
- Overall statistics dashboard

---

## User Experience Enhancements

- Green background for solved questions
- Locked / unlocked topic states
- Highlighted current student in leaderboard
- Special top 3 leaderboard designs
- Clickable problem titles linking to external platforms

---

This document outlines the complete student-side user experience, focusing on **intuitive navigation**, **clear progress tracking**, and **engaging visual feedback throughout the learning journey**.