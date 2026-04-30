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
  | { type: "feature-list"; items: Array<{ icon: string; title: string; description: string }> }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; html: string }
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
      { type: "paragraph", html: "Let me be honest with you." },
      {
        type: "paragraph",
        html: "Two years ago, I was overweight, my blood pressure was dangerously high, my uric acid was off the charts, and I had been diagnosed with fatty liver. My doctor looked me in the eye and said words that I will never forget:",
      },
      {
        type: "paragraph",
        html: '<em>"If you don\'t change your lifestyle, you will be on medication for the rest of your life."</em>',
      },
      { type: "paragraph", html: "I was 28 years old." },
      { type: "paragraph", html: "That was the moment everything changed." },
      { type: "h2", text: "The Problem With Every Diet App I Tried" },
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
      { type: "h2", text: "The Idea That Changed Everything" },
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
      { type: "paragraph", html: "That's it. That's the whole input." },
      {
        type: "paragraph",
        html: "No searching. No scanning. No database. Just plain text.",
      },
      {
        type: "paragraph",
        html: "I opened my laptop that same night and started building.",
      },
      { type: "h2", text: "What I Built in 1 Month" },
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
      { type: "paragraph", html: "So I added more." },
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
        html: 'And a <strong>weekly meal plan generator</strong> so you never have to ask "what should I eat this week?" ever again.',
      },
      { type: "h2", text: "The Results That Made Me Keep Going" },
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
      { type: "paragraph", html: "I'm not saying this to brag." },
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
      { type: "h3", text: "1. It takes too long." },
      {
        type: "paragraph",
        html: "If logging a meal takes more than 30 seconds, people stop doing it. Caldef takes 10 seconds. You describe your meal, the AI calculates it, done.",
      },
      { type: "h3", text: "2. They don't know their actual calorie target." },
      {
        type: "paragraph",
        html: 'Most people guess. "I\'ll eat 1,500 calories" — but is that right for your body? Caldef calculates your exact personal target based on your biometrics.',
      },
      { type: "h3", text: "3. They have no visual feedback." },
      {
        type: "paragraph",
        html: "Without seeing your progress on a chart, it's hard to stay motivated. Caldef shows you exactly where you are versus where you should be — every single day.",
      },
      { type: "h2", text: "The Moment I Knew This Was Real" },
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
        html: "After one week of using Caldef, she said it was <strong>the first time calorie tracking actually felt manageable.</strong>",
      },
      {
        type: "paragraph",
        html: "That message meant more to me than any download number.",
      },
      { type: "h2", text: "Try It Free" },
      { type: "paragraph", html: "Caldef is now live on Google Play." },
      {
        type: "paragraph",
        html: "Just describe your meals. Let the AI do the math. Watch the weight come off.",
      },
      { type: "cta" },
      {
        type: "disclaimer",
        text: "Caldef uses AI to estimate nutrition values. Individual results may vary. Always consult a healthcare professional before making significant changes to your diet.",
      },
    ],
  },
  {
    slug: "how-i-lost-18kg-building-caldef",
    title:
      "I Was Obese, Had High Blood Pressure, and Tried Every Diet App. None of Them Worked — So I Built My Own.",
    author: "Cedric Isubol",
    authorRole: "Founder of Caldef",
    date: "May 2, 2026",
    dateISO: "2026-05-02",
    description:
      "How I went from obese and on a doctor's warning to losing 18kg — by building Caldef, an AI calorie tracker that lets you log meals in plain text. The full story, plus everything Caldef does for you.",
    readTime: "9 min read",
    sections: [
      { type: "paragraph", html: "Let me be honest with you." },
      {
        type: "paragraph",
        html: "Two years ago, I was overweight, my blood pressure was dangerously high, and my doctor looked me in the eye and said words that I will never forget:",
      },
      {
        type: "paragraph",
        html: '<em>"If you don\'t change your lifestyle, you will be on medication for the rest of your life."</em>',
      },
      { type: "paragraph", html: "I was 27 years old." },
      { type: "paragraph", html: "That was the moment everything changed." },
      { type: "h2", text: "The Problem With Every Diet App I Tried" },
      {
        type: "paragraph",
        html: "I did what most people do. I downloaded every popular calorie tracking app I could find.",
      },
      {
        type: "paragraph",
        html: "MyFitnessPal. Lose It. Cronometer. You name it, I tried it.",
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
      { type: "h2", text: "The Idea That Changed Everything" },
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
      { type: "paragraph", html: "That's it. That's the whole input." },
      {
        type: "paragraph",
        html: "No searching. No scanning. No database. Just plain text.",
      },
      {
        type: "paragraph",
        html: "I opened my laptop that same night and started building.",
      },
      { type: "h2", text: "What I Built in 6 Months" },
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
          "What is my body actually doing with the food I eat?",
          "How do I plan my meals for the entire week?",
        ],
      },
      { type: "paragraph", html: "So I added more." },
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
        html: "Food recommendations powered by AI that suggest meals from YOUR country. Not American meal plans. Not European portion sizes. Actual food you recognize and can cook.",
      },
      {
        type: "paragraph",
        html: "A <strong>daily AI diet analysis</strong> that goes beyond just counting calories. Every day, Caldef reads your food logs, analyzes your nutritional patterns, and gives you personalized health insights and actionable recommendations. Are you getting enough protein? Is your fiber intake too low? Are your meals balanced for your deficit goal? Caldef tells you — automatically, every single day.",
      },
      {
        type: "paragraph",
        html: "A <strong>custom meal plan builder</strong> where you create your own weekly meal plan inside the app. No more wondering what to eat tomorrow. Plan your entire week in advance, stay within your calorie goal, and walk into every meal with a clear plan. You can build it yourself or let the AI generate one based on your TDEE and food preferences.",
      },
      {
        type: "paragraph",
        html: 'And a <strong>weekly meal plan generator</strong> so you never have to ask "what should I eat this week?" ever again.',
      },
      { type: "h2", text: "The Results That Made Me Keep Going" },
      {
        type: "paragraph",
        html: "Six months after I started using the early version of Caldef on myself:",
      },
      {
        type: "list",
        items: [
          "I lost 18 kilograms",
          "My blood pressure returned to normal",
          "My doctor took me off the medication watch list",
          "I felt better than I had in years",
        ],
      },
      { type: "paragraph", html: "I'm not saying this to brag." },
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
        html: "After talking to hundreds of users, I've learned that most people fail for the same four reasons:",
      },
      { type: "h3", text: "1. It takes too long." },
      {
        type: "paragraph",
        html: "If logging a meal takes more than 30 seconds, people stop doing it. Caldef takes 10 seconds. You describe your meal, the AI calculates it, done.",
      },
      { type: "h3", text: "2. They don't know their actual calorie target." },
      {
        type: "paragraph",
        html: 'Most people guess. "I\'ll eat 1,500 calories" — but is that right for your body? Caldef calculates your exact personal target based on your biometrics.',
      },
      { type: "h3", text: "3. They have no visual feedback." },
      {
        type: "paragraph",
        html: "Without seeing your progress on a chart, it's hard to stay motivated. Caldef shows you exactly where you are versus where you should be — every single day.",
      },
      { type: "h3", text: "4. They don't know what to eat." },
      {
        type: "paragraph",
        html: 'Even when people know their calorie target, they still ask "but what should I actually eat?" Caldef solves this with AI-generated meal plans and daily diet analysis that tells you exactly what your body needs — based on what you actually logged.',
      },
      { type: "h2", text: "The Moment I Knew This Was Real" },
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
        html: "After one week of using Caldef, she said it was <strong>the first time calorie tracking actually felt manageable.</strong>",
      },
      {
        type: "paragraph",
        html: "That message meant more to me than any download number.",
      },
      { type: "h2", text: "Everything Caldef Does For You" },
      {
        type: "paragraph",
        html: "Here's the complete picture of what you get:",
      },
      {
        type: "feature-list",
        items: [
          {
            icon: "🤖",
            title: "AI Food Logging",
            description:
              "Describe your meal in plain text. Get instant calorie and macro breakdown. Takes 10 seconds.",
          },
          {
            icon: "🧠",
            title: "Daily AI Diet Analysis",
            description:
              "Every day, Caldef analyzes your food logs and gives you personalized health insights and recommendations — automatically.",
          },
          {
            icon: "📋",
            title: "Custom Meal Plan Builder",
            description:
              "Create your own weekly meal plan or let AI generate one based on your calorie goal and food preferences. Never wonder what to eat again.",
          },
          {
            icon: "⚖️",
            title: "Weight Tracker",
            description:
              "Log your weight daily. See your actual progress versus your expected loss curve on a beautiful chart.",
          },
          {
            icon: "🎯",
            title: "Calorie Deficit Planner",
            description:
              "Get your exact personal daily calorie target based on your body stats and weight loss goal.",
          },
          {
            icon: "🌍",
            title: "Country-Based Food Recommendations",
            description:
              "AI suggests meals from your country that fit your calorie goal perfectly.",
          },
          {
            icon: "📊",
            title: "Weekly Calorie Overview",
            description:
              "See your entire week's calories at a glance. Spot patterns, adjust your plan, stay on track.",
          },
          {
            icon: "🔔",
            title: "Smart Daily Reminders",
            description:
              "Gentle notifications remind you to log your weight and meals so you never fall behind.",
          },
        ],
      },
      { type: "h2", text: "Try It Free for 7 Days" },
      {
        type: "paragraph",
        html: "Caldef is now live on Google Play with a 7-day free trial.",
      },
      {
        type: "paragraph",
        html: "No charge until day 8. Cancel anytime before then and you pay nothing.",
      },
      {
        type: "paragraph",
        html: "Just describe your meals. Let the AI do the math. Watch the weight come off.",
      },
      { type: "cta" },
      {
        type: "disclaimer",
        text: "Caldef uses AI to estimate nutrition values. Individual results may vary. Always consult a healthcare professional before making significant changes to your diet.",
      },
    ],
  },
  {
    slug: "does-eating-rice-make-you-fat-truth-about-carbs-calories",
    title:
      "Does Eating Rice Really Make You Fat? The Truth About Carbs, Calories, and Weight Loss",
    author: "Cedric Isubol",
    authorRole: "Founder of Caldef",
    date: "May 3, 2026",
    dateISO: "2026-05-03",
    description:
      "Short answer: no. The truth is weight gain comes from eating more calories than you burn — not from rice or carbs. Here's the full science of calorie deficit, TDEE, and how to actually lose weight.",
    readTime: "10 min read",
    sections: [
      { type: "paragraph", html: "Short answer: <strong>No.</strong>" },
      {
        type: "paragraph",
        html: "Long answer: it depends entirely on how much you eat — not what you eat.",
      },
      {
        type: "paragraph",
        html: "But let me explain properly because this is one of the most misunderstood topics in weight loss, and getting it wrong is costing millions of people their results.",
      },
      { type: "h2", text: "Why Do People Think Rice Makes You Fat?" },
      {
        type: "paragraph",
        html: "Because they gained weight while eating rice.",
      },
      {
        type: "paragraph",
        html: "But here's what actually happened — they were eating too many total calories. The rice was just part of it.",
      },
      {
        type: "paragraph",
        html: "You could eat nothing but chicken breast and sweet potatoes and still gain weight if you eat too much of them. Calories are calories. Your body doesn't care where they come from — it only cares about the total amount.",
      },
      { type: "h2", text: "So What Actually Causes Weight Gain?" },
      { type: "paragraph", html: "One thing and one thing only:" },
      {
        type: "paragraph",
        html: "<strong>Eating more calories than your body burns.</strong>",
      },
      {
        type: "paragraph",
        html: "This is called a calorie surplus. Do it consistently and you gain weight — regardless of whether those calories came from rice, bread, fruit, or salad.",
      },
      { type: "paragraph", html: "The opposite is also true." },
      {
        type: "paragraph",
        html: "Eating fewer calories than your body burns — a <strong>calorie deficit</strong> — causes weight loss. Every time. Without exception.",
      },
      {
        type: "paragraph",
        html: "This is the most scientifically proven principle in nutrition. It is not a fad. It is not a trend. It is biology.",
      },
      {
        type: "h2",
        text: "How Many Calories Does Your Body Actually Burn?",
      },
      {
        type: "paragraph",
        html: "This number is called your <strong>TDEE</strong> — Total Daily Energy Expenditure.",
      },
      { type: "paragraph", html: "It's made up of:" },
      { type: "h3", text: "BMR (Basal Metabolic Rate)" },
      {
        type: "paragraph",
        html: "The calories your body burns just to keep you alive — breathing, pumping blood, maintaining body temperature. This happens even if you stay in bed all day.",
      },
      { type: "h3", text: "Activity Level" },
      {
        type: "paragraph",
        html: "Every movement you make — walking, exercising, even fidgeting — burns additional calories on top of your BMR.",
      },
      {
        type: "paragraph",
        html: "Your TDEE is calculated using your height, weight, age, gender, and activity level. The most accurate formula doctors use is the <strong>Mifflin-St Jeor equation</strong>.",
      },
      {
        type: "paragraph",
        html: "For example, a 30-year-old woman, 160cm tall, 70kg, moderately active has a TDEE of approximately <strong>2,100 calories per day</strong>.",
      },
      {
        type: "paragraph",
        html: "To lose weight, she needs to eat less than 2,100 calories consistently.",
      },
      { type: "paragraph", html: "That's it. That's the whole strategy." },
      { type: "h2", text: "How Much of a Deficit Do You Actually Need?" },
      {
        type: "table",
        headers: ["Deficit Size", "Daily Calories Below TDEE", "Expected Weekly Loss"],
        rows: [
          ["Small", "200–300 calories", "0.2 – 0.3 kg"],
          ["Moderate", "400–500 calories", "0.4 – 0.5 kg"],
          ["Aggressive", "600–750 calories", "0.6 – 0.75 kg"],
        ],
      },
      {
        type: "callout",
        html: "<strong>⚠️ Warning:</strong> Never go below 1,200 calories per day for women or 1,500 for men without medical supervision. Too large a deficit causes muscle loss, nutrient deficiencies, and metabolic adaptation — your body fights back and makes future weight loss harder.",
      },
      {
        type: "paragraph",
        html: "Slow and steady is not just a saying. It is the most effective long term strategy.",
      },
      {
        type: "h2",
        text: "The Most Common Questions About Calorie Deficit — Answered",
      },
      {
        type: "h3",
        text: '"I\'m eating less but not losing weight. Why?"',
      },
      { type: "paragraph", html: "Three most common reasons:" },
      {
        type: "numbered-list",
        items: [
          "<strong>You're underestimating your calories.</strong> Studies show people underestimate their food intake by 20–40%. A tablespoon of cooking oil is 120 calories. A handful of nuts is 180 calories. These invisible calories add up fast.",
          "<strong>Water retention is masking fat loss.</strong> Stress, high sodium, hormonal changes, and intense exercise all cause temporary water retention. The scale goes up even when you're losing fat. This is why weekly averages matter more than daily weigh-ins.",
          "<strong>Your TDEE has dropped.</strong> As you lose weight, your body gets smaller and burns fewer calories. A deficit that worked at 80kg may not work at 70kg. You need to recalculate periodically.",
        ],
      },
      {
        type: "h3",
        text: '"Do I need to cut carbs to lose weight?"',
      },
      { type: "paragraph", html: "No." },
      {
        type: "paragraph",
        html: "Carbohydrates are not the enemy. Excess calories are.",
      },
      {
        type: "paragraph",
        html: "Low-carb diets work for one reason — they tend to reduce overall calorie intake because protein and fat are more filling. But if you track your calories and stay in a deficit, you can eat rice, bread, pasta, and fruit and still lose weight consistently.",
      },
      {
        type: "paragraph",
        html: "The best diet is the one you can sustain long term. If cutting carbs makes you miserable, you will quit. Find the approach that fits your lifestyle and keeps you in a deficit.",
      },
      {
        type: "h3",
        text: '"Is it possible to lose weight without exercise?"',
      },
      {
        type: "paragraph",
        html: "Yes — but exercise makes it significantly easier and healthier.",
      },
      {
        type: "paragraph",
        html: "Weight loss is 80% diet. You cannot out-exercise a bad diet. But exercise helps by:",
      },
      {
        type: "list",
        items: [
          "Burning additional calories",
          "Preserving muscle during a deficit",
          "Improving insulin sensitivity",
          "Boosting mood and motivation",
          "Preventing the metabolic slowdown that comes with dieting",
        ],
      },
      {
        type: "paragraph",
        html: "If you hate the gym, start with daily walks. 8,000–10,000 steps per day burns roughly 300–400 extra calories — equivalent to skipping one small meal.",
      },
      {
        type: "h3",
        text: '"How long will it take to lose weight?"',
      },
      {
        type: "paragraph",
        html: "At a moderate deficit of 500 calories per day, you can expect to lose approximately 0.5kg per week or 2kg per month.",
      },
      { type: "paragraph", html: "That means:" },
      {
        type: "table",
        headers: ["Goal", "Realistic Timeframe"],
        rows: [
          ["Lose 5kg", "2.5 months"],
          ["Lose 10kg", "5 months"],
          ["Lose 20kg", "10–12 months"],
        ],
      },
      {
        type: "paragraph",
        html: "These are averages. Results vary based on consistency, starting weight, metabolism, and activity level. The key word is <strong>consistency</strong> — not perfection.",
      },
      {
        type: "h3",
        text: '"What should I eat on a calorie deficit?"',
      },
      { type: "paragraph", html: "Focus on foods that are:" },
      {
        type: "list",
        items: [
          "<strong>High in protein</strong> — keeps you full, preserves muscle, burns more calories during digestion. Chicken, fish, eggs, tofu, Greek yogurt.",
          "<strong>High in fiber</strong> — slows digestion, keeps you satiated longer. Vegetables, legumes, oats, fruits.",
          "<strong>Low in calorie density</strong> — you can eat a large volume for few calories. Broccoli, cucumber, spinach, mushrooms, zucchini.",
          "<strong>Minimally processed</strong> — whole foods keep you fuller longer than processed alternatives with the same calorie count.",
        ],
      },
      {
        type: "paragraph",
        html: "You don't need to be perfect. You need to be consistent.",
      },
      {
        type: "h3",
        text: '"Can I eat my favorite foods and still lose weight?"',
      },
      {
        type: "paragraph",
        html: "Yes — as long as they fit within your daily calorie target.",
      },
      {
        type: "paragraph",
        html: "This is called flexible dieting or IIFYM (If It Fits Your Macros). The research consistently shows that flexible approaches to dieting lead to better long-term results than rigid restriction.",
      },
      {
        type: "paragraph",
        html: "Deprivation leads to bingeing. Moderation leads to sustainability.",
      },
      {
        type: "paragraph",
        html: "Have the adobo. Have the dessert. Just track it and stay within your target.",
      },
      {
        type: "h3",
        text: '"Why did I lose weight fast at first and then slow down?"',
      },
      {
        type: "paragraph",
        html: "The first 1–2 weeks of a deficit often produce rapid weight loss — sometimes 2–3kg in the first week.",
      },
      {
        type: "paragraph",
        html: "<strong>This is not fat loss. This is water weight.</strong>",
      },
      {
        type: "paragraph",
        html: "When you reduce carbohydrates and calories, your body depletes its glycogen stores. Each gram of glycogen holds approximately 3 grams of water. As glycogen drops, water follows — and the scale drops fast.",
      },
      {
        type: "paragraph",
        html: "Real fat loss is slower. 0.5kg per week is excellent progress. Don't be discouraged when the initial rapid loss slows down — that's when actual fat burning has taken over.",
      },
      {
        type: "h2",
        text: "The Simplest Way to Start Your Calorie Deficit Today",
      },
      {
        type: "numbered-list",
        items: [
          "Calculate your TDEE",
          "Subtract 300–500 calories from that number",
          "Track everything you eat for at least 7 days",
          "Weigh yourself every morning and track the weekly average",
          "Adjust if needed after 2–3 weeks",
        ],
      },
      {
        type: "paragraph",
        html: "The hardest part is step 3 — tracking consistently without it feeling like a chore.",
      },
      { type: "paragraph", html: "That's exactly why I built Caldef." },
      {
        type: "paragraph",
        html: 'Just describe your meal in plain text — "two cups of rice and grilled chicken" — and the AI calculates your full nutritional breakdown instantly. No barcode scanning. No food databases. No guessing.',
      },
      {
        type: "paragraph",
        html: "Caldef also calculates your personal TDEE, tracks your weight progress on a chart, gives you daily AI diet analysis, generates weekly meal plans, and sends you reminders so you never fall behind.",
      },
      { type: "cta" },
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
