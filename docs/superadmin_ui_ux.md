# DSA Tracker SuperAdmin Module - UI/UX Specification

## Overview
This document outlines the complete user interface and user experience design for the DSA Tracker SuperAdmin Module. It describes the fields, user flow, and functionality for each superadmin page based on available APIs.

## Purpose
This specification serves as a comprehensive guide for developers and designers to implement the superadmin interface with consistent user experience across all pages.

## Scope
- SuperAdmin authentication and session management
- Dashboard statistics and analytics
- Admin management (CRUD operations)
- City management (CRUD operations)
- Batch management (CRUD operations)
- System-wide statistics and monitoring

---

## 1. Global Header Navigation

### Header Elements
- Logo/Title: "DSA Tracker SuperAdmin"
- Navigation Tabs: Dashboard, Admins, Cities, Batches
- Profile Icon: On click shows dropdown with:
  - Logout

---

## 2. Dashboard/Stats Page

### Page Elements
- Page Title: "Dashboard" with subtitle "System Overview"
- Stats Cards Display:
  - Total Cities count
  - Total Batches count
  - Total Students count
  - Total Admins count

### Stats Card Layout
Each stat card shows:
- Metric Name (e.g., "Total Cities")
- Metric Value (e.g., "5")
- Visual indicator/icon
- Click to navigate to relevant management page (optional)

---

## 3. Admin Management Page

### Page Elements
- Page Title: "Admin Management" with subtitle "Manage all administrators"
- Action Button: "+ Create Admin"
- Filters & Search Section:
  - Search bar: "Search by name, email..."
  - City dropdown: All Cities, Bangalore, Noida, Pune, Lucknow
  - Batch dropdown: All Batches, [specific batches]
  - Role dropdown: All Roles, TEACHER, INTERN
  - Clear Filters button

### Admins Table Display
- Note: Table is paginated
- Table Header: Shows pagination info "Admins (X of Y)"
- Table Columns:
  - Admin Name
  - Email
  - Role (TEACHER, INTERN)
  - City
  - Batch
  - Actions: Edit, Delete

### Create Admin Modal
- Modal Title: "Create New Admin"
- Input Fields:
  - Name (required)
  - Email (required)
  - Password (required)
  - Role dropdown: TEACHER, INTERN (required)
  - City & Batch Selection:
    - Year dropdown (required)
    - City dropdown (required)
    - Batch dropdown (filtered by city and year, required)
- Note: City and Batch assignment determines default data filtering for admin
- Buttons: Cancel, Create Admin

### Edit Admin Modal
- Modal Title: "Edit Admin"
- Note: Only role, city, and batch can be edited (name and email are read-only)
- Input Fields:
  - Role dropdown: TEACHER, INTERN
  - City & Batch Selection:
    - Year dropdown
    - City dropdown
    - Batch dropdown (filtered by city and year)
- Buttons: Cancel, Update Admin

### Delete Confirmation
- Confirmation Dialog: "Are you sure you want to delete this admin?"
- Buttons: Cancel, Delete

---

## 4. City Management Page

### Page Elements
- Page Title: "City Management" with subtitle "Manage all cities"
- Action Button: "+ Create City"
- Search Section:
  - Search bar: "Search cities by name..."

### Cities Table Display
- Note: Table is paginated
- Table Columns:
  - City Name
  - Total Batches count
  - Total Students count
  - Created At
  - Actions: Delete

### Create City Modal
- Modal Title: "Create New City"
- Input Fields:
  - City Name (required)
- Buttons: Cancel, Create City

### Delete Confirmation
- Confirmation Dialog: "Are you sure you want to delete this city?"
- Warning: "Deleting a city will also delete all associated batches and students"
- Buttons: Cancel, Delete

---

## 5. Batch Management Page

### Page Elements
- Page Title: "Batch Management" with subtitle "Manage all batches"
- Action Button: "+ Create Batch"
- Filters & Search Section:
  - Search bar: "Search by batch name..."
  - City dropdown: All Cities, Bangalore, Noida, Pune, Lucknow
  - Year dropdown: All Years, 2024, 2025, 2026
  - Clear Filters button

### Batches Table Display
- Note: Table is paginated
- Table Columns:
  - Batch Name
  - Year
  - City
  - Student Count
  - Class Count
  - Created At
  - Actions: Edit, Delete

### Create Batch Modal
- Modal Title: "Create New Batch"
- Input Fields:
  - Batch Name (required)
  - Year dropdown (required)
  - City dropdown (required)
- Note: Batch will be created for the selected city and year
- Buttons: Cancel, Create Batch

### Edit Batch Modal
- Modal Title: "Edit Batch"
- Input Fields:
  - Batch Name
  - Year dropdown
  - City dropdown
- Buttons: Cancel, Update Batch

### Delete Confirmation
- Confirmation Dialog: "Are you sure you want to delete this batch?"
- Warning: "Deleting a batch will also delete all associated students and classes"
- Buttons: Cancel, Delete

---

## 6. Navigation Flow Summary

### Primary Navigation Paths
1. **Dashboard → Admin Management**: Click "Admins" tab or "Admins" stat card
2. **Dashboard → City Management**: Click "Cities" tab or "Cities" stat card
3. **Dashboard → Batch Management**: Click "Batches" tab or "Batches" stat card
4. **Admin Management → Create Admin**: Click "+ Create Admin" button
5. **City Management → Create City**: Click "+ Create City" button
6. **Batch Management → Create Batch**: Click "+ Create Batch" button

### Secondary Features
- **Search**: Global search on admin and city pages
- **Filters**: Comprehensive filtering on admin and batch pages
- **Pagination**: Paginated tables for large datasets
- **CRUD Operations**: Create, Read, Update, Delete for all entities

---

## 7. Special Features

### Admin Assignment Logic
- **City & Batch Filtering**: When creating admin, batch dropdown is filtered by selected city and year
- **Default Data Filtering**: Admin sees only data from their assigned city and batch
- **Role-Based Access**: Different permissions for TEACHER vs INTERN roles

### Cascade Deletion Warnings
- **City Deletion**: Warns about deleting all associated batches and students
- **Batch Deletion**: Warns about deleting all associated students and classes

### System Statistics
- **Real-time Counts**: Dashboard shows current system-wide statistics
- **Quick Navigation**: Click on stats to navigate to relevant management pages

### Data Validation
- **Unique Constraints**: Email uniqueness for admins, city name uniqueness
- **Required Fields**: All required fields validated before submission
- **Dependency Validation**: Batch requires valid city, admin requires valid batch

---

## 8. User Experience Considerations

### Admin Creation Flow
1. Select Year and City first
2. Batch dropdown populates based on selections
3. Complete other required fields
4. Submit to create admin with assigned permissions

### Bulk Operations
- **Future Enhancement**: Consider bulk operations for multiple admins/cities/batches
- **Export Functionality**: Consider export options for admin lists

### Responsive Design
- **Mobile-Friendly**: Responsive tables and modals
- **Touch Interface**: Touch-friendly buttons and controls
- **Adaptive Layout**: Works across different screen sizes

---

## 9. Security Considerations

### Access Control
- **SuperAdmin Only**: All routes require SuperAdmin role
- **Authentication**: All routes require valid authentication token
- **Authorization**: Role-based access control throughout

### Data Protection
- **Sensitive Data**: Password fields properly secured
- **Audit Trail**: Consider logging all CRUD operations
- **Data Integrity**: Proper validation and constraints

---

This document outlines the complete SuperAdmin interface, focusing on efficient system management, clear data organization, and comprehensive administrative control over the entire DSA Tracker ecosystem.
