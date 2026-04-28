import { type Task } from "../types/types.js";
import { v4 as uuidv4 } from "uuid";

export const TASK_DATA: Task[] = [
    {
        id: uuidv4(),
        title: "Complete Project Proposal",
        description: "Draft and finalize the proposal document for the upcoming client project.",
        completed: false,
        priority: "high"
    },
    {
        id: uuidv4(),
        title: "Review Team Timesheets",
        description: "Go through all submitted timesheets for the week and approve them in the system.",
        completed: false,
        priority: "medium"
    },
    {
        id: uuidv4(),
        title: "Schedule Client Meeting",
        description: "Coordinate with the client to find a suitable time for the weekly sync.",
        completed: false,
        priority: "medium"
    },
    {
        id: uuidv4(),
        title: "Update Documentation",
        description: "Add the new API endpoints to the internal developer documentation.",
        completed: false,
        priority: "low"
    },
    {
        id: uuidv4(),
        title: "Fix Login Bug",
        description: "Resolve the issue where users are unable to log in after password reset.",
        completed: false,
        priority: "high"
    },
    {
        id: uuidv4(),
        title: "Research New Tools",
        description: "Investigate potential project management software for the team.",
        completed: false,
        priority: "low"
    },
    {
        id: uuidv4(),
        title: "Prepare Presentation Slides",
        description: "Create slides for the quarterly review meeting with stakeholders.",
        completed: false,
        priority: "high"
    },
    {
        id: uuidv4(),
        title: "Respond to Support Emails",
        description: "Address all outstanding customer support inquiries from the past 24 hours.",
        completed: false,
        priority: "medium"
    },
    {
        id: uuidv4(),
        title: "Backup Database",
        description: "Perform the weekly backup of the production database.",
        completed: false,
        priority: "medium"
    },
    {
        id: uuidv4(),
        title: "Onboard New Hire",
        description: "Complete the setup for the new developer, including accounts and access.",
        completed: false,
        priority: "high"
    },
    {
        id: uuidv4(),
        title: "Code Review: Feature X",
        description: "Review the pull request for the new feature implementation.",
        completed: false,
        priority: "medium"
    },
    {
        id: uuidv4(),
        title: "Pay Office Rent",
        description: "Process the monthly payment for the office lease.",
        completed: false,
        priority: "high"
    },
    {
        id: uuidv4(),
        title: "Organize Desk",
        description: "Clean and organize the workspace for better productivity.",
        completed: false,
        priority: "low"
    },
    {
        id: uuidv4(),
        title: "Test Deployment Script",
        description: "Run the new automated deployment script in the staging environment.",
        completed: false,
        priority: "medium"
    },
    {
        id: uuidv4(),
        title: "Plan Team Lunch",
        description: "Arrange a reservation for the team's monthly social lunch.",
        completed: false,
        priority: "low"
    }
];   