export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  dateISO: string;
  description: string;
  readTime: string;
  cluster: string;
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
    cluster: "Calorie Tracking",
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
    cluster: "Calorie Tracking",
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
              "Just take a photo of your meal or describe what you ate in plain text. Get instant calorie and macro breakdown. Takes 10 seconds.",
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
    cluster: "Calorie Deficit",
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
        html: 'Just take a photo of your meal or describe what you ate in plain text — "two cups of rice and grilled chicken" — and the AI calculates your full nutritional breakdown instantly. No food databases. No guessing.',
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
  {
    slug: "how-to-stay-in-a-calorie-deficit",
    title: "How to Stay in a Calorie Deficit — 10 Proven Strategies That Actually Work",
    author: "Cedric Isubol",
    authorRole: "Founder of Caldef",
    date: "April 21, 2026",
    dateISO: "2026-04-21",
    cluster: "Calorie Deficit",
    description:
      "Struggling to stay in a calorie deficit? Here are 10 proven strategies to help you stick to your calorie target, avoid hunger, and lose weight consistently.",
    readTime: "12 min read",
    sections: [
      {
        type: "callout",
        html: "<strong>The honest truth:</strong> staying in a calorie deficit is not about willpower. It's about building the right environment, habits, and strategies that make eating less feel effortless rather than like a constant battle against yourself. Every strategy here is backed by research and based on what actually worked for real people.",
      },
      { type: "h2", text: "01 🥩 Prioritize Protein at Every Meal" },
      { type: "paragraph", html: "Protein is the most filling macronutrient. It slows digestion, reduces hunger hormones, and keeps you satiated for hours — making it significantly easier to stay under your calorie target without feeling deprived." },
      { type: "paragraph", html: "When you eat a high-protein meal, your body releases more satiety hormones and less ghrelin (the hunger hormone) compared to a high-carb or high-fat meal of equal calories." },
      { type: "paragraph", html: "Target 1.6g to 2.2g of protein per kilogram of body weight daily. For a 70kg person, that's 112g to 154g of protein per day." },
      { type: "paragraph", html: "Best sources: chicken breast, eggs, fish, Greek yogurt, tofu, legumes, cottage cheese." },
      { type: "paragraph", html: "Practical tip: Build every meal around a protein source first, then add vegetables, then carbs. This simple order change naturally keeps calories lower without counting." },
      { type: "h2", text: "02 🥦 Use Volume Eating to Feel Full" },
      { type: "paragraph", html: "Hunger is the number one reason people abandon their calorie deficit. Volume eating solves this by letting you eat a large physical amount of food for very few calories." },
      { type: "paragraph", html: "The secret is calorie density — the number of calories per gram of food. Water-rich, fiber-dense foods like vegetables have very low calorie density. You can eat enormous portions for almost no caloric cost." },
      { type: "list", items: ["100g of broccoli = 35 calories", "100g of white rice = 130 calories", "100g of chocolate = 546 calories"] },
      { type: "paragraph", html: "Strategy: Fill half your plate with non-starchy vegetables before adding anything else. Broccoli, spinach, cucumber, mushrooms, zucchini, cabbage — these can be eaten in massive quantities without meaningfully impacting your calorie budget." },
      { type: "paragraph", html: "Add a large salad before your main meal. Studies show this reduces total meal calorie intake by 12% without people feeling like they ate less." },
      { type: "h2", text: "03 📱 Track Everything You Eat" },
      { type: "paragraph", html: "Research consistently shows that people who track their food intake lose significantly more weight than those who don't. The reason is simple — awareness." },
      { type: "paragraph", html: "Studies show people underestimate their calorie intake by 20–40% on average. A tablespoon of cooking oil is 120 calories. A handful of mixed nuts is 180 calories. A glass of juice is 110 calories. Together they can easily push you 400–600 calories over your target without you realizing it." },
      { type: "paragraph", html: "Tracking creates accountability. When you know you have to log it, you think twice before eating it." },
      { type: "paragraph", html: "The biggest barrier to tracking is that it feels like too much effort. That's exactly why Caldef exists — instead of searching food databases or scanning barcodes, you just describe your meal in plain text and AI calculates everything instantly." },
      { type: "paragraph", html: '<em>"Two cups of rice and grilled chicken"</em> — done in 10 seconds.' },
      { type: "paragraph", html: "Track for at least 21 days straight. Research shows 21 days is the threshold where awareness of your eating patterns becomes automatic." },
      { type: "h2", text: "04 💧 Drink Water Before Every Meal" },
      { type: "paragraph", html: "Thirst is frequently misread by the brain as hunger. Before reaching for food, drink a full glass of water and wait 10 minutes. You'll often find the \"hunger\" disappears." },
      { type: "paragraph", html: "A study published in the journal Obesity found that drinking 500ml of water 30 minutes before meals reduced calorie intake by 13% compared to a control group." },
      { type: "paragraph", html: "Target: 2.5 to 3.5 liters of water per day depending on your body size and activity level. Keep a large water bottle visible at all times — out of sight means out of mind." },
      { type: "paragraph", html: "If you find plain water boring, add cucumber, lemon, or mint. The goal is total fluid intake — flavor additions don't meaningfully change the caloric content." },
      { type: "h2", text: "05 🍽️ Eat Slowly and Without Distractions" },
      { type: "paragraph", html: "Your brain takes approximately 20 minutes to receive satiety signals from your stomach. If you eat quickly, you consume far more food than you actually need before the fullness signal arrives." },
      { type: "paragraph", html: "A study in the British Medical Journal found that fast eaters were 115% more likely to be overweight than slow eaters. The speed of eating matters more than most people realize." },
      { type: "paragraph", html: "Practical techniques: put your fork down between bites, chew each mouthful thoroughly, take a sip of water between bites." },
      { type: "paragraph", html: "Eating while watching TV, scrolling your phone, or working at your desk leads to an average of 10% more calories consumed per meal. Try eating at least one meal per day with zero screens." },
      { type: "h2", text: "06 📅 Plan Your Meals the Night Before" },
      { type: "paragraph", html: "Decision fatigue is real. By the time dinner comes around, your willpower is genuinely depleted. This is when people make poor food choices — not because they lack discipline, but because planning in advance removes the need for discipline at the moment of decision." },
      { type: "paragraph", html: "Every night before bed, decide and write down tomorrow's meals. They don't need to be elaborate. <em>\"Eggs and toast for breakfast, chicken salad for lunch, rice and fish for dinner\"</em> is a complete plan." },
      { type: "paragraph", html: "People who plan their meals in advance consume an average of 253 fewer calories per day than those who decide what to eat in the moment." },
      { type: "h2", text: "07 😴 Prioritize Sleep — Seriously" },
      { type: "paragraph", html: "Sleep is the most underrated weight loss tool. When you sleep less than 7 hours, ghrelin (hunger hormone) increases by up to 24%, leptin (satiety hormone) decreases by up to 18%, and your food reward system becomes hyperactivated — making high-calorie foods significantly harder to resist." },
      { type: "paragraph", html: "A study at the University of Chicago found that sleep-deprived dieters lost <strong>55% less fat</strong> than well-rested dieters on the exact same calorie intake. The sleep-deprived group lost more muscle instead." },
      { type: "paragraph", html: "Target: 7 to 9 hours per night. Consistent sleep and wake times — even on weekends — matter as much as duration." },
      { type: "h2", text: "08 🧘 Manage Stress to Prevent Emotional Eating" },
      { type: "paragraph", html: "Chronic stress is one of the most common hidden causes of failed calorie deficits. When you're stressed, your body releases cortisol — which directly triggers cravings for high-calorie, high-sugar, high-fat comfort foods." },
      { type: "paragraph", html: "This isn't a character flaw. It's biology. Your brain is doing exactly what it was designed to do. You just need to recognize it and have a plan." },
      { type: "paragraph", html: "Signs that stress is affecting your eating: you find yourself eating when you're not physically hungry, you crave comfort foods after difficult days, you feel out of control around food in the evenings." },
      { type: "paragraph", html: "10 minutes of outdoor walking immediately after a stressful event reduces cortisol more effectively than indoor exercise. Box breathing (inhale 4, hold 4, exhale 4, hold 4) genuinely lowers acute stress response within minutes." },
      { type: "h2", text: "09 ⚖️ Weigh Yourself Daily — But Track the Weekly Average" },
      { type: "paragraph", html: "Daily weigh-ins provide the most accurate data, but the number on any given day can fluctuate by 1–3kg due to water retention, food volume, hormonal changes, and sodium intake — none of which reflect actual fat gain or loss." },
      { type: "paragraph", html: "The solution is to track the <strong>7-day average</strong>, not the daily number. Weigh yourself every morning under the same conditions — after waking, after using the bathroom, before eating. Average the 7 readings at week's end. Compare weekly averages, not daily numbers." },
      { type: "paragraph", html: "If your weekly average is going down over a 2–3 week period, your deficit is working. If it's flat or rising for 3 weeks, adjust your intake or activity." },
      { type: "h2", text: "10 🎯 Allow Flexibility — Aim for Consistency, Not Perfection" },
      { type: "paragraph", html: "The single biggest mistake is treating one bad day as failure. One meal cannot ruin a week. A week of giving up after one meal can." },
      { type: "paragraph", html: "Think of your calorie target as a <strong>weekly budget</strong>, not a daily limit. If your target is 1,700 calories per day, your weekly budget is 11,900 calories. If you eat 2,200 on Saturday, just continue normally and let the other 6 days carry the week." },
      { type: "paragraph", html: "Build planned flexibility into your approach. Have a designated meal each week where you eat freely. Knowing it's coming makes the rest of the week significantly easier to stick to." },
      { type: "cta" },
      {
        type: "disclaimer",
        text: "Caldef uses AI to estimate nutrition values. Individual results may vary. Always consult a healthcare professional before making significant changes to your diet.",
      },
    ],
  },
  {
    slug: "why-most-americans-cant-lose-weight-simple-fix",
    title: "Why Most Americans Can't Lose Weight — And the One Strategy That Actually Works",
    author: "Cedric Isubol",
    authorRole: "Founder of Caldef",
    date: "May 4, 2026",
    dateISO: "2026-05-04",
    cluster: "Calorie Deficit",
    description: "America has a weight problem — but it's not because of laziness or willpower. Here's the real reason most Americans struggle to lose weight, and the one science-backed strategy that cuts through all the noise.",
    readTime: "8 min read",
    sections: [
      { type: "paragraph", html: "If you\'ve ever tried to lose weight in America, you already know how hard it is." },
      { type: "paragraph", html: "You\'re surrounded by supersized meals, dollar-menu temptations, and an entire food industry designed to make you eat more than you need. Add in long work hours, desk jobs, and the fact that driving is the default mode of transportation — and you\'re fighting an uphill battle every single day." },
      { type: "paragraph", html: "But here\'s the thing: <strong>the problem is not your willpower.</strong> The problem is that nobody taught you how energy balance actually works." },
      { type: "h2", text: "The Real Reason You\'re Not Losing Weight" },
      { type: "paragraph", html: "Weight gain has one root cause: eating more calories than your body burns. Not carbs. Not fat. Not meal timing. Calories in vs. calories out." },
      { type: "paragraph", html: "The reason Americans struggle is not genetic laziness — it\'s <strong>environmental calorie overload</strong>. A single Chipotle burrito can exceed 1,000 calories. A large McDonald\'s meal can hit 1,300. A Starbucks Frappuccino can quietly add 500 calories to your day before you\'ve even had a real meal." },
      { type: "paragraph", html: "You could eat what feels like a \"normal\" day and still be 600–800 calories over your maintenance level without realizing it." },
      { type: "h2", text: "The Fix: A Calorie Deficit" },
      { type: "paragraph", html: "The solution is simple in concept: eat fewer calories than you burn. This is called a <strong>calorie deficit</strong>, and it is the only scientifically validated mechanism for fat loss." },
      { type: "paragraph", html: 'Not sure where to start? Use our free <a href="/calorie-deficit-calculator" class="text-green-400 underline font-semibold">calorie deficit calculator</a> to find your exact daily calorie target based on your height, weight, age, and activity level. It takes less than 60 seconds.' },
      { type: "callout", html: "A deficit of 500 calories per day leads to approximately <strong>1 pound of fat loss per week</strong> — a safe, sustainable rate backed by decades of research." },
      { type: "h2", text: "Step One: Know Your Starting Point" },
      { type: "paragraph", html: "Before you set a calorie goal, you need to understand where you currently stand. Body Mass Index (BMI) is an imperfect but widely used starting point to gauge whether you\'re in a healthy weight range." },
      { type: "paragraph", html: 'Use our <a href="/bmi-calculator" class="text-green-400 underline font-semibold">bmi calculator</a> to instantly see your BMI and what it means for your health. It\'s free and takes 30 seconds. Pair that with your calorie target and you have a clear, data-driven starting point.' },
      { type: "h2", text: "Why Calorie Counting Feels Impossible in America" },
      { type: "paragraph", html: "Most Americans don\'t fail at dieting because they\'re undisciplined. They fail because the environment makes accurate tracking feel overwhelming. Here\'s what makes it especially hard:" },
      { type: "list", items: [
        "Portion distortion — American restaurant portions are 2–4x what a standard serving actually is",
        "Hidden calories — sauces, dressings, cooking oils, and toppings add hundreds of invisible calories",
        "Liquid calories — soda, juice, energy drinks, and specialty coffees are calorie-dense but don\'t register as \"food\"",
        "Vague ingredient lists — fast food items often have wildly different calorie counts than people expect",
        "Social eating culture — office donuts, birthday cakes, sports watching parties — every social event revolves around high-calorie food"
      ]},
      { type: "h2", text: "Calories in Common American Foods" },
      { type: "table", headers: ["Food Item", "Serving Size", "Approx. Calories"], rows: [
        ["Big Mac (McDonald\'s)", "1 burger", "550 kcal"],
        ["Chipotle Chicken Burrito", "1 burrito", "1,050 kcal"],
        ["Cheesecake Factory Pasta", "1 plate", "1,500+ kcal"],
        ["Starbucks Venti Frappuccino", "24 fl oz", "500 kcal"],
        ["Bag of Doritos (full bag)", "9.25 oz", "1,300 kcal"],
        ["Domino\'s Pepperoni Pizza", "3 slices", "720 kcal"],
        ["Subway 6-inch Turkey Sub", "6-inch", "280 kcal"],
        ["Greek Yogurt (plain, 5 oz)", "5 oz", "80 kcal"]
      ]},
      { type: "paragraph", html: "Notice how easy it is to hit 2,000+ calories in a single meal? And notice how some \"healthy\" choices are surprisingly low? <strong>The data changes everything.</strong>" },
      { type: "h2", text: "How to Build a Calorie Deficit Without Feeling Miserable" },
      { type: "paragraph", html: "The goal is not to starve yourself. A sustainable calorie deficit is modest — usually 300 to 600 calories below maintenance. Here\'s how to build one without white-knuckling it:" },
      { type: "numbered-list", items: [
        "Calculate your TDEE (Total Daily Energy Expenditure) — this is your maintenance calorie level",
        "Set a target 300–500 calories below your TDEE to start",
        "Eat high-volume, low-calorie foods: vegetables, lean proteins, broth-based soups, fruit",
        "Swap liquid calories for water, sparkling water, or black coffee",
        "Log your food — even rough estimates beat guessing",
        "Eat out strategically: grilled over fried, dressings on the side, skip the bread basket",
        "Weigh yourself weekly (not daily) and track the trend over time"
      ]},
      { type: "h2", text: "Use an App for Weight Loss That Actually Makes Tracking Easy" },
      { type: "paragraph", html: 'Most calorie apps are built for people who already know what they\'re doing. Caldef is different. It\'s an <a href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker" class="text-green-400 underline font-semibold" target="_blank" rel="noopener noreferrer">app for weight loss</a> that uses AI to identify your food from a photo, description, or voice input — so logging a Tex-Mex plate or a backyard BBQ spread takes seconds, not minutes.' },
      { type: "feature-list", items: [
        { icon: "📸", title: "AI Photo Logging", description: "Snap a photo of any meal — even a loaded American plate — and Caldef estimates the calories automatically." },
        { icon: "🎙️", title: "Voice & Text Input", description: "Just say \"two slices of pepperoni pizza and a Diet Coke\" and Caldef handles the rest." },
        { icon: "🍔", title: "Restaurant-Aware", description: "Caldef understands American restaurant culture and can estimate meals from popular chains." },
        { icon: "📊", title: "Daily & Weekly Trends", description: "See your calorie balance at a glance and stay on track without obsessing over every gram." }
      ]},
      { type: "h2", text: "Consistency Beats Perfection — Every Time" },
      { type: "paragraph", html: "You don\'t need to eat salads every day. You don\'t need to give up burgers forever. You just need to eat within your calorie budget more days than not." },
      { type: "paragraph", html: "One bad day will not ruin your progress. Giving up after one bad day will. Think of your calorie target as a <strong>weekly budget</strong>, not a daily law. If you go over on Friday, let Saturday and Sunday balance it out. The trend matters — not any single meal." },
      { type: "callout", html: "<strong>Bottom line:</strong> America\'s food environment is working against you. But armed with a calorie target, a BMI baseline, and a tool to track it all, you can lose weight eating the foods you actually like." },
      { type: "cta" },
      { type: "disclaimer", text: "Caldef uses AI to estimate nutrition values. Individual results may vary. Always consult a healthcare professional before making significant changes to your diet." },
    ],
  },
  {
    slug: "can-asians-eat-rice-and-still-lose-weight",
    title: "Can Asians Eat Rice Every Day and Still Lose Weight? The Truth About Asian Diets and Calorie Deficit",
    author: "Cedric Isubol",
    authorRole: "Founder of Caldef",
    date: "May 5, 2026",
    dateISO: "2026-05-05",
    cluster: "Calorie Deficit",
    description: "Rice isn't the enemy. If you're Asian and struggling to lose weight without giving up the food you love, this guide breaks down how calorie deficit works with real Asian meals — and how to finally make progress without cultural guilt.",
    readTime: "9 min read",
    sections: [
      { type: "paragraph", html: "If you grew up in an Asian household, you know the unspoken rule: <em>there is always rice.</em>" },
      { type: "paragraph", html: "White rice at every meal. Garlic fried rice for breakfast. A heaping bowl of steamed rice next to your ulam, your stir-fry, your banchan, your braised pork. Rice is not just food — it\'s culture, comfort, and love." },
      { type: "paragraph", html: "So when a Western diet app tells you to \"cut carbs\" and \"avoid white rice,\" it doesn\'t just feel difficult. It feels wrong." },
      { type: "paragraph", html: "<strong>Here\'s the truth: you do not have to give up rice to lose weight.</strong> But there are things about how Asians eat that silently drive weight gain — and once you see them, everything changes." },
      { type: "h2", text: "Why Many Asians Struggle to Lose Weight Despite Eating \"Healthy\"" },
      { type: "paragraph", html: "Asian food gets a healthy reputation in the West — and a lot of it is earned. Vegetables, fish, fermented foods, and tea are staples of many traditional Asian diets. But the way most Asians actually eat today is different from that idealized image." },
      { type: "list", items: [
        "Rice portions are much larger than people realize — a full rice bowl is often 2–3 servings (400–600 calories of rice alone)",
        "Stir-fry dishes use significant cooking oil, which adds 100–200 hidden calories per dish",
        "Sauces — oyster sauce, hoisin, sweet soy, coconut milk — are calorie-dense and easy to over-pour",
        "Ramen, pho, and noodle soups look light but can contain 600–1,000 calories per bowl",
        "Social and family eating culture makes it hard to control portions — refusing second helpings can feel rude",
        "Bubble tea, Thai iced tea, and sugary drinks are cultural staples with 400–700 calories per cup"
      ]},
      { type: "paragraph", html: "None of this means the food is bad. It means the <strong>portions and frequency</strong> are what determine whether you gain or lose weight — not the food itself." },
      { type: "h2", text: "The Calorie Truth Behind Common Asian Foods" },
      { type: "table", headers: ["Food Item", "Serving Size", "Approx. Calories"], rows: [
        ["Steamed White Rice", "1 cup (cooked)", "200 kcal"],
        ["Garlic Fried Rice (sinangag)", "1 cup", "300–350 kcal"],
        ["Chicken Adobo", "1 cup with sauce", "380 kcal"],
        ["Tonkotsu Ramen", "1 bowl (standard)", "850 kcal"],
        ["Pad Thai", "1 restaurant plate", "700–900 kcal"],
        ["Dim Sum (siu mai + har gow, 3 pcs each)", "6 pieces", "280 kcal"],
        ["Pho (beef, large bowl)", "1 bowl", "600–700 kcal"],
        ["Thai Milk Tea (with boba)", "16 fl oz", "450 kcal"],
        ["Bibimbap (with beef)", "1 bowl", "550 kcal"],
        ["Stir-fried Kangkong in garlic oil", "1 cup", "150 kcal"]
      ]},
      { type: "paragraph", html: "Two cups of rice, a bowl of adobo, and one glass of juice at lunch alone can easily total <strong>1,100–1,300 calories</strong>. If your daily maintenance is 1,800 calories, dinner doesn\'t have much room." },
      { type: "h2", text: "What Is a Calorie Deficit — and Why It\'s the Only Thing That Causes Fat Loss" },
      { type: "paragraph", html: "Fat loss has one biological mechanism: burning more energy than you consume over time. This is called a calorie deficit. No diet trend changes this. Low-carb, keto, intermittent fasting — they all work when they work because they create a calorie deficit. The method is just a vehicle." },
      { type: "paragraph", html: 'The key is knowing <em>your</em> calorie target — which is personal. It depends on your age, height, weight, sex, and how active you are. Use our free <a href="/calorie-deficit-calculator" class="text-green-400 underline font-semibold">calorie deficit calculator</a> to get your exact number in under a minute. It uses the Mifflin-St Jeor formula — the same method used by dietitians worldwide.' },
      { type: "h2", text: "Know Your Baseline: Check Your BMI First" },
      { type: "paragraph", html: "BMI is not a perfect measure, but it gives you a fast reference point for whether your current weight is in a healthy range for your height. Asian health guidelines often set BMI risk thresholds lower than Western ones — a BMI of 23 is considered overweight for many Asian populations." },
      { type: "paragraph", html: 'Use our <a href="/bmi-calculator" class="text-green-400 underline font-semibold">bmi calculator</a> to check your number instantly. It\'s free. If your result flags concern, it\'s useful motivation — and it pairs directly with your calorie target to give you a complete picture of where you\'re starting from.' },
      { type: "h2", text: "How to Eat Asian Food and Still Lose Weight" },
      { type: "paragraph", html: "You don\'t need to stop eating rice. You need to be <strong>intentional</strong> about how much rice, what\'s next to it, and what you\'re drinking. Here\'s a practical framework:" },
      { type: "numbered-list", items: [
        "Measure your rice — one cup cooked (200 kcal) instead of a heaping bowl (400–600 kcal)",
        "Prioritize protein at every meal: fish, tofu, chicken, eggs — these keep you full and protect muscle",
        "Pile on the vegetables: kangkong, bok choy, cucumber, bean sprouts — high volume, low calories",
        "Reduce cooking oil: use a spray or measure one teaspoon instead of pouring freely",
        "Swap sugary drinks for water, plain green tea, or sparkling water with lemon",
        "Eat slowly — Asian family meals are social; eating slower naturally reduces intake",
        "Log your food even roughly — you need to know what 1,800 or 1,500 calories looks like for you specifically"
      ]},
      { type: "h2", text: "An App for Weight Loss That Understands Asian Food" },
      { type: "paragraph", html: 'Western calorie apps consistently fail Asian users because their food databases don\'t include adobo, sinigang, kare-kare, char siu, tom kha, or any of the dishes that make up daily Asian eating. That\'s exactly why Caldef exists. It\'s an <a href="https://play.google.com/store/apps/details?id=com.cedricdev.diettracker" class="text-green-400 underline font-semibold" target="_blank" rel="noopener noreferrer">app for weight loss</a> built with AI that understands Asian food culture — you can describe your meal in plain language, take a photo, or even use your local language, and Caldef will estimate the calories accurately.' },
      { type: "feature-list", items: [
        { icon: "🍚", title: "Asian Food Intelligence", description: "Caldef\'s AI recognizes Filipino, Japanese, Korean, Thai, Chinese, and other Asian dishes — including home-cooked variations." },
        { icon: "📸", title: "Photo-Based Logging", description: "Snap a photo of your plate and let Caldef estimate the calories. No manual searching through databases." },
        { icon: "🗣️", title: "Describe in Your Words", description: "\"One cup of rice, chicken adobo, and sautéed kangkong\" — just type it and Caldef does the math." },
        { icon: "📉", title: "Track Your Deficit Progress", description: "See daily and weekly summaries so you know if you\'re on track, without obsessing over every gram." }
      ]},
      { type: "h2", text: "A Note on Asian Body Composition and Weight Loss" },
      { type: "paragraph", html: "Research consistently shows that Asians tend to carry more visceral fat (fat around organs) at lower BMI levels than Western counterparts. This is why metabolic diseases like Type 2 diabetes and hypertension appear in Asian populations at lower body weights." },
      { type: "paragraph", html: "This doesn\'t mean you need to become extremely thin. It means that even a modest loss of 5–10% of body weight can produce significant improvements in blood pressure, blood sugar, and cholesterol — changes you\'ll feel." },
      { type: "callout", html: "<strong>Cultural reminder:</strong> Losing weight does not mean abandoning your food heritage. It means learning the calorie landscape of the foods you already love — so you can eat them mindfully and still reach your goals." },
      { type: "paragraph", html: "Rice is not your enemy. Portion blindness is. Awareness is the first tool — and it\'s free." },
      { type: "cta" },
      { type: "disclaimer", text: "Caldef uses AI to estimate nutrition values. Individual results may vary. Calorie estimates for traditional dishes are approximations. Always consult a healthcare professional before making significant changes to your diet." },
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
