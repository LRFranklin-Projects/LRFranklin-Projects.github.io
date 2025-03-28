const logIn = [
  "NiftyOS 1.0.0 LTS Nifty-Desktop tty7",
  "\n\n",
  "NiftyOS login: ",
  "Password: ",
];

const updates = [
  "Initializing LogIn MOTD...",
  "",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "NiftyOS 1.0.0 LTS (GNU/Linux 3.13.0-32-generic i686)",
  "",
  " * Documentation:  https://help.ubuntu.com/",
  "",
  "0 packages can be updated.",
  "0 updates are security updates.",
  "",
  "",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "",
];

const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");

// Disable input initially
terminalInput.disabled = true;

// Simulate typing effect
function typeText(text, callback, delay = 100) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      terminalOutput.textContent += text[index];
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      index++;
    } else {
      clearInterval(interval);
      terminalOutput.textContent += "\n";
      if (callback) callback();
    }
  }, delay);
}

// Display the login sequence
function displayLogIn() {
  let index = 0;

  function typeNextLine() {
    if (index < logIn.length) {
      terminalOutput.textContent += `${logIn[index]}`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;

      if (index === 2) {
        // Simulate typing "LRF_Projects" for the login
        typeText("LRF-Projects", () => {
          index++;
          typeNextLine();
        });
      } else if (index === 3) {
        // Simulate typing "********" for the password
        typeText("********", () => {
          index++;
          setTimeout(() => {
            terminalOutput.textContent += "\n";
            displayLastVisitAndUpdates();
          }, 100); // Wait a moment before displaying MOTD
        });
      } else {
        index++;
        typeNextLine();
      }
    }
  }

  typeNextLine();
}

// Display the last visit and MOTD
function displayLastVisitAndUpdates() {
  const lastVisit = localStorage.getItem("lastVisit");
  if (lastVisit) {
    updates[10] = `Last login: ${new Date(parseInt(lastVisit)).toLocaleString()}`;
  } else {
    updates[10] = "Last login: First time visit";
  }
  localStorage.setItem("lastVisit", Date.now().toString());

  let index = 0;
  const interval = setInterval(() => {
    if (index < updates.length) {
      terminalOutput.textContent += `${updates[index]}\n`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      index++;
    } else {
      clearInterval(interval);
      enableInput();
    }
  }, 300);
}

// Enable the terminal input
function enableInput() {
  document.getElementById("terminal-prompt").style.display = "flex";
  terminalInput.disabled = false;
  terminalInput.focus();
}

//Const variables for each command

const fetchArt = ` 
⠀⠤⢶⠖⠉⠉⠉⠉⠉⠉⠒⢄⠀⠀⠀⠀  - Implemented commands 1-8 | Mar 28
⠻⠀⢸⠀⠀⠀⢠⠒⠒⠒⢤⡀⠸⠀⠀⠀   - Added username and password insertion | Mar 28
⠸⠀⡏⠀⠀⠀⠸⣄⣀⣀⣀⠇⠀⡇⠀⠀    - Added cat commands | Mar 28
⢰⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀      - Removed the username being showed until after the MOTD | Mar 28
⠘⣀⠇⠀⠀⠀⠀⡠⠤⠤⡀⠀⠀⠊⠉⢳     
⠀⠀⠉⠙⢶⡿⣀⣀⣀⣀⠜⠈⠒⠒⠒⠁      

 update tty7 --Type 'exit' to quit | 'help' for commmands.
  `;


const help = [
  '\t1)   fetch - Displays art with sentence on latest updates',
  '\t2)   exit - Exits the terminal',
  '\t3)   help - Displays this message',
  '\t4)   clear - Clears the terminal',
  '\t5)   whoami - Displays the current user',
  '\t6)   amongus - Displays a funny message',
  "\t7)   ls - List directory contents",
  "\t8)   cat <file> - Displays contents of the specified file",
  "",
];

