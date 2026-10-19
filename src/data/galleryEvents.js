/**
 * CHAMAK FOUNDATION — GALLERY & EVENTS UPDATE LOG
 * 
 * To add a new event or daily field update:
 * 1. Add a new object to the top of the GALLERY_EVENTS array below.
 * 2. Specify:
 *    - id: Unique slug (e.g. "field-update-2026-10-20")
 *    - date: YYYY-MM-DD
 *    - dateFormatted: Display date (e.g. "20 October 2026")
 *    - badge: e.g. "Daily Field Update", "Milestone", "Flagship Event"
 *    - category: "Scholarships" | "Daily Field Updates" | "Digital & STEM Labs" | "Career Mentorship" | "Community Outreach" | "Milestones"
 *    - title: Clear, engaging event title
 *    - location: City or community venue name
 *    - metric: e.g. "120+ Students Sponsored"
 *    - summary: 1-2 sentence description of what was accomplished
 *    - gridStyle: "featured-mosaic" (1 large + 2 small) | "split-duo" (2 equal) | "trio-strip" (3 equal) | "single-panoramic" (1 wide)
 *    - images: Array of { src, alt, caption }
 */

export const GALLERY_CATEGORIES = [
  "All Updates",
  "Scholarships",
  "Daily Field Updates",
  "Digital & STEM Labs",
  "Career Mentorship",
  "Community Outreach",
  "Milestones",
];

