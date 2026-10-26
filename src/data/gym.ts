export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  image: string;
  icon: string;
  duration: string;
  outcomes: string[];
}

export interface Trainer {
  slug: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string;
  certification: string;
  instagram: string;
}

export interface Plan {
  slug: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  featured: boolean;
  features: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  featured?: boolean;
  sections: ArticleSection[];
}

export interface ClassSession {
  name: string;
  time: string;
  duration: string;
  coach: string;
  intensity: 'All levels' | 'Moderate' | 'High';
  spots: number;
  category: string;
}

export const site = {
  name: 'FORGE',
  legalName: 'Forge Athletics Club',
  tagline: 'Train with purpose. Live with power.',
  description: 'Austin’s neighborhood strength and conditioning club. Expert coaching, purposeful programming, and a community that shows up.',
  address: '418 Ironworks Avenue, Austin, TX 78701',
  addressShort: '418 Ironworks Ave, Austin',
  phone: '+1 (512) 555-0148',
  phoneHref: '+15125550148',
  email: 'hello@forgeathletics.example',
  hours: [
    { days: 'Monday–Friday', time: '5:00 AM–10:00 PM' },
    { days: 'Saturday', time: '7:00 AM–8:00 PM' },
    { days: 'Sunday', time: '8:00 AM–6:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
  ],
};

export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const home = {
  hero: {
    eyebrow: 'Austin, Texas · Est. 2012',
    titleTop: 'Your strongest',
    titleAccent: 'self starts',
    titleBottom: 'here.',
    description: 'No gimmicks. No guesswork. Just expert coaching, smart programming, and the right people in your corner.',
    primaryCta: 'Claim a free session',
    secondaryCta: 'Explore the club',
    image: '/images/hero-gym.jpg',
    imageAlt: 'Athlete training inside a spacious, modern strength gym',
  },
  stats: [
    { value: '12+', label: 'Years in the community' },
    { value: '35', label: 'Coach-led classes weekly' },
    { value: '1.2k', label: 'Members stronger together' },
    { value: '4.9', label: 'Average member rating' },
  ],
  manifesto: {
    eyebrow: 'More than a gym',
    title: 'Fitness that fits your life. Progress you can feel everywhere.',
    body: 'We built FORGE around one simple idea: training should give you more than it takes. More energy for your days. More confidence in your body. More people who know your name.',
  },
  method: [
    { number: '01', title: 'Start where you are', text: 'A coach sits down with you, listens to your goals, and maps a realistic starting point. No fitness experience required.' },
    { number: '02', title: 'Train with a plan', text: 'Every session has a purpose. We progress the fundamentals, track what matters, and adjust as your life changes.' },
    { number: '03', title: 'Keep showing up', text: 'Great coaching and a genuinely welcoming room make consistency easier. We celebrate every win along the way.' },
  ],
  amenities: ['24/7 member access', 'Recovery lounge', 'Personalized programming', 'Locker rooms & showers', 'Body composition scans', 'Free parking'],
};

export const services: Service[] = [
  {
    slug: 'strength-conditioning',
    title: 'Strength & Conditioning',
    shortTitle: 'Strength',
    description: 'Build usable strength, athleticism, and confidence with progressive, coach-led training.',
    details: 'Our signature program combines foundational strength work with smart conditioning. Every four-week block builds on the last, so you always know what you are working toward and why it matters.',
    image: '/images/strength.jpg',
    icon: 'barbell',
    duration: '60 min sessions',
    outcomes: ['Progressive strength blocks', 'Movement coaching in every session', 'Workloads scaled to your experience'],
  },
  {
    slug: 'small-group-training',
    title: 'Small Group Training',
    shortTitle: 'Group training',
    description: 'The energy of a team with the attention of a coach. Groups are capped at twelve people.',
    details: 'Train alongside the same supportive crew while your coach keeps an eye on every rep. We cap attendance to preserve real feedback, thoughtful progressions, and a room where nobody gets lost.',
    image: '/images/conditioning.jpg',
    icon: 'users',
    duration: '45–60 min sessions',
    outcomes: ['Maximum twelve athletes', 'Scalable conditioning intervals', 'A consistent training community'],
  },
  {
    slug: 'personal-coaching',
    title: '1:1 Personal Coaching',
    shortTitle: 'Personal coaching',
    description: 'One coach. One plan. Complete focus on your goals, schedule, and starting point.',
    details: 'From your first movement assessment to your next personal best, your coach builds each detail around you. Ideal for specific performance goals, returning from a break, or simply faster feedback.',
    image: '/images/personal-training.jpg',
    icon: 'target',
    duration: '55 min sessions',
    outcomes: ['Individual movement assessment', 'Fully personalized programming', 'Flexible appointment times'],
  },
  {
    slug: 'mobility-recovery',
    title: 'Mobility & Recovery',
    shortTitle: 'Recovery',
    description: 'Move better and recover smarter with guided mobility, breathwork, and low-impact sessions.',
    details: 'Recovery is training, too. Our guided sessions blend controlled range-of-motion work, stability, and down-regulation to help you stay capable and comfortable in the gym and beyond.',
    image: '/images/mobility.jpg',
    icon: 'activity',
    duration: '40 min sessions',
    outcomes: ['Coach-guided mobility flows', 'Breathwork and down-regulation', 'Practical routines for busy days'],
  },
  {
    slug: 'nutrition-coaching',
    title: 'Nutrition Coaching',
    shortTitle: 'Nutrition',
    description: 'Straightforward nutrition habits that support your training without taking over your life.',
    details: 'Skip the rigid meal plans. Your nutrition coach helps you build repeatable habits around food, sleep, and hydration with regular check-ins and practical guidance that works in the real world.',
    image: '/images/blog-nutrition.jpg',
    icon: 'apple',
    duration: 'Monthly check-ins',
    outcomes: ['Habit-based action plans', 'Monthly one-to-one reviews', 'No restrictive fad diets'],
  },
  {
    slug: 'open-gym',
    title: 'Open Gym Access',
    shortTitle: 'Open gym',
    description: 'A focused, fully equipped space to follow your own program on your own schedule.',
    details: 'Get 24/7 access to quality strength equipment, dedicated lifting platforms, cardio machines, and room to move. A coach is always nearby during staffed hours if you need a hand.',
    image: '/images/gym-space.jpg',
    icon: 'clock',
    duration: '24/7 for members',
    outcomes: ['Six dedicated lifting platforms', 'Cardio and functional training zones', 'Secure round-the-clock access'],
  },
];

export const trainers: Trainer[] = [
  {
    slug: 'marcus-reed', name: 'Marcus Reed', role: 'Head Coach · Strength', image: '/images/trainer-marcus.jpg',
    specialties: ['Strength', 'Conditioning'], certification: 'CSCS · USAW L2', instagram: '@marcusmoves',
    bio: 'Marcus makes strength training feel simple, approachable, and worth showing up for. He has spent twelve years coaching everyone from first-time lifters to competitive athletes.',
  },
  {
    slug: 'maya-chen', name: 'Maya Chen', role: 'Coach · Strength & Mobility', image: '/images/trainer-maya.jpg',
    specialties: ['Strength', 'Mobility'], certification: 'NASM-CPT · FRC', instagram: '@mayalifts',
    bio: 'Maya combines precise movement coaching with an infectious love of a good challenge. Her sessions focus on building strength that feels as good as it looks.',
  },
  {
    slug: 'jordan-brooks', name: 'Jordan Brooks', role: 'Coach · Conditioning', image: '/images/trainer-jordan.jpg',
    specialties: ['Conditioning', 'Group training'], certification: 'ACE-CPT · CF-L2', instagram: '@jordanmovesatx',
    bio: 'Jordan brings the energy without sacrificing the details. Expect thoughtful intervals, clear coaching, and a playlist that makes the hard parts a little easier.',
  },
  {
    slug: 'elena-rivera', name: 'Elena Rivera', role: 'Coach · Mobility & Recovery', image: '/images/trainer-elena.jpg',
    specialties: ['Mobility', 'Recovery'], certification: 'NASM-CPT · RYT-500', instagram: '@elenainmotion',
    bio: 'Elena helps members reconnect with how their bodies move. Her calm, practical approach blends mobility, stability, and breathwork for sustainable progress.',
  },
  {
    slug: 'dre-washington', name: 'Dre Washington', role: 'Coach · Personal Training', image: '/images/trainer-dre.jpg',
    specialties: ['Personal coaching', 'Strength'], certification: 'NSCA-CPT · Pn1', instagram: '@drecoaches',
    bio: 'Dre is a details person and a world-class encourager. He specializes in helping busy people build consistent routines and rediscover what their bodies can do.',
  },
  {
    slug: 'sofia-patel', name: 'Sofia Patel', role: 'Coach · Nutrition & Groups', image: '/images/trainer-sofia.jpg',
    specialties: ['Nutrition', 'Group training'], certification: 'NASM-CPT · Pn2', instagram: '@sofiastrong',
    bio: 'Sofia pairs upbeat group sessions with realistic nutrition guidance. Her goal is simple: help members feel capable, informed, and at home in the gym.',
  },
];

export const plans: Plan[] = [
  {
    slug: 'open-gym', name: 'Open Gym', description: 'Everything you need to train your way, any time.',
    monthlyPrice: 49, annualMonthlyPrice: 42, featured: false,
    features: ['24/7 gym access', 'Full strength & cardio floor', 'Locker rooms and showers', 'One onboarding session', 'Free member parking'],
  },
  {
    slug: 'all-access', name: 'All Access', description: 'Unlimited coaching, community, and recovery.',
    monthlyPrice: 89, annualMonthlyPrice: 76, featured: true,
    features: ['Everything in Open Gym', 'Unlimited group classes', 'Mobility & recovery sessions', 'Quarterly progress check-in', 'Member workshops & events'],
  },
  {
    slug: 'forge-one', name: 'FORGE 1:1', description: 'Personal coaching with all-access membership included.',
    monthlyPrice: 219, annualMonthlyPrice: 186, featured: false,
    features: ['Everything in All Access', 'Two personal sessions monthly', 'Individual training program', 'Monthly nutrition check-in', 'Direct coach messaging'],
  },
];

export const posts: Post[] = [
  {
    slug: 'how-to-build-a-workout-you-will-actually-repeat',
    title: 'How to build a workout you’ll actually repeat',
    excerpt: 'The best routine is not the hardest one. Use these four principles to make training fit your real life.',
    category: 'Training', date: '2026-10-18', displayDate: 'October 18, 2026', readTime: '6 min read',
    image: '/images/blog-strength.jpg', author: 'Marcus Reed', authorRole: 'Head Coach', featured: true,
    sections: [
      { heading: 'Start smaller than your motivation', paragraphs: ['Motivation is useful, but it is a poor planning tool. A routine built for your most inspired week usually falls apart during your busiest one. Begin with two or three sessions you can protect even when work, family, and sleep are not ideal.', 'When those sessions become automatic, add volume gradually. Consistency creates the base that harder training can sit on.'], list: ['Choose a realistic weekly minimum.', 'Put sessions on your calendar like appointments.', 'Keep a shorter backup workout for chaotic days.'] },
      { heading: 'Repeat the fundamentals', paragraphs: ['You do not need a novel workout every time you enter the gym. Squatting, hinging, pushing, pulling, carrying, and locomotion cover a remarkable amount of ground. Repeating them gives you enough exposure to improve coordination and measure progress.', 'Variety still has a place, but use it as seasoning rather than the whole meal. Keep the main movement consistent for several weeks and vary accessories, tempo, or conditioning around it.'] },
      { heading: 'Leave with something in the tank', paragraphs: ['A productive session should challenge you without making the rest of your day feel impossible. Most working sets can finish with one to three good reps still available. That effort is high enough to drive adaptation and controlled enough to support good technique.', 'If every workout becomes a test, recovery quickly becomes the limiting factor. Save maximal efforts for a planned occasion, not every Tuesday.'] },
      { heading: 'Measure the right wins', paragraphs: ['Progress can mean more load, another clean rep, better control, or less soreness afterward. Look for trends over weeks instead of judging a single day. A short training note is often enough to reveal how far you have come.'] },
    ],
  },
  {
    slug: 'what-to-eat-before-and-after-training',
    title: 'What to eat before and after training',
    excerpt: 'A practical, no-rules guide to fueling your sessions and supporting recovery.',
    category: 'Nutrition', date: '2026-10-11', displayDate: 'October 11, 2026', readTime: '5 min read',
    image: '/images/blog-nutrition.jpg', author: 'Sofia Patel', authorRole: 'Nutrition Coach',
    sections: [
      { heading: 'Before: keep it familiar', paragraphs: ['Your pre-training meal should give you accessible energy without leaving you overly full. For most people, a combination of carbohydrate and some protein one to three hours before training works well.', 'The exact timing is personal. Test one option on an ordinary training day before experimenting on a day that matters.'], list: ['Greek yogurt with fruit and granola', 'Toast with eggs and a piece of fruit', 'A turkey sandwich and a handful of crackers'] },
      { heading: 'After: cover the basics', paragraphs: ['After training, prioritize a satisfying meal with a useful source of protein and carbohydrate. You do not need to race against a thirty-minute clock. Your overall intake across the day matters more than perfect nutrient timing.', 'Fluids count, too. Replace what you lost and include sodium when you have had a particularly sweaty session.'] },
      { heading: 'Make the easy choice available', paragraphs: ['The best nutrition plan often starts before you are hungry. Keep two or three convenient options stocked for the moments when cooking is unrealistic. Repetition is not a failure of imagination; it is a useful way to reduce friction.'] },
    ],
  },
  {
    slug: 'five-recovery-habits-that-cost-nothing',
    title: 'Five recovery habits that cost nothing',
    excerpt: 'You do not need an elaborate recovery routine. Start with the basics that make the biggest difference.',
    category: 'Recovery', date: '2026-10-03', displayDate: 'October 3, 2026', readTime: '4 min read',
    image: '/images/mobility.jpg', author: 'Elena Rivera', authorRole: 'Mobility Coach',
    sections: [
      { heading: 'Protect a consistent sleep window', paragraphs: ['Sleep supports nearly every process involved in adapting to training. Instead of chasing a perfect routine, begin by keeping your wake time reasonably consistent and creating a short transition away from work and screens.'] },
      { heading: 'Use easy movement', paragraphs: ['A relaxed walk or a few minutes of comfortable mobility can give you a mental break without adding another demanding workout. Keep the intensity low enough that you finish feeling better than when you started.'], list: ['Take a ten-minute walk after a meal.', 'Spend five minutes moving through comfortable ranges.', 'Take regular breaks from long periods of sitting.', 'Keep one full rest day in your week.', 'Notice persistent pain and speak with a qualified professional.'] },
      { heading: 'Let rest be productive', paragraphs: ['Rest is not a reward you need to earn. It is part of the plan. Taking a day away from hard training can be exactly what lets your next session move you forward.'] },
    ],
  },
  {
    slug: 'your-first-strength-class-what-to-expect',
    title: 'Your first strength class: what to expect',
    excerpt: 'From what to bring to how we scale each movement, here is how your first FORGE session works.',
    category: 'Community', date: '2026-09-24', displayDate: 'September 24, 2026', readTime: '5 min read',
    image: '/images/strength.jpg', author: 'Maya Chen', authorRole: 'Strength Coach',
    sections: [
      { heading: 'Arrive as you are', paragraphs: ['You do not need to get in shape before joining a gym. Come in comfortable clothes, bring a water bottle, and arrive ten minutes early so your coach can show you around and hear about any relevant training history.'] },
      { heading: 'Every movement has options', paragraphs: ['The workout on the board is a framework, not a pass-or-fail test. Your coach will help you choose a variation and load that let you practice the intended pattern with confidence.'], list: ['A coached warm-up', 'Clear demonstrations and practice reps', 'Loads chosen for your current ability', 'A finisher you can scale or skip'] },
      { heading: 'Leave room to come back', paragraphs: ['Your first session should give you a positive starting point, not leave you unable to sit down for three days. We intentionally begin conservatively and build from what we learn about you.'] },
    ],
  },
  {
    slug: 'why-rest-days-make-you-stronger',
    title: 'Why rest days make you stronger',
    excerpt: 'Training provides the signal. Recovery is when your body does the adapting.',
    category: 'Recovery', date: '2026-09-16', displayDate: 'September 16, 2026', readTime: '4 min read',
    image: '/images/gym-space.jpg', author: 'Jordan Brooks', authorRole: 'Conditioning Coach',
    sections: [
      { heading: 'Adaptation needs space', paragraphs: ['A hard session creates fatigue alongside the stimulus to improve. Recovery gives your body time to replenish energy and adapt to that stimulus. Without it, fatigue can quietly outpace progress.'] },
      { heading: 'Rest does not have to mean stillness', paragraphs: ['A rest day can include a walk, gentle mobility, or anything else that feels restorative. The key is choosing activity that reduces rather than adds to your overall fatigue.'], list: ['Keep easy days genuinely easy.', 'Eat enough to support your training.', 'Watch sleep, mood, and motivation for signs of accumulated fatigue.'] },
      { heading: 'Plan rest before you need it', paragraphs: ['Put recovery into your weekly schedule instead of waiting until you feel completely run down. A sustainable rhythm will take you further than repeated cycles of overdoing it and stopping.'] },
    ],
  },
  {
    slug: 'a-beginners-guide-to-the-gym-floor',
    title: 'A beginner’s guide to the gym floor',
    excerpt: 'Know where to go, what to do, and the small etiquette cues that make the gym feel less intimidating.',
    category: 'Community', date: '2026-09-05', displayDate: 'September 5, 2026', readTime: '7 min read',
    image: '/images/conditioning.jpg', author: 'Dre Washington', authorRole: 'Personal Coach',
    sections: [
      { heading: 'Learn the layout once', paragraphs: ['Most gyms organize equipment into broad zones: free weights, machines, cardio, and open space. Ask for a tour and identify where you can warm up, find lighter weights, and fill your bottle. A little orientation removes a surprising amount of friction.'] },
      { heading: 'A few etiquette basics', paragraphs: ['Good gym etiquette is mostly awareness and communication. Share equipment during rest periods, return what you use, and give other people enough room to move safely.'], list: ['Wipe down equipment after use.', 'Ask before working in with someone.', 'Keep bags off walkways and benches.', 'Remember that everyone was new once.'] },
      { heading: 'Follow a simple plan', paragraphs: ['Walking in without a plan makes every machine look like a decision. Choose four or five basic movements before you arrive, or join a coached session where those decisions are already made for you.'] },
    ],
  },
];

export const schedule: Record<string, ClassSession[]> = {
  Monday: [
    { name: 'Forge Strength', time: '6:00 AM', duration: '60 min', coach: 'Marcus', intensity: 'All levels', spots: 4, category: 'Strength' },
    { name: 'Engine Room', time: '12:15 PM', duration: '45 min', coach: 'Jordan', intensity: 'High', spots: 7, category: 'Conditioning' },
    { name: 'Strength Foundations', time: '5:30 PM', duration: '60 min', coach: 'Maya', intensity: 'All levels', spots: 3, category: 'Strength' },
  ],
  Tuesday: [
    { name: 'Morning Engine', time: '6:30 AM', duration: '45 min', coach: 'Jordan', intensity: 'Moderate', spots: 8, category: 'Conditioning' },
    { name: 'Mobility Reset', time: '12:15 PM', duration: '40 min', coach: 'Elena', intensity: 'All levels', spots: 10, category: 'Mobility' },
    { name: 'Forge Strength', time: '6:00 PM', duration: '60 min', coach: 'Dre', intensity: 'All levels', spots: 5, category: 'Strength' },
  ],
  Wednesday: [
    { name: 'Strength Foundations', time: '6:00 AM', duration: '60 min', coach: 'Maya', intensity: 'All levels', spots: 6, category: 'Strength' },
    { name: 'Lunch Express', time: '12:15 PM', duration: '45 min', coach: 'Sofia', intensity: 'Moderate', spots: 2, category: 'Conditioning' },
    { name: 'Forge Strength', time: '5:30 PM', duration: '60 min', coach: 'Marcus', intensity: 'All levels', spots: 4, category: 'Strength' },
  ],
  Thursday: [
    { name: 'Engine Room', time: '6:30 AM', duration: '45 min', coach: 'Jordan', intensity: 'High', spots: 9, category: 'Conditioning' },
    { name: 'Mobility Reset', time: '12:15 PM', duration: '40 min', coach: 'Elena', intensity: 'All levels', spots: 12, category: 'Mobility' },
    { name: 'Upper Body Strength', time: '6:00 PM', duration: '60 min', coach: 'Dre', intensity: 'Moderate', spots: 5, category: 'Strength' },
  ],
  Friday: [
    { name: 'Forge Strength', time: '6:00 AM', duration: '60 min', coach: 'Marcus', intensity: 'All levels', spots: 7, category: 'Strength' },
    { name: 'Total Body Circuit', time: '12:15 PM', duration: '45 min', coach: 'Sofia', intensity: 'Moderate', spots: 4, category: 'Conditioning' },
    { name: 'Happy Hour Lift', time: '5:00 PM', duration: '60 min', coach: 'Maya', intensity: 'All levels', spots: 8, category: 'Strength' },
  ],
  Saturday: [
    { name: 'Weekend Warrior', time: '8:30 AM', duration: '60 min', coach: 'Jordan', intensity: 'High', spots: 6, category: 'Conditioning' },
    { name: 'Strength Foundations', time: '10:00 AM', duration: '60 min', coach: 'Dre', intensity: 'All levels', spots: 3, category: 'Strength' },
    { name: 'Deep Stretch', time: '11:30 AM', duration: '40 min', coach: 'Elena', intensity: 'All levels', spots: 9, category: 'Mobility' },
  ],
  Sunday: [
    { name: 'Long Engine', time: '9:00 AM', duration: '60 min', coach: 'Sofia', intensity: 'Moderate', spots: 8, category: 'Conditioning' },
    { name: 'Mobility Reset', time: '10:30 AM', duration: '40 min', coach: 'Elena', intensity: 'All levels', spots: 11, category: 'Mobility' },
  ],
};

export const testimonials = [
  { quote: 'I came for the workouts and stayed for the people. For the first time, training feels like something I get to do—not another thing I have to do.', name: 'Rachel M.', detail: 'Member since 2023', initials: 'RM' },
  { quote: 'The coaches meet you exactly where you are. I started nervous about the weight room; six months later, I’m doing things I never thought I could.', name: 'Devon K.', detail: 'Member since 2025', initials: 'DK' },
  { quote: 'Everything is intentional. The programming, the feedback, even how the room flows. I’m stronger, but the biggest change is how much energy I have outside the gym.', name: 'Alex T.', detail: 'Member since 2022', initials: 'AT' },
];

export const faqs = [
  { question: 'Do I need to be fit before I join?', answer: 'Not at all. Every program can be scaled to your current experience, and your first session includes time with a coach to establish a comfortable starting point. You belong here before you lift a single weight.' },
  { question: 'What happens in my free first session?', answer: 'We show you around, talk through your goals and training history, then guide you through a full workout. You will leave with a feel for our coaching and a clear recommendation for your next step. There is no pressure to join.' },
  { question: 'Can I pause or cancel my membership?', answer: 'Yes. Monthly memberships can be cancelled with 30 days’ notice. You can also pause for travel, medical needs, or life changes for up to three months per year. Annual memberships are prepaid and non-refundable, but they can be paused.' },
  { question: 'Are classes suitable for complete beginners?', answer: 'Yes. Look for Strength Foundations or any class marked “All levels.” Coaches demonstrate every movement, offer alternatives, and help you choose an appropriate load. Groups are capped so you always get attention.' },
  { question: 'What should I bring?', answer: 'Comfortable training clothes, flat or stable athletic shoes, and a water bottle. We provide towels, filtered water, lockers, showers, and all training equipment.' },
  { question: 'Is there parking at the club?', answer: 'Yes. Members can park free for up to three hours in the Ironworks lot directly behind the club. Bike racks are available beside the main entrance, and several bus routes stop within two blocks.' },
];
