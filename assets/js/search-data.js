
const currentUrl = window.location.href;
const siteUrl = "https://msouveton.github.io";
let updatedUrl = currentUrl.replace("https://msouveton.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "À propos",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Vous trouverez ci-dessous un résumé de mon parcours. Une option de téléchargement de mon CV au format PDF est également disponible.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Liste des publications où je suis auteur ou co-auteur et classées par ordre antichronologique.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projets",
          title: "Projets",
          description: "Sur cette page sont regroupés plusieurs de mes projets. Certains proviennent de mes travaux professionnels, les autres font partie de mes activités personnelles et n&#39;ont pas forcément l&#39;ambition d&#39;être très poussés. Vous retrouverez parmi ces derniers des petits calculs scientifiques mais également des projets plus ludiques.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-calcul-radiatif-monte-carlo",
          title: 'Calcul radiatif Monte Carlo',
          description: "Tirs balistiques de rayons en milieu fibreux par méthode Monte Carlo",
          section: "projets",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-simulation-de-trou-noir",
          title: 'Simulation de trou noir',
          description: "Calcul de la distorsion d&#39;une image par un trou noir de Schwarzschild",
          section: "projets",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-calculateur-de-courbure-terrestre",
          title: 'Calculateur de courbure terrestre',
          description: "Code en ligne pour la distance de l&#39;horizion en fonction de l&#39;observateur",
          section: "projets",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-minecraft",
          title: 'Minecraft',
          description: "Implémentation d&#39;une copie du jeu Minecraft en Python",
          section: "projets",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-jeu-d-39-échecs",
          title: 'Jeu d&amp;#39;échecs',
          description: "Implémentaiton d&#39;une intelligence artificielle d&#39;échecs",
          section: "projets",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-escalade-en-falaise",
          title: 'Escalade en falaise',
          description: "Liste de passages clés à travailler en falaise",
          section: "projets",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("/assets/pdf/fr//assets/pdf/prof_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%6D%61%68%65.%73%6F%75%76%65%74%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/msouveton", "_blank");
        },
      },{
        id: 'social-hal',
        title: 'HAL',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://cv.hal.science/mahe-souveton", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0009-0006-6072-7190", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'langues',
          handler: () => {
            window.location.href = "/en-us" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
