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

const addTerritory = ({ teamId, territoryCount }, tCount) => {
  let count = (territoryCount += 1)
  teamsArray[teamId - 1].territoryCount = count
  localStorage.setItem('teamsArray', JSON.stringify(teamsArray))
  tCount.innerHTML = `Territory Count: ${count}`
}

const subtractTerritory = ({ teamId, territoryCount }, tCount) => {
  let count = (territoryCount -= 1)
  teamsArray[teamId - 1].territoryCount = count
  localStorage.setItem('teamsArray', JSON.stringify(teamsArray))
  tCount.innerHTML = `Territory Count: ${count}`
}

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
  // Might need to change this to be for loop with index
  for (const team of teamsArray) {
    // Team card
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${team.teamId}`)

    // Team name decleration
    const teamNameInput = document.createElement('input')
    teamNameInput.classList.add('team-name-input')
    teamNameInput.placeholder = 'Team Name'
    teamNameInput.value = `${team.teamName}`

    // Team details wrapper
    const teamDetailsWrapper = document.createElement('div')
    teamDetailsWrapper.classList.add('team-details-wrapper')

    // Territory display
    const territoryCount = document.createElement('p')
    territoryCount.classList.add(team.teamId)
    territoryCount.innerHTML = `Territory Count: ${team.territoryCount}`

    // Territory display controls wrapper
    const territoryControls = document.createElement('div')
    territoryControls.classList.add('controls-wrapper')

    // Territory controls
    const addBtn = document.createElement('button')
    addBtn.type = 'button'
    addBtn.classList.add('territory-btn')
    addBtn.innerHTML = '+'
    addBtn.addEventListener('click', () => addTerritory(team, territoryCount))
    const subtractBtn = document.createElement('button')
    subtractBtn.classList.add('territory-btn')
    subtractBtn.innerHTML = '-'
    // TODO Add disabled true to subract button so count can't be negative
    // if (team.territoryCount === 0) {
    //   subtractBtn.disabled = true
    // }
    subtractBtn.addEventListener('click', () =>
      subtractTerritory(team, territoryCount)
    )

    // THIS IS TEMPORARY
    const teamId = document.createElement('p')
    teamId.innerHTML = `ID ${team.teamId}`

    // Append all created team display items
    teamsDisplay.appendChild(teamCardTemplate)
    teamCardTemplate.appendChild(teamNameInput)
    teamCardTemplate.appendChild(teamDetailsWrapper)

    teamDetailsWrapper.appendChild(teamId)
    teamDetailsWrapper.appendChild(territoryCount)
    teamDetailsWrapper.appendChild(territoryControls)

    territoryControls.appendChild(subtractBtn)
    territoryControls.appendChild(addBtn)
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

    // THIS portion adds the card to the screen so teamName will
    // start as an empty string
    console.log(teamsArray.length)

    // Set local storage to hold array of teams.
    localStorage.setItem('teamsArray', JSON.stringify(teamsArray))
    // Set local storage for quick acess to team count.
    localStorage.setItem('teamCount', currentTeamCount)

    // Team card template.
    const teamCardTemplate = document.createElement('div')
    teamCardTemplate.classList.add('team-card')
    teamCardTemplate.classList.add(`team-${currentTeamCount}`)

    // ********** //
    // NEED TO ADJUST THIS TO ADJUST THE TEAMNAME IN THE NEW ARRAY
    const teamNameInput = document.createElement('input')
    teamNameInput.classList.add('team-name-input')
    teamNameInput.placeholder = 'Team Name'

    const teamDetailsWrapper = document.createElement('div')
    teamDetailsWrapper.classList.add('team-details-wrapper')

    // THIS IS TEMPORARY
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
