export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  dateISO: string;
  description: string;
  readTime: string;
  sections: Section[];
}

export type Section =
  | { type: "paragraph"; html: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "cta" }
  | { type: "disclaimer"; text: string };

const posts: BlogPost[] = [
  {
    slug: "i-was-obese-had-high-blood-pressure-tried-every-diet-app",
    title:
      "I Was Obese, Had High Blood Pressure, High Uric Acid, and Fatty Liver. I Tried Every Diet App. None of Them Worked — So I Built My Own.",
    author: "Cedric Isubol",
    authorRole: "Founder of Caldef",
    date: "May 1, 2026",
    dateISO: "2026-05-01",
    description:
      "A personal story about battling obesity, high blood pressure, high uric acid, and fatty liver — and how the frustration of calorie tracking apps led to building Caldef, an AI-powered calorie tracker.",
    readTime: "7 min read",
    sections: [
      {
        type: "paragraph",
        html: "Let me be honest with you.",
      },
      {
        type: "paragraph",
        html: "Two years ago, I was overweight, my blood pressure was dangerously high, my uric acid was off the charts, and I had been diagnosed with fatty liver. My doctor looked me in the eye and said words that I will never forget:",
      },
      {
        type: "paragraph",
        html: '<em>"If you don\'t change your lifestyle, you will be on medication for the rest of your life."</em>',
      },
      {
        type: "paragraph",
        html: "I was 28 years old.",
      },
      {
        type: "paragraph",
        html: "That was the moment everything changed.",
      },
      {
        type: "h2",
        text: "The Problem With Every Diet App I Tried",
      },
      {
        type: "paragraph",
        html: "I did what most people do. I downloaded every popular calorie tracking app I could find.",
      },
      {
        type: "paragraph",
        html: "Every popular app I could find. You name it, I tried it.",
      },
      {
        type: "paragraph",
        html: "And every single one had the same problem.",
      },
      {
        type: "paragraph",
        html: "<strong>They made tracking feel like a second job.</strong>",
      },
      {
        type: "paragraph",
        html: 'Search for "chicken adobo" — nothing. Try "sinangag" — not found. Scan a barcode from a local market — unrecognized.',
      },
      {
        type: "paragraph",
        html: "I would spend 10 minutes after every meal just trying to log what I ate. And after three days of that? I gave up. Every time.",
      },
      {
        type: "paragraph",
        html: "The apps weren't built for how I actually eat. They weren't built for me.",
      },
      {
        type: "h2",
        text: "The Idea That Changed Everything",
      },
      {
        type: "paragraph",
        html: "One night, frustrated after another failed attempt at logging my dinner, I had a thought.",
      },
      {
        type: "paragraph",
        html: "<strong>What if I could just describe what I ate — like I'm texting a friend — and the app figures out the rest?</strong>",
      },
      {
        type: "paragraph",
        html: '"Two cups of rice, grilled tilapia, and a small bowl of sinigang."',
      },
      {
        type: "paragraph",
        html: "That's it. That's the whole input.",
      },
      {
        type: "paragraph",
        html: "No searching. No scanning. No database. Just plain text.",
      },
      {
        type: "paragraph",
        html: "I opened my laptop that same night and started building.",
      },
      {
        type: "h2",
        text: "What I Built in 1 Month",
      },
      {
        type: "paragraph",
        html: "I called it <strong>Caldef</strong> — short for Calorie Deficit.",
      },
      {
        type: "paragraph",
        html: "The idea was simple. Use AI to understand natural language descriptions of food and instantly calculate the full nutritional breakdown — calories, protein, carbs, fat, fiber, and sugar.",
      },
      {
        type: "paragraph",
        html: "But as I kept building, I realized calorie logging was only part of the problem. People also needed to know:",
      },
      {
        type: "list",
        items: [
          "How many calories should I actually eat for MY body?",
          "Am I losing weight at the right pace?",
          "What should I eat today that fits my goal?",
        ],
      },
      {
        type: "paragraph",
        html: "So I added more.",
      },
      {
        type: "paragraph",
        html: "A <strong>calorie deficit planner</strong> that calculates your personal TDEE using the Mifflin-St Jeor formula — the same one doctors use — based on your height, weight, age, and activity level.",
      },
      {
        type: "paragraph",
        html: "A <strong>weight tracker</strong> with a beautiful chart that shows your actual weight loss curve versus your expected curve. So you always know if you're on track.",
      },
      {
        type: "paragraph",
        html: "A <strong>custom meal plan builder</strong> where you create your own plan from scratch — add the meals you actually eat, set your targets, and let Caldef track whether your plan keeps you within your daily calorie goal.",
      },
      {
        type: "paragraph",
        html: "A <strong>daily AI diet analysis</strong> that reads your food logs and gives you personalized health recommendations every single day.",
      },
      {
        type: "paragraph",
        html: "And a <strong>weekly meal plan generator</strong> so you never have to ask \"what should I eat this week?\" ever again.",
      },
      {
        type: "h2",
        text: "The Results That Made Me Keep Going",
      },
      {
        type: "paragraph",
        html: "Six months after I started using the early version of Caldef on myself:",
      },
      {
        type: "list",
        items: [
          "I lost 13 kilograms",
          "My blood pressure returned to normal",
          "My doctor took me off the medication watch list",
          "I felt better than I had in years",
        ],
      },
      {
        type: "paragraph",
        html: "I'm not saying this to brag.",
      },
      {
        type: "paragraph",
        html: "I'm saying this because I want you to know that Caldef was tested on the person who needed it most — me.",
      },
      {
        type: "h2",
        text: "Why Most People Fail at Calorie Tracking (And How to Fix It)",
      },
      {
        type: "paragraph",
        html: "After talking to hundreds of users, I've learned that most people fail for the same three reasons:",
      },
      {
        type: "h3",
        text: "1. It takes too long.",
      },
      {
        type: "paragraph",
        html: "If logging a meal takes more than 30 seconds, people stop doing it. Caldef takes 10 seconds. You describe your meal, the AI calculates it, done.",
      },
      {
        type: "h3",
        text: "2. They don't know their actual calorie target.",
      },
      {
        type: "paragraph",
        html: 'Most people guess. "I\'ll eat 1,500 calories" — but is that right for your body? Caldef calculates your exact personal target based on your biometrics.',
      },
      {
        type: "h3",
        text: "3. They have no visual feedback.",
      },
      {
        type: "paragraph",
        html: "Without seeing your progress on a chart, it's hard to stay motivated. Caldef shows you exactly where you are versus where you should be — every single day.",
      },
      {
        type: "h2",
        text: "The Moment I Knew This Was Real",
      },
      {
        type: "paragraph",
        html: "A few weeks after launching Caldef on Google Play, I got a message from a user.",
      },
      {
        type: "paragraph",
        html: "She said she had been trying to lose weight for two years. She had tried everything. Nothing stuck.",
      },
      {
        type: "paragraph",
        html: 'After one week of using Caldef, she said it was <strong>the first time calorie tracking actually felt manageable.</strong>',
      },
      {
        type: "paragraph",
        html: "That message meant more to me than any download number.",
      },
      {
        type: "h2",
        text: "Try It Free",
      },
      {
        type: "paragraph",
        html: "Caldef is now live on Google Play.",
      },
      {
        type: "paragraph",
        html: "Just describe your meals. Let the AI do the math. Watch the weight come off.",
      },
      {
        type: "cta",
      },
      {
        type: "disclaimer",
        text: "Caldef uses AI to estimate nutrition values. Individual results may vary. Always consult a healthcare professional before making significant changes to your diet.",
      },
    ],
  },
];

export function useBlogPosts() {
  function getAll(): BlogPost[] {
    return posts;
  }

  function getBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
  }

  return { getAll, getBySlug };
}
