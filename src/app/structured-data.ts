export const generateStructuredData = () => {
  const baseUrl = "https://suthakaranburaj.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Suthakar Anburaj",
        url: baseUrl,
        image: `${baseUrl}/logo.png`,
        jobTitle: "Full Stack Developer",
        description:
          "I'm always the first to take on complex and unique problems, driven by a mindset that thrives on challenge and innovation.",
        email: "mailto:suthakaranburaj03@gmail.com",
        telephone: "+91-1234567890",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
        sameAs: [
          "https://github.com/suthakaranburaj",
          "https://www.linkedin.com/in/suthakar-anburaj-7bb816290/",
          "https://instagram.com/suthakaranburaj",
        ],
        knowsAbout: [
          "Full Stack Development",
          "React.js",
          "Next.js",
          "Node.js",
          "JavaScript",
          "TypeScript",
          "Web Development",
          "Software Engineering",
          "Mobile Development",
          "UI/UX Design",
        ],
        alumniOf: {
          "@type": "Organization",
          name: "University of Mumbai", // Replace with actual university
        },
        worksFor: {
          "@type": "Organization",
          name: "", // Update if employed
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Suthakar Anburaj Portfolio",
        description: "Full Stack Developer and Software Engineer Portfolio",
        author: {
          "@id": `${baseUrl}/#person`,
        },
        publisher: {
          "@id": `${baseUrl}/#person`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        mainEntity: {
          "@id": `${baseUrl}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Suthakar Anburaj - Full Stack Developer Portfolio",
        description:
          "Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        author: {
          "@id": `${baseUrl}/#person`,
        },
        primaryImageOfPage: `${baseUrl}/logo.png`,
        // Updated breadcrumb for hash navigation
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl,
            },
          ],
        },
        // IMPORTANT: Add hasPart for hash-based sections
        hasPart: [
          {
            "@type": "WebPageElement",
            "@id": `${baseUrl}/#about`,
            name: "About",
            description: "About Suthakar Anburaj section",
            isPartOf: `${baseUrl}/#webpage`,
          },
          {
            "@type": "WebPageElement",
            "@id": `${baseUrl}/#projects`,
            name: "Projects",
            description: "Projects portfolio section",
            isPartOf: `${baseUrl}/#webpage`,
          },
          {
            "@type": "WebPageElement",
            "@id": `${baseUrl}/#experience`,
            name: "Experience",
            description: "Work experience section",
            isPartOf: `${baseUrl}/#webpage`,
          },
          {
            "@type": "WebPageElement",
            "@id": `${baseUrl}/#blog`,
            name: "Blog",
            description: "Blog and articles section",
            isPartOf: `${baseUrl}/#webpage`,
          },
          {
            "@type": "WebPageElement",
            "@id": `${baseUrl}/#hackathon`,
            name: "Hackathons",
            description: "Hackathon projects section",
            isPartOf: `${baseUrl}/#webpage`,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Suthakar Anburaj Portfolio",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [
          "https://github.com/suthakaranburaj",
          "https://linkedin.com/in/suthakaranburaj",
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/#creativework`,
        name: "Portfolio Website",
        author: {
          "@id": `${baseUrl}/#person`,
        },
        creator: {
          "@id": `${baseUrl}/#person`,
        },
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        dateCreated: "2024",
        dateModified: new Date().toISOString().split("T")[0],
        description:
          "A comprehensive portfolio showcasing full stack development projects and skills",
        genre: "Portfolio",
        keywords:
          "Full Stack Development, React, Next.js, Node.js, JavaScript, TypeScript, Web Development",
      },
      // UPDATED: Site Navigation Elements with hash URLs
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#about-nav`,
        name: "About",
        url: `${baseUrl}/#about`,
        description:
          "Learn more about Suthakar Anburaj's background and skills",
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#projects-nav`,
        name: "Projects",
        url: `${baseUrl}/#projects`,
        description: "View portfolio projects and case studies",
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#experience-nav`,
        name: "Experience",
        url: `${baseUrl}/#experience`,
        description: "Professional experience and work history",
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#blog-nav`,
        name: "Blog",
        url: `${baseUrl}/#blog`,
        description: "Read technical articles and tutorials",
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#hackathon-nav`,
        name: "Hackathons",
        url: `${baseUrl}/#hackathon`,
        description: "Hackathon projects and achievements",
      },
    ],
  };
};
