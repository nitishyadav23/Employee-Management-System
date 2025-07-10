
const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "amit@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Neha",
        "email": "neha@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Rohan",
        "email": "rohan@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Isha",
        "email": "isha@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Vikram",
        "email": "vikram@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            },
            
        ]
    },
      {
    "id": 6,
    "firstName": "Sneha",
    "email": "sneha@company.com",
    "password": "sneha123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Draft marketing email",
        "taskDescription": "Write email campaign content",
        "taskDate": "2024-10-10",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design banner",
        "taskDescription": "Create banner for home page",
        "taskDate": "2024-10-08",
        "category": "Design"
      }
    ]
  },
  {
    "id": 7,
    "firstName": "Karan",
    "email": "karan@company.com",
    "password": "karan123",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API integration",
        "taskDescription": "Integrate third-party payment APIs",
        "taskDate": "2024-10-13",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Security audit",
        "taskDescription": "Perform internal security checks",
        "taskDate": "2024-10-14",
        "category": "Security"
      }
    ]
  },
  {
    "id": 8,
    "firstName": "Meena",
    "email": "meena@company.com",
    "password": "meena123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO analysis",
        "taskDescription": "Improve blog SEO rankings",
        "taskDate": "2024-10-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Competitor research",
        "taskDescription": "Analyze top 5 competitors",
        "taskDate": "2024-10-12",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Ad campaign setup",
        "taskDescription": "Launch ads for product X",
        "taskDate": "2024-10-09",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 9,
    "firstName": "Aditya",
    "email": "aditya@company.com",
    "password": "aditya123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Set up cron jobs",
        "taskDescription": "Automate backup system",
        "taskDate": "2024-10-10",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Resolve downtime",
        "taskDescription": "Fix hosting issue",
        "taskDate": "2024-10-08",
        "category": "IT"
      }
    ]
  },
  {
    "id": 10,
    "firstName": "Pooja",
    "email": "pooja@company.com",
    "password": "pooja123",
    "taskCounts": {
      "active": 0,
      "newTask": 0,
      "completed": 3,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write blog post",
        "taskDescription": "Top 10 UX tips",
        "taskDate": "2024-10-05",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Content review",
        "taskDescription": "Proofread site text",
        "taskDate": "2024-10-04",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Newsletter design",
        "taskDescription": "Create September issue",
        "taskDate": "2024-10-01",
        "category": "Design"
      }
    ]
  },
  {
    "id": 11,
    "firstName": "Raj",
    "email": "raj@company.com",
    "password": "raj123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix payment bug",
        "taskDescription": "Resolve 500 error during checkout",
        "taskDate": "2024-10-12",
        "category": "Bug"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Log monitoring",
        "taskDescription": "Implement ELK stack",
        "taskDate": "2024-10-14",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 12,
    "firstName": "Divya",
    "email": "divya@company.com",
    "password": "divya123",
    "taskCounts": {
      "active": 0,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Wireframe product page",
        "taskDescription": "Create new UI for product listing",
        "taskDate": "2024-10-10",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Redesign header",
        "taskDescription": "Improve accessibility",
        "taskDate": "2024-10-09",
        "category": "UX"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Broken links fix",
        "taskDescription": "404 issues in sitemap",
        "taskDate": "2024-10-05",
        "category": "SEO"
      }
    ]
  },
  {
    "id": 13,
    "firstName": "Manav",
    "email": "manav@company.com",
    "password": "manav123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Analytics setup",
        "taskDescription": "Add GA4 to website",
        "taskDate": "2024-10-11",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Export reports",
        "taskDescription": "Generate monthly usage report",
        "taskDate": "2024-10-03",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Form validation",
        "taskDescription": "Fix JS validation errors",
        "taskDate": "2024-10-06",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 14,
    "firstName": "Priya",
    "email": "priya@company.com",
    "password": "priya123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Edit demo video",
        "taskDescription": "Shorten intro",
        "taskDate": "2024-10-12",
        "category": "Media"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Thumbnail creation",
        "taskDescription": "Design new thumbnails",
        "taskDate": "2024-10-10",
        "category": "Media"
      }
    ]
  },
  {
    "id": 15,
    "firstName": "Ritika",
    "email": "ritika@company.com",
    "password": "ritika123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare webinar deck",
        "taskDescription": "Slides for upcoming event",
        "taskDate": "2024-10-11",
        "category": "Presentation"
      }
    ]
  }

    
];


const admin = [
    {
        "id": 1,
        "email": "admin@company.com",
        "password": "admin@123"
    }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}