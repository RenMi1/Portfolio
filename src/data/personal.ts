import { Skill, Education, Experience, Achievement, SocialLink } from "@/types";

export const personalInfo = {
  name: "Loren May Florentino",
  nickname: "Loren",
  title: "IT Support & Virtual Assistant | Web Design | Data Entry",
  subtitle: "Turning Ideas Into Impactful Technology",
  bio: "Detail-oriented and highly motivated BSIT undergraduate at Holy Cross of Davao College, with hands-on academic experience in web design, basic programming, and system documentation.",
  longBio: `I'm Loren May Florentino, a graduating Information Technology student at Holy Cross of Davao College, Davao City. I'm passionate about technology that touches real lives and building meaningful solutions.

I was part of the research team behind MediWear — an IoT-based wearable device designed to help patients manage their medication through smart pill reminders and secure medication storage. This experience deepened my love for embedded systems and human-centered tech.

Beyond research, I enjoy full-stack web development, UI/UX design, and exploring how software can bridge the gap between people and technology. I'm currently looking for remote IT or virtual assistant opportunities to grow, contribute, and make a real difference.`,
  email: "lorenmayflorentino@gmail.com",
  location: "Davao City, Davao Del Sur 8000, Philippines",
  phone: "+63 938 205 4010",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  availableForWork: true,
  yearsOfExperience: 1,
  age: 22,
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 80, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", level: 75, category: "Frontend", color: "#6366f1" },
  { name: "TypeScript", level: 70, category: "Frontend", color: "#3178C6" },
  { name: "Tailwind CSS", level: 85, category: "Frontend", color: "#06B6D4" },
  { name: "Vue.js", level: 60, category: "Frontend", color: "#4FC08D" },
  { name: "HTML & CSS", level: 90, category: "Frontend", color: "#E34F26" },
  // Backend
  { name: "Node.js", level: 72, category: "Backend", color: "#339933" },
  { name: "Express", level: 68, category: "Backend", color: "#6366f1" },
  { name: "Laravel", level: 70, category: "Backend", color: "#FF2D20" },
  { name: "PHP", level: 72, category: "Backend", color: "#777BB4" },
  { name: "Python", level: 68, category: "Backend", color: "#3776AB" },
  // Database
  { name: "MySQL", level: 78, category: "Database", color: "#4479A1" },
  { name: "MongoDB", level: 65, category: "Database", color: "#47A248" },
  { name: "Firebase", level: 68, category: "Database", color: "#FFCA28" },
  // Languages
  { name: "JavaScript", level: 82, category: "Languages", color: "#F7DF1E" },
  { name: "C++", level: 55, category: "Languages", color: "#00599C" },
  { name: "Java", level: 55, category: "Languages", color: "#007396" },
  // Tools
  { name: "Git & GitHub", level: 80, category: "Tools", color: "#F05032" },
  { name: "VS Code", level: 95, category: "Tools", color: "#007ACC" },
  { name: "Figma", level: 62, category: "Tools", color: "#F24E1E" },
  { name: "Arduino IDE", level: 65, category: "Tools", color: "#00979D" },
  // IoT / AI
  { name: "Arduino / ESP32", level: 65, category: "AI/ML", color: "#00979D" },
  { name: "IoT Sensors", level: 60, category: "AI/ML", color: "#14b8a6" },
  { name: "OpenCV", level: 50, category: "AI/ML", color: "#5C3EE8" },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Holy Cross of Davao College",
    degree: "Bachelor of Science",
    field: "Information Technology",
    startYear: 2022,
    endYear: 2026,
    current: true,
    gpa: "",
    honors: "Dean's Lister",
    logo: "/images/school-logo.png",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Web Systems & Technologies",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Mobile Application Development",
      "Information Security",
      "IoT & Embedded Systems",
      "Research Methods in IT",
    ],
  },
  {
    id: "2",
    institution: "F. Bustamante National High School",
    degree: "Senior High School",
    field: "",
    startYear: 2021,
    endYear: 2022,
    current: false,
    gpa: "",
    honors: "",
    logo: "",
    relevantCourses: [],
  },
  {
    id: "3",
    institution: "F. Bustamante National High School",
    degree: "Secondary Education",
    field: "",
    startYear: 2019,
    endYear: 2020,
    current: false,
    gpa: "",
    honors: "",
    logo: "",
    relevantCourses: [],
  },
  {
    id: "4",
    institution: "San Vicente Elementary School",
    degree: "Elementary Education",
    field: "",
    startYear: 2015,
    endYear: 2016,
    current: false,
    gpa: "",
    honors: "",
    logo: "",
    relevantCourses: [],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "MediWear Research Team",
    role: "IoT Research Contributor",
    type: "volunteer",
    startDate: "2024-01",
    endDate: "2025-05",
    current: false,
    description: [
      "Co-researched and developed MediWear — an IoT-based wearable device for pill reminders and medication storage.",
      "Contributed to hardware-software integration using embedded systems and sensor modules.",
      "Helped design the system architecture and mobile interface for patient monitoring.",
      "Collaborated with a multidisciplinary team to document findings and present the research.",
    ],
    technologies: ["Arduino", "ESP32", "IoT Sensors", "C++", "Firebase", "Mobile App"],
    logo: "/images/mediwear-logo.png",
  },
  {
    id: "2",
    company: "Holy Cross of Davao College",
    role: "IT Academic Projects & Coursework",
    type: "internship",
    startDate: "2022-01",
    endDate: "2026-01",
    current: true,
    description: [
      "Designed and developed basic web pages using HTML and CSS, applying UI layout and structure principles.",
      "Completed group projects involving system design, documentation, and requirements analysis.",
      "Applied fundamental programming logic and problem-solving techniques in coursework assignments.",
      "Participated in community immersion activities, strengthening communication and interpersonal skills.",
      "Consistently met academic deadlines, demonstrating time management and attention to detail.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    logo: "/images/school-logo.png",
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "MediWear Research Contributor",
    description:
      "Co-authored and developed an IoT-based wearable device for pill reminders and medication storage as part of a capstone research project.",
    date: "2025",
    category: "publication",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "FaGithub",
    username: "yourusername",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "FaLinkedin",
    username: "Loren May Florentino",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/lorenmay.florentino.1",
    icon: "FaFacebook",
    username: "Loren May Florentino",
  },
  {
    platform: "Email",
    url: "mailto:lorenmayflorentino@gmail.com",
    icon: "MdEmail",
  },
];

export const interests = [
  "IoT & Embedded Systems",
  "Full-Stack Web Development",
  "UI/UX Design",
  "Healthcare Technology",
  "Mobile App Development",
  "Artificial Intelligence",
  "Cloud Computing",
  "Open Source Contribution",
];

export const techStack = [
  { name: "React / Next.js", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟩" },
  { name: "Python", icon: "🐍" },
  { name: "MySQL / Firebase", icon: "🗄️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Arduino / ESP32", icon: "📡" },
  { name: "Git & GitHub", icon: "🔧" },
];

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Tagalog", level: "Native" },
  { name: "Cebuano", level: "Native" },
];