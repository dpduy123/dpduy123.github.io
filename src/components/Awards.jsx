const Awards = () => {
  const awards = [
    {
      title: 'Top 4 Advanced Information System Contest 2025',
      icon: '🏆',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Qualified to Final Round HCMC AI Challenge 2025',
      icon: '🤖',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Third Prize PicoCTF 2024 (Cryptography)',
      icon: '🔐',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Third Prize, The 2024 ICPC Vietnam National Programming Contest',
      icon: '💻',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Expert title on Codeforces (1618 Rating)',
      description: 'Codeforces is the largest competitive programming website with 150k+ active users',
      icon: '⭐',
      color: 'from-cyan-500 to-blue-600',
      link: 'https://codeforces.com/profile/khongphaidpduy',
    },
  ];

  return (
    <section id="awards" className="bg-slate-800/50">
      <div className="section-container">
        <h2 className="section-title">
          Awards & <span className="text-blue-400">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="card group relative overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {award.title}
                </h3>
                {award.description && (
                  <p className="text-gray-400 text-sm mb-3">{award.description}</p>
                )}
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    View Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">3.2</div>
            <div className="text-gray-400">GPA / 4.0</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1618</div>
            <div className="text-gray-400">Codeforces Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-gray-400">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
