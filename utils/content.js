const prompts = require('./prompts');

const content = (answers) => {
    let licenseResp = answers.license;
    let license;
    let badge;

    switch(licenseResp){
        case 'a':
            license = 'Apache License 2.0';
            badge = 'https://img.shields.io/badge/Apache--2.0-License-blue';

        case 'g':
            license = 'GNU Public License';
            badge = 'https://img.shields.io/badge/GNU-License-blue';

        case 'm':
            license = 'MIT License';
            badge = 'https://img.shields.io/badge/MIT-License-blue';

        case 'no':
            license = 'No license';
            badge = 'https://img.shields.io/badge/No-License-red';

        default:
            license = 'No license';
            badge = 'https://img.shields.io/badge/No-License-red';
    }

    return `
# ${answers.title}

![](${badge})

### Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [License](#license)

<a name="description"></a>
#### Description

${answers.description}

<a name="installation"></a>
#### Installation

${answers.installation}

<a name="usage"></a>
#### Usage

${answers.usage}

<a name="contributors"></a>
#### Contributors

${answers.contributors}

<a name="tests"></a>
#### Tests

${answers.tests}

<a name="license"></a>
#### License

${license}
    `;
  }

exports.content = content;
