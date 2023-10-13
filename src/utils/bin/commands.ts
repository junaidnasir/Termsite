// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 1; i <= commands.length; i++) {
    // if (i % 7 === 0) {
    c += commands[i - 1] + '\n';
    // } else {
    //   c += Object.keys(bin).sort()[i - 1] + ' ';
    // }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'summary' - short summary.`;
};

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  // window.open(`mailto:${config.email}`);
  // return `Opening mailto:${config.email}...`;
  return `Hey I just met you, and this is crazy, so how about NO?`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// // Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `total 48
  drwxr-xr-x  20 junaid.nasir  staff   640 Oct  6 14:19 .
  drwxr-xr-x@ 33 junaid.nasir  staff  1056 Oct 13 11:30 ..
  -rw-r--r--@  1 junaid.nasir  staff  8196 Sep 26 10:54 .DS_Store
  -rw-r--r--   1 junaid.nasir  staff    59 Oct  9 16:09 .dependencies
  -rw-r--r--   1 junaid.nasir  staff   106 Nov 10  2022 .flake8
  drwxr-xr-x   4 junaid.nasir  staff   128 Oct  5 15:21 .github
  drwxr-xr-x   6 junaid.nasir  staff   192 Aug 19  2022 .pytest_cache
  drwxr-xr-x   3 junaid.nasir  staff    96 Aug 15  2022 .vscode
  -rw-r--r--   1 junaid.nasir  staff  5024 Aug 11  2022 README.md
  drwxr-xr-x  16 junaid.nasir  staff   512 Sep 21 13:58 airflow
  drwxr-xr-x  20 junaid.nasir  staff   640 Sep 15 14:29 dbt
  drwxr-xr-x   2 junaid.nasir  staff    64 Sep 16  2022 logs`;
};

export const mkdir = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
but here is a cat instead: <u><a class="text-light-blue dark:text-dark-blue underline" href="https://cataas.com/cat" target="_blank">🐈</a></u>`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };
export const preferences = async (args?: string[]): Promise<string> => {
  const things = [
    '- Python for programming.',
    '- VSCode (with sublimetext keybindings) for development.',
    '- Firefox for browsing.',
    '- iTerm2 for terminal, with zsh and powerlevel10k theme.',
    '- Kagi as the search engine.',
    '- ProtonMail for email.',
    '- MacOS for OS.',
  ];
  var c = '';
  for (let i = 1; i <= things.length; i++) {
    c += things[i - 1] + '\n';
  }
  return `I prefer:\n${c}\n`
};

// export const prefered_ide = (args?: string[]): string => {
//   return `Prefer vscode (with sublimetext keybindings) for development.`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with no power comes... no responsibility `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
      █████                                  ███      █████    ██████   █████                    ███           
     ░░███                                  ░░░      ░░███    ░░██████ ░░███                    ░░░            
      ░███  █████ ████ ████████    ██████   ████   ███████     ░███░███ ░███   ██████    █████  ████  ████████ 
      ░███ ░░███ ░███ ░░███░░███  ░░░░░███ ░░███  ███░░███     ░███░░███░███  ░░░░░███  ███░░  ░░███ ░░███░░███
      ░███  ░███ ░███  ░███ ░███   ███████  ░███ ░███ ░███     ░███ ░░██████   ███████ ░░█████  ░███  ░███ ░░░ 
███   ░███  ░███ ░███  ░███ ░███  ███░░███  ░███ ░███ ░███     ░███  ░░█████  ███░░███  ░░░░███ ░███  ░███     
░░████████   ░░████████ ████ █████░░████████ █████░░████████    █████  ░░█████░░████████ ██████  █████ █████    
░░░░░░░░     ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░░░ ░░░░░  ░░░░░░░░    ░░░░░    ░░░░░  ░░░░░░░░ ░░░░░░  ░░░░░ ░░░░░     

Type 'help' to see the list of available commands.
Type 'summary' to display summary.
`;
  // Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
};
