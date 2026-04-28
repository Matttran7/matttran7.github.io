import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';

export const events = [
  {
    title: "Computer Science Grader",
    company: "University of Portland",
    description:
      "Evaluated Java and algorithms assignments weekly, provided code reviews, and tutored students on object-oriented programming principles, data structures, and algorithms.",
    date: "Aug 2022 - Dec 2023",
    icons: [faHashtag, faDatabase],
    type: "work",
  },
  {
    title: "Machine Learning Researcher",
    company: "University of Portland",
    description:
      "Designed and implemented adaptive behavior models using .NET (C#) and the CognitiveABM framework. " +
      "Improved runtime efficiency by ~50% and enabled scalable, repeatable experimentation via multi-node Hadoop (HDFS) integration. " +
      "Documented and presented research results to technical and non-technical audiences.",
    date: "Jun 2023 - May 2024",
    icons: [faHashtag, faPython, faDatabase],
    type: "work",
    researchLinks: [
      {
        label: "Undergraduate Research Symposium",
        path: "/research/symposium",
      },
      {
        label: "Undergraduate Founder's Day",
        path: "/research/founders-day",
      },
    ],
  },
  {
    title: "AR HoloLens Developer",
    company: "Tektronix (University of Portland Capstone)",
    description:
      "Built an AR waveform prediction tool using Unity/C# and TensorFlow (RNN, LSTM). " +
      "Backed by a MySQL database of 2.5M+ records for model assessment and data quality validation. " +
      "Showcased at the University of Portland Shiley Showcase.",
    date: "Fall 2023",
    icons: [faPython, faDatabase],
    type: "project",
  },
  {
    title: "Software Engineer",
    company: "Framatome",
    description:
      "Led full-stack development of a nuclear dose report traceability platform — a human-in-the-loop system to extract, validate, and persist " +
      "dose reporting data using Vue, TypeScript, .NET (C#), EF Core, Python, and MS SQL. " +
      "Implemented end-to-end traceability by persisting source files, extracted data, verification metadata, and reporting artifacts in a centralized MS SQL database. " +
      "Built asynchronous, message-driven services using RabbitMQ with containerized Docker deployments for scalable, fault-tolerant operation. " +
      "Designed automated pipelines for safety-critical report classification, reducing manual review by 85% and improving accuracy by 10%. " +
      "Boosted model reliability 30–50% through controlled preprocessing on datasets of 20K–60K records. " +
      "Established Azure DevOps CI/CD pipelines targeting both Azure Container instances and on-premises servers.",
    date: "Sep 2024 - Present",
    icons: [faHashtag, faPython, faDatabase],
    type: "work",
  },
  {
    title: "Multiplayer Unity Game",
    company: "Personal Project",
    description:
      "Designed join and reconnect workflows for session continuity, preventing inconsistent state during client disconnects and late joins. " +
      "Applied defensive programming to validate all critical updates against host-controlled state, blocking unauthorized client-side manipulation. " +
      "Reduced perceived lag via optimistic client-side updates with deferred server reconciliation — changes apply instantly and silently revert only on server conflict. " +
      "Accelerated debugging by building a TypeScript MCP server with targeted file read/write access, enabling Claude to autonomously trace and resolve issues across multiple game systems.",
    date: "Aug 2025 - Present",
    icons: [faHashtag],
    type: "project",
  },
];