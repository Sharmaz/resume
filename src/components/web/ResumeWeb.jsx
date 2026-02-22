function Header({ header }) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-black">{header.name}</h1>
      <div className="flex gap-3 text-sm text-gray-500 mt-1">
        <span>{header.email}</span>
        <a href={header.website} className="text-blue-600 hover:underline">{header.website}</a>
        <a href={header.github} className="text-blue-600 hover:underline">{header.github}</a>
      </div>
    </div>
  );
}

function ExperienceItem({ job }) {
  const titleText = job.company ? `${job.title} @ ${job.company}` : job.title;
  return (
    <div className="mb-3">
      <div className="flex justify-between items-baseline">
        <h3 className="font-bold text-black text-sm">{titleText}</h3>
        <span className="text-xs text-gray-400 shrink-0 ml-2">[{job.period}]</span>
      </div>
      {job.description && (
        <p className="text-xs text-gray-500 mt-0.5">{job.description}</p>
      )}
      {job.bullets.length > 0 && (
        <ul className="mt-1 space-y-0.5 pl-2">
          {job.bullets.map((bullet) => (
            <li key={bullet} className="text-xs text-gray-500 flex gap-1">
              <span className="shrink-0">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillsSection({ skills, labels }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-black border-b border-black pb-0.5 mb-2">{labels.skills}</h2>
      <p className="font-bold text-sm text-black mb-1">{labels.primaryStack}</p>
      <ul className="pl-2 mb-3">
        {skills.primary.map((skill) => (
          <li key={skill} className="text-xs text-gray-500">- {skill}</li>
        ))}
      </ul>
      <p className="font-bold text-sm text-black mb-1">{labels.secondaryTools}</p>
      <ul className="pl-2 mb-3">
        {skills.secondary.map((skill) => (
          <li key={skill} className="text-xs text-gray-500">- {skill}</li>
        ))}
      </ul>
    </div>
  );
}

function EducationSection({ education, label }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-black border-b border-black pb-0.5 mb-2">{label}</h2>
      <p className="font-bold text-sm text-black">{education.institution}</p>
      <p className="text-xs text-gray-400">[{education.period}]</p>
      <p className="text-xs text-gray-500 mb-3">{education.degree}</p>
    </div>
  );
}

function ProjectsSection({ projects, label }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-black border-b border-black pb-0.5 mb-2">{label}</h2>
      {projects.map((project) => (
        <div key={project.name} className="mb-2">
          <p className="font-bold text-sm text-black">{project.name}</p>
          <p className="text-xs text-gray-500">{project.description}</p>
          <a href={project.url} className="text-xs text-blue-600 hover:underline break-all">{project.url}</a>
        </div>
      ))}
    </div>
  );
}

function InterestsSection({ interests, label }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-black border-b border-black pb-0.5 mb-2">{label}</h2>
      <p className="text-xs text-gray-500">{interests}</p>
    </div>
  );
}

function ResumeWeb({ data }) {
  const { labels } = data;
  return (
    <div className="max-w-[850px] mx-auto bg-white p-8 shadow-lg font-sans">
      <Header header={data.header} />
      <div className="flex gap-6">
        <div className="flex-[3]">
          <h2 className="text-lg font-bold text-black border-b border-black pb-0.5 mb-2">{labels.experience}</h2>
          {data.experience.map((job) => (
            <ExperienceItem key={`${job.title}-${job.company}`} job={job} />
          ))}
        </div>
        <div className="flex-[1.3]">
          <SkillsSection skills={data.skills} labels={labels} />
          <EducationSection education={data.education} label={labels.education} />
          <ProjectsSection projects={data.projects} label={labels.projects} />
          <InterestsSection interests={data.interests} label={labels.interests} />
        </div>
      </div>
    </div>
  );
}

export default ResumeWeb;
