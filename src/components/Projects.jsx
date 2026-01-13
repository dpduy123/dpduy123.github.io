const Projects = () => {
  const projects = [
    {
      title: 'StudyMate',
      role: 'Tech Lead & Fullstack Dev',
      period: 'Sep 2025 - Dec 2025',
      description: 'AI-powered student networking platform',
      highlights: [
        'Led a team of 5 to develop platform using NextJS 15, React 19, TypeScript and Supabase',
        'Architected RESTful API with caching achieving 95% cache hit rates (5.4s to <100ms)',
        'Built real-time messaging and video chat using Pusher WebSocket and WebRTC (<50ms latency)',
        'Integrated Google Gemini 2.5 Flash API for intelligent matching algorithm',
        'Designed PostgreSQL database with 17 models and strategic indexing',
        'Set up CI/CD pipeline with Vercel for automated deployments',
      ],
      technologies: ['NextJS 15', 'React 19', 'TypeScript', 'Supabase', 'Pusher', 'WebRTC', 'Vercel'],
      github: 'https://github.com/dpduy123/StudyMateBeta',
    },
    {
      title: 'FrameSeekers',
      role: 'AI Engineer & Backend Dev',
      period: 'May 2025 - Nov 2025',
      description: 'Video event retrieval system',
      highlights: [
        'Collaborated with team of 5 to develop video event retrieval system',
        'Integrated OpenCLIP (DFN5B-CLIP-ViT-H-14-384) for 1024-dimensional embeddings',
        'Implemented query enhancement using Google Gemini API for translation',
        'Designed dual-stack search combining Milvus (semantic) with Elasticsearch (keyword)',
        'Built RESTful API with Flask for text search, image similarity, temporal search',
        'Deployed with Milvus Cloud (183K+ vectors) and Elasticsearch Cloud (367K+ documents)',
      ],
      technologies: ['Flask', 'OpenCLIP', 'Milvus', 'Elasticsearch', 'Google Gemini', 'Python'],
      github: null,
    },
    {
      title: 'Heart Disease Predictor',
      role: 'Developer',
      period: 'March 2025 - May 2025',
      description: 'ML web application for heart disease risk prediction',
      highlights: [
        'Developed Flask-based ML web app using Framingham Heart Study dataset',
        'Implemented multiple ML algorithms: Logistic Regression, SVM, Decision Tree, Random Forest',
        'Designed user-friendly interface for patient data input and real-time predictions',
        'Managed PostgreSQL database for patient data and model results storage',
        'Conducted data preprocessing, feature engineering, and model evaluation',
      ],
      technologies: ['Flask', 'Python', 'PostgreSQL', 'Scikit-learn', 'Machine Learning'],
      github: 'https://github.com/dpduy123/CS114_Project',
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card group hover:border-blue-600/50 border border-transparent"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-blue-400 font-medium">{project.role}</p>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{project.period}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-green-400 mt-1">&#x2713;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
