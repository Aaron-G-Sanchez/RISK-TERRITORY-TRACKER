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

// loop through the teamsArray from local storage
// If value is greater than 0.
if (teamsArray.length >= 1) {
  for (const team of teamsArray) {
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${team.teamId}`)

    const teamNameInput = document.createElement('input')
    teamNameInput.classList.add('team-name-input')
    teamNameInput.placeholder = 'Team Name'

    const teamDetailsWrapper = document.createElement('div')
    teamDetailsWrapper.classList.add('team-details-wrapper')

    const territoryCount = document.createElement('p')
    territoryCount.innerHTML = `Territory Count: ${team.territoryCount}`

    const teamId = document.createElement('p')
    teamId.innerHTML = `${team.teamId}`

    teamsDisplay.appendChild(teamCardTemplate)
    teamCardTemplate.appendChild(teamNameInput)
    teamCardTemplate.appendChild(teamDetailsWrapper)

    teamDetailsWrapper.appendChild(teamId)
    teamDetailsWrapper.appendChild(territoryCount)
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
    // Push a team object into the array of teams.
    teamsArray.push({
      teamId: teamsArray.length + 1,
      teamName: '',
      teamColor: '',
      territoryCount: 0
    })

    console.log(teamsArray.length)

    // Set local storage to hold array of teams.
    localStorage.setItem('teamsArray', JSON.stringify(teamsArray))
    // Set local storage for quick acess to team count.
    localStorage.setItem('teamCount', currentTeamCount)

    // Team card template.
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${currentTeamCount}`)

    const teamNameInput = document.createElement('input')
    teamNameInput.classList.add('team-name-input')
    teamNameInput.placeholder = 'Team Name'

    const teamDetailsWrapper = document.createElement('div')
    teamDetailsWrapper.classList.add('team-details-wrapper')

    const teamId = document.createElement('p')
    teamId.innerHTML = `${teamsArray[teamsArray.length - 1].teamId}`

    const territoryCount = document.createElement('p')
    territoryCount.innerHTML = `Territory Count: ${
      teamsArray[teamsArray.length - 1].territoryCount
    }`

    teamsDisplay.appendChild(teamCardTemplate)
    teamCardTemplate.appendChild(teamNameInput)
    teamCardTemplate.appendChild(teamDetailsWrapper)

    teamDetailsWrapper.appendChild(teamId)
    teamDetailsWrapper.appendChild(territoryCount)
  }
}

addTeamsBtn.addEventListener('click', addTeam)
