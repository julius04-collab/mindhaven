export const img = (id: string) => `https://images.unsplash.com/${id}`;

export const IMAGES = {
  hero: img("photo-1517363898874-737b62a7db91"),
  why: img("photo-1713865471511-2e6053ed99a8"),
  calm: img("photo-1512917602760-97a8fb80dca5"),
};

export type ServiceId = "individual" | "burnout" | "anxiety" | "relationships" | "growth";

export const SERVICES: {
  id: ServiceId;
  title: string;
  description: string;
  short: string;
}[] = [
  {
    id: "individual",
    title: "Individual Therapy",
    short: "Talk things through",
    description:
      "One-to-one sessions to talk through whatever is on your mind, at your own pace, with someone trained to listen.",
  },
  {
    id: "burnout",
    title: "Stress & Burnout Support",
    short: "Work feels like too much",
    description:
      "For when work has taken over. Understand what is draining you and build boundaries you can actually keep.",
  },
  {
    id: "anxiety",
    title: "Anxiety Management",
    short: "Worry, racing thoughts",
    description:
      "Practical tools to quiet racing thoughts, ease worry and feel steadier in the moments that matter.",
  },
  {
    id: "relationships",
    title: "Relationship Counselling",
    short: "Partners, family, friends",
    description:
      "Untangle patterns with partners, family or colleagues, on your own or together, in a space that stays neutral.",
  },
  {
    id: "growth",
    title: "Personal Growth",
    short: "Confidence & direction",
    description:
      "Not in crisis, just ready for more. Work on confidence, direction and the habits that hold you back.",
  },
];

export type Format = "video" | "audio" | "chat";
export type Slot = "mornings" | "evenings" | "weekends";

export type Therapist = {
  id: string;
  name: string;
  pronouns: string;
  gender: "woman" | "man";
  title: string;
  image: string;
  focus: ServiceId[];
  tags: string[];
  bio: string;
  approach: string;
  formats: Format[];
  slots: Slot[];
  languages: string[];
};

export const THERAPISTS: Therapist[] = [
  {
    id: "amara",
    name: "Amara Okafor",
    pronouns: "she/her",
    gender: "woman",
    title: "Counselling Psychologist",
    image: img("photo-1573497019236-17f8177b81e8"),
    focus: ["burnout", "anxiety", "individual"],
    tags: ["Burnout", "Anxiety", "Work stress"],
    bio: "Amara works with professionals who keep going long after they're running on empty. Her sessions are warm, direct and practical.",
    approach: "Cognitive behavioural therapy (CBT) and compassion-focused work.",
    formats: ["video", "audio"],
    slots: ["evenings", "weekends"],
    languages: ["English", "Igbo"],
  },
  {
    id: "daniel",
    name: "Daniel Reyes",
    pronouns: "he/him",
    gender: "man",
    title: "Licensed Therapist",
    image: img("photo-1507003211169-0a1dd7228f2d"),
    focus: ["relationships", "individual", "growth"],
    tags: ["Relationships", "Life transitions", "Men's wellbeing"],
    bio: "Daniel helps people make sense of the relationships that shape them, from new parenthood to tricky family dynamics.",
    approach: "Person-centred therapy with an emphasis on communication skills.",
    formats: ["video", "chat"],
    slots: ["mornings", "evenings"],
    languages: ["English", "Spanish"],
  },
  {
    id: "lena",
    name: "Lena Hartmann",
    pronouns: "she/her",
    gender: "woman",
    title: "Clinical Psychologist",
    image: img("photo-1573496359142-b8d87734a5a2"),
    focus: ["anxiety", "individual"],
    tags: ["Anxiety", "Panic", "Perfectionism"],
    bio: "Lena specialises in anxiety and the perfectionism that often sits underneath it. Calm, structured and quietly encouraging.",
    approach: "Acceptance and commitment therapy (ACT) and mindfulness-based approaches.",
    formats: ["video", "audio", "chat"],
    slots: ["mornings", "weekends"],
    languages: ["English", "German"],
  },
  {
    id: "kofi",
    name: "Kofi Mensah",
    pronouns: "he/him",
    gender: "man",
    title: "Counsellor & Coach",
    image: img("photo-1568602471122-7832951cc4c5"),
    focus: ["growth", "burnout"],
    tags: ["Career change", "Confidence", "Burnout"],
    bio: "Kofi works with people at a crossroads: new roles, big decisions, or a quiet sense that something needs to change.",
    approach: "Solution-focused therapy blended with values-based coaching.",
    formats: ["video", "audio"],
    slots: ["evenings", "weekends"],
    languages: ["English", "Twi"],
  },
];

export const FAQS = [
  {
    q: "How does online therapy work?",
    a: "You meet your therapist over a secure video, audio or chat session, from anywhere you feel comfortable. It's the same conversation you'd have in an office, without the commute.",
  },
  {
    q: "How do I choose a therapist?",
    a: "Answer a few short questions about what you'd like support with and when you're free. We'll show therapists who fit, with their focus areas and approach, so you can choose the one who feels right.",
  },
  {
    q: "Can I book sessions around my schedule?",
    a: "Yes. Many therapists offer early mornings, evenings and weekends. You can filter by the times that work for you and reschedule when life gets busy.",
  },
  {
    q: "What happens during my first session?",
    a: "Your first session is mostly about getting to know each other. Your therapist will ask what brought you here and what you'd like to change. There's no pressure to share more than you're ready to.",
  },
  {
    q: "How much does a session cost?",
    a: "Our sample pricing starts with a free 15-minute introductory call, then single sessions or a monthly plan. See the pricing section above for what each option includes.",
  },
  {
    q: "How is my privacy protected?",
    a: "Sessions are private and confidential. What you share stays between you and your therapist, and you control what's in your profile. Our privacy policy explains exactly how data is handled.",
  },
  {
    q: "Is MindHaven right for a crisis?",
    a: "MindHaven is designed for ongoing support, not emergencies. If you or someone else is in immediate danger, please contact your local emergency number or a crisis line right away.",
  },
];
