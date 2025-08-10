import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "My academic and professional curriculum vitae",
};

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Northern Illinois University",
    location: "DeKalb, IL, USA",
    period: "2021 - Present",
    advisor: "Dr. Mona Rahimi",
    thesis: "Predicting future cyber attacks in software by identifying attack-defense co-evolution patterns",
    gpa: "3.975/4.0",
    summary: "Research focuses on how security vulnerabilities and their fixes co-evolve over time, particularly on the unintended reintroduction of vulnerabilities during the fixing process. By analyzing open-source software repositories, it identifies vulnerability-reintroducing patterns across semantic, syntactic, and contextual dimensions of code changes, and develops techniques to predict future vulnerabilities based on risky fix patterns. This work integrates deep learning, machine learning, large language models (LLMs), and software engineering techniques."
  },
  {
    degree: "Master of Science in Computer Science",
    institution: "Florida State University",
    location: "Tallahassee, FL, USA",
    period: "2017 - 2019",
    gpa: "3.75/4.0"
  },
  {
    degree: "Bachelor of Science (Hons) in Computer Science & Engineering",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    period: "2004 - 2009"
  }
];

const experience = [
  {
    title: "Research Aide Technical (Summer Intern)",
    organization: "Argonne National Laboratory",
    location: "Lemont, IL",
    period: "Summer 2025",
    description: "Conducting cutting-edge research in software security and vulnerability analysis. Working on large-scale analysis of cybersecurity threats and developing novel approaches for automated vulnerability detection.",
  },
  {
    title: "Graduate Research Assistant",
    organization: "Northern Illinois University - Reliable AI-enabled Software Engineering Laboratory (RAISE)",
    location: "DeKalb, IL",
    period: "2021 - Present",
    description: "Leading research projects in software security, vulnerability detection, and attack-defense co-evolution. Published papers in top-tier conferences including USENIX Security, ICSE, and ACSAC workshops.",
    supervisor: "Dr. Mona Rahimi"
  },
  {
    title: "Graduate Research Assistant",
    organization: "Florida State University - E-Crime Investigative Technologies Laboratory (ECIT)",
    location: "Tallahassee, FL",
    period: "2018 - 2019",
    description: "Conducted research in digital forensics and cybersecurity, focusing on mobile device forensics and data extraction methodologies.",
  },
  {
    title: "Software Engineer",
    organization: "BASIC Bank Limited - ICT Division",
    location: "Dhaka, Bangladesh",
    period: "2010 - 2017",
    description: "Developed and maintained banking software systems, ensuring secure financial transactions and robust system architecture.",
  }
];

const teachingExperience = [
  {
    title: "Graduate Teaching Assistant",
    organization: "Northern Illinois University",
    location: "DeKalb, IL",
    period: "2021",
    description: "Assisted in teaching computer science courses and mentoring undergraduate students."
  },
  {
    title: "Lecturer",
    organization: "Ahsanullah University of Science & Technology",
    location: "Dhaka, Bangladesh", 
    period: "2020",
    description: "Taught computer science courses and supervised student projects."
  },
  {
    title: "Graduate Teaching Assistant",
    organization: "Florida State University",
    location: "Tallahassee, FL",
    period: "2017 - 2018",
    description: "Assisted in teaching and grading for computer science courses."
  }
];

const publications = [
  {
    title: "AI-Based Software Vulnerability Detection: A Systematic Literature Review",
    authors: ["Samiha Shimmi", "Hamed Okhravi", "Mona Rahimi"],
    venue: "arXiv preprint arXiv:2506.10280",
    year: 2025,
    type: "preprint",
    arxiv: "https://arxiv.org/abs/2506.10280"
  },
  {
    title: "Enhanced Detection of Code Vulnerability with Synergy Between Data-Driven, Rule-Based, and Unsupervised Learnings",
    authors: ["Hibah Mohammed Ghouse", "Samiha Shimmi", "Mona Rahimi"],
    venue: "6th International Workshop on Engineering and Cybersecurity of Critical Systems (EnCyCriS) @ ICSE 2025",
    year: 2025,
    type: "workshop"
  },
  {
    title: "Software Vulnerability Detection Using LLM: Does Additional Information Help?",
    authors: ["Samiha Shimmi", "Yash Saini", "Mark Schaefer", "Hamed Okhravi", "Mona Rahimi"],
    venue: "Workshop on AI for Cyber Threat Intelligence (WAITI 2024) @ ACSAC 2024",
    year: 2024,
    type: "workshop"
  },
  {
    title: "VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    authors: ["Samiha Shimmi", "Ashiqur Rahman", "Mohan Gadde", "Hamed Okhravi", "Mona Rahimi"],
    venue: "33rd USENIX Security Symposium (USENIX 2024)",
    year: 2024,
    type: "conference"
  },
  {
    title: "On Association of Code Change Types and CI Build Failures in Software Repositories",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "European Journal of Information Technologies and Computer Science (Ej-Compute 2024)",
    year: 2024,
    type: "journal"
  },
  {
    title: "Software Repositories for Patternizing Attack-and-Defense Co-Evolution",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "MSR4P&S, 1st International Workshop @ ESEC/FSE 2022",
    year: 2022,
    type: "workshop"
  },
  {
    title: "Leveraging Code-Test Co-evolution Patterns for Automated Test Case Recommendation",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "3rd ACM/IEEE International Conference on Automation of Software Test (AST 2022)",
    year: 2022,
    type: "conference"
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "IEEE International Conference on Software Testing (ICST 2022)",
    year: 2022,
    type: "conference"
  },
  {
    title: "Analysis of iOS SQLite Schema Evolution for Updating Forensic Data Extraction Tools",
    authors: ["Samiha S. Shimmi", "Gokila Dorai", "Umit Karabiyik", "Sudhir Aggarwal"],
    venue: "International Symposium on Digital Forensics and Security (ISDFS 2020)",
    year: 2020,
    type: "conference"
  }
];

