// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 1; i <= commands.length; i++) {
    c += commands[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'summary' - short summary.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  return `Hey I just met you, and this is crazy, so how about NO?`;
};

export const theme = async (args: string[]): Promise<string> => {
  const root = document.documentElement;
  if (args[0] === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    return 'Switched to dark mode.';
  } else if (args[0] === 'light') {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    return 'Switched to light mode.';
  } else {
    root.classList.toggle('dark');
    const current = root.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', current);
    return `Switched to ${current} mode. Usage: theme [dark|light]`;
  }
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

export const now = async (args: string[]): Promise<string> => {
  return `
 NOW
-----------
 Building:  Chalk v1 — iOS pool scoring app (live on App Store)
 Next:      Atlas — slow-travel mapping
 Always:    Tinkering with side projects at tsaur.com

 Updated:   May 2025
`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `total 48
  drwxr-xr-x  12 visitor  staff   384 May 15 12:00 .
  drwxr-xr-x@ 28 visitor  staff   896 May 15 11:30 ..
  drwxr-xr-x   4 visitor  staff   128 May 15 10:21 .github
  -rw-r--r--   1 visitor  staff  2048 May 10 09:12 README.md
  drwxr-xr-x   8 visitor  staff   256 May 14 16:30 chalk
  drwxr-xr-x   6 visitor  staff   192 Apr 28 14:15 atlas
  drwxr-xr-x   4 visitor  staff   128 Mar 12 11:00 loop
  drwxr-xr-x   3 visitor  staff    96 Feb 20 09:45 garden
  -rw-r--r--   1 visitor  staff  1024 May 15 12:00 package.json
  drwxr-xr-x   6 visitor  staff   192 May 13 15:22 src`;
};

export const mkdir = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
but here is a cat instead: <u><a class="text-light-blue dark:text-dark-blue underline" href="https://cataas.com/cat" target="_blank">🐈</a></u>`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const preferences = async (args?: string[]): Promise<string> => {
  const things = [
    '- Swift & TypeScript for programming.',
    '- Xcode & Cursor for development.',
    '- Arc for browsing.',
    '- Ghostty for terminal, with zsh.',
    '- Kagi for search.',
    '- ProtonMail for email.',
    '- macOS for OS.',
  ];
  var c = '';
  for (let i = 1; i <= things.length; i++) {
    c += things[i - 1] + '\n';
  }
  return `I prefer:\n${c}\n`
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: with no power comes... no responsibility `;
};

// Banner
export const banner = (args?: string[]): string => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  if (isMobile) {
    return `
 ╦╦ ╦╔╗╔╔═╗╦╔╦╗
 ║║ ║║║║╠═╣║ ║║
╚╝╚═╝╝╚╝╩ ╩╩═╩╝
 ╔╗╔╔═╗╔═╗╦╦═╗
 ║║║╠═╣╚═╗║╠╦╝
 ╝╚╝╩ ╩╚═╝╩╩╚═

Type 'help' to see the list of available commands.
Type 'summary' to display summary.
`;
  }

  return `<div style="overflow-x:auto">
      █████                                  ███      █████    ██████   █████                    ███           
     ░░███                                  ░░░      ░░███    ░░██████ ░░███                    ░░░            
      ░███  █████ ████ ████████    ██████   ████   ███████     ░███░███ ░███   ██████    █████  ████  ████████ 
      ░███ ░░███ ░███ ░░███░░███  ░░░░░███ ░░███  ███░░███     ░███░░███░███  ░░░░░███  ███░░  ░░███ ░░███░░███
      ░███  ░███ ░███  ░███ ░███   ███████  ░███ ░███ ░███     ░███ ░░██████   ███████ ░░█████  ░███  ░███ ░░░ 
███   ░███  ░███ ░███  ░███ ░███  ███░░███  ░███ ░███ ░███     ░███  ░░█████  ███░░███  ░░░░███ ░███  ░███     
░░████████   ░░████████ ████ █████░░████████ █████░░████████    █████  ░░█████░░████████ ██████  █████ █████    
░░░░░░░░     ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░░░ ░░░░░  ░░░░░░░░    ░░░░░    ░░░░░  ░░░░░░░░ ░░░░░░  ░░░░░ ░░░░░     
</div>
Type 'help' to see the list of available commands.
Type 'summary' to display summary.
`;
};
