#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appName = process.argv[2];

if (!appName) {
  console.log(chalk.red("Please provide your app name."));
  console.log(chalk.yellow("Example: npx create-durgesh-app my-app"));
  process.exit(1);
}

const targetDir = path.join(process.cwd(), appName);
const templateDir = path.join(__dirname, "../template");

if (fs.existsSync(targetDir)) {
  console.log(chalk.red(`Folder "${appName}" already exists.`));
  process.exit(1);
}

try {
  fs.copySync(templateDir, targetDir);

  const packageJsonPath = path.join(targetDir, "package.json");
  const packageJson = fs.readJsonSync(packageJsonPath);

  packageJson.name = appName;

  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

  console.log(chalk.green(`Project "${appName}" created successfully!`));
  console.log("");
  console.log(chalk.cyan(`cd ${appName}`));
  console.log(chalk.cyan("npm install"));
  console.log(chalk.cyan("npm run dev"));
} catch (error) {
  console.log(chalk.red("Something went wrong."));
  console.error(error);
  process.exit(1);
}