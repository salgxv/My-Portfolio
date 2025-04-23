import ProjectCard from "../components/ProjectCard";
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";
// remember to import images of projects

function Portfolio() {
  const projects = [
    {
      title: "Money Map",
      // image: project1,
      github: "https://github.com/salgxv/crypto-watchlist",
      demo: "https://moneymap.netlify.app",
    },
    {
      title: "The Pizza Project",
      // image: project2,
      github: "https://github.com/salgxv/the-pizza-project",
      demo: "https://pizzaproject.netlify.app",
    },
    // add 4 more projects here in the future
  ];

  return (
    <section className="container-xl my-5 portfolio">
      <h1 className="text-center mb-4">My Work</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((project, idx) => (
          <div key={idx}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;