# DSA Tracker Admin Module 

## Overview
This document outlines the complete user interface and user experience design for the DSA Tracker Admin Module. It describes the fields, user flow, and functionality for each admin page based on available APIs.

## Purpose
This specification serves as a comprehensive guide for developers and designers to implement the admin interface with consistent user experience across all pages.

## Scope
- Admin authentication and session management
- Dashboard statistics and analytics
- Topic and class management
- Question assignment and bank management
- Student management and profile viewing
- Leaderboard and performance tracking

---

## 1. Global Header Navigation

### Header Elements
- Logo/Title: "DSA Tracker Admin"
- Navigation Tabs: Dashboard, Topics, Questions, Students
- City Dropdown: Shows current city, options include All Cities, Bangalore, Noida, Pune, Lucknow
- Batch Dropdown: Shows current batch with format "Batch Name + Year"
- Admin User Dropdown: Profile/settings options
- Logout Button

### Default Behavior
- System fetches admin's assigned city_id and batch_id from authentication token
- Header defaults to admin's assigned city and batch
- Admin can switch between cities and batches using dropdowns
- When city changes, batch dropdown updates to show batches for that city

---

## 2. Dashboard (Admin Stats)

### Page Elements
- Page Title: "Dashboard" with subtitle "Batch Statistics Overview"
- Filter Section: City and Batch dropdowns with "Apply Filters" button

### Stats Display
- Batch Information: Selected batch name, city, year
- Total Classes: Number of classes conducted
- Total Questions: Number of questions added by admin
- Total Students: Number of students enrolled
- Questions by Type: Homework and Classwork counts
- Questions by Level: Easy, Medium, Hard counts
- Questions by Platform: LeetCode, GFG, InterviewBit, Other counts
- Total Topics Discussed: Number of topics

---

## 3. Topics Management

### Page Elements
- Page Title: "Topics" with subtitle "Manage all topics"
- Action Button: "Add Topic"
- Filter Section: City and Batch dropdowns with "Apply Filters" button

### Topics Display
Each topic shows:
- Topic Name
- Class Count
- Question Count
- Actions: Edit, Delete

### Add Topic Modal
- Modal Title: "Add New Topic"
- Input Field: Topic Name
- Buttons: Cancel, Create Topic
- Note: Topics added to global topic table

### Edit Topic Modal
- Modal Title: "Edit Topic"
- Input Field: Pre-filled topic name
- Buttons: Cancel, Update Topic

### Delete Confirmation
- Confirmation Dialog: "Are you sure you want to delete this topic?"
- Buttons: Cancel, Delete

---

## 4. Topic Details (Classes Page)

### Page Elements
- Breadcrumb Navigation: Topics > [Topic Name]
- Page Title: Topic name with subtitle "Manage classes under this topic"
- Action Button: "Create Class"
- Back Button: Navigate back to topics list

### Classes Display
Each class shows:
- Class Name
- Class Date
- Question Count
- PDF URL: "View Notes" button to open PDF
- Actions: Edit, Delete

### Create Class Modal
- Modal Title: "Create New Class"
- Input Fields: 
  - Class Name (required)
  - Description (optional)
  - Duration in minutes
  - Class Date
  - PDF URL (optional)
- Buttons: Cancel, Create Class

---

## 5. Class Details (Questions Page)

### Page Elements
- Breadcrumb Navigation: Topics > [Topic Name] > [Class Name]
- Page Title: Class name with subtitle "Manage questions for this class"
- Description
- Class Date
- Duration in minutes
- Action Button: "Add Questions"

### Questions Display
Each question shows:
- Question Name
- Question Link
- Platform
- Level
- Type
- Actions: Remove

### Add Questions to class (Modal)
- Modal Title: "Add Questions to Class"
- Search Bar: "Search questions..."
- Filter Section:
  - Platform dropdown: All Platforms, LeetCode, GFG, InterviewBit, Other
  - Level dropdown: All Levels, Easy, Medium, Hard
  - Type dropdown: All Types, Homework, Classwork
  - Topic dropdown: All Topics, [specific topics]
- Questions List: Checkbox for each question with details
- Action Buttons: 
  - "Add to Question Bank" (opens Add Question to Bank modal)
  - "Add Selected Questions"
  - "Cancel"

### Add new Question to Bank (Modal)
- Note: Same modal opens from multiple places:
  - When clicking "Add to Question Bank" button in Add Questions modal
  - When clicking "Add Question" button on Questions page
