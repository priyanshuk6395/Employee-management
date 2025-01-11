const employees = [
  {
    "id": 1,
    "name": "Ravi Kumar",
    "email": "e1@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Complete the monthly report",
        "taskDate": "2025-01-10",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Update client information",
        "taskDate": "2025-01-12",
        "category": "Data Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Prepare presentation slides",
        "taskDate": "2025-01-09",
        "category": "Presentations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Team meeting coordination",
        "taskDate": "2025-01-11",
        "category": "Coordination",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Amit Verma",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Inventory audit",
        "taskDate": "2025-01-10",
        "category": "Auditing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Prepare invoice",
        "taskDate": "2025-01-12",
        "category": "Billing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "name": "Neha Gupta",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Organize workshop",
        "taskDate": "2025-01-15",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Update software system",
        "taskDate": "2025-01-13",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Anjali Mehta",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Review marketing strategy",
        "taskDate": "2025-01-10",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Conduct client survey",
        "taskDate": "2025-01-14",
        "category": "Survey",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];



const admin= [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}]

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'));
  const admin=JSON.parse(localStorage.getItem('admin'));
  return{employees,admin};
}