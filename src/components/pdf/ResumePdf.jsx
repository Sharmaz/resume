import { Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";

const colors = {
  black: "#000000",
  darkGray: "#333333",
  gray: "#555555",
  lightGray: "#888888",
  link: "#2563EB",
  sectionBorder: "#000000",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.darkGray,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 35,
  },
  // Header
  headerName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    color: colors.black,
    marginBottom: 4,
  },
  headerLinks: {
    flexDirection: "row",
    gap: 12,
    fontSize: 8.5,
    marginBottom: 16,
  },
  headerLink: {
    color: colors.gray,
  },
  // Layout
  columns: {
    flexDirection: "row",
    gap: 20,
  },
  leftColumn: {
    flex: 3,
  },
  rightColumn: {
    flex: 1.3,
  },
  // Sections
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: colors.black,
    borderBottomWidth: 1,
    borderBottomColor: colors.sectionBorder,
    paddingBottom: 2,
    marginBottom: 8,
  },
  // Experience
  jobContainer: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: colors.black,
  },
  jobPeriod: {
    fontSize: 8.5,
    color: colors.lightGray,
  },
  jobDescription: {
    fontSize: 8.5,
    color: colors.gray,
    marginBottom: 2,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 4,
  },
  bulletDash: {
    width: 8,
    color: colors.gray,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: colors.gray,
  },
  // Skills
  skillCategory: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: colors.black,
    marginBottom: 2,
  },
  skillList: {
    marginBottom: 8,
  },
  skillItem: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 4,
  },
  // Education
  eduInstitution: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: colors.black,
  },
  eduPeriod: {
    fontSize: 8.5,
    color: colors.lightGray,
    marginBottom: 1,
  },
  eduDegree: {
    fontSize: 8.5,
    color: colors.gray,
    marginBottom: 8,
  },
  // Projects
  projectContainer: {
    marginBottom: 6,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: colors.black,
  },
  projectDescription: {
    fontSize: 8.5,
    color: colors.gray,
    marginBottom: 1,
  },
  projectLink: {
    fontSize: 7.5,
    color: colors.link,
  },
  // Interests
  interestsText: {
    fontSize: 8.5,
    color: colors.gray,
  },
});

function Header({ header }) {
  return (
    <View>
      <Text style={styles.headerName}>{header.name}</Text>
      <View style={styles.headerLinks}>
        <Text style={styles.headerLink}>{header.email}</Text>
        <Link src={header.website} style={styles.headerLink}>{header.website}</Link>
        <Link src={header.github} style={styles.headerLink}>{header.github}</Link>
      </View>
    </View>
  );
}

function ExperienceItem({ job }) {
  const titleText = job.company ? `${job.title} @ ${job.company}` : job.title;
  return (
    <View style={styles.jobContainer}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{titleText}</Text>
        <Text style={styles.jobPeriod}>[{job.period}]</Text>
      </View>
      {job.description && (
        <Text style={styles.jobDescription}>{job.description}</Text>
      )}
      {job.bullets.map((bullet) => (
        <View style={styles.bullet} key={bullet}>
          <Text style={styles.bulletDash}>-</Text>
          <Text style={styles.bulletText}>{bullet}</Text>
        </View>
      ))}
    </View>
  );
}

function ExperienceSection({ experience, label }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{label}</Text>
      {experience.map((job) => (
        <ExperienceItem key={`${job.title}-${job.company}`} job={job} />
      ))}
    </View>
  );
}

function SkillsSection({ skills, labels }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{labels.skills}</Text>
      <Text style={styles.skillCategory}>{labels.primaryStack}</Text>
      <View style={styles.skillList}>
        {skills.primary.map((skill) => (
          <View style={styles.skillItem} key={skill}>
            <Text style={styles.bulletDash}>-</Text>
            <Text style={styles.bulletText}>{skill}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.skillCategory}>{labels.secondaryTools}</Text>
      <View style={styles.skillList}>
        {skills.secondary.map((skill) => (
          <View style={styles.skillItem} key={skill}>
            <Text style={styles.bulletDash}>-</Text>
            <Text style={styles.bulletText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function EducationSection({ education, label }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{label}</Text>
      <Text style={styles.eduInstitution}>{education.institution}</Text>
      <Text style={styles.eduPeriod}>[{education.period}]</Text>
      <Text style={styles.eduDegree}>{education.degree}</Text>
    </View>
  );
}

function ProjectsSection({ projects, label }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{label}</Text>
      {projects.map((project) => (
        <View style={styles.projectContainer} key={project.name}>
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
          <Link src={project.url} style={styles.projectLink}>{project.url}</Link>
        </View>
      ))}
    </View>
  );
}

function InterestsSection({ interests, label }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{label}</Text>
      <Text style={styles.interestsText}>{interests}</Text>
    </View>
  );
}

function ResumePdf({ data }) {
  const { labels } = data;
  return (
    <Document
      title={`${data.header.name} - Resume`}
      author={data.header.name}
      subject="Resume"
      keywords="developer, react, javascript, typescript, nodejs, frontend, fullstack"
    >
      <Page size="LETTER" style={styles.page}>
        <Header header={data.header} />
        <View style={styles.columns}>
          <View style={styles.leftColumn}>
            <ExperienceSection experience={data.experience} label={labels.experience} />
          </View>
          <View style={styles.rightColumn}>
            <SkillsSection skills={data.skills} labels={labels} />
            <EducationSection education={data.education} label={labels.education} />
            <ProjectsSection projects={data.projects} label={labels.projects} />
            <InterestsSection interests={data.interests} label={labels.interests} />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ResumePdf;
