function Header({ header }) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold text-[#3772b5]">{header.name}</h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 text-sm text-gray-500 mt-1 w-fit">
        <span>Email:<a href={`mailto:${header.email}`} className="text-[#3772b5] hover:underline ml-0.5">{header.email}</a></span>
        <span>Portfolio:<a href={header.website} className="text-[#3772b5] hover:underline ml-0.5">{header.website}</a></span>
        <span>Github:<a href={header.github} className="text-[#3772b5] hover:underline ml-0.5">{header.github}</a></span>
        <span>LinkedIn:<a href={header.linkedin} className="text-[#3772b5] hover:underline ml-0.5">{header.linkedin}</a></span>
      </div>
    </div>
  );
}

function ExperienceItem({ job }) {
  const titleText = job.company ? `${job.title} @ ${job.company}` : job.title;
  return (
    <div className="mb-2">
      <div className="flex justify-between items-baseline">
        <h3 className="font-bold text-black text-sm">{titleText}</h3>
        <span className="text-sm text-gray-400 shrink-0 ml-2">{job.period}</span>
      </div>
      {job.bullets.length > 0 && (
        <ul className="mt-1 space-y-1 pl-2">
          {job.bullets.map((bullet) => (
            <li key={bullet} className="text-[12.5px] text-gray-500 flex gap-1">
              <span className="shrink-0">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-lg font-bold text-[#3772b5] border-b border-[#3772b5] pb-0.5 mb-2">
      {children}
    </h2>
  );
}

function SkillsSection({ skills, label }) {
  return (
    <div>
      <SectionHeading>{label}</SectionHeading>
      {skills.map((group) => (
        <div key={group.category} className="mb-1">
          <p className="font-bold text-sm text-black mb-0.5">{group.category}</p>
          <ul className="pl-2">
            {group.items.map((item) => (
              <li key={item} className="text-xs text-gray-500">- {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function EducationSection({ education, label }) {
  return (
    <div>
      <SectionHeading>{label}</SectionHeading>
      <p className="font-bold text-sm text-black">{education.institution}</p>
      <p className="text-xs text-gray-400">{education.period}</p>
      <p className="text-xs text-gray-500 mb-1">{education.degree}</p>
    </div>
  );
}

function ProjectsSection({ projects, label }) {
  return (
    <div>
      <SectionHeading>{label}</SectionHeading>
      {projects.map((project) => (
        <div key={project.name} className="mb-1">
          <p className="font-bold text-sm text-black">{project.name}</p>
          <p className="text-xs text-gray-500">{project.description}</p>
          <a href={project.url} className="text-xs text-[#3772b5] hover:underline">
            {project.url.replace("https://www.", "").replace("https://", "")}
          </a>
        </div>
      ))}
    </div>
  );
}

function InterestsSection({ interests, label }) {
  return (
    <div>
      <SectionHeading>{label}</SectionHeading>
      <p className="text-xs text-gray-500">{interests}</p>
    </div>
  );
}

function ResumeWeb({ data }) {
  const { labels } = data;
  return (
    <div className="max-w-[850px] mx-auto bg-white p-8 shadow-lg font-ubuntu">
      <Header header={data.header} />
      <div className="flex gap-6">
        <div className="flex-[3]">
          <SectionHeading>{labels.experience}</SectionHeading>
          {data.experience.map((job) => (
            <ExperienceItem key={`${job.title}-${job.company}-${job.period}`} job={job} />
          ))}
        </div>
        <div className="flex-[1.3]">
          <SkillsSection skills={data.skills} label={labels.skills} />
          <EducationSection education={data.education} label={labels.education} />
          <ProjectsSection projects={data.projects} label={labels.projects} />
          <InterestsSection interests={data.interests} label={labels.interests} />
        </div>
      </div>
    </div>
  );
}

export default ResumeWeb;
