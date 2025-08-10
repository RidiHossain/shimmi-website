import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
          <h1 className="text-3xl lg:text-4xl font-medium text-slate-800 dark:text-slate-200">
            Hello, I'm Samiha Shimmi
          </h1>
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              I am a PhD candidate in <span className="font-semibold text-slate-700 dark:text-slate-300">Computer Science</span> at 
              <span className="font-semibold text-indigo-700 dark:text-indigo-400"> Northern Illinois University</span> (CGPA: 3.975), 
              advised by <span className="font-semibold text-slate-700 dark:text-slate-300">Dr. Mona Rahimi</span>. I will be joining 
              <span className="font-semibold text-emerald-700 dark:text-emerald-400"> Argonne National Laboratory</span> as a Research Aide in Summer 2025.
            </p>
            <p className="text-lg leading-relaxed">
              My dissertation research focuses on <span className="font-medium text-blue-700 dark:text-blue-400">predicting future cyber attacks in software</span> by 
              identifying <span className="font-medium text-indigo-700 dark:text-indigo-400">attack-defense co-evolution patterns</span>. 
              I investigate how security vulnerabilities and their fixes co-evolve over time, particularly examining the 
              <span className="font-medium text-amber-700 dark:text-amber-400"> unintended reintroduction of vulnerabilities</span> during the fixing process.
            </p>
            <p className="text-lg leading-relaxed">
              My research integrates <span className="font-medium text-emerald-700 dark:text-emerald-400">deep learning</span>, 
              <span className="font-medium text-blue-700 dark:text-blue-400">machine learning</span>, and 
              <span className="font-medium text-indigo-700 dark:text-indigo-400">large language models (LLMs)</span> with software engineering techniques 
              to enable more effective and proactive vulnerability prediction solutions. I am actively seeking 
              <span className="font-semibold text-amber-700 dark:text-amber-400">research and teaching positions</span> starting Summer 2026.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex justify-center lg:justify-center order-1 lg:order-2">
          <div className="relative">
            <a href={socialLinks.linkedin} target="_blank" className="block group">
              <Image
                src="/profile.png"
                alt="Samiha Shimmi - PhD Candidate"
                className="rounded-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-3xl border-4 border-white dark:border-slate-700 ring-2 ring-slate-200 dark:ring-slate-600 group-hover:ring-slate-300 dark:group-hover:ring-slate-500"
                unoptimized
                width={280}
                height={280}
                priority
              />
              {/* Decorative gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href={socialLinks.googleScholar}
            target="_blank"
            className="text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700"
          >
            📚 Google Scholar
          </a>
          <a
            href={socialLinks.orcid}
            target="_blank"
            className="text-sm bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-200 dark:border-emerald-800"
          >
            🆔 ORCID
          </a>
          <a
            href={socialLinks.researchGate}
            target="_blank"
            className="text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-blue-200 dark:border-blue-800"
          >
            🔬 ResearchGate
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            className="text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
          >
            💻 GitHub
          </a>
        </div>
      </section>

      {/* Research Highlight Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-slate-600 dark:bg-slate-400 rounded-full flex items-center justify-center mr-4">
              <span className="text-white dark:text-slate-900 text-lg">🔍</span>
            </div>
            <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200">Dissertation Research</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
            <strong className="text-slate-700 dark:text-slate-300">Topic:</strong> Predicting future cyber attacks in software by identifying attack-defense co-evolution patterns
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            This research analyzes vulnerability-reintroducing patterns across semantic, syntactic, and contextual dimensions 
            of code changes in open-source software repositories, developing techniques to predict future vulnerabilities 
            based on risky fix patterns.
          </p>
        </div>
        
        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-lg">🚀</span>
            </div>
            <h3 className="text-xl font-medium text-emerald-800 dark:text-emerald-300">Upcoming Research Position</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong className="text-emerald-800 dark:text-emerald-400">Argonne National Laboratory</strong> - Research Aide (Summer 2025)<br/>
            Working on cutting-edge research in software security and vulnerability analysis at one of the nation's premier research institutions.
          </p>
        </div>
      </section>
    </div>
  );
}
