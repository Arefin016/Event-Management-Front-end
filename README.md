# Event Management System

The **Event Management System** is a full-featured web application designed to manage and organize events efficiently. Built using modern technologies like React 19, Tailwind CSS 4, Firebase, and TanStack Query, it offers a seamless user experience with real-time updates, authentication, and more.

## Features

- **Create Event**  
  Authenticated users can create events with:

  - Event Name
  - Description
  - Date
  - Time
  - Location

- **View All Events**  
  All users can view a list of available events.

- **Edit Events**  
  Users can edit **only their own events**. Ownership is verified before allowing edits.

- **Delete Events**  
  Users can delete **only the events they created**.

- **Event Ownership Validation**  
  Events are associated with the creator’s user ID to ensure secure editing and deletion.

## Tech Stack

- **Frontend**: React 19, Tailwind CSS 4, React Router v7
- **Backend**: Firebase (Authentication & Hosting)
- **State Management & Data Fetching**: @tanstack/react-query
- **Utilities**: Axios, SweetAlert2, React Hot Toast, React Icons

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/event-management-system.git
   cd event-management-system
   ```
