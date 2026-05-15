import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
  return `                                                  
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

`;
};

export default summary;
