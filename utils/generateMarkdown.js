function renderTableOfContents(data) {
  let toc = `## Table of contents
`;
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      if (key !== "title") {
        if (element) {
          if (key === "email" || key === "username") {
            if (!toc.includes("- [questions](#questions)")) {
              toc += `- [questions](#questions)
`;
            }
          } else {
            toc += `- [${key}](#${key})
`;
          }
        }
      }
    }
  }
  return toc;
}

function renderQuestionsSection(username, email) {
  const userlink = username
    ? `[Github Profile](https://github.com/${username})

`
    : "";
  const emailText = email
    ? `If you have any questions you can reach me at [${email}](mailto:${email})`
    : "";
  let questionSectionText = "";
  if (userlink || emailText) {
    questionSectionText += `## Questions
`;
  }
  if (userlink) {
    questionSectionText += userlink;
  }
  if (emailText) {
    questionSectionText += emailText;
  }

  return questionSectionText;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `BADGE ${license}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `LINK ${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title ? `# ${data.title}` : ""}

${renderLicenseBadge(data.license)}

${
  data.description
    ? `## Description

${data.description}`
    : ""
}

${renderTableOfContents(data)}

${
  data.installation
    ? `## Installation

${data.installation}`
    : ""
}

${
  data.usage
    ? `## Usage

${data.usage}`
    : ""
}

${
  data.contributing
    ? `## Contributing

${data.contributing}`
    : ""
}

${
  data.test
    ? `## Test

${data.test}`
    : ""
}

${renderLicenseSection(data.license)}

${renderQuestionsSection(data.username, data.email)}

`;
}

module.exports = generateMarkdown;
