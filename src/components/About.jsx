const About = () => {
  return (
    <section id="about" className="bg-slate-800/50">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Bachelor of Computer Science</h4>
                  <p className="text-blue-400">University of Information Technology - VNUHCM</p>
                  <p className="text-gray-400 mt-2">Expected Graduation: March 2027</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="text-green-400">&#x2022;</span>
                      <span>GPA: <strong>3.2 / 4.0</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-yellow-400">&#x2022;</span>
                      <span>Student in <strong>Honor Program List</strong></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate Computer Science student with a strong foundation in
                backend development, AI engineering, and competitive programming.
              </p>
              <p>
                My experience spans from building AI-powered applications and scalable
                backend systems to achieving recognition in national programming contests.
              </p>
              <p>
                I thrive in collaborative environments and enjoy leading teams to deliver
                high-quality software solutions. I'm fluent in both Vietnamese and English.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>dpduy1230901tl@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
