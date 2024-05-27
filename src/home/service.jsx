import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaHandshake,
  FaChalkboardTeacher,
  FaTools,
  FaPenNib,
  FaShareAlt,
} from "react-icons/fa";
import Modal from "react-modal";

import Figma from "./../assets/brands/figma.png";
import Illustrator from "./../assets/brands/ai.png";
import Canva from "./../assets/brands/canva.png";
import WordPress from "./../assets/brands/wordpress.png";
import Wix from "./../assets/brands/wix.png";
import VSCode from "./../assets/brands/vscode.png";

Modal.setAppElement("#root"); // Set the app element for accessibility

const services = [
  {
    title: "Web Development",
    description:
      "I craft responsive, high-performance websites tailored to your needs.",
    icon: <FaCode />,
    details: {
      paragraph:
        "I specialize in creating robust, scalable web applications using the latest technologies and frameworks. Whether you need a simple landing page or a complex web application, I ensure it’s fast, secure, and user-friendly.",
      services: [
        "Custom website development",
        "Frontend development with React, Angular, or Vue.js",
        "Backend development with Node.js, Django, or Ruby on Rails",
        "Full-stack development",
        "E-commerce solutions",
        "CMS integration (WordPress, Joomla)",
      ],
      buttonText: "Book Service",
    },
  },
  {
    title: "Mobile App Development",
    description:
      "I build native and cross-platform mobile apps that engage users.",
    icon: <FaMobileAlt />,
    details: {
      paragraph:
        "With expertise in both native and cross-platform mobile app development, I deliver high-quality apps that provide seamless user experiences across Android and iOS devices. My apps are optimized for performance and usability.",
      services: [
        "Native Android (Java/Kotlin) and iOS (Swift) development",
        "Cross-platform development with Flutter and React Native",
        "App UI/UX design",
        "API integration",
        "App testing and deployment",
      ],
      buttonText: "Book Service",
    },
  },
  {
    title: "UI/UX Design",
    description:
      "I design intuitive interfaces for a seamless user experience.",
    icon: <FaPaintBrush />,
    details: {
      paragraph:
        "Creating visually appealing and user-friendly interfaces is my passion. I focus on understanding user needs and design aesthetics to deliver engaging and accessible UI/UX designs that enhance user satisfaction.",
      services: [
        "User interface design",
        "User experience design",
        "Wireframing and prototyping",
        "Usability testing",
        "Design for web and mobile apps",
      ],
      buttonText: "Book Service",
    },
  },
  {
    title: "Consulting and Freelancing",
    description:
      "I offer expert consulting and freelance development services.",
    icon: <FaHandshake />,
    details: {
      paragraph:
        "With extensive experience in software development, I provide consulting services to help you plan, execute, and optimize your projects. I also offer freelance development services for short-term and long-term projects.",
      services: [
        "Project consulting and planning",
        "Code review and optimization",
        "Freelance web and mobile development",
        "Technical mentorship",
        "Troubleshooting and support",
      ],
      buttonText: "Consult",
    },
  },
  {
    title: "Educational Content & Mentorship",
    description: "I provide tutorials, blogs, and classes to help you grow.",
    icon: <FaChalkboardTeacher />,
    details: {
      paragraph:
        "Passionate about education, I offer various resources to help aspiring developers. From blog posts and YouTube tutorials to online and in-person classes, I aim to make learning accessible and enjoyable.",
      services: [
        "Technical blogs and articles",
        "YouTube tutorials",
        "Online classes and webinars",
        "In-person workshops",
        "Mentorship programs",
      ],
      buttonText: "Learn More",
    },
  },
  {
    title: "Specialized Services",
    description: "I offer expertise in Wix, WordPress, Blogger, and SEO.",
    icon: <FaTools />,
    details: {
      paragraph:
        "Leveraging my extensive knowledge in specific platforms and optimization techniques, I provide tailored services for website management, development, and SEO to enhance your online presence.",
      services: [
        "Wix web development",
        "WordPress website management",
        "Blogger setup and customization",
        "SEO optimization and audits",
        "Content strategy and planning",
      ],
      buttonText: "Book Service",
    },
  },
  {
    title: "Graphic Design",
    description:
      "I create stunning graphics using Illustrator, Photoshop, and Canva.",
    icon: <FaPenNib />,
    details: {
      paragraph:
        "I deliver high-quality graphic design services, creating visually appealing graphics that effectively communicate your brand message. Using tools like Adobe Illustrator, Photoshop, and Canva, I bring your ideas to life.",
      services: [
        "Logo design",
        "Brand identity creation",
        "Marketing materials (flyers, brochures)",
        "Social media graphics",
        "Illustrations and infographics",
      ],
      buttonText: "Book Service",
    },
  },
  {
    title: "Content Creation & Social Media",
    description: "I manage and create engaging content for your brand.",
    icon: <FaShareAlt />,
    details: {
      paragraph:
        "With a focus on engaging and relevant content, I help brands build their online presence. From creating compelling posts to managing social media profiles, I ensure your message reaches and resonates with your audience.",
      services: [
        "Social media strategy development",
        "Content creation (posts, articles, videos)",
        "Social media account management",
        "Analytics and reporting",
        "Community engagement and growth",
      ],
      buttonText: "Get Started",
    },
  },
];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Adjust the interval time here (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  const skills = [
    { name: "VS Code", percentage: "86%", icon: VSCode },
    { name: "Figma", percentage: "92%", icon: Figma },
    { name: "Illustrator", percentage: "86%", icon: Illustrator },
    { name: "Canva", percentage: "98%", icon: Canva },
    { name: "Wix", percentage: "87%", icon: Wix },
    { name: "WordPress", percentage: "65%", icon: WordPress },
  ];

  return (
    <div className="service" id="services">
      <div className="service-container">
        <div className="service-content">
          <h2>Stand Out from Crowd Ignite Creativity</h2>
          <div className="services container">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => openModal(service)}
              >
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {/* <span className="btn" onClick={() => openModal(service)}>Read More</span> */}
              </div>
            ))}
          </div>
        </div>
        <div className="skills container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-percentage">{skill.percentage}</div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedService && (
          <div className="modal-content">
            <h2>{selectedService.title}</h2>
            <p>{selectedService.details.paragraph}</p>
            <ul>
              {selectedService.details.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <button>{selectedService.details.buttonText}</button>
            <button onClick={closeModal} className="close-modal">
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Service;
