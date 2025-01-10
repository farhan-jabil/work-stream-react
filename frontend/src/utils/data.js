const faqItems = [
  {
    question: "How do I add new employees to the system?",
    answer: `
              To add new employees, go to the "Employee Management" section in the admin dashboard. 
              There, you'll find the option to add a new employee by entering their details, including name, position, department, and contact information. 
              Once added, employees will receive login credentials to access the system.
            `,
  },
  {
    question: "How can I manage employee leave requests?",
    answer: `
              Employees can submit leave requests through the "Leave Management" section in their portal. 
              As an administrator or manager, you will be notified of all new leave requests and can review, approve, or deny them based on company policies. 
              The system will track each employee's leave balance and show any pending requests for easy management.
            `,
  },
  {
    question: "Can employees update their personal information?",
    answer: `
              Yes, employees can update their personal information directly from their profile page within the system. 
              They can change details such as their phone number, address, and emergency contact information. 
              Any changes made by the employee will be visible to HR and relevant departments after approval, if required.
            `,
  },
  {
    question: "How can I track employee attendance?",
    answer: `
              The system allows you to monitor employee attendance in real-time. 
              You can view daily check-ins and check-outs, track working hours, and identify any attendance issues such as missed clock-ins. 
              Attendance reports are available for download or can be used to generate monthly summaries for payroll purposes.
            `,
  },
  {
    question: "How do I generate reports for employee performance?",
    answer: `
              You can generate performance reports by navigating to the "Employee Performance" section. 
              The system allows you to review individual and team performance metrics, including goals achieved, feedback, and productivity. 
              These reports can be exported for further analysis or for use during performance reviews.
            `,
  },
];

const testimonialsData = [
  {
    name: "John Doe",
    title: "CEO, Example Inc.",
    feedback:
      "This product has significantly improved our efficiency and workflow. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    feedback:
      "The customer support is fantastic! They helped us with every step of the way.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Alice Brown",
    title: "Manager, Creative Co.",
    feedback:
      "A game-changer for our business. The features are just what we needed.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Wilson",
    title: "Founder, Startup Hub",
    feedback:
      "I was amazed at how easy it was to get started and the results were immediate.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Emily Davis",
    title: "Designer, Art Studio",
    feedback:
      "Beautifully designed and easy to use. I would recommend it to anyone.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

export { faqItems, testimonialsData };
