// Global variables
const maxTeams = 5
let currentTeamCount = 0

let teamColors = ['Blue', 'Black', 'Green', 'Orange', 'Yellow']

// App structure setup.
const root = document.querySelector('.root')

const addTeamsControl = document.createElement('div')
addTeamsControl.classList.add('controls-wrapper')

const teamsDisplay = document.createElement('section')
teamsDisplay.classList.add('teams-display-wrapper')

root.appendChild(addTeamsControl)
root.appendChild(teamsDisplay)

// Button to add team cards for each team playing.
const addTeamsBtn = document.createElement('div')
addTeamsBtn.classList.add('btn')
addTeamsBtn.innerHTML = 'Add Teams'

addTeamsControl.appendChild(addTeamsBtn)

// Team card template

const addTeam = () => {
  if (currentTeamCount < 5) {
    currentTeamCount++
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${currentTeamCount}`)
    teamsDisplay.appendChild(teamCardTemplate)
  }
  console.log(currentTeamCount)
}

addTeamsBtn.addEventListener('click', addTeam)
