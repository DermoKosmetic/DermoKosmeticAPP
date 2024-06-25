const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const envConfigFile = `
  export const environment = {
    production: false,
    openaiApiKey: '${process.env.OPENAI_API_KEY}'
  };
`;

const envConfigFileProd = `
  export const environment = {
    production: true,
    openaiApiKey: '${process.env.OPENAI_API_KEY}'
  };
`;

fs.writeFile('./src/environments/environment.ts', envConfigFile, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Environment file created successfully');
});

fs.writeFile('./src/environments/environment.prod.ts', envConfigFileProd, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Prod environment file created successfully');
});
