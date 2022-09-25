interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "jejejejej hacer esto",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: " hacer esto",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      description: "jejejejej r hecho esto",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};
