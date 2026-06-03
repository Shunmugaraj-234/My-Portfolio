import React from 'react';
import { Award, Code2, ExternalLink, Flame, Trophy } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'Leetcode',
      rating: '1538 (Max)',
      rank: '929,794',
      solved: '171 Problems',
      color: 'from-amber-500 to-orange-600',
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      link: 'https://leetcode.com/u/shunmugaraj2007/',
      details: 'Active solver with experience in arrays, string processing, hash maps, and sliding window challenges.'
    },
    {
      platform: 'Skill Rack',
      rating: '10+ Certificates',
      rank: 'Top Solver',
      solved: '900+ Problems',
      color: 'from-brand-blue to-cyan-500',
      icon: <Flame className="h-6 w-6 text-cyan-500" />,
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=514695&key=4e9d7b6a4e5f80946f5e2da0582ebef9ec7765af',
      details: 'Extensive track record solving daily tests, coding challenges, and earning certificates of excellence.'
    },
    {
      platform: 'HackerRank',
      rating: '4 Stars (C)',
      rank: 'Silver Level',
      solved: 'Problem Solver',
      color: 'from-emerald-500 to-teal-600',
      icon: <Code2 className="h-6 w-6 text-emerald-500" />,
      link: 'https://www.hackerrank.com/profile/shunmugaraj_r201',
      details: 'Focused on functional logic, syntax debugging, pointers, and structures in C/C++ programming.'
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Coding Profiles
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="glassmorphism-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Platform Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                    {profile.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${profile.color}`}>
                    {profile.platform}
                  </span>
                </div>

                {/* Rating & Stats */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {profile.solved}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
                      Problems Solved
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-2 border-y border-slate-200/50 dark:border-slate-800/50">
                    <div>
                      <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                        {profile.rating}
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                        Rating / Certificates
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                        {profile.rank}
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                        Platform Rank
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                    {profile.details}
                  </p>
                </div>
              </div>

              {/* Profile Link Action */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  {profile.platform} Account
                </span>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-xs font-bold text-brand-blue dark:text-brand-purple hover:underline"
                >
                  <span>View Profile</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Glowing decorative indicator */}
              <div className={`absolute -right-12 -bottom-12 w-28 h-28 bg-gradient-to-br ${profile.color} opacity-[0.03] blur-xl rounded-full group-hover:scale-150 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
