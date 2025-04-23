//remember to upload an image to assets. avatar.jpg is just a placeholder

import avatar from "../assets/avatar.jpg";

function About() {
  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center">About Me</h1>
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4">
          <img
            src={avatar}
            alt="Salvador Varela"
            className="img-fluid rounded-circle border border-dark"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <p>
            Hi, I’m Salvador Varela — an aspiring full stack web developer with a passion for building clean, modern web apps. I enjoy working with the MERN stack, solving real-world problems, and creating intuitive user experiences. When I’m not coding, I'm working with industrial automation systems as an automation technician.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;