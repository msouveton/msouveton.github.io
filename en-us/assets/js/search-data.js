
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
    id: "nav-",
    title: "",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/en-us/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/3_project/";
            },},{id: "projects-page-not-found",
          title: 'Page not found',
          description: "Looks like there has been a mistake. Nothing exists here.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/404.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/9_project/";
            },},{id: "projects-about",
          title: 'About',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/";
            },},{id: "projects-blog",
          title: 'Blog',
          description: "a simple whitespace theme for academics",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/blog/";
            },},{id: "projects-bookshelf",
          title: 'Bookshelf',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/books/";
            },},{id: "projects-cv",
          title: 'CV',
          description: "Below is a summary of my educational and professional background. You can also download my resume in PDF format.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/cv/";
            },},{id: "projects-submenus",
          title: 'Submenus',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/dropdown/";
            },},{id: "projects-news",
          title: 'News',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/news/";
            },},{id: "projects-people",
          title: 'People',
          description: "members of the lab or group",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/people/";
            },},{id: "projects-projects",
          title: 'Projects',
          description: "A growing collection of your cool projects.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/";
            },},{id: "projects-publications",
          title: 'Publications',
          description: "List of publications in which I am an author or co-author, arranged in reverse chronological order.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/publications/";
            },},{id: "projects-repositories",
          title: 'Repositories',
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/repositories/";
            },},{id: "projects-teaching",
          title: 'Teaching',
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/teaching/";
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
