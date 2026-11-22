export interface PillarCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  variant: 'cream' | 'oatmeal' | 'sage';
  motif: 'leaf' | 'paw' | 'sprout';
}

export interface WeekCurriculum {
  week: number;
  numberLabel: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  homePractice: string;
  motif: 'acorn' | 'compass' | 'collar' | 'leash' | 'butterfly' | 'ribbon';
  accentTone: 'forest' | 'sage' | 'terracotta';
  image: string;
  imageAlt: string;
}

export interface ExperiencePhoto {
  id: string;
  title: string;
  caption: string;
  category: string;
  image: string;
  alt: string;
  spanClass: string;
  aspectClass: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  puppyInfo: string;
  cohortLabel: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrainerProfile {
  name: string;
  role: string;
  introduction: string;
  certifications: string;
  philosophy: string;
}

export interface ClassDetailsConfig {
  durationTitle: string;
  durationDetail: string;
  locationTitle: string;
  locationDetail: string;
  classSizeTitle: string;
  classSizeDetail: string;
  priceTitle: string;
  priceDetail: string;
}

export const IMAGES = {
  heroPuppy: '/src/assets/images/hero_golden_puppy_1795332363242.jpg',
  puppiesTogether: '/src/assets/images/experience_puppies_together_1795332365618.jpg',
  ownerTraining: '/src/assets/images/experience_owner_training_1795332365867.jpg',
  outdoorLeash: '/src/assets/images/experience_outdoor_leash_1795332366089.jpg',
  trainerPortrait: '/src/assets/images/trainer_editorial_portrait_1795332366678.jpg',
  ctaPuppy: '/src/assets/images/cta_puppy_portrait_1795332365504.jpg',
} as const;

export const ABOUT_PILLARS: PillarCard[] = [
  {
    number: '01',
    title: 'Confidence First',
    subtitle: 'Curiosity without overwhelm',
    description:
      'During your puppy’s crucial early weeks, gentle exposure builds lifelong resilience. We introduce new textures, sounds, and greetings at your puppy’s own comfortable pace.',
    variant: 'cream',
    motif: 'sprout',
  },
  {
    number: '02',
    title: 'Everyday Good Habits',
    subtitle: 'Practical home-ready manners',
    description:
      'From settling calmly beside the dining table to polite doorways and gentle mouthing, every exercise translates straight into peaceful daily routines at home.',
    variant: 'oatmeal',
    motif: 'paw',
  },
  {
    number: '03',
    title: 'Happy Socialisation',
    subtitle: 'Thoughtful play & calm greetings',
    description:
      'Socialisation is never a free-for-all. Guided small-group play teaches puppies how to read canine body language, take breaks, and check back in with you.',
    variant: 'sage',
    motif: 'leaf',
  },
];

export const SIX_WEEK_PROGRAM: WeekCurriculum[] = [
  {
    week: 1,
    numberLabel: 'Week 01',
    title: 'Puppy Foundations',
    shortDescription: 'Setting up trust, gentle marker cues, and calm settling right from day one.',
    fullDescription:
      'Our opening week welcomes you and your puppy into a quiet, reassuring studio rhythm. You will learn how puppies process the world, how to time positive rewards with clarity, and how to turn everyday moments into joyful learning.',
    objectives: [
      'Introduce a clear reward marker and joyful food delivery',
      'Build comfort with gentle handling for paws, ears, and grooming',
      'Practise settling calmly on a mat beside your chair',
      'Establish predictable potty, sleep, and enrichment routines',
    ],
    homePractice: 'Three 2-minute calm mat sessions daily paired with cozy evening wind-down.',
    motif: 'acorn',
    accentTone: 'forest',
    image: IMAGES.heroPuppy,
    imageAlt: 'Golden retriever puppy resting calmly on a woven blanket in soft sunlit grass',
  },
  {
    week: 2,
    numberLabel: 'Week 02',
    title: 'Focus & Name Recognition',
    shortDescription: 'Making eye contact and responding to their name feel like the best game.',
    fullDescription:
      'Before asking for big behaviours, your puppy learns that looking toward you always brings good things. Week two transforms their name into a warm, reliable cue for happy attention even around gentle studio distractions.',
    objectives: [
      'Condition enthusiastic name response without repeating cues',
      'Reward voluntary eye contact and natural check-ins',
      'Teach a playful hand-target touch for gentle redirection',
      'Begin polite sit greetings instead of jumping up',
    ],
    homePractice: 'Play the “Name & Look” game in two quiet rooms before stepping onto the porch.',
    motif: 'compass',
    accentTone: 'terracotta',
    image: IMAGES.ownerTraining,
    imageAlt: 'Puppy owner smiling while rewarding a cavapoo puppy with a small training treat',
  },
  {
    week: 3,
    numberLabel: 'Week 03',
    title: 'Everyday Manners',
    shortDescription: 'Polite doorways, leave-it foundations, and peaceful mealtimes at home.',
    fullDescription:
      'Week three tackles the real-life moments families ask about most. Using cheerful impulse-control games, your puppy discovers that waiting politely and stepping back from dropped items earns far more than rushing ahead.',
    objectives: [
      'Build a reliable “Leave It” for socks, crumbs, and sidewalk treasures',
      'Teach a cheerful “Drop It” trade game to prevent guarding',
      'Practise calm patience at open doors and meal bowls',
      'Introduce short, successful “Stay” foundations with duration',
    ],
    homePractice: 'Ask for a two-second calm pause before setting down breakfast and dinner bowls.',
    motif: 'collar',
    accentTone: 'sage',
    image: IMAGES.ctaPuppy,
    imageAlt: 'Attentive fluffy puppy looking gently upward amidst soft sage foliage',
  },
  {
    week: 4,
    numberLabel: 'Week 04',
    title: 'Leash Walking & Recall',
    shortDescription: 'Loose-leash strolling and joyful come-when-called habits for neighbourhood walks.',
    fullDescription:
      'Walks should feel like a shared stroll rather than a tug-of-war. This week pairs relaxed leash mechanics with high-energy recall games so your puppy naturally chooses to stay close and sprint back whenever called.',
    objectives: [
      'Fit harnesses comfortably and teach relaxed slack-leash walking',
      'Reinforce walking beside your hip with natural pace changes',
      'Practise cheerful puppy ping-pong recalls between family members',
      'Use scent-sniff breaks thoughtfully as earned rewards',
    ],
    homePractice: 'Practise ten relaxed steps inside your hallway before clipping on for garden strolls.',
    motif: 'leash',
    accentTone: 'forest',
    image: IMAGES.outdoorLeash,
    imageAlt: 'Cream puppy walking calmly on a woven sage cotton leash along a wooded path',
  },
  {
    week: 5,
    numberLabel: 'Week 05',
    title: 'Socialisation & Confidence',
    shortDescription: 'Guided peer play, novel surfaces, and calm curiosity around new sights.',
    fullDescription:
      'We design a gentle sensory courtyard filled with varied footing, umbrellas, strollers, and friendly new textures. Puppies enjoy short, structured play pairings with regular calm-down breaks to nurture emotional balance.',
    objectives: [
      'Navigate wobbling boards, tunnels, and varied textures with pride',
      'Read healthy play signals vs. moments when a puppy needs rest',
      'Greet new people politely with four paws softly on the ground',
      'Stay composed around bicycles, umbrellas, and everyday noises',
    ],
    homePractice: 'Take one calm “bench watching” outing to a quiet park to observe from a distance.',
    motif: 'butterfly',
    accentTone: 'terracotta',
    image: IMAGES.puppiesTogether,
    imageAlt: 'Two puppies gently sniffing and socialising together on sunlit garden grass',
  },
  {
    week: 6,
    numberLabel: 'Week 06',
    title: 'Real-World Skills & Graduation',
    shortDescription: 'Bringing every skill together for patio visits, park outings, and celebration.',
    fullDescription:
      'Our final week connects every foundation skill in a lively patio-style practice setting. You will leave with a personalized roadmap for adolescence, along with keepsake graduation portraits and a confident, connected young dog.',
    objectives: [
      'Combine mat settling, leave-it, and greetings in a café-style setup',
      'Practise reliable recalls past playful distractions',
      'Review a custom 4-to-9 month adolescent training roadmap',
      'Celebrate with our Wag & Willow graduation ceremony & keepsake',
    ],
    homePractice: 'Enjoy a quiet ten-minute neighbourhood café patio visit with your puppy’s settle mat.',
    motif: 'ribbon',
    accentTone: 'sage',
    image: IMAGES.trainerPortrait,
    imageAlt: 'Lead trainer smiling beside a calm golden puppy in a sunlit botanical courtyard',
  },
];

export const EXPERIENCE_GALLERY: ExperiencePhoto[] = [
  {
    id: 'socialisation',
    title: 'Guided Socialisation',
    caption: 'Small, thoughtfully matched play moments that teach gentle canine communication.',
    category: 'Puppies learning together',
    image: IMAGES.puppiesTogether,
    alt: 'Two young puppies gently meeting on soft sunlit grass in a fenced garden',
    spanClass: 'lg:col-span-7',
    aspectClass: 'aspect-[4/3] lg:aspect-[16/11]',
  },
  {
    id: 'outdoor-walks',
    title: 'Outdoor Puppy Activities',
    caption: 'Confidence-building strolls along leafy paths with relaxed, connected leashes.',
    category: 'Outdoor exploration',
    image: IMAGES.outdoorLeash,
    alt: 'Cream puppy walking calmly on a sage woven leash beside its owner on a park trail',
    spanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[3/4] lg:aspect-[4/5]',
  },
  {
    id: 'owner-coaching',
    title: 'Puppy Owners Participating',
    caption: 'Clear, encouraging hands-on coaching so the whole family feels confident leading.',
    category: 'Positive reinforcement training',
    image: IMAGES.ownerTraining,
    alt: 'Smiling puppy owner rewarding a sitting cavapoo puppy inside a bright sunlit studio',
    spanClass: 'lg:col-span-6',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'calm-foundations',
    title: 'Positive Reinforcement Foundations',
    caption: 'Warm, patient timing that turns curiosity into joyful everyday cooperation.',
    category: 'Gentle foundation skills',
    image: IMAGES.heroPuppy,
    alt: 'Golden retriever puppy sitting happily on a natural linen blanket in a sunny meadow',
    spanClass: 'lg:col-span-6',
    aspectClass: 'aspect-[4/3]',
  },
];

export const DEFAULT_TRAINER_PROFILE: TrainerProfile = {
  name: '[Trainer Name — Editable Placeholder]',
  role: 'Lead Puppy Educator · Edmonton, Alberta',
  introduction:
    '[Editable Placeholder: Introduce your founder and lead trainer here—sharing their years guiding Edmonton families, their warmth in the studio, and what drew them to specialize in early puppy development.]',
  certifications:
    '[Editable Placeholder: List verified credentials, accredited canine behaviour certificates, fear-free memberships, and pet first-aid qualifications once confirmed by the academy.]',
  philosophy:
    '[Editable Placeholder: Describe your training philosophy—focusing on science-backed positive reinforcement, respectful communication, patience during puppyhood, and helping families build lifelong trust.]',
};

export const CLASS_DETAILS: ClassDetailsConfig = {
  durationTitle: '6 Weeks',
  durationDetail: 'One relaxed 60-minute session per week with printed take-home guides.',
  locationTitle: 'Edmonton, Alberta, Canada',
  locationDetail: 'Bright boutique indoor studio & enclosed garden space (Address placeholder).',
  classSizeTitle: '[Class Size — Editable Placeholder]',
  classSizeDetail: 'Small, thoughtfully curated cohort capacity to keep every puppy calm and supported.',
  priceTitle: '[Tuition Fee — Editable Placeholder]',
  priceDetail: 'Full 6-week enrollment including starter handbook and graduation keepsake.',
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-1',
    quote:
      '“[Sample Review Placeholder] Before starting at Wag & Willow, our evenings felt chaotic with puppy nipping and restless energy. By week four, our puppy was settling peacefully on her mat while we cooked dinner and walking beside us without pulling.”',
    author: 'Sample Family Review 01',
    puppyInfo: 'Golden Retriever Puppy · 12 Weeks at Start',
    cohortLabel: 'Sample Content · Replace With Verified Client Review',
    isPlaceholder: true,
  },
  {
    id: 'review-2',
    quote:
      '“[Sample Review Placeholder] We loved how calm and thoughtful every class felt. Instead of an overwhelming room full of barking dogs, our shy pup was gently paired and encouraged—now he greets friends and neighbours with relaxed tail wags.”',
    author: 'Sample Family Review 02',
    puppyInfo: 'Cavapoo Puppy · 10 Weeks at Start',
    cohortLabel: 'Sample Content · Replace With Verified Client Review',
    isPlaceholder: true,
  },
  {
    id: 'review-3',
    quote:
      '“[Sample Review Placeholder] As first-time dog owners in Edmonton, we needed clear guidance just as much as our puppy did. Every week gave us two or three simple, doable habits that genuinely changed our daily walks.”',
    author: 'Sample Family Review 03',
    puppyInfo: 'Australian Shepherd Mix · 14 Weeks at Start',
    cohortLabel: 'Sample Content · Replace With Verified Client Review',
    isPlaceholder: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-age',
    question: 'What age should my puppy be?',
    answer:
      'Our six-week puppy academy is tailored for young puppies aged roughly 8 to 18 weeks at the start of the cohort—right inside their prime socialisation and curiosity window. If your pup is slightly older, reach out via the registration note so we can advise on the best fit.',
  },
  {
    id: 'faq-experience',
    question: 'Do I need previous training experience?',
    answer:
      'Not at all! Most of our families are welcoming their very first puppy, or raising a puppy for the first time in years. Every session breaks techniques down into warm, plain-language steps you can practise comfortably at home.',
  },
  {
    id: 'faq-bring',
    question: 'What should I bring?',
    answer:
      'Please bring a flat collar or comfortable Y-front harness, a standard 4-to-6 foot leash (no retractable leads, please), plenty of pea-sized soft treats your puppy loves, a small cozy mat or towel from home, and your puppy’s favourite quiet chew.',
  },
  {
    id: 'faq-vaccinations',
    question: 'Are vaccinations required?',
    answer:
      'Yes. Puppies must have started their age-appropriate veterinary puppy vaccination series (at least their first set received 7+ days prior to Week 01) and be cleared as healthy by your veterinarian. Our studio floors are sanitized thoroughly before every cohort.',
  },
  {
    id: 'faq-miss',
    question: 'What if I miss a class?',
    answer:
      'Life with a young puppy happens! If you need to miss a week, let us know ahead of time and we will send over the week’s illustrated handout, step-by-step practice notes, and a quick recap at the start of your next session so you never feel behind.',
  },
  {
    id: 'faq-size',
    question: 'How many puppies attend?',
    answer:
      'We intentionally keep cohorts intimate—typically capped at a small handful of puppies per class—so shy pups never feel overwhelmed, owners receive personal feedback, and the room remains calm, safe, and welcoming.',
  },
];
