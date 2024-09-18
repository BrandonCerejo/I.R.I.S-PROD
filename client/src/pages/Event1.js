import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './event1.css';

const Event1 = () => {
  return (
    <div className={styles.eventPage}>
      <main className={styles.content + ' py-5'}>
        <div className="container">
          <h1 className={styles.title}>🚀 Inter-Campus Open Innovation Hackathon Recap 🚀</h1>
          <h2 className={styles.subtitle}>Celebrating a Journey of Creativity & Impact!</h2>

          <div className={styles.eventDetails}>
            <p><strong>Date:</strong> 16th February 2024</p>
            <p><strong>Venue:</strong> MIT-WPU Campus</p>
            <p><strong>Host:</strong> MIT-TBI in collaboration with ASPIRE, Engineer's Cradle & I.R.I.S.</p>
          </div>

          <section className={styles.eventIntro}>
            <p>The Inter-Campus Open Innovation Hackathon brought together the brightest minds from Pune campuses, fostering an environment of <strong>creativity, technology, and innovation</strong> to tackle real-world challenges.</p>
          </section>

          <section className={styles.eventJourney}>
            <h3>How It Unfolded 💡</h3>
            <p>Teams formed across universities, uniting to address impactful problems. The excitement built as the college-level selection rounds culminated in the thrilling <strong>grand finale</strong> at MIT-WPU Pune – a vibrant 12-hour hackathon!</p>
          </section>

          <section className={styles.eventHighlights}>
            <h3>Event Highlights 🌟</h3>
            <ul>
              <li>👥 <strong>Teamwork in Action:</strong> Diverse teams showcased innovative ideas in <strong>Technology</strong> and <strong>Social Impact</strong>.</li>
              <li>💼 <strong>Mentorship & Guidance:</strong> Faculty mentors and industry experts provided invaluable support, helping teams refine their ideas into <strong>viable solutions</strong>.</li>
              <li>🚀 <strong>Prototyping:</strong> Teams developed prototypes that hold the potential to shape the future!</li>
              <li>🏆 <strong>Final Presentations:</strong> The event culminated with electrifying presentations to a panel of industry leaders, celebrating the best ideas through rigorous judging.</li>
            </ul>
          </section>

          <section className={styles.eventRewards}>
            <h3>Recognizing Excellence... 💰</h3>
            <ul>
              <li>🥇 1st Prize: ₹10,000 Cash + Mentorship & Support 🚀</li>
              <li>🥈 2nd Prize: ₹6,000 Cash + Continued Guidance 💼</li>
              <li>🥉 3rd Prize: ₹4,000 Cash + Growth Opportunities 🌱</li>
            </ul>
            <p>The top 10 teams not only received certificates but also ongoing technical and research support from <strong>Engineer’s Cradle</strong> and opportunities for incubation at <strong>MIT-TBI</strong>. The potential for securing up to ₹10 Lakhs in funding for selected projects made the stakes even higher! 🤑💥</p>
          </section>

          <section className={styles.eventRules}>
            <h3>Rules & Regulations ⚖️</h3>
            <ul>
              <li><strong>Who Could Join?</strong> Any student from a participating Pune campus, across all years and branches!</li>
              <li><strong>Team Size:</strong> 1-2 students from the same or different universities.</li>
            </ul>

            <h4>Judging Criteria:</h4>
            <ul>
              <li><strong>Creativity:</strong> Originality and innovation of the idea.</li>
              <li><strong>Technical Complexity:</strong> Demonstration of strong technical skills.</li>
              <li><strong>Problem-Solving Effectiveness:</strong> Effectiveness in addressing the challenge.</li>
              <li><strong>Potential Impact:</strong> Real-world applicability and significance.</li>
            </ul>
          </section>

          <section className={styles.eventSignificance}>
            <h3>Why It Mattered 🎯</h3>
            <p>This hackathon was more than just a competition; it was about <strong>empowering the innovators of tomorrow</strong>. Students honed their problem-solving skills, connected with industry professionals, and gained the chance for incubation support to turn their innovative ideas into reality!</p>
            <p>Are you excited for the next edition? 🚀 Join us to be part of something bigger and help create the future of innovation!</p>
            <p>Checkout our <strong>Events Page</strong> to know more about upcoming or recent events!!🔥</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Event1;