- Note: This is the same modal for adding new questions to the global question bank, used in both contexts
- Modal Title: "Add Question to Bank"
- Input Fields:
  - Question Name (required)
  - Question Link (required)
  - Platform dropdown
  - Level dropdown
  - Type dropdown
  - Topic dropdown
- Buttons: Cancel, Add to Bank

---

## 6. Student Management

### Page Elements
- Page Title: "Students" with subtitle "Manage all students"
- Action Button: "+ Add Student"
- Filters & Sorting Section:
  - Search bar: "Search by name, email, username..."
  - City dropdown: All Cities
  - Batch dropdown: All Batches
  - Sort dropdown: Name (A-Z)
  - Clear Filters button

### Students Table Display
- Table Header: Shows pagination info "Students (X of Y)"
- Note: Table is paginated
- Table Columns:
  - Student: Name, Email
  - Username
  - Enrollment ID
  - City
  - Batch
  - LeetCode ID
  - GeeksforGeeks ID
  - GitHub ID
  - LinkedIn
  - Total Solved
  - Easy Solved
  - Medium Solved
  - Hard Solved
  - Current Streak
  - Max Streak
  - Global Rank
  - City Rank
  - Total Score
  - Actions: View, Edit, Delete

### Add Student Modal
- Modal Title: "Add New Student"
- Input Fields:
  - Full Name (required)
  - Email (required)
  - Enrollment ID (optional)
  - City dropdown (required)
  - Year dropdown (required)
  - Batch dropdown (required)
- Buttons: Cancel, Create Student

### Edit Student Modal
- Modal Title: "Edit Student"
- Note: All student details are displayed but only LeetCode ID and GeeksforGeeks ID can be edited
- Input Fields: Pre-filled student information (only LeetCode ID and GeeksforGeeks ID editable)
- Buttons: Cancel, Update Student

### Delete Confirmation
- Confirmation Dialog: "Are you sure you want to delete this student?"
- Buttons: Cancel, Delete

### View Student Profile
- Flow: When admin clicks "View" on a student row, opens student profile page
- Page Elements:
  - Student Profile Section:
    - Name
    - Username
    - Enrollment id
    - City
    - Batch
    - Year
    - GitHub ID
    - LinkedIn URL
    - LeetCode ID
    - GeeksforGeeks ID
  - Coding Statistics Section:
    - Total Solved
    - Total Assigned
    - Easy: Assigned count, Solved count
    - Medium: Assigned count, Solved count
    - Hard: Assigned count, Solved count
  - Streak Information:
    - Current Streak
    - Max Streak
  - Leaderboard Rankings:
    - Global Rank
    - City Rank
  - Heatmap Activity:
    - Date
    - Count of problems solved
  - Recent Activity:
    - Problem Title (clickable link to question)
    - Difficulty
    - Solved At timestamp

---

## 7. Leaderboard

### Page Elements
- Page Title: "Leaderboard" with subtitle "Student performance rankings"
- Filter Section:
  - Search bar: "Search by name, email, username..."
  - Time Period dropdown: All-Time, Weekly, Monthly
  - City dropdown: All Cities, Bangalore, Noida, Pune, Lucknow
  - Batch Year dropdown: 2024, 2025, 2026
  - Reset Filters and Apply Filters buttons

### Stats Display
- Total Students count
- Average Complition rate 
- Highest Complition rate 

### Leaderboard Table
- Note: Table is paginated
- Table Columns:
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

## 8. Questions Bank (Global Questions Management)

### Page Elements
- Page Title: "Questions" with subtitle "Manage global question bank"
- Action Button: "Add Question"
- Filter Section:
  - Search bar: "Search questions..."
  - Platform dropdown: All Platforms, LeetCode, GFG, InterviewBit, Other
  - Level dropdown: All Levels, Easy, Medium, Hard
  - Type dropdown: All Types, Homework, Classwork
  - Topic dropdown: All Topics, [specific topics]
  - Clear Filters button

### Questions Table Display
- Note: Table is paginated
- Table Columns:
  - Question Name
  - Question Link
  - Platform
  - Level
  - Type
  - Topic Name
  - Created At
  - Actions: Edit, Delete

### Add Question Modal
- Modal Title: "Add Question to Bank"
- Input Fields:
  - Question Name (required)
  - Question Link (required)
  - Platform dropdown
  - Level dropdown
  - Type dropdown
  - Topic dropdown
- Buttons: Cancel, Add to Bank

### Edit Question Modal
- Modal Title: "Edit Question"
- Input Fields: Pre-filled question information
- Buttons: Cancel, Update Question

---

This document outlines the functional requirements and user flow for the Admin Module based on available API endpoints.