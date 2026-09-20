
const currentUrl = window.location.href;
const siteUrl = "https://msouveton.github.io";
let updatedUrl = currentUrl.replace("https://msouveton.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en-us".length > 0) {
  updatedUrl = updatedUrl.replace("/en-us", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Below is a summary of my educational and professional background. You can also download my resume in PDF format.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "List of publications in which I am an author or co-author, arranged in reverse chronological order.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/projects/";
          },
        },{id: "projects-monte-carlo-radiative-calculation",
          title: 'Monte Carlo radiative calculation',
          description: "Ballistic ray tracing in fibrous media using the Monte Carlo method",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/1_project/";
            },},{id: "projects-black-hole-simulation",
          title: 'Black hole simulation',
          description: "Calculation of the distortion of an image by a Schwarzschild black hole",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/2_project/";
            },},{id: "projects-earth-curvature-calculator",
          title: 'Earth Curvature Calculator',
          description: "Online code for calculating the distance to the horizon based on the observer’s position",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/3_project/";
            },},{id: "projects-minecraft",
          title: 'Minecraft',
          description: "Implementing a copy of the game Minecraft in Python",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/4_project/";
            },},{id: "projects-chess-game",
          title: 'Chess game',
          description: "Implementation of an artificial intelligence system for chess",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/5_project/";
            },},{id: "projects-rock-climbing",
          title: 'Rock climbing',
          description: "List of key sections to practise on a crag",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/6_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/en-us//assets/pdf/prof_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%68%65.%73%6F%75%76%65%74%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/msouveton", "_blank");
        },
      },{
        id: 'social-hal',
        title: 'HAL',
        section: 'Socials',
        handler: () => {
          window.open("https://cv.hal.science/mahe-souveton", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-6072-7190", "_blank");
        },
      },{
          id: 'lang-fr',
          title: 'fr',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
