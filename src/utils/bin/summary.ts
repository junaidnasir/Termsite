import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  if (isMobile) {
    return `
summary:
-----------
 ABOUT

 ${config.name}
ﰩ ${config.ps1_hostname} 
爵 London, UK
-----------
 CONTACT 

 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin/${config.social.linkedin}</a></u>
`;
  }

  return `<div style="overflow-x:auto">                                                  
             @@@@@@@@@@@@@                   summary:
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@         
  @@                               @@        ${config.name}
 @@                         @@@     @@      ﰩ ${config.ps1_hostname} 
@@        @@@                        @@     爵 London, UK
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       
  @@           @@        @@        @@        <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
   @@             @@@@@@          @@
     @@@                        @@@         -----------
        @@@                  @@@ @@         
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         
</div>
`;
};

export default summary;
