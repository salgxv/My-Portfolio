function Resume() {
  return (
    <section className="my-5 text-center">
      <h1 className="mb-4">Resume</h1>
      <p>
        <a href="/resume.pdf" className="btn btn-outline-dark" download>
          Download My Resume
        </a>
      </p>
      <h4 className="mt-5">Proficiencies</h4>
      <ul className="list-group mx-auto" style={{ maxWidth: "1800px", textAlign: "left" }}>
        <li className="list-group-item">HTML / CSS</li>
        <li className="list-group-item">JavaScript / React</li>
        <li className="list-group-item">Node.js / Express</li>
        <li className="list-group-item">MongoDB / Mongoose</li>
        <li className="list-group-item">SQL / PostgreSQL</li>
        <li className="list-group-item">Git / GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;