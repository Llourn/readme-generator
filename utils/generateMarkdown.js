// Conditionally render the table of contents by iterating through all the variables in the data object
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

// The questions section is dependant on the username and email values.
// if either of those values are not "" then the section can be rendered.
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
  if (license) {
    let spaceless = license.replace(/ /g, "%20");
    return `![${license}](https://img.shields.io/badge/license-${spaceless}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;

    case "ISC License":
      return `[${license}](https://choosealicense.com/licenses/isc/)`;

    case "MIT License":
      return `[${license}](https://choosealicense.com/licenses/mit/)`;

    case "GNU General Public License v3.0":
      return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

${renderLicenseLink(license)}`;
  } else {
    return "";
  }
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
