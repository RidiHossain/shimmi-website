import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "My academic publications and research outputs",
};

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint" | "workshop";
  status?: "published" | "accepted" | "under-review" | "in-preparation";
  doi?: string;
  arxiv?: string;
  pdf?: string;
  abstract?: string;
}

const publications: Publication[] = [
  {
    title: "AI-Based Software Vulnerability Detection: A Systematic Literature Review",
    authors: ["Samiha Shimmi", "Hamed Okhravi", "Mona Rahimi"],
    venue: "arXiv preprint arXiv:2506.10280",
    year: 2025,
    type: "journal",
    status: "published",
    arxiv: "https://arxiv.org/abs/2506.10280",
    abstract: "This systematic literature review examines the current state of AI-based software vulnerability detection, analyzing recent advances and identifying key challenges in the field."
  },
  {
    title: "Enhanced Detection of Code Vulnerability with Synergy Between Data-Driven, Rule-Based, and Unsupervised Learnings",
    authors: ["Hibah Mohammed Ghouse", "Samiha Shimmi", "Mona Rahimi"],
    venue: "6th International Workshop on Engineering and Cybersecurity of Critical Systems (EnCyCriS) @ ICSE 2025",
    year: 2025,
    type: "conference",
    status: "accepted",
    abstract: "This work explores the synergy between different learning approaches to enhance code vulnerability detection capabilities."
  },
  {
    title: "Software Vulnerability Detection Using LLM: Does Additional Information Help?",
    authors: ["Samiha Shimmi", "Yash Saini", "Mark Schaefer", "Hamed Okhravi", "Mona Rahimi"],
    venue: "Workshop on AI for Cyber Threat Intelligence (WAITI 2024) @ ACSAC 2024",
    year: 2024,
    type: "conference",
    status: "published",
    abstract: "This study investigates the effectiveness of providing additional context information to large language models for software vulnerability detection tasks."
  },
  {
    title: "VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    authors: ["Samiha Shimmi", "Ashiqur Rahman", "Mohan Gadde", "Hamed Okhravi", "Mona Rahimi"],
    venue: "33rd USENIX Security Symposium (USENIX 2024)",
    year: 2024,
    type: "conference",
    status: "published",
    abstract: "VulSim introduces a novel approach to vulnerability detection by leveraging multi-dimensional neighbor embeddings to identify similar vulnerability patterns in software code."
  },
  {
    title: "On Association of Code Change Types and CI Build Failures in Software Repositories",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "European Journal of Information Technologies and Computer Science (Ej-Compute 2024)",
    year: 2024,
    type: "journal",
    status: "published",
    abstract: "This research investigates the relationship between different types of code changes and continuous integration build failures in software repositories."
  },
  {
    title: "Software Repositories for Patternizing Attack-and-Defense Co-Evolution",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "MSR4P&S, 1st International Workshop @ ESEC/FSE 2022",
    year: 2022,
    type: "conference",
    status: "published",
    abstract: "This work presents a methodology for analyzing software repositories to identify patterns in the co-evolution of attacks and defenses."
  },
  {
    title: "Leveraging Code-Test Co-evolution Patterns for Automated Test Case Recommendation",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "3rd ACM/IEEE International Conference on Automation of Software Test (AST 2022)",
    year: 2022,
    type: "conference",
    status: "published",
    abstract: "This research explores how co-evolution patterns between code and tests can be leveraged to automatically recommend relevant test cases."
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "IEEE International Conference on Software Testing (ICST 2022)",
    year: 2022,
    type: "conference",
    status: "published",
    abstract: "This study identifies patterns in how code and test suites co-evolve over time and proposes automated approaches for test suite maintenance."
  },
  {
    title: "Analysis of iOS SQLite Schema Evolution for Updating Forensic Data Extraction Tools",
    authors: ["Samiha S. Shimmi", "Gokila Dorai", "Umit Karabiyik", "Sudhir Aggarwal"],
    venue: "International Symposium on Digital Forensics and Security (ISDFS 2020)",
    year: 2020,
    type: "conference",
    status: "published",
    abstract: "This research analyzes the evolution of iOS SQLite schemas and provides insights for updating digital forensic data extraction tools."
  }
];

const presentations = [
  {
    title: "[Presentation Title]",
    venue: "[Conference/Workshop Name]",
    location: "[City, Country]",
    date: "Month 2024",
    type: "oral" as const
  },
  {
    title: "[Poster Title]",
    venue: "[Conference Name]",
    location: "[City, Country]",
    date: "Month 2024",
    type: "poster" as const
  }
];

function PublicationCard({ pub }: { pub: Publication }) {
  const statusColors = {
    "published": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    "accepted": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    "under-review": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    "in-preparation": "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">
          {pub.title}
        </h3>
        {pub.status && (
          <span className={`text-xs px-2 py-1 rounded-md whitespace-nowrap ${statusColors[pub.status]}`}>
            {pub.status.replace('-', ' ')}
          </span>
        )}
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <strong>Authors:</strong> {pub.authors.join(", ")}
      </p>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <strong>{pub.venue}</strong> ({pub.year})
      </p>
      
      {pub.abstract && (
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {pub.abstract}
        </p>
      )}
      
      <div className="flex flex-wrap gap-2">
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          >
            DOI
          </a>
        )}
        {pub.arxiv && (
          <a
            href={pub.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded-md hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
          >
            arXiv
          </a>
        )}
        {pub.pdf && (
          <a
            href={pub.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            PDF
          </a>
        )}
      </div>
    </div>
  );
}

export default function Publications() {
  const journalPubs = publications.filter(p => p.type === "journal");
  const conferencePubs = publications.filter(p => p.type === "conference");
  const preprintPubs = publications.filter(p => p.type === "preprint");
  const workshopPubs = publications.filter(p => p.type === "workshop");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Publications</h1>
      
      {journalPubs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Journal Articles</h2>
          <div className="space-y-4">
            {journalPubs.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </div>
      )}

      {conferencePubs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Conference Papers</h2>
          <div className="space-y-4">
            {conferencePubs.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </div>
      )}

      {preprintPubs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Preprints</h2>
          <div className="space-y-4">
            {preprintPubs.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </div>
      )}

      {workshopPubs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Workshop Papers</h2>
          <div className="space-y-4">
            {workshopPubs.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Presentations</h2>
        <div className="space-y-3">
          {presentations.map((pres, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {pres.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pres.venue}, {pres.location}
                  </p>
                </div>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                  <div>{pres.date}</div>
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    pres.type === 'oral' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                      : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                  }`}>
                    {pres.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
        <h2 className="text-xl font-medium mb-4">Metrics & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">[X]</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Publications</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">[Y]</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Citations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">[Z]</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">h-index</div>
          </div>
        </div>
      </div>
    </section>
  );
} 