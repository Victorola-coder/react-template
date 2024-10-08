const image = "https://linktoopengraphimaage.cdn";
const creator = "Victorola";
const author = creator;

export const url = (slug?: string) => {
  return `https://linktowebsite.com/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "React Template | Set up projects faster -  Just clone it",
    description: "Yay",
  },
  aboutUsPage: {
    image,
    author,
    creator,
    url: url("about"),
    title: "About | Mission | Vision | Achievements",
    description: "description to about us page",
  },
  // add more pages
};
