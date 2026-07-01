export type HouseId = "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";

export interface House {
  id: HouseId;
  name: string;
  founder: string;
  element: string;
  animal: string;
  trait: string;
  colors: [string, string];
  motto: string;
}

export const HOUSES: Record<HouseId, House> = {
  gryffindor: {
    id: "gryffindor",
    name: "Gryffindor",
    founder: "Godric Gryffindor",
    element: "Fire",
    animal: "Lion",
    trait: "Courage & Daring",
    colors: ["#ae0a12", "#e4b74b"],
    motto: "Where dwell the brave at heart.",
  },
  slytherin: {
    id: "slytherin",
    name: "Slytherin",
    founder: "Salazar Slytherin",
    element: "Water",
    animal: "Serpent",
    trait: "Ambition & Resourcefulness",
    colors: ["#1f7a4d", "#cfd3d6"],
    motto: "Those cunning folk use any means to achieve their ends.",
  },
  ravenclaw: {
    id: "ravenclaw",
    name: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    element: "Air",
    animal: "Eagle",
    trait: "Wit & Wisdom",
    colors: ["#2a5aa8", "#c79b52"],
    motto: "Wit beyond measure is man's greatest treasure.",
  },
  hufflepuff: {
    id: "hufflepuff",
    name: "Hufflepuff",
    founder: "Helga Hufflepuff",
    element: "Earth",
    animal: "Badger",
    trait: "Loyalty & Patience",
    colors: ["#e0a915", "#2a2205"],
    motto: "Those patient Hufflepuffs are true and unafraid of toil.",
  },
};

export const HOUSE_LIST: House[] = Object.values(HOUSES);

/* ------------------------------------------------------------------ */
/*  The Sorting Ceremony                                               */
/* ------------------------------------------------------------------ */
export interface SortingOption {
  label: string;
  house: HouseId;
}
export interface SortingQuestion {
  id: string;
  prompt: string;
  options: SortingOption[];
}

export const SORTING_QUESTIONS: SortingQuestion[] = [
  {
    id: "q1",
    prompt: "A locked door blocks your path. What do you reach for?",
    options: [
      { label: "My wand — Alohomora, and onward.", house: "gryffindor" },
      { label: "A clever workaround no one has tried.", house: "slytherin" },
      { label: "The forgotten tome that explains the lock.", house: "ravenclaw" },
      { label: "A friend who knows the way around.", house: "hufflepuff" },
    ],
  },
  {
    id: "q2",
    prompt: "When you ship something great, what drives you most?",
    options: [
      { label: "Proving the impossible can be done.", house: "gryffindor" },
      { label: "The advantage it earns me.", house: "slytherin" },
      { label: "Understanding exactly how it works.", house: "ravenclaw" },
      { label: "The people it helps every day.", house: "hufflepuff" },
    ],
  },
  {
    id: "q3",
    prompt: "Pick a relic to carry into the Forbidden Forest.",
    options: [
      { label: "The Sword of Gryffindor.", house: "gryffindor" },
      { label: "Salazar's silver locket.", house: "slytherin" },
      { label: "Rowena's diadem of insight.", house: "ravenclaw" },
      { label: "Helga's ever-full cup.", house: "hufflepuff" },
    ],
  },
  {
    id: "q4",
    prompt: "Your code review comes back harsh. You…",
    options: [
      { label: "Defend the bold choice, then improve it.", house: "gryffindor" },
      { label: "Turn the feedback into leverage.", house: "slytherin" },
      { label: "Dissect every note to learn from it.", house: "ravenclaw" },
      { label: "Thank them and quietly fix it all.", house: "hufflepuff" },
    ],
  },
  {
    id: "q5",
    prompt: "Which midnight best suits you?",
    options: [
      { label: "Charging toward a daring deadline.", house: "gryffindor" },
      { label: "Plotting the next ambitious move.", house: "slytherin" },
      { label: "Lost in a rabbit-hole of docs.", house: "ravenclaw" },
      { label: "Helping a teammate untangle a bug.", house: "hufflepuff" },
    ],
  },
];

export function tallySorting(answers: HouseId[]): HouseId {
  const scores: Record<HouseId, number> = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
  };
  for (const a of answers) scores[a] += 1;
  return (Object.keys(scores) as HouseId[]).reduce((best, h) =>
    scores[h] > scores[best] ? h : best
  );
}
