const today = new Date();
const todayString = `${
  today.getMonth() + 1
}/${today.getDate()}/${today.getFullYear()}`;
export const contactData = [
  {
    id: 1,
    name: "Sean Spencer",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: todayString,
    preference: "Work From Home",
  },
  {
    id: 2,
    name: "Burton Guster",
    role: "Dev",
    skills: ["React"],
    startDate: todayString,
    preference: "Work From Home",
  },
  {
    id: 3,
    name: "Juliet O'Hara",
    role: "Dev",
    skills: ["React"],
    startDate: todayString,
    preference: "Work From Home",
  },
  {
    id: 4,
    name: "Lassie",
    role: "Dev",
    skills: ["React"],
    startDate: todayString,
    preference: "Work From Home",
  },
];
