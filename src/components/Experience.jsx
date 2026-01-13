const Experience = () => {
  return (
    <section id="experience" className="bg-slate-800/50">
      <div className="section-container">
        <h2 className="section-title">
          Work <span className="text-blue-400">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-600/30"></div>

            {/* Experience Item */}
            <div className="relative mb-8">
              <div className="flex flex-col md:flex-row items-start">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-900"></div>

                {/* Date - Left side on desktop */}
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  <span className="text-blue-400 font-semibold">July 2025 - Dec 2025</span>
                </div>

                {/* Content - Right side on desktop */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="card">
                    <div className="md:hidden mb-2">
                      <span className="text-blue-400 font-semibold text-sm">July 2025 - Dec 2025</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">Backend Developer</h3>
                    <h4 className="text-blue-400 font-semibold mb-4">Lumist AI</h4>

                    <p className="text-gray-400 text-sm mb-4 italic">
                      AI-powered SAT prep that adapts to your learning style. Personalized study plans,
                      gamified vocab, and real-time progress tracking.
                    </p>

                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">&#x2022;</span>
                        <span>Main developer in analytics, B2B dashboard and <strong>AI Powered Calculation</strong> feature.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">&#x2022;</span>
                        <span>Designed <strong>Lumist Score Calculator</strong> (SAT Score Predictor), predicted user's actual SAT Score based on student study habits using ML algorithms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">&#x2022;</span>
                        <span>Managed and configured <strong>Prisma</strong> and <strong>Supabase</strong> to securely store student study habit features.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">&#x2022;</span>
                        <span>Configured hook and cache to manage reusable data, reducing API calls for recalculation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">&#x2022;</span>
                        <span>Designed and implemented a <strong>multi-tenant B2B dashboard</strong> enabling organization managers to independently manage students with strict data isolation.</span>
                      </li>
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300">Prisma</span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300">Supabase</span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300">Machine Learning</span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
