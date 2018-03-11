import expect from 'expect';
import { sortTeams, getAgeCategories } from './selectors';

const teams = [
  {
    "teamcode" : 993,
    "teamnaam" : "C.S.V. Handbal DS1",
    "leeftijdscategorie" : "Senioren (D)"
  }, {
    "teamcode" : 2302,
    "teamnaam" : "C.S.V. Handbal DS2",
    "leeftijdscategorie" : "Senioren (D)"
  },
  {
    "teamcode" : 2306,
    "teamnaam" : "C.S.V. Handbal HS1",
    "leeftijdscategorie" : "Senioren (H)"
  }, {
    "teamcode" : 1001,
    "teamnaam" : "C.S.V. Handbal HS2",
    "leeftijdscategorie" : "Senioren (H)"
  },
];

describe('sorting teams', () => {
  it('should return sorted team data for use in a selection team list', () => {

    const expected = {
      "Senioren (D)" : {
        993 : {
          "teamcode" : 993,
          "teamnaam" : "C.S.V. Handbal DS1",
          "leeftijdscategorie" : "Senioren (D)"
        },
        2302 :
        {
          "teamcode" : 2302,
          "teamnaam" : "C.S.V. Handbal DS2",
          "leeftijdscategorie" : "Senioren (D)"
        }
      },
      "Senioren (H)" : {
        2306 :
        {
          "teamcode" : 2306,
          "teamnaam" : "C.S.V. Handbal HS1",
          "leeftijdscategorie" : "Senioren (H)"
        },
        1001 :
        {
          "teamcode" : 1001,
          "teamnaam" : "C.S.V. Handbal HS2",
          "leeftijdscategorie" : "Senioren (H)"



        }
      }
    }

    expect(sortTeams(teams)).toEqual(expected);

  });
});

describe('extracting all team age categories', () => {
  it('should return an array of age categories', () => {
    const expected = [
      "Senioren (D)",
      "Senioren (H)"
    ];

    expect(getAgeCategories(teams)).toEqual(expected);
  });
});
