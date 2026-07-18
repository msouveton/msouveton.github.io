
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
    id: "nav-",
    title: "",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "articles",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "articles",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "actualités",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "actualités",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "actualités",},{id: "projects-calcul-radiatif-dsmc",
          title: 'Calcul radiatif DSMC',
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
          description: "Distance de l&#39;horizion en fonction de l&#39;observateur",
          section: "projets",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-page-inconnue",
          title: 'Page inconnue',
          description: "Aïe, il y a eu un problème quelque part. Il n&#39;y a rien à voir ici...",
          section: "projets",handler: () => {
              window.location.href = "/404.html";
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
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "projets",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "projets",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "projets",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "projets",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-à-propos",
          title: 'À propos',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/";
            },},{id: "projects-blog",
          title: 'Blog',
          description: "a simple whitespace theme for academics",
          section: "projets",handler: () => {
              window.location.href = "/blog/";
            },},{id: "projects-bibliothèque",
          title: 'Bibliothèque',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/books/";
            },},{id: "projects-cv",
          title: 'CV',
          description: "Vous trouverez ci-dessous un résumé de mon parcours. Une option de téléchargement de mon CV au format PDF est également disponible.",
          section: "projets",handler: () => {
              window.location.href = "/cv/";
            },},{id: "projects-menu",
          title: 'Menu',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/projects/dropdown/";
            },},{id: "projects-news",
          title: 'News',
          description: "",
          section: "projets",handler: () => {
              window.location.href = "/news/";
            },},{id: "projects-equipe",
          title: 'Equipe',
          description: "members of the lab or group",
          section: "projets",handler: () => {
              window.location.href = "/people/";
            },},{id: "projects-projets",
          title: 'Projets',
          description: "Sur cette page sont regroupés plusieurs de mes projets. Certains proviennent de mes travaux professionnels, les autres font partie de mes activités personnelles et n&#39;ont pas forcément l&#39;ambition d&#39;être très poussés. Vous retrouverez parmi ces derniers des petits calculs scientifiques mais également des projets plus ludiques.",
          section: "projets",handler: () => {
              window.location.href = "/projects/";
            },},{id: "projects-publications",
          title: 'Publications',
          description: "Liste des publications où je suis auteur ou co-auteur et classées par ordre antichronologique.",
          section: "projets",handler: () => {
              window.location.href = "/publications/";
            },},{id: "projects-dépôts",
          title: 'Dépôts',
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "projets",handler: () => {
              window.location.href = "/repositories/";
            },},{id: "projects-enseignement",
          title: 'Enseignement',
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "projets",handler: () => {
              window.location.href = "/teaching/";
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
