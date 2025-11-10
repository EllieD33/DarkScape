import AdversaryA from "@assets/AdversaryA.png";
import AdversaryB from "@assets/AdversaryB.png";
import AdversaryC from "@assets/AdversaryC.png";

export const threatActors = [
  {
    name: "Actor A",
    aka: ["Alias 1", "Alias 4"],
    activeSince: "2019",
    primaryTargets: ["Some info", "Some more info"],
    attacks: [
      { victim: "Vicitm1", date: "12 Jan 2024", amount: 170000 },
      { victim: "Vicitm2", date: "12 Mar 2025", amount: 640000 },
    ],
    attackVectors: {
      latest: "VC Impersonation",
      all: ["Applescript", "Malware4", "Phishing6", "Social Eng 3"],
    },

    totalStolen: 30000000,
    description: "Some description of them generally, a bit of background",
    countries: ["USA", "CAN", "GBR"],
    image: AdversaryA,
  },
  {
    name: "Actor B",
    aka: ["Alias 1", "Alias 4", "Alias 5", "Alias 6"],
    activeSince: "2020",
    primaryTargets: ["Some info", "Some more info"],
    attacks: [
      { victim: "Vicitm10", date: "12 Jul 2021", amount: 170000 },
      { victim: "Vicitm5", date: "17 Jun 2025", amount: 640000 },
    ],
    attackVectors: {
      latest: "Malware infested Bitbucket repos",
      all: ["Phishing1", "Malware3"],
    },
    totalStolen: 240000,
    description: "Some description of them generally, a bit of background",
    countries: ["RUS", "CHN"],
    image: AdversaryB,
  },
  {
    name: "Actor C",
    aka: ["Alias 3"],
    activeSince: "2017",
    primaryTargets: ["Some info", "Some more info"],
    attacks: [
      { victim: "Vicitm12", date: "19 May 2022", amount: 170000 },
      { victim: "Vicitm3", date: "1 Nov 2025", amount: 640000 },
    ],
    attackVectors: {
      latest: "Phishing lure 4",
      all: ["SpearPhish2", "MO3", "MO9"],
    },

    totalStolen: 657700,
    description: "Some description of them generally, a bit of background",
    countries: ["USA", "MEX", "BRA"],
    image: AdversaryC,
  },
];
