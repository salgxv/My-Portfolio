function Footer() {
    return (
      <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
        <p>© {new Date().getFullYear()} Salvador Varela</p>
        <p>
          <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a> |{" "}
          <a href="https://stackoverflow.com/users/YOUR_ID" target="_blank">Stack Overflow</a>
        </p>
      </footer>
    );
  }
  
  export default Footer;