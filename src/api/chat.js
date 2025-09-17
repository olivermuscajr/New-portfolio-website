// This would typically be a server-side API route
// For now, we'll create a client-side implementation

const GEMINI_API_KEY = 'AIzaSyANeai22Sik0qrDvytK43NNzNFYZCSALs0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Oliver's portfolio information for context
const PORTFOLIO_CONTEXT = `
You are Oliver Musca Jr.'s AI assistant. Here's information about Oliver:

**Personal Information:**
- Name: Oliver Musca Jr.
- Role: Aspiring Junior Web Developer
- Location: Available upon request
- Email: Available through contact form

**Experience & Skills:**
- Frontend Development: React, JavaScript, HTML, CSS, TailwindCSS
- Backend Development: Node.js, Express
- Database: MongoDB, PostgreSQL
- Tools: Git, Vite, Framer Motion
- Currently learning: Full-stack development, advanced React patterns

**Projects:**
- Portfolio Website: Modern, responsive React portfolio with dark/light theme
- E-Commerce Platform: Full-stack solution with React, Node.js, MongoDB
- Task Management App: Collaborative app with real-time updates
- Weather Dashboard: Responsive weather app with interactive maps
- Social Media Dashboard: Comprehensive management tool with analytics

**Education & Learning:**
- Self-taught developer with strong foundation in web technologies
- Continuous learning through online courses and projects
- Focus on modern web development practices and user experience

**Goals:**
- Seeking junior web developer position
- Interested in full-stack development opportunities
- Passionate about creating user-centered digital experiences
- Committed to continuous learning and growth

**Personality:**
- Enthusiastic about technology and problem-solving
- Detail-oriented and committed to quality
- Collaborative and eager to learn from experienced developers
- Passionate about creating beautiful, functional web experiences

Always respond in a friendly, professional manner. If asked about something not covered in this context, politely redirect to relevant information or suggest contacting Oliver directly.
`;

export const sendMessageToGemini = async (userMessage) => {
  try {
    const response = await fetch(GEMINI_API_URL + `?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${PORTFOLIO_CONTEXT}\n\nUser Question: ${userMessage}\n\nPlease provide a helpful response about Oliver based on the context above.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};

// Fallback responses for when API is not available
export const getFallbackResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('experience') || message.includes('background')) {
    return "Oliver is an aspiring junior web developer with experience in React, JavaScript, and modern web technologies. He's passionate about creating user-centered digital experiences and is currently focused on full-stack development.";
  }
  
  if (message.includes('project') || message.includes('work')) {
    return "Oliver has worked on several projects including a modern portfolio website, an e-commerce platform, a task management app, and a weather dashboard. You can see more details in the Projects section of this website.";
  }
  
  if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
    return "Oliver's skills include React, JavaScript, HTML, CSS, TailwindCSS, Node.js, MongoDB, and Git. He's also learning advanced React patterns and full-stack development.";
  }
  
  if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return "You can contact Oliver through the contact form on this website or check the Contact section for more information. He's always interested in new opportunities and collaborations.";
  }
  
  if (message.includes('hire') || message.includes('job') || message.includes('position')) {
    return "Oliver is actively seeking junior web developer positions and is open to full-stack development opportunities. He's passionate about learning and contributing to meaningful projects.";
  }
  
  return "I'd be happy to help you learn more about Oliver! You can ask about his experience, projects, skills, or how to contact him. For more detailed information, please check the different sections of this portfolio website.";
};