const educationList = [
  "\t1)   High School Diploma - Kettering Fairmont High School",
  "\t2)   Information Technology CTC Diploma - Kettering Fairmont High School",
  "\t3)   Calculus 1 and 2 - Wright State University",
  "\t4)   Database Management I - Sinclair Community College",
  "\t5)   Inrto to Problem Solving and Computer Programming (C++) - Sinclair Community College",
  "\t6)   Java Software Development - Sinclair Community College",
  "\t7)   Web Site Development with HTML and CSS - Sinclair Community College",
  "\t8)  IT Fundamentals - Sinclair Community College",
  "",
];

const workList = [ 
  "\t1)   Seasonal Cashier - Kettering Recreation Complex (2022-2023)",
  "\t2)   Assistant Arena/Water Park Manager - Kettering Recreation Complex (2023-Present)",
  "",
];

const projectList = [
  "\t1)   Personal Website (HTML, CSS, JS)",
  "\t2)   Database for Pickleball Club (Microsoft Access, SQL)",
  "\t3)   Andriod App for my own Card Game (Flutter, Dart, HTML, CSS, JS)",
  "\t4)   CyberPatriot Ubuntu Script to secure a system using CIS benchmarks (Bash)",
  "\t5)   Console-based, Text-game of Magic The Gathering Board Game (Java)",
  "",
];

const hobbiesList = [
  "\t1)   Fairmont Men's Tennis - Kettering Fairmont High School (2022-2025)",
  "\t\t - Team Captain and Team MVP (2023-2024)",
  "\t\t - Team Captain (2024-2025)",
  "",
  "\t2)   Pickleball Club - Kettering Fairmont High School (2023-2025)",
  "\t\t - Club President and Founder (2023-2025)",
  "",
  "\t3)   CyberPatriot - Wright Patterson Air Force Base (2023-2025)",
  "\t\t - Intermediate Team Ubuntu Specialist (2023-2024)",
  "\t\t - Advanced Team Ubungut Specialist placing 3rd in State for Gold Tier(2024-2025)",
  "",
]

//End of const variables for each command




// Functions for each command

function fetch() {
  terminalOutput.textContent += `${fetchArt}\n`;
}

function exit() {
  window.location.href = "";
}

function amongus() {
  terminalOutput.textContent += "\tAMONG US, bing bing bing!\n\n";
}

function helpCMD() {
  terminalOutput.textContent += help.join('\n') + '\n';
}

function clearCMD() {
  terminalOutput.textContent = "";
}

function whoami() {
  terminalOutput.textContent += "\tLRF_Projects\n";
}

function ls() {
  terminalOutput.textContent += "\tEducation\tWorkExperience\t\tProjects\tHobbies\t\tResume\n\n";
}

function catEducation(){
  terminalOutput.textContent += educationList.join('\n') + '\n';
}

function catWorkExperience(){
  terminalOutput.textContent += workList.join('\n') + '\n';
}

function catProjects(){
  terminalOutput.textContent += projectList.join('\n') + '\n';
}

function catResume(){

}

function catHobbies(){
  terminalOutput.textContent += hobbiesList.join('\n') + '\n';
}

// End of command functions



// Handle user input and display command results

terminalInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const command = terminalInput.value.trim();
    terminalOutput.textContent += `LRF_Projects@Nifty-Desktop:~$ ${command}\n`;
    terminalInput.value = "";

    switch (command) {
      case "fetch":
        fetch();
        break;

      case "exit":
        exit();
        break;

      case "amongus":
        amongus();
        break;

      case "help":
        helpCMD();
        break;

      case "clear":
        clearCMD();
        break;

      case "whoami":
        whoami();
        break;

      case 'ls':
        ls();
        break;

      case 'cat Education':
        catEducation();
        break;
      
      case 'cat WorkExperience':
        catWorkExperience();
        break;

      case 'cat Projects':
        catProjects();
        break;

      case 'cat Resume':
        catResume();
        break;

      case 'cat Hobbies':
        catHobbies();
        break;

      default:
        terminalOutput.textContent += "\tCommand not found, I'm not a miracle worker.\n\n";
    }

    // End of case statements for commands

    // Scroll to the bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    terminalInput.scrollIntoView({ behavior: "smooth" });
  }
});

// On window load, start the login sequence
window.onload = () => {
  displayLogIn();
};