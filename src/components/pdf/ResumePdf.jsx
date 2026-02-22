import { Document, Font, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Ubuntu",
  fonts: [
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/ubuntu@latest/latin-400-normal.woff2", fontWeight: 400 },
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/ubuntu@latest/latin-700-normal.woff2", fontWeight: 700 },
  ],
});

const colors = {
  black: "#000000",
  blue: "#3772b5",
  darkGray: "#333333",
  gray: "#555555",
  lightGray: "#888888",
  link: "#3772b5",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Ubuntu",
    fontSize: 9,
    color: colors.darkGray,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 35,
  },
  // Header
  headerName: {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: 22,
    color: colors.blue,
    marginBottom: 4,
  },
  headerLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
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
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: 13,
    color: colors.blue,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
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
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: 10,
    color: colors.black,
  },
  jobPeriod: {
    fontSize: 8.5,
    color: colors.lightGray,
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
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: 9,
    color: colors.black,
    marginBottom: 2,
  },
  skillList: {
    marginBottom: 6,
  },
  skillItem: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 4,
  },
  // Education
  eduInstitution: {
    fontFamily: "Ubuntu",
    fontWeight: 700,
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
    fontFamily: "Ubuntu",
    fontWeight: 700,
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
  const websiteDisplay = header.website.replace("https://", "");
  const githubDisplay = header.github.replace("https://", "");
  const linkedinDisplay = header.linkedin.replace("https://", "");

  return (
    <View>
      <Text style={styles.headerName}>{header.name}</Text>
      <View style={styles.headerLinks}>
        <Link src={`mailto:${header.email}`} style={styles.headerLink}>Email:{header.email}</Link>
        <Link src={header.website} style={styles.headerLink}>Portfolio:{websiteDisplay}</Link>
        <Link src={header.github} style={styles.headerLink}>Github:{githubDisplay}</Link>
        <Link src={header.linkedin} style={styles.headerLink}>LinkedIn:{linkedinDisplay}</Link>
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
        <Text style={styles.jobPeriod}>{job.period}</Text>
      </View>
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
        <ExperienceItem key={`${job.title}-${job.company}-${job.period}`} job={job} />
      ))}
    </View>
  );
}

function SkillsSection({ skills, label }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{label}</Text>
      {skills.map((group) => (
        <View key={group.category}>
          <Text style={styles.skillCategory}>{group.category}</Text>
          <View style={styles.skillList}>
            {group.items.map((item) => (
              <View style={styles.skillItem} key={item}>
                <Text style={styles.bulletDash}>-</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

function EducationSection({ education, label }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{label}</Text>
      <Text style={styles.eduInstitution}>{education.institution}</Text>
      <Text style={styles.eduPeriod}>{education.period}</Text>
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
          <Link src={project.url} style={styles.projectLink}>{project.url.replace("https://www.", "").replace("https://", "")}</Link>
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
            <SkillsSection skills={data.skills} label={labels.skills} />
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