const talks = [
  {
    title: "From Detection to Prediction: Multi-Dimensional Embedding Similarity for Software Security",
    venue: "CS seminar series, Mathematics and Computer Science division, Argonne National Laboratory",
    location: "Lemont, IL, USA",
    year: 2025
  },
  {
    title: "Software Vulnerability Detection Using LLM: Does Additional Information Help?",
    venue: "Workshop on AI for Cyber Threat Intelligence (WAITI 2024)",
    location: "Hawaii, USA (presented online)",
    year: 2024
  },
  {
    title: "VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    venue: "33rd USENIX Security Symposium 2024",
    location: "Philadelphia, PA, USA",
    year: 2024
  },
  {
    title: "Poster: VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    venue: "Greater Chicago Area Systems Research Workshop (GCASR 2024)",
    location: "Chicago, IL, USA",
    year: 2024
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    venue: "IEEE International Conference on Software Testing (ICST 2023)",
    location: "Dublin, Ireland",
    year: 2023
  },
  {
    title: "Software Repositories for Patternizing Attack-and-Defense Co-Evolution",
    venue: "MSR4P&S, 1st International Workshop (ESEC/FSE 2022)",
    location: "Singapore (presented online)",
    year: 2022
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    venue: "IEEE International Conference on Software Testing (ICST 2022)",
    location: "Online",
    year: 2022
  },
  {
    title: "Analysis of iOS SQLite Schema Evolution for Updating Forensic Data Extraction Tools",
    venue: "International Symposium on Digital Forensics and Security (ISDFS 2020)",
    location: "Online",
    year: 2020
  }
];

const awards = [
  {
    title: "Trudy Nicholls Graduate Scholarship in Computer Science",
    organization: "Computer Science Department, Northern Illinois University",
    year: 2025
  },
  {
    title: "Smerge Family Endowment - Liberal Arts Scholarship",
    organization: "Graduate School, Northern Illinois University", 
    year: 2022
  },
  {
    title: "Travel Grant - Grad Cohort for Women",
    organization: "CRA-WP Workshop",
    year: 2018
  }
];

const service = [
  {
    role: "Program Committee Member",
    organization: "CIKM 2024 Conference (long research paper track, short research paper track)",
    year: 2024
  },
  {
    role: "Program Committee Member", 
    organization: "CIKM 2023 Conference (demo track)",
    year: 2023
  },
  {
    role: "Student Volunteer",
    organization: "2nd International Conference on AI Engineering Software Engineering for AI (CAIN)",
    year: 2023
  },
  {
    role: "Student Volunteer",
    organization: "Requirement Engineering Conference (RE)",
    year: 2022
  }
];

const skills = {
  "Programming Languages": ["Python", "Java", "C/C++", "JavaScript", "R", "SQL", "Bash"],
  "Security Tools": ["LLVM", "SonarQube", "OWASP ZAP", "Burp Suite", "Nessus", "Metasploit", "AFL++"],
  "ML/AI Frameworks": ["TensorFlow", "PyTorch", "scikit-learn", "pandas", "NumPy", "Keras"],
  "Development Tools": ["Git", "Docker", "Jenkins", "Maven", "pytest", "JUnit", "VS Code"],
  "Research Tools": ["LaTeX", "Jupyter", "R Studio", "SPSS", "Tableau", "PostgreSQL"],
  "Languages": ["English (Native)", "Spanish (Conversational)"]
};

export default function CV() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">Curriculum Vitae</h1>
        <a
          href="/cv.pdf"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{edu.degree}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>
              {edu.advisor && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Advisor:</strong> {edu.advisor}
                </p>
              )}
              {edu.thesis && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
              )}
              {edu.gpa && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>GPA:</strong> {edu.gpa}
                </p>
              )}
              {edu.summary && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <strong>Summary:</strong> {edu.summary}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Research & Professional Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{exp.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.organization}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.location}</p>
              {exp.supervisor && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Supervisor:</strong> {exp.supervisor}
                </p>
              )}
              <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Honors */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Awards & Honors
        </h2>
        <div className="space-y-3">
          {awards.map((award, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
              <div>
                <h3 className="font-medium">{award.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{award.organization}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-3 text-blue-600 dark:text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Academic & Professional Service
        </h2>
        <div className="space-y-3">
          {service.map((srv, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
              <div>
                <h3 className="font-medium">{srv.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{srv.organization}</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{srv.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h2 className="text-xl font-medium mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Email:</strong> your.email@niu.edu</p>
            <p><strong>Office:</strong> [Faraday Hall, Room Number]</p>
            <p><strong>Address:</strong> Department of Computer Science, Northern Illinois University, DeKalb, IL 60115</p>
          </div>
          <div>
            <p><strong>Phone:</strong> [Your Phone Number]</p>
            <p><strong>Website:</strong> your-academic-site.vercel.app</p>
            <p><strong>ORCID:</strong> 0000-0000-0000-0000</p>
          </div>
        </div>
      </div>
    </section>
  );
} 