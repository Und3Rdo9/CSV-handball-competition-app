export function sortTeams(teams) {
  if(teams.length > 0) {
    let sortedTeams = [];
    sortedTeams = [...teams];

    let teamsSortedByAge = sortedTeams.reduce( (acc, curr) => {
      if (!(curr.leeftijdscategorie in acc)) { acc[curr.leeftijdscategorie] = {}; }
      acc[curr.leeftijdscategorie][curr.teamcode] = curr;
      return acc;
    }, {});

    return teamsSortedByAge;
  }
  else {
    return {};
  }
}

// creates an order array with the different age categories
// that we can use to maintain the order in which we received the data from the API
// when looping over the teams data object
// TO-DO: add test for this selector function
// TO-DO: structure comments
export function getAgeCategories(teams) {
  if (teams.length) {
    let ageCategories = [];

    for (let i = 0; i < teams.length; i++) {
      if (ageCategories.indexOf(teams[i].leeftijdscategorie) < 0) {
        ageCategories.push(teams[i].leeftijdscategorie);
      }
    }

    return ageCategories;
  }

  else {
    return [];
  }

}
