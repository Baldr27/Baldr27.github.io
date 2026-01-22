// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-gash-dataset-y-gather",
          title: 'GASH Dataset y GATHER',
          description: "Tesis/Proyecto de Graduación - Generación de datasets de vulnerabilidades",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_gash_gather/";
            },},{id: "projects-bikingo",
          title: 'bikinGO',
          description: "Proyecto de Universidad - App de trazado de rutas para ciclistas",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_bikingo/";
            },},{id: "projects-gravat",
          title: 'Gravat',
          description: "Desarrollador Front-End Web",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_gravat/";
            },},{id: "projects-grupo-giecid",
          title: 'Grupo GIECID',
          description: "Desarrollo Web para grupo de investigación",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_giecid/";
            },},{id: "projects-redopa",
          title: 'redOPA',
          description: "Práctica 1 - Chatbot en WordPress",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_redopa/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
