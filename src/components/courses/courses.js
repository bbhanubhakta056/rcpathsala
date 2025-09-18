import html5 from '../../assets/courses/html5.jpg';
import css_sm from '../../assets/courses/css-sm.jpg';

export const basicCourse = {
  title: "Basic Web Development Course",
  tagline: "Learn HTML, CSS, and JavaScript to build modern responsive websites.",
  fee: "Rs. 15,000",
  duration: "2 Months",
  sections: [
    {
      id: "html",
      title: "HTML – Structure of the Web",
      desc: "Learn the building blocks of web: structured documents, links, images, and semantic elements.",
      outcomes: [
        "Understand HTML structure",
        "Work with forms and tables",
        "Create semantic, accessible markup"
      ],
      image: html5
    },
    {
      id: "css",
      title: "CSS – Styling the Web",
      desc: "Learn modern styling, layouts, animations, and responsive design.",
      outcomes: [
        "Use Flexbox & Grid layouts",
        "Style components with modern CSS",
        "Build responsive websites"
      ],
      gallery: [
        css_sm,
        "https://images.unsplash.com/photo-1522202222404-54134eab0f07?q=80&w=800",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
      ]
    },
    {
      id: "javascript",
      title: "JavaScript – Interactivity",
      desc: "Learn programming basics, manipulate DOM, handle events, and create dynamic applications.",
      outcomes: [
        "Variables, loops, functions",
        "DOM manipulation & events",
        "Build simple web apps"
      ],
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=800"
    }
  ]
}

export const advancedCourse = {
  title: "Advanced Web Development Course",
  tagline: "Master modern frameworks, backend, and databases with hands-on projects.",
  fee: "Rs. 30,000",
  duration: "3 Months",
  sections: [
    {
      id: "react",
      title: "React.js – Modern Frontend",
      desc: "Learn React components, hooks, and state management to build scalable SPAs.",
      outcomes: [
        "Build component-driven UIs",
        "Use hooks and context API",
        "Integrate APIs into apps"
      ],
      image: "https://images.unsplash.com/photo-1581276879432-15a19d654956?q=80&w=800"
    },
    {
      id: "vue",
      title: "Vue.js – Progressive Framework",
      desc: "Work with Vue components, reactivity, Vue Router, and state management.",
      outcomes: [
        "Build Vue apps with components",
        "Use Vue Router for navigation",
        "Manage state with Pinia/Vuex"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
    },
    {
      id: "node",
      title: "Node.js & Backend",
      desc: "Learn backend development with Node.js and Express, build APIs and server-side apps.",
      outcomes: [
        "Build RESTful APIs",
        "Work with authentication & middleware",
        "Connect frontend with backend"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
    },
    {
      id: "database",
      title: "Databases – SQL & NoSQL",
      desc: "Understand relational (MySQL, MSSQL) and NoSQL (MongoDB) databases for modern apps.",
      outcomes: [
        "Design database schemas",
        "Write SQL queries",
        "Integrate MongoDB with Node.js"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=800",
        "https://images.unsplash.com/photo-1581092921461-5efc0399f1b4?q=80&w=800"
      ]
    }
  ]
}
