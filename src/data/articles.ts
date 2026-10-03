export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "what-hypnotherapy-is",
    title: "What hypnotherapy actually is (and what it is not)",
    category: "Foundations",
    date: "September 12, 2026",
    readTime: "5 min read",
    excerpt: "Forget the stage shows. Hypnotherapy is a collaborative state of focused relaxation guided by conversation and your own inner resources.",
    body: [
      "Hypnotherapy has been surrounded by myths for decades. It is not mind control, and it is not a performance. At its core, it is a guided state of focused attention and deep relaxation — something we all experience naturally, for example when we are absorbed in a good book.",
      "In a session, the therapist talks with you, agrees on a goal, and then guides you into that deeper, quieter state of mind. From there, your attention becomes more receptive: suggestions, imagery and conversations land in the part of you where habits and emotional reactions live.",
      "You stay awake, aware and in control the whole time. Most clients describe the experience as calm, warm and surprisingly ordinary — and that is exactly the point. The transformation happens in the work between sessions, not in theatrics.",
    ],
  },
  {
    slug: "anxiety-first-steps",
    title: "Three gentle things you can do when anxiety spikes",
    category: "Wellbeing",
    date: "September 3, 2026",
    readTime: "4 min read",
    excerpt: "Small, honest practices you can use anywhere — no equipment, no special place, just your breath and your body.",
    body: [
      "Anxiety often starts as a physical event: a fast heartbeat, shallow breathing, muscles tightening. The mind follows. So the first invitation is not to argue with the thought, but to meet the body.",
      "First, slow your exhale. Breathing out a little longer than you breathe in tells your nervous system that it is safe to soften. Second, name five things you can see around you. This gently returns your attention to the present moment. Third, release your jaw and drop your shoulders. The body listens to itself — and when it relaxes, the mind follows.",
      "These are not cures. They are ways of sending yourself a message: I am here, and I am safe enough for this moment. That message is the soil where deeper work can grow.",
    ],
  },
  {
    slug: "why-habits-come-back",
    title: "Why breaking a habit with willpower rarely sticks",
    category: "Habits",
    date: "August 24, 2026",
    readTime: "6 min read",
    excerpt: "Habits are not moral failures. They are solutions to an inner need — and understanding the need changes everything.",
    body: [
      "We usually treat a habit as an enemy to defeat. But habits exist because they solve something: a moment of relief, a break from stress, a feeling of control. As long as that inner need goes unmet, the habit will keep showing up.",
      "This is why willpower alone tends to work for a few days and then crumble. You are asking one part of you to resist without giving the rest of you another way to cope.",
      "The more sustainable question is: what is this habit doing for me? When you approach the habit with curiosity instead of criticism, you can start offering yourself healthier answers to the same need — and the habit loses its job, and its grip.",
    ],
  },
  {
    slug: "online-vs-in-person",
    title: "Online or in-person hypnotherapy: how to choose",
    category: "Practice",
    date: "August 15, 2026",
    readTime: "3 min read",
    excerpt: "Both formats can be deeply effective. What matters most is where you feel safe enough to let go a little.",
    body: [
      "A common question: does online hypnotherapy work as well as in person? Research and clinical experience suggest yes — the state of hypnosis is inner, not tied to a room.",
      "Online sessions are ideal if you value comfort and privacy, have a busy schedule, or want to work from the space where you already feel most at ease. In-person sessions can suit you if you prefer being welcomed into a quiet professional space.",
      "The most important ingredients are the same in both: a confidential environment, a slow and unhurried pace, and a therapeutic relationship built on trust.",
    ],
  },
  {
    slug: "what-to-expect-first-session",
    title: "What happens in your first session",
    category: "Foundations",
    date: "August 2, 2026",
    readTime: "4 min read",
    excerpt: "A first session is mostly a conversation. The work begins by understanding where you are and what you hope will change.",
    body: [
      "Your first session starts with a conversation: what brings you here, what you have already tried, and what you would like to be different. This is not an interview — it is a chance for both of us to see if this approach feels right for you.",
      "Before any deeper work, you will understand exactly what hypnotherapy is and what it is not, and you will have space for all your questions. Nothing happens without your full agreement.",
      "If it makes sense, we may do a short, gentle first guided relaxation so you can feel what the state is like. Most people leave feeling calmer and more hopeful — with a clearer sense of the path ahead.",
    ],
  },
];
