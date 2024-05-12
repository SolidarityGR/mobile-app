import fs from 'fs';
import importSync from 'import-sync';

export const routes = async () => {
  const dir = process.cwd() + '/src/routes';

  const paths = fs.readdirSync(dir, { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name);

  paths.forEach(filePath => {
    const fileNameSegments = filePath.split('.');
    const routeName = fileNameSegments[0];

    if (routeName !== 'index') {
      const test = importSync(`./${filePath}`);
      console.log('Imported module is:', test);
    }
  });
};