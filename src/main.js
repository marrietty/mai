import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Marie Criz</h1>
    <p class="subtitle">Creative Frontend Engineer & Designer</p>
    
    <div class="contact-links">
      <a href="#" class="btn">View Portfolio</a>
      <a href="#" class="btn">Contact Me</a>
    </div>
  </header>

  <section>
    <h2>Experience</h2>
    <div class="grid">
      <div class="card">
        <h3>Senior Frontend Developer</h3>
        <p class="date">2023 - Present | Tech Innovators Inc.</p>
        <p>Leading the frontend architecture and building scalable, beautiful user interfaces using modern web technologies like React, Vue, and vanilla JS.</p>
      </div>
      <div class="card">
        <h3>UI/UX Designer</h3>
        <p class="date">2021 - 2023 | Creative Studio</p>
        <p>Designed and prototyped responsive web applications. Focused on user-centered design, accessibility, and micro-interactions.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="card">
      <h3>B.S. in Computer Science</h3>
      <p class="date">2017 - 2021 | University of Technology</p>
      <p>Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.</p>
    </div>
  </section>

  <section>
    <h2>Skills & Expertise</h2>
    <div class="card">
      <div class="skills-container">
        <span class="skill-tag">JavaScript (ES6+)</span>
        <span class="skill-tag">TypeScript</span>
        <span class="skill-tag">React & Next.js</span>
        <span class="skill-tag">Vue & Nuxt</span>
        <span class="skill-tag">HTML5 & CSS3</span>
        <span class="skill-tag">Tailwind CSS</span>
        <span class="skill-tag">Figma & UI Design</span>
        <span class="skill-tag">Git & CI/CD</span>
      </div>
    </div>
  </section>
`
