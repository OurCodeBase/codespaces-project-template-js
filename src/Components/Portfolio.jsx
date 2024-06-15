/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk-workspace.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "code-editor",
    description:
      "A code editor built on top of neovim combines the powerful, customizable, and efficient core of neovim with a modern, user-friendly interface and advanced features.",
    url: "https://github.com/OurCodeBase/code-editor",
  },
  {
    title: "bash-sdk",
    description:
      "A bash library to create standalone scripts.",
    url: "https://github.com/OurCodeBase/bash-sdk",
  },
  {
    title: "bashsdk-docs",
    description:
      "bashsdk-docs (docs for bash-sdk) is hosted on gitlab using CI/CD Server and built using VitePress and markdown.",
    url: "https://gitlab.com/OurCodeBase/bashsdk-docs",
  },
  {
    title: "friendly-snippets",
    description:
      "Contribute in the best set of snippets available for neovim.",
    url: "https://github.com/OurCodeBase/friendly-snippets",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
