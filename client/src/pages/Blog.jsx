import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './Blog.module.css';
import './Blog.scss';
import { supabase } from '../supabase';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [deviceId, setDeviceId] = useState(null);
  const [vote, setVote] = useState(null);
  const [voteCounts, setVoteCounts] = useState({ upvotes: 0, downvotes: 0 });

  const blogPosts = [
    {
      id: 1,
      title: 'TARZAN: Revolutionizing Autonomous Vehicle Navigation',
      subtitle: 'Advanced Pothole Detection System',
      description: 'An innovative system using computer vision to enhance autonomous vehicle control.',
      author: 'Research Team',
      date: 'November 18, 2024',
      image: '/simulation.jpg',
      content: (
        <>
          <div className='content-container'>
            <div className='content-section'>
              <h2>Introduction: The Future of Intelligent Transportation</h2>
              <p>
                In the rapidly evolving landscape of automotive technology, autonomous vehicles represent more than just a technological marvel—they are a transformative solution to transportation challenges. The I.R.I.S. club's TARZAN project emerges as a groundbreaking initiative that pushes the boundaries of what's possible in autonomous vehicle navigation, particularly in challenging road conditions.
              </p>
              <h3>The Context of Autonomous Driving</h3>
              <p>
                The journey of autonomous vehicles has been fascinating. From Google's Self-Driving Car Project in 2009 to Tesla's Autopilot in 2015, the automotive industry has witnessed exponential growth. However, most existing solutions are limited to high-end vehicles with Advanced Driver Assistance Systems (ADAS).
              </p>
              <p>
                TARZAN challenges this paradigm. Our project aims to democratize autonomous navigation technology, making it accessible to vehicles across different technological spectrums.
              </p>
            </div>
            <div className='content-section'>
              <h2>Understanding Autonomous Driving Levels</h2>
              <p>
                Before diving into TARZAN's specifics, let's understand the autonomous driving spectrum:
              </p>
              <ul>
                <li><strong>Level 0 (No Automation)</strong>: Traditional vehicles where the driver controls everything</li>
                <li><strong>Level 1 (Driver Assistance)</strong>: Basic features like adaptive cruise control</li>
                <li><strong>Level 2 (Partial Automation)</strong>: Simultaneous steering and acceleration/braking assistance</li>
                <li><strong>Level 3 (Conditional Automation)</strong>: Vehicle can manage most driving tasks, with driver ready to intervene</li>
              </ul>
            </div>
            <div className='content-section'>
              <h2>The TARZAN Approach: Intelligent Road Intelligent System</h2>
              <h3>Core Technologies</h3>
              <p>
                TARZAN integrates multiple cutting-edge technologies:
              </p>
              <ol>
                <li><strong>Computer Vision</strong>: Utilizing YOLOv8 for real-time object detection</li>
                <li><strong>Machine Learning</strong>: Adaptive algorithms for intelligent decision-making</li>
                <li><strong>Sensor Fusion</strong>: Combining multiple input streams for comprehensive environmental understanding</li>
              </ol>
            </div>
            <div className='content-section'>
              <h3>Pothole Detection Mechanism</h3>
              <p>
                The heart of TARZAN is its sophisticated pothole detection system:
              </p>
              <ul>
                <li><strong>Real-time Processing</strong>: 30 frames per second video analysis</li>
                <li><strong>Intelligent Classification</strong>: Categorizing potholes by severity</li>
                <ul>
                  <li><strong>Green</strong>: Small potholes (&lt; 15,000 pixels)</li>
                  <li><strong>Yellow</strong>: Medium potholes (15,000 - 30,000 pixels)</li>
                  <li><strong>Red</strong>: Large potholes (&gt; 30,000 pixels)</li>
                </ul>
              </ul>
              <h3>Navigation and Obstacle Avoidance</h3>
              <p>
                TARZAN employs an advanced A* pathfinding algorithm on a 30x30 grid, enabling:
              </p>
              <ul>
                <li>Dynamic route recalculation</li>
                <li>Immediate obstacle response</li>
                < li>Optimal path selection considering road surface quality</li>
              </ul>
            </div>
            <div className='content-section'>
              <h2>Performance Metrics: Proving the Concept</h2>
              <p>
                Our experimental results are compelling:
              </p>
              <ul>
                <li><strong>Path Tracking Accuracy</strong>: Less than 0.5 meters deviation</li>
                <li><strong>Obstacle Response Time</strong>: Under 200 milliseconds</li>
                <li><strong>Detection Accuracy</strong>:
                  <ul>
                    <li>Precision: 91%</li>
                    <li>Recall: 89%</li>
                  </ul>
                </li>
                <li><strong>Speed Adaptation</strong>: Seamless control between 0-60 km/h</li>
              </ul>
            </div>
            <div className='content-section'>
              <h2>Technical Deep Dive: How TARZAN Works</h2>
              <h3>Data Processing Pipeline</h3>
              <ol>
                <li><strong>Input Capture</strong>: Video stream at 30 fps</li>
                <li><strong>Frame Sampling</strong>: Process every fifth frame for efficiency</li>
                <li><strong>Pothole Detection</strong>: YOLOv8 generates bounding boxes</li>
                <li><strong>Severity Assessment</strong>: Area-based classification</li>
                <li><strong>Navigation Adjustment</strong>: Immediate path recalculation</li>
              </ol>
              <h3>Simulation Framework</h3>
              <p>
                Our Pure Pursuit Controller enables:
              </p>
              <ul>
                <li>Precise waypoint tracking</li>
                <li>Dynamic velocity management</li>
                <li>Smooth trajectory following</li>
              </ul>
            </div>
            <div className='content-section'>
              <h2>Beyond Technology: The Vision</h2>
              <p>
                TARZAN isn't just a technical project—it's a vision of making roads safer, more accessible, and intelligent. By extending autonomous capabilities to vehicles without ADAS, we're democratizing advanced transportation technology.
              </p>
            </div>
            <div className='content-section'>
              <h2>Conclusion: The Road Ahead</h2>
              <p>
                As we continue refining TARZAN, we're not just developing a system—we're shaping the future of intelligent transportation. Our project demonstrates that with creativity, advanced algorithms, and a commitment to innovation, we can transform how we navigate our world.
              </p>
              <p><strong>Stay tuned for more updates from the I.R.I.S. Research Team!</strong></p>
              <h3>Visual Insights of TARZAN's System</h3>
              <div className={styles.imageGallery}>
                <h4>MATLAB System Diagram</h4>
                <img
                  src="/systemDiagMATLAB.jpg"
                  alt="TARZAN Simulation"
                  className={styles.blogImage}
                />
                <h4>Chassis Design</h4>
                <img
                  src="/chassis.jpg"
                  alt="TARZAN Chassis"
                  className={styles.blogImage}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: 'HOW WE ALMOST LOST ALL OUR DATA OVERNIGHT',
      subtitle: 'An Analysis of the Loss of Data in the I.R.I.S. Hackathon',
      description: 'Our journey in building a platform for collaboration, hackathon management, and seamless user experience.',
      author: 'Technical Team',
      date: 'November 18, 2024',
      image: '/website_img.png',
      content: (
        <>
          <div className='content-container'>
            <div className='content-section'>
              <h2>Overview about IRIS-Website.</h2>
              <p>
                In today's dynamic and rapidly-evolving digital ecosystem, it is important for an organisation to set up their online presence, so that they can meet the growing demands of their audience and help in increasing the scale of their services. Deployment of a muscular and scalable website acts as a hub for the operations of an organisation, real-time updates about the work of the organisation, showcasing their services and a portal for communication with their customers. This helps in enhancing the user engagement, quality of services; eventually leading to the overall growth of the organisation.
                <br />
                IRIS website acts as a crucial platform for showcasing and promoting the club, engaging potential members and boosting club’s visibility on our campus. 
                <br />
                Our website serves as a hub for all our activities, events, announcements, and important details, while also talking about the past events, activities and showcasing club’s achievements. It also serves as a networking portal for connecting with the members, mentors and the alumni, while enhancing the communication through engaging podcasts. 
                <br />     
                The website also serves as a platform for all our event registrations and online payments, something which we would be discussing in depth in the upcoming sections!
              </p>
            </div>
            <div className='content-section'>
              <h2>Let’s start with the main point:</h2>
              <p>
                Now, I’m sure that you are aware about the importance of our website. 
                We will now start with some technicalities and components of our website.
                <br />
                The frontend of our website is written in a popular Javascript library, React.JS. To make the website more responsive and enhance the user experience, we have used Bootstrap, a very popular CSS framework. 
                Data storage and management is an important aspect for an organisation. Similarly, for our backend, we have used Supabase SQL, a powerful database powered by PostgresDB, as our database, for keeping the data of our users secure.
                For registrations and payments, we need a payment gateway. For this purpose, we have used Razorpay as our payment gateway API for facilitating our online payments for events such as hackathons. 
                For frontend deployment, we have used Vercel as our web hosting service and for backend deployment, we use Vercel Serverless Edge Functions.
                Also, GitHub is used for our version control and collaboration. 
                Additionally, our github repository was integrated with vercel to consistently make seamless updates to our website.
                <br />
                But, there is a quote which I read once, “In every problem lies an opportunity for growth and a lesson to be learned.” 
                <br />
                In the year of 2019, a popular American bank holding company, Capital One, faced a massive security breach, which exposed the data of over 100 million customers! But, there’s a catch here. The problem was not identified by any employee at the organisation’s security team, but rather, by one individual white hat hacker, who noticed the leaked data on GitHub! The hacker did report the problem immediately to the organisation and helped in preventing further exploitation of the vulnerability. 
                The issue was related to misconfigured AWS cloud storage permissions, that allowed unauthorised access to sensitive data. This helped Capital One to get to know about the problems related to their cloud security practices. However, the organisation did face some consequences because of the breach, leading to regulatory fines and loss in customer trust. 
                The hacker received a financial reward as a part of Capital One’s Bug Bounty Program.
                <br />
                But wait, hold on for a moment! You must be wondering why we discussed this? What has it to do with our website? 
                <br />
                This is because our website did face a similar problem a couple of months back during the initial days of our hackathon registrations. 
                <br />
                Let’s take a deep dive into the same!!
              </p>
            </div>
            <div className='content-section'>
              <h2>What caused the issue?</h2>
              <p>
                Our team created and deployed the IRIS website for registrations and payments of our upcoming event in September, the IRIS Innovation Hackathon. 
                So as discussed above, our website used Supabase SQL in the backend for storage of user data and payment details. 
                To prevent unauthorised access, Supabase SQL uses Row Level Security (RLS) features, which were initially enabled by our team. 
                RLS features in SQL allows users to control which user or roles can access specific data in a table. RLS works by filtering rows based on the execution context of the query, rather than the current user access rights. 
                However, with RLS enabled, data wasn’t being saved, so the team decided to disable it temporarily, assuming that they could bypass security for a college-level event and address the same after the registration phase. 
                And yes, you must have guessed it by now!
                This decision left our database unintentionally vulnerable, potentially allowing anyone to add, edit or delete data entries from our database!
              </p>
              <h3>How we identified the issue and our story’s white hat:</h3>
              <p>
                The technical team deployed the website and initially, everything appeared to be running smoothly. The teams were able to submit their details and complete the transactions successfully. 
                But later, while the team was reviewing the database, they noticed an empty row that didn’t align with any of our expected data entries. Uncertain about the cause, they decided to leave it as is. But now, our white hat, a college peer who identified himself as a participant in our event, reached out to our team! He specifically pointed out a critical issue which was related to our backend. He highlighted that the database was publicly accessible and vulnerable to CRUD operations, allowing anyone to make the changes due to the disabled RLS and an exposed key in the network tab. Moreover, the empty row which our team noticed while reviewing the database, was our peer’s way for testing the vulnerability. 
              </p>
              <h3>How we corrected it:</h3>
              <p>
                The actions taken by our peer exposed our technical team to the full severity of the issue, emphasising the critical security vulnerabilities in our platform. The technical team quickly created a custom RLS script to secure the database and allow only the data entries for the team details and payments. After making the changes, the team first tested the script on a dummy site, replicating the functionalities of our live environment, to avoid any kind of disruptions on our production system. Subsequently, the team confirmed with the peer whether he could access or modify the dummy database using the updated script. The response was positive, indicating that the script was successfully executed! The script was later successfully deployed to the live system. 
              </p>
              <h3>Key takeaways:</h3>
              <p>
                This experience highlighted the importance of not delaying security measures, even for seemingly minor projects. 
              </p>
            </div>
            <div className='content-section'>
              <h2>Conclusion</h2>
              <p>
                To sum it up, even a small mistake can also offer you a lot of lessons. As we read in the quote a few sections above, mistakes and problems are an opportunity for improvement and growth, which goes along pretty well with our example! The incident helped the team to emphasise more on security and building a more robust and reliable website for our users. 
                <br />
                Thanks to our peer’s timely alert, we were able to identify the vulnerability, and make the changes accordingly. 
                This also teaches us about the necessity of networking and reaching out to people who may be facing issues they are unaware of. 
                <br />
                <br />
                <span style={{textDecoration: 'underline'}}>You never know when your contributions might have a greater impact, solving problems with huge potential risks for a greater good!!</span>
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => { 
    const storedDeviceId = localStorage.getItem('deviceId');
    if (!storedDeviceId) {
      const newDeviceId = 'device-' + Math.random().toString(36).substring(2);
      localStorage.setItem('deviceId', newDeviceId);
      setDeviceId(newDeviceId);
    } else {
      setDeviceId(storedDeviceId);
    }
  }, []);

  const fetchComments = async (postId) => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data);
    }
  };

  const fetchVoteStatus = async (postId) => {
    const { data, error } = await supabase
      .from('votes')
      .select('vote_type')
      .eq('post_id', postId)
      .eq('device_id', deviceId)
      .limit(1);

    if (error) {
      console.error('Error fetching vote status:', error);
    } else {
      setVote(data.length > 0 ? data[0].vote_type : null);
    }

    const { data: upvoteData, error: upvoteError } = await supabase
      .from('votes')
      .select('*')
      .eq('post_id', postId)
      .eq('vote_type', 'upvote');

    const { data: downvoteData, error: downvoteError } = await supabase
      .from('votes')
      .select('*')
      .eq('post_id', postId)
      .eq('vote_type', 'downvote');

    if (upvoteError || downvoteError) {
      console.error('Error fetching vote counts:', upvoteError || downvoteError);
    } else {
      const upvotes = upvoteData.length;
      const downvotes = downvoteData.length;
      setVoteCounts({ upvotes, downvotes });
    }
  };

  const handleVote = async (postId, voteType) => {
    try {
      const { data: existingVote, error: fetchError } = await supabase
        .from('votes')
        .select('*')
        .eq('post_id', postId)
        .eq('device_id', deviceId)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error fetching existing vote:', fetchError);
        return;
      }

      if (existingVote) {
        if (existingVote.vote_type === voteType) {
          toast.error(`You have already ${voteType === 'upvote' ? 'upvoted' : 'downvoted'} this blog.`);
          return;
        }

        const { error: updateError } = await supabase
          .from('votes')
          .update({ vote_type: voteType })
          .eq('post_id', postId)
          .eq('device_id', deviceId);

        if (updateError) {
          console.error('Error updating vote:', updateError);
          return;
        }

        toast.success(`Your vote has been changed to ${voteType === 'upvote' ? 'Upvote' : 'Downvote'}`);
      } else {
        const { error: insertError } = await supabase
          .from('votes')
          .insert({
            post_id: postId,
            vote_type: voteType,
            device_id: deviceId,
          });

        if (insertError) {
          console.error('Error inserting vote:', insertError);
          return;
        }

        toast.success(`You have successfully ${voteType === 'upvote' ? 'upvoted' : 'downvoted'} this blog!`);
      }

      setVote(voteType);
      fetchVoteStatus(postId);
    } catch (error) {
      console.error('Unexpected error in handleVote:', error);
    }
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim() === '' || commenterName.trim() === '') {
      toast.error('Please fill in both name and comment fields!');
      return;
    }

    const { data, error } = await supabase
      .from('comments')
      .insert([{
        post_id: selectedPost.id,
        username: commenterName, 
        comment: newComment,
        device_id: deviceId,
      }]);

    if (error) {
      console.error('Error submitting comment:', error);
      toast.error('Failed to submit comment!');
    } else {
      setNewComment('');
      setCommenterName('');
      fetchComments(selectedPost.id);
      toast.success('Comment added successfully!');
    }
  };

  const openModal = (post) => {
    setSelectedPost(post);
    fetchComments(post.id);
    fetchVoteStatus(post.id); 
  };

  const closeModal = () => {
    setSelectedPost(null);
    setVote(null);
  };

  return (
    <div className={styles.blogPage}>
      <div className="container py-5">
        <h1 className={styles.pageTitle}>Our Blog</h1>
        <p className={styles.pageSubtitle}>
          I.R.I.S. recent developments and ongoing projects.
        </p>
        <div style={{ justifyContent: 'center' }} className="row py-5">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className={styles.blogCard}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.blogImage}
                />
                <div className={styles.blogContent}>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogDescription}>{post.description}</p>
                  <div className={styles.blogMeta}>
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                  <button
                    onClick={() => openModal(post)}
                    className={styles.readMoreButton}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <Modal
            isOpen={!!selectedPost}
            onRequestClose={closeModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
            ariaHideApp={false}
          >
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
              <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
              <h4 className={styles.modalSubtitle}>{selectedPost.subtitle}</h4>
              <div className={styles.modalMeta}>
                <span>By {selectedPost.author}</span> |{' '}
                <span>{selectedPost.date}</span>
              </div>
              <div className={styles.modalBreaker} />
              <div className={styles.modalText}>{selectedPost.content}</div>

              <div className={styles.voteSection}>
                <button
                  onClick={() => handleVote(selectedPost.id, 'upvote')}
                  className={`${styles.voteButton} ${vote === 'upvote' ? styles.active : ''}`}
                >
                  ▲ Upvote
                </button>
                <span className={styles.voteCount}>{voteCounts.upvotes}</span>
                <button
                  onClick={() => handleVote(selectedPost.id, 'downvote')}
                  className={`${styles.voteButton} ${vote === 'downvote' ? styles.active : ''}`}
                >
                  ▼ Downvote
                </button>
                <span className={styles.voteCount}>{voteCounts.downvotes}</span>
              </div>

              <div className={styles.commentSection}>
                <h3 className={styles.commentTitle}>Comments</h3>
                <div className={styles.commentList}>
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div key={comment.id} className={styles.comment}>
                        <p><strong>{comment.username}</strong></p>
                        <p>{comment.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p>No comments added yet.</p>
                  )}
                </div>
                
                <h5 className={styles.commentHeader}>Add your comment:</h5>
                <input
                  type="text"
                  value={commenterName}
                  onChange={(e) => setCommenterName(e.target.value)}
                  placeholder="Your Name"
                  className={styles.commentInput}
                />

                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className={styles.commentInput}
                />
                <button
                  onClick={handleCommentSubmit}
                  className={styles.commentSubmitButton}
                >
                  Submit Comment
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>

      <ToastContainer 
        position="bottom-right"
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={true}     
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Blog;