export type Treatment = {
  slug: string;
  name: string;
  desc: string;
  group: "emotional" | "habits";
  overview: string;
  helps: string[];
  expect: string;
};

export const treatments: Treatment[] = [
  {
    slug: "anxiety",
    name: "Anxiety",
    desc: "Gentle sessions to quiet the constant noise of worry and return to a calmer baseline.",
    group: "emotional",
    overview:
      "Anxiety can feel like living with an alarm that never switches off. It often shows up as restlessness, overthinking, tension in the body, or a constant sense that something bad is about to happen — even when everything is, objectively, fine.",
    helps: [
      "Calm the physical symptoms that come with constant alertness",
      "Loosen the loop of overthinking and anticipation",
      "Build a calmer, more grounded internal response to daily life",
    ],
    expect:
      "In sessions we work with relaxation, focused attention and gentle suggestions tailored to you. Most people describe the sessions as deeply restful rather than intense, and progress is reviewed together as we go.",
  },
  {
    slug: "stress",
    name: "Stress",
    desc: "Learn to unwind deeply and respond to pressure from a more grounded place.",
    group: "emotional",
    overview:
      "Stress is the body's answer to sustained demands, but when it becomes chronic it can drain your energy, your sleep and your mood. Learning to decompress is not a luxury — it is part of taking care of your health.",
    helps: [
      "Release accumulated physical and mental tension",
      "Respond to pressure without spiraling",
      "Recover a sense of rest in your own body",
    ],
    expect:
      "Sessions combine guided relaxation with work on your stress triggers and patterns. You will also leave with simple practices you can use between sessions in your everyday life.",
  },
  {
    slug: "fears",
    name: "Fears",
    desc: "Work with the patterns behind specific fears without forcing them away.",
    group: "emotional",
    overview:
      "Fears often take root quietly and then narrow your world — avoiding places, situations, or opportunities that matter to you. They are learned responses, which means they can also be gently unlearned.",
    helps: [
      "Understand where the fear response came from",
      "Reduce its intensity without forcing or reliving it",
      "Return to situations you have been avoiding",
    ],
    expect:
      "We work at your pace, in a state of deep comfort, addressing the emotional charge behind the fear rather than dissecting it intellectually.",
  },
  {
    slug: "emotional-patterns",
    name: "Emotional patterns",
    desc: "Understand and soften recurring emotional loops that no longer serve you.",
    group: "emotional",
    overview:
      "We all react in ways we later regret — withdrawing, pleasing, exploding, going numb. These patterns usually come from old emotional learning. Hypnotherapy helps loosen them at the level where they were formed.",
    helps: [
      "Identify triggers you do not consciously understand",
      "Respond instead of reacting on autopilot",
      "Build more flexible, compassionate emotional responses",
    ],
    expect:
      "Each session starts with a conversation about what showed up during the week, followed by focused inner work. You stay aware, present and in control throughout.",
  },
  {
    slug: "self-confidence",
    name: "Self-confidence",
    desc: "Rebuild trust in yourself one small, honest step at a time.",
    group: "emotional",
    overview:
      "Low self-confidence often comes from an inner dialogue that is harsher than any critic. It is not a fact about you — it is a learned story. That story can be rewritten.",
    helps: [
      "Quiet the inner critic and sharpen your self-talk",
      "Trust your decisions and boundaries",
      "Show up more fully in work, relationships and life",
    ],
    expect:
      "Through suggestion and visualization, we rehearse the you you want to become — calm, capable and grounded — until it starts to feel familiar.",
  },
  {
    slug: "unhelpful-habits",
    name: "Unhelpful habits",
    desc: "Identify what drives the habit and create space for a kinder response.",
    group: "habits",
    overview:
      "Most habits are not about the behavior itself — they are about the feeling underneath: stress, boredom, avoidance, reward-seeking. That is why willpower alone rarely works for long.",
    helps: [
      "See the function your habit has been serving",
      "Weaken the automatic urge",
      "Replace it with a healthier response",
    ],
    expect:
      "We explore the pattern without judgment and introduce new inner responses. The process respects your values and your pace — nothing is forced.",
  },
  {
    slug: "weight-management",
    name: "Weight management",
    desc: "Address the emotions and beliefs around food, not just the behavior.",
    group: "habits",
    overview:
      "Your relationship with food is rarely just physical. Emotions, beliefs about yourself and long-standing routines all play a role. Real change starts by working with those layers.",
    helps: [
      "Recognize true hunger versus emotional eating",
      "Soften the guilt cycle around food",
      "Build a more respectful relationship with your body",
    ],
    expect:
      "Hypnotherapy is not a diet. It helps you connect with your body's signals and rebuild self-care habits that last — alongside, not instead of, professional nutritional guidance.",
  },
  {
    slug: "unwanted-habits",
    name: "Unwanted habits",
    desc: "Reduce the pull of patterns you are ready to leave behind.",
    group: "habits",
    overview:
      "Arriving here usually means one thing: part of you is ready for change. Hypnotherapy helps strengthen that inner readiness and make the old habit less appealing, not more tempting to resist.",
    helps: [
      "Reduce the emotional charge of the habit",
      "Strengthen your motivation to change",
      "Create lasting distance from the old pattern",
    ],
    expect:
      "Sessions combine careful listening with gentle sessions of focused relaxation. You remain in control, aware and able to pause or stop at any moment.",
  },
  {
    slug: "behavioral-patterns",
    name: "Behavioral patterns",
    desc: "Shift the automatic reactions that keep you stuck in old cycles.",
    group: "habits",
    overview:
      "Procrastination, people-pleasing, shutting down in conflict — these are learned behaviors that once served a purpose. The inner work helps you see them clearly and choose something different.",
    helps: [
      "Notice the pattern before it takes over",
      "Understand what it is protecting you from",
      "Practice new, more flexible responses",
    ],
    expect:
      "Through conversation and inner visualization we work with the pattern in a safe, relaxed state, building new associations that feel natural over time.",
  },
  {
    slug: "other-goals",
    name: "Other personal goals",
    desc: "If it matters to you, we can explore whether hypnotherapy fits your process.",
    group: "habits",
    overview:
      "Not every goal fits a predefined category. Sleep, confidence before a big moment, preparing for a change of life — hypnotherapy can support many kinds of personal work when explored honestly.",
    helps: [
      "Clarify what you truly want to change",
      "Assess whether hypnotherapy fits your goal",
      "Design a realistic starting point together",
    ],
    expect:
      "Book a free initial consultation. We talk about your goal, your history with it, and decide together if this is the right approach for you — no pressure, no promises.",
  },
];
