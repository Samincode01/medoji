
/**
 * Medoji — Healthcare Professionals
 * Shared data for directory cards and individual profile pages.
 *
 * Keep all professional information here.
 * Empty values mean information has not been supplied or confirmed.
 */

export const SAMPLE_SPECIALTIES = [
  {
    id: "all",
    label: "All Professionals",
  },
  {
    id: "physical",
    label: "General Medicine",
  },
  {
    id: "mental",
    label: "Mental Health & Counselling",
  },
];

export const SAMPLE_DOCTORS = [
  // =========================================================
  // 1. MAHJAREEN BINTA GAFFAR
  // =========================================================
  {
    id: "Mahjareen-Binta-Gaffar",
    profileId: "P-MBG-MH-0001",
    name: "Mahjareen Binta Gaffar",
    title: "Clinical Psychologist",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications:
      "M.Phil in Clinical Psychology, BS in Psychology",

    education: [
      {
        degree: "M.Phil in Clinical Psychology",
        institution: "University of Dhaka",
      },
      {
        degree: "BS in Psychology",
        institution: "University of Dhaka",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: 13,
    experienceLabel: "13+ years of experience",
    experienceDetails: "13 years of experience",

    whoIWorkWith: [],
    areasOfPractice: [],
    therapeuticApproaches: [],
    currentRoles: [],

    image: "https://montorongo.com/assets/DR-6-BA_sJBnW.jpeg",
    profileUrl:
      "https://montorongo.com/specialist-profile/Mahjareen-Binta-Gaffar",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: false,
        sessionFee: null,
        firstSessionFee: null,
        followUpFee: null,
        packages: [],
      },
      inPerson: {
        available: true,
        sessionFee: 3000,
        location: "",
        packages: [
          { sessions: 2, fee: 5000 },
          { sessions: 4, fee: 10000 },
          { sessions: 6, fee: 15000 },
        ],
      },
      duration: "50–60 minutes",
      availability: "",
    },

    // Legacy fields retained for existing components.
    affiliation: "University of Dhaka",
    languages: ["Bangla", "English"],
    fee: 3000,
    onlineFee: null,
    inPersonFee: 3000,
    followUpFee: null,
    modes: ["In person"],
    area: "",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: true,
    initials: "MB",
  },

  // =========================================================
  // 2. TERESA DIANA GOMES
  // =========================================================
  {
    id: "Teresa-Diana-Gomes",
    profileId: "P-TDG-MH-0002",
    name: "Teresa Diana Gomes",
    title: "Assistant Counselling Psychologist & School Counsellor",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications:
      "MSc in Counselling Psychology, BSc in Psychology",

    education: [
      {
        degree: "MSc in Counselling Psychology (2025)",
        institution:
          "Department of Educational and Counselling Psychology, University of Dhaka",
      },
      {
        degree: "BSc in Psychology (2022)",
        institution: "University of Dhaka",
      },
    ],

    selectedTraining: [
      "CBT and Advanced Techniques · Cognitive Behavioural Therapy · Healing Heart · 2024",
      "Dialectical Behavior Therapy (DBT) · Healing Heart · 2024–2025",
    ],

    additionalTraining: [
      "CBT for Children · Healing Heart · 2024",
      "International Child Development Programme (ICDP) · Healing Heart · 2024",
      "Neuro-Linguistic Programming (NLP) · Healing Heart · 2024",
      "Burnout and Compassion Fatigue · Healing Heart · 2024",
      "Enneagram · Healing Heart · 2024",
    ],

    experienceYears: 3,
    experienceLabel: "3 years of experience",
    experienceDetails:
      "3 years of clinical and professional experience in counselling psychology and mental health services across clinical, educational, and community settings.",

    whoIWorkWith:
      "Adolescents and adults seeking individual psychological counselling.",

    areasOfPractice: [],

    therapeuticApproaches: [
      "Psychological assessment",
      "Case formulation",
      "Psychoeducation",
      "Emotional and behavioural support",
    ],

    currentRoles: [
      "Assistant Counselling Psychologist · Centre for Psychological Health (CPH)",
      "School Counsellor · Methodist English Medium School (MEMS) & Methodist English Version School (MEVS)",
      "Mental Health Counsellor · Healing Heart Counseling Unit (Online)",
      "Partner Psychologist · Chum Wellness (Online)",
      "Psychologist · Asshash Health, Mindspace and Mon Torongo (Online)",
    ],

    image: null,
    profileUrl: "",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: 1800,
        firstSessionFee: 1800,
        followUpFee: null,
        packages: [
          { sessions: 2, fee: 3000 },
          { sessions: 4, fee: 6500 },
          { sessions: 6, fee: 10000 },
        ],
      },
      inPerson: {
        available: true,
        sessionFee: null,
        location: "",
        packages: [],
      },
      duration: "50–60 minutes",
      availability:
        "Sunday, Monday, Tuesday, Thursday, and Saturday · 7:00 PM to 10:00 PM (Bangladesh Standard Time)",
    },

    affiliation: "",
    languages: ["Bangla", "English"],
    fee: 1800,
    onlineFee: 1800,
    inPersonFee: null,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: false,
    initials: "TG",
  },

  // =========================================================
  // 3. SAGOR CHANDRO SARKER PRONOB
  // =========================================================
  {
    id: "Sagor-Chandro-Sarker-Pronob",
    profileId: "P-SCSP-MH-0003",
    name: "Sagor Chandro Sarker Pronob",
    title: "Psychologist",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications:
      "B.Sc. in Clinical Psychology, M.S.",

    education: [
      {
        degree: "B.Sc. in Clinical Psychology",
        institution: "University of Rajshahi",
      },
      {
        degree: "M.S.",
        institution: "",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: 2,
    experienceLabel: "2+ years of experience",
    experienceDetails:
      "2+ years as a clinical psychology intern. Completed a 3-month internship at Pabna Mental Hospital and has more than 1 year of private clinical practice.",

    whoIWorkWith: [],
    areasOfPractice: [
      "Clinical psychology",
      "Mental health assessment",
      "Psychotherapy",
    ],
    therapeuticApproaches: [],
    currentRoles: [],

    image: "https://montorongo.com/assets/DR-9-BF7tafr-.png",
    profileUrl:
      "https://montorongo.com/specialist-profile/Sagor-Chandro-Sarker-Pronob",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: 600,
        firstSessionFee: 600,
        followUpFee: null,
        packages: [
          { sessions: 2, fee: 1000 },
          { sessions: 4, fee: 2000 },
          { sessions: 6, fee: 3000 },
        ],
      },
      inPerson: {
        available: true,
        sessionFee: 600,
        location: "",
        packages: [],
      },
      duration: "50–60 minutes",
      availability: "",
    },

    affiliation: "",
    languages: ["Bangla", "English"],
    fee: 600,
    onlineFee: 600,
    inPersonFee: 600,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: true,
    initials: "SC",
  },

  // =========================================================
  // 4. NUSRAT JAHAN SUPTI
  // =========================================================
  {
    id: "Nusrat-Jahan-Supti",
    profileId: "P-NJS-MH-0004",
    name: "Nusrat Jahan Supti",
    title: "Psychologist",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications:
      "MSc in Clinical Psychology, BSc in Psychology",

    education: [
      {
        degree: "MSc in Clinical Psychology",
        institution: "University of Dhaka",
      },
      {
        degree: "BSc in Psychology",
        institution: "Jagannath University",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: 2.5,
    experienceLabel: "2.5+ years of experience",
    experienceDetails:
      "2.5+ years of academic and supervised clinical experience in clinical psychology, including psychological assessment, case formulation, psychotherapy, and treatment planning.",

    whoIWorkWith: "Adolescents and adults.",

    areasOfPractice: [
      "Anxiety",
      "Depression",
      "Stress-related difficulties",
      "Difficulties managing emotions",
      "Interpersonal concerns",
      "Behavioural challenges",
    ],

    therapeuticApproaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Dialectical Behavior Therapy (DBT)",
      "Client-Centered Therapy",
      "Psychological First Aid (PFA)",
      "Crisis intervention",
      "Psychoeducation",
      "Ethical, culturally sensitive, and client-centred approach",
    ],

    currentRoles: [],

    image: null,
    profileUrl: "",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: 1000,
        firstSessionFee: 1000,
        followUpFee: null,
        packages: [
          { sessions: 2, fee: 1800 },
          { sessions: 4, fee: 3500 },
          { sessions: 6, fee: 5000 },
        ],
      },
      inPerson: {
        available: true,
        sessionFee: 1500,
        location:
          "266, Senpara Parbata, Mirpur-10, Dhaka",
        packages: [],
      },
      duration: "50–60 minutes",
      availability: "",
    },

    affiliation: "University of Dhaka",
    languages: ["Bangla", "English"],
    fee: 1000,
    onlineFee: 1000,
    inPersonFee: 1500,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "Mirpur-10, Dhaka",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "266, Senpara Parbata, Mirpur-10, Dhaka",
    },

    verified: false,
    initials: "NJS",
  },

  // =========================================================
  // 5. HOSNATUL FERDOUS ZINIA
  // =========================================================
  {
    id: "Hosnatul-Ferdous-Zinia",
    profileId: "P-HFZ-MH-0006",
    name: "Hosnatul Ferdous Zinia",
    title: "Clinical Psychologist",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications:
      "B.Sc. and M.Sc. in Clinical Psychology",

    education: [
      {
        degree: "B.Sc. in Clinical Psychology",
        institution: "University of Rajshahi",
      },
      {
        degree: "M.Sc. in Clinical Psychology",
        institution: "University of Rajshahi",
      },
    ],

    selectedTraining: [
      "Counselling & Psychotherapy · Dhaka Medical College Hospital and Mental Hospital, Pabna",
    ],

    additionalTraining: [],

    experienceYears: 3,
    experienceLabel: "3 years of experience",
    experienceDetails:
      "3 years of experience in clinical psychology practice (2023 to present).",

    whoIWorkWith: [],
    areasOfPractice: [
      "Counselling",
      "Psychotherapy",
    ],
    therapeuticApproaches: [],
    currentRoles: [],

    image: "https://montorongo.com/assets/DR-11-Bm88hrNV.jpg",
    profileUrl:
      "https://montorongo.com/specialist-profile/Hosnatul-Ferdous-Zinia",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: 800,
        firstSessionFee: 800,
        followUpFee: null,
        packages: [
          { sessions: 2, fee: 1500 },
          { sessions: 4, fee: 3000 },
          { sessions: 6, fee: 4000 },
        ],
      },
      inPerson: {
        available: true,
        sessionFee: 1000,
        location: "",
        packages: [],
      },
      duration: "50–60 minutes",
      availability: "",
    },

    affiliation: "University of Rajshahi",
    languages: ["Bangla", "English"],
    fee: 800,
    onlineFee: 800,
    inPersonFee: 1000,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "Dhaka, Bangladesh",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: true,
    initials: "HF",
  },

  // =========================================================
  // 6. JAHAN ARA — EXISTING DIRECTORY RECORD
  // =========================================================
  {
    id: "Jahan-Ara",
    profileId: "P-JA-MH-0002",
    name: "Jahan Ara",
    title: "মনোবিজ্ঞানী",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications:
      "BS in Psychology, Jagannath University; MS in Educational Psychology, University of Dhaka",

    education: [
      {
        degree: "BS in Psychology",
        institution: "Jagannath University",
      },
      {
        degree: "MS in Educational Psychology",
        institution: "University of Dhaka",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: 9,
    experienceLabel: "9+ years experienced",
    experienceDetails: "9+ years experienced",

    whoIWorkWith: [],
    areasOfPractice: [],
    therapeuticApproaches: [],
    currentRoles: [],

    image: "https://montorongo.com/assets/DR-5-CB6FHvOf.png",
    profileUrl:
      "https://montorongo.com/specialist-profile/Jahan-Ara",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: 1000,
        firstSessionFee: 1000,
        followUpFee: null,
        packages: [],
      },
      inPerson: {
        available: true,
        sessionFee: null,
        location: "",
        packages: [],
      },
      duration: "",
      availability: "",
    },

    affiliation: "",
    languages: ["Bangla", "English"],
    fee: 1000,
    onlineFee: 1000,
    inPersonFee: null,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: true,
    initials: "JA",
  },

  // =========================================================
  // 7. NOWSHIN AKTER RIYA — EXISTING DIRECTORY RECORD
  // =========================================================
  {
    id: "Nowshin-Akter-Riya",
    profileId: "P-NAR-MH-0005",
    name: "Nowshin Akter Riya",
    title: "Psychologist",
    specialty: "Mental Health & Counselling",
    specialtyId: "mental",
    category: "mental",

    qualifications: "BS in Psychology, University of Dhaka",

    education: [
      {
        degree: "BS in Psychology",
        institution: "University of Dhaka",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: null,
    experienceLabel: "",
    experienceDetails: "",

    whoIWorkWith: [],
    areasOfPractice: [],
    therapeuticApproaches: [],
    currentRoles: [],

    image: "https://montorongo.com/assets/DR-12-CK1yFWiL.jpg",
    profileUrl:
      "https://montorongo.com/specialist-profile/Nowshin-Akter-Riya",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: 1000,
        firstSessionFee: 1000,
        followUpFee: null,
        packages: [],
      },
      inPerson: {
        available: true,
        sessionFee: null,
        location: "",
        packages: [],
      },
      duration: "",
      availability: "",
    },

    affiliation: "",
    languages: ["Bangla", "English"],
    fee: 1000,
    onlineFee: 1000,
    inPersonFee: null,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "",
    nextSlot: "",

    bio: "",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: true,
    initials: "NR",
  },

  // =========================================================
  // 8. DEMO DOCTOR — GENERAL MEDICINE
  // =========================================================
  {
    id: "demo-doctor-01",
    profileId: "",
    name: "Dr. Arafat Rahman",
    title: "General Physician",
    specialty: "General Medicine",
    specialtyId: "physical",
    category: "physical",

    qualifications: "MBBS (Demo Qualification)",

    education: [
      {
        degree: "MBBS (Demo Qualification)",
        institution: "",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: 5,
    experienceLabel: "5 years experience",
    experienceDetails: "5 years experience",

    whoIWorkWith: [],
    areasOfPractice: [],
    therapeuticApproaches: [],
    currentRoles: [],

    image: null,
    profileUrl: "",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: null,
        firstSessionFee: null,
        followUpFee: null,
        packages: [],
      },
      inPerson: {
        available: true,
        sessionFee: null,
        location: "",
        packages: [],
      },
      duration: "",
      availability: "",
    },

    affiliation: "",
    languages: ["Bangla", "English"],
    fee: null,
    onlineFee: null,
    inPersonFee: null,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "",
    nextSlot: "",

    bio: "Demo doctor profile for testing the Medoji AI doctor directory.",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: false,
    initials: "AR",
  },

  // =========================================================
  // 9. DEMO DOCTOR — GENERAL MEDICINE
  // =========================================================
  {
    id: "demo-doctor-02",
    profileId: "",
    name: "Dr. Nusrat Jahan",
    title: "Medical Officer",
    specialty: "General Medicine",
    specialtyId: "physical",
    category: "physical",

    qualifications: "MBBS (Demo Qualification)",

    education: [
      {
        degree: "MBBS (Demo Qualification)",
        institution: "",
      },
    ],

    selectedTraining: [],
    additionalTraining: [],

    experienceYears: 3,
    experienceLabel: "3 years experience",
    experienceDetails: "3 years experience",

    whoIWorkWith: [],
    areasOfPractice: [],
    therapeuticApproaches: [],
    currentRoles: [],

    image: null,
    profileUrl: "",

    bookingLabel: "অ্যাপয়েন্টমেন্ট বুক করুন",
    bookingUrl: "",

    booking: {
      online: {
        available: true,
        sessionFee: null,
        firstSessionFee: null,
        followUpFee: null,
        packages: [],
      },
      inPerson: {
        available: true,
        sessionFee: null,
        location: "",
        packages: [],
      },
      duration: "",
      availability: "",
    },

    affiliation: "",
    languages: ["Bangla", "English"],
    fee: null,
    onlineFee: null,
    inPersonFee: null,
    followUpFee: null,
    modes: ["Online", "In person"],
    area: "",
    nextSlot: "",

    bio: "Demo doctor profile for testing the Medoji AI doctor directory.",
    professionalExperience: [],
    services: [],
    consultationDetails: "",

    contact: {
      phone: "",
      email: "",
      address: "",
    },

    verified: false,
    initials: "NJ",
  },
];