export const GALLERY_EVENTS = [
  {
    id: "annual-scholarships-2026",
    date: "2026-10-18",
    dateFormatted: "18 October 2026",
    badge: "Flagship Event",
    category: "Scholarships",
    title: "Annual Scholarship & Academic Kit Distribution Drive",
    location: "Hyderabad Central Auditorium, Telangana",
    metric: "120+ Students Sponsored",
    summary:
      "Comprehensive annual academic sponsorships disbursed to deserving students from economically vulnerable families. Covers full academic school fees, backpacks, textbooks, and essential stationery sets.",
    gridStyle: "featured-mosaic",
    images: [
      {
        src: "/assets/img/scholarship-ceremony.jpg",
        alt: "Student receiving scholarship certificate and bag",
        caption: "A high-achieving student proudly receiving her annual sponsorship kit and certificate on stage.",
      },
      {
        src: "/assets/img/classroom-students.jpg",
        alt: "Students attending foundational class",
        caption: "Scholarship recipients attending an orientation and goal-setting workshop before the academic term.",
      },
      {
        src: "/assets/img/founder-president.jpg",
        alt: "Dr. Mohammad Azam Ali speaking with dignitaries",
        caption: "Founder President Dr. Mohammad Azam Ali sharing words of wisdom and encouragement with parents.",
      },
    ],
  },
  {
    id: "panchayat-reading-camp-oct-2026",
    date: "2026-10-14",
    dateFormatted: "14 October 2026",
    badge: "Daily Field Update",
    category: "Community Outreach",
    title: "Gram Panchayat Outdoor Reading Camp & Library Drive",
    location: "Shadnagar Cluster, Telangana",
    metric: "450+ Books Gifted",
    summary:
      "A joyful outdoor reading camp conducted under the village neem tree for primary school students, igniting curiosity and gifting bilingual storybooks to establish household mini-libraries.",
    gridStyle: "split-duo",
    images: [
      {
        src: "/assets/img/book-reading-camp.jpg",
        alt: "Children reading storybooks outdoors under a tree",
        caption: "Village students and volunteers engaged in an interactive story circle and vocabulary games.",
      },
      {
        src: "/assets/img/classroom-students.jpg",
        alt: "Young students smiling in class",
        caption: "Young learners demonstrating reading comprehension and taking home new illustrated storybooks.",
      },
    ],
  },
  {
    id: "career-mentorship-summit-oct-2026",
    date: "2026-10-08",
    dateFormatted: "08 October 2026",
    badge: "Youth Empowerment",
    category: "Career Mentorship",
    title: "Youth Career Guidance & Professional Counseling Summit",
    location: "T-Hub Auditorium, Hyderabad",
    metric: "280+ High Schoolers Guided",
    summary:
      "A high-impact interactive mentorship conference connecting 10th and 12th standard students with professionals across engineering, medicine, civil services, commerce, and digital design.",
    gridStyle: "trio-strip",
    images: [
      {
        src: "/assets/img/career-mentorship-session.jpg",
        alt: "Mentor talking to engaged high school students",
        caption: "Industry counselors guiding students through entrance exams, career pathways, and confidence building.",
      },
      {
        src: "/assets/img/digital-lab.jpg",
        alt: "Student learning on modern computer",
        caption: "Hands-on tech exploration: students testing coding simulators and graphic design fundamentals.",
      },
      {
        src: "/assets/img/classroom-students.jpg",
        alt: "Students interacting in seminar room",
        caption: "Interactive breakout groups where students mapped their 5-year academic roadmap with senior mentors.",
      },
    ],
  },
  {
    id: "stem-robotics-fair-sep-2026",
    date: "2026-09-29",
    dateFormatted: "29 September 2026",
    badge: "Daily Field Update",
    category: "Digital & STEM Labs",
    title: "Future Innovators: Hands-on STEM & Robotics Model Fair",
    location: "Secunderabad Government High School",
    metric: "35 Working Models Built",
    summary:
      "Transforming abstract science concepts into tangible excitement: underprivileged students assembled working solar cars, simple robotic circuits, and clean energy demonstrations.",
    gridStyle: "featured-mosaic",
    images: [
      {
        src: "/assets/img/science-robotics-fair.jpg",
        alt: "Students assembling solar car model",
        caption: "Enthusiastic students assembling solar-powered micro-cars under the guidance of volunteer engineers.",
      },
      {
        src: "/assets/img/digital-lab.jpg",
        alt: "Student programming computer in lab",
        caption: "Integrating software with hardware: teaching students basic logic, sensors, and computer literacy.",
      },
      {
        src: "/assets/img/book-reading-camp.jpg",
        alt: "Students with educational workbooks",
        caption: "Students receiving foundational science workbooks and DIY experimental circuit kits to take home.",
      },
    ],
  },
  {
    id: "digital-literacy-center-sep-2026",
    date: "2026-09-18",
    dateFormatted: "18 September 2026",
    badge: "Center Inauguration",
    category: "Digital & STEM Labs",
    title: "Digital Empowerment Lab & Practical Computing Camp",
    location: "Chamak Learning Center, Old City, Hyderabad",
    metric: "40 Workstations Active",
    summary:
      "Bridging the acute digital divide by giving students zero-cost daily access to modern PC terminals, safe internet exploration, typing mastery, and basic office application coaching.",
    gridStyle: "split-duo",
    images: [
      {
        src: "/assets/img/digital-lab.jpg",
        alt: "Students working at computer workstations in modern digital lab",
        caption: "Students actively practicing 21st-century computer skills and digital research techniques.",
      },
      {
        src: "/assets/img/science-robotics-fair.jpg",
        alt: "Hands-on technical learning session",
        caption: "Practical sessions where theoretical computer science is reinforced through interactive projects.",
      },
    ],
  },
  {
    id: "foundation-launch-anniversary",
    date: "2026-10-06",
    dateFormatted: "06 October 2026",
    badge: "Historic Milestone",
    category: "Milestones",
    title: "Foundation Launch & Inauguration at Prof. Shanta Sinha's Residence",
    location: "Prof. Shanta Sinha Residence, Hyderabad",
    metric: "Mission Commenced",
    summary:
      "Chamak Foundation was formally launched in the presence of renowned educationist and Ramon Magsaysay awardee Prof. Shanta Sinha and R. Venkat Reddy, National Convenor of MV Foundation, guided by Founder President Dr. Mohammad Azam Ali.",
    gridStyle: "split-duo",
    images: [
      {
        src: "/assets/img/founder-president.jpg",
        alt: "Prof. Shanta Sinha, R. Venkat Reddy, and Dr. Mohammad Azam Ali",
        caption: "Dignitaries and child rights champions inaugurating Chamak Foundation on 6 October 2023.",
      },
      {
        src: "/assets/img/scholarship-ceremony.jpg",
        alt: "Initial student sponsorship cohort",
        caption: "The inaugural batch of students receiving foundational education support, setting the movement in motion.",
      },
    ],
  },
];
