#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/MateoNiampira/starter_apps_crb.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Aplicaciones y desarrollo - Cruz Roja Colombiana Bogota \n Clonando plantilla para desarrollos en SvelteKit`)
const checkedOut = runCommand(gitCheckoutCommand)
if(!checkedOut) process.exit(-1)

console.log("Proyecto creado correctamente. Ahora si a trabajar :v")