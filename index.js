// Global variables
const maxTeams = 5
let teamsArray

let currentTeamCount = localStorage.getItem('teamCount')

let tempTeamArray = localStorage.getItem('teamsArray')
if (tempTeamArray === null) {
  teamsArray = []
} else {
  teamsArray = JSON.parse(tempTeamArray)
}

let teamColors = ['Blue', 'Black', 'Green', 'Orange', 'Yellow']

// App structure setup.
const root = document.querySelector('.root')

const addTeamsControl = document.createElement('section')
addTeamsControl.classList.add('controls-wrapper')

const teamsDisplay = document.createElement('section')
teamsDisplay.classList.add('teams-display-wrapper')

root.appendChild(addTeamsControl)
root.appendChild(teamsDisplay)

// loop through the currentTeamCount from local storage
// If value is greater than 0
if (currentTeamCount > 0) {
  for (let i = 0; i < currentTeamCount; i++) {
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${i + 1}`)

    const teamNameInput = document.createElement('input')
    teamNameInput.classList.add('team-name-input')
    teamNameInput.placeholder = 'Team Name'

    const teamDetailsWrapper = document.createElement('div')
    teamDetailsWrapper.classList.add('team-details')

    teamsDisplay.appendChild(teamCardTemplate)
    teamCardTemplate.appendChild(teamNameInput)
    teamCardTemplate.appendChild(teamDetailsWrapper)
  }
}

// Button to add team cards for each team playing.
const addTeamsBtn = document.createElement('div')
addTeamsBtn.classList.add('btn')
addTeamsBtn.innerHTML = 'Add Teams'

addTeamsControl.appendChild(addTeamsBtn)

const addTeam = () => {
  if (currentTeamCount < 5) {
    currentTeamCount++
    // Push a team object into the array of teams
    teamsArray.push({
      teamName: '',
      teamColor: '',
      territoryCount: 0
    })
    // **************** //
    // Set local storage to hold array of teams
    localStorage.setItem('teamsArray', JSON.stringify(teamsArray))
    // **************** //
    localStorage.setItem('teamCount', currentTeamCount)

    // Team card template
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${currentTeamCount}`)

    const teamNameInput = document.createElement('input')
    teamNameInput.classList.add('team-name-input')
    teamNameInput.placeholder = 'Team Name'

    teamsDisplay.appendChild(teamCardTemplate)
    teamCardTemplate.appendChild(teamNameInput)
  }
  console.log(teamsArray)
}

addTeamsBtn.addEventListener('click', addTeam)
