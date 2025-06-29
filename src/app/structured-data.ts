export const generateStructuredData = () => {
  const baseUrl = 'https://suthakaranburaj.com';
  
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
        description: "I'm always the first to take on complex and unique problems, driven by a mindset that thrives on challenge and innovation.",
        email: "mailto:suthakaranburaj@gmail.com",
        telephone: "+91-1234567890",
        address: {
          "@type": "PostalAddress",
          addressCountry: "India"
        },
        sameAs: [
          "https://github.com/suthakaranburaj",
          "https://linkedin.com/in/suthakaranburaj",
          "https://twitter.com/suthakaranburaj",
          "https://instagram.com/suthakaranburaj"
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
          "UI/UX Design"
        ],
        alumniOf: {
          "@type": "Organization",
          name: "Your University Name"
        },
        worksFor: {
          "@type": "Organization",
          name: "Freelance/Contract"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Suthakar Anburaj Portfolio",
        description: "Full Stack Developer and Software Engineer Portfolio",
        author: {
          "@id": `${baseUrl}/#person`
        },
        publisher: {
          "@id": `${baseUrl}/#person`
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Suthakar Anburaj - Full Stack Developer Portfolio",
        description: "Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies.",
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${baseUrl}/#person`
        },
        author: {
          "@id": `${baseUrl}/#person`
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Suthakar Anburaj Portfolio",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [
          "https://github.com/suthakaranburaj",
          "https://linkedin.com/in/suthakaranburaj"
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/#creativework`,
        name: "Portfolio Website",
        author: {
          "@id": `${baseUrl}/#person`
        },
        creator: {
          "@id": `${baseUrl}/#person`
        },
        publisher: {
          "@id": `${baseUrl}/#organization`
        },
        dateCreated: "2024",
        dateModified: new Date().toISOString().split('T')[0],
        description: "A comprehensive portfolio showcasing full stack development projects and skills",
        genre: "Portfolio",
        keywords: "Full Stack Development, React, Next.js, Node.js, JavaScript, TypeScript, Web Development"
      }
    ]
  };
}; 