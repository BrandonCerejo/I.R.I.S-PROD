import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './event1.module.css';

const Event1 = () => {
  return (
    <>
      <div className={styles.eventPage}>
        <div className={styles.overlay}></div>
        <main className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>🚀Inter-Campus Innovation Hackathon Recap🚀</h1>
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
                <li><strong>Potential Impact:</strong> Likelihood of making a significant impact.</li>
              </ul>
            </section>

            <section className={styles.eventSignificance}>
              <h3>Significance of the Event 🌟</h3>
              <p>The hackathon was more than just a competition; it was a platform for students to showcase their innovative ideas and collaborate with industry professionals. The event highlighted the importance of <strong>inter-campus collaboration</strong> and <strong>innovation</strong> in driving forward technological advancements and solving real-world problems.</p>
            </section>

            <section className={styles.eventRegistration}>
              <h3>Stay Connected 📩</h3>
              <p>If you’re interested in participating in future events or have any questions, feel free to reach out to us!</p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Event1;
