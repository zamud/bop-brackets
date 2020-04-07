const seedBracket = (tracks) => {
  var i = 0;
  var seedsArray = [];

  for (i = 0; i < tracks.length; i += 4) {
    var seedGroup = tracks.slice(i, i+4);
    seedsArray.push(seedGroup);
  }

  return seedsArray;
}

const createMatchups = (seedsArray) => {
  var highSeed = 0;
  var lowSeed = seedsArray.length - 1;
  var matchupId = 0;
  var matchupMap = new Map();

  while(highSeed < lowSeed) {
    var highSeeds = seedsArray[highSeed];
    var lowSeeds = seedsArray[lowSeed];

    while(highSeeds.length > 0) {
      var highSeedIndex = Math.floor(Math.random() * highSeeds.length);
      var lowSeedIndex = Math.floor(Math.random() * lowSeeds.length);

      var highSeedTrack = highSeeds[highSeedIndex];
      var lowSeedTrack = lowSeeds[lowSeedIndex];

      matchupMap.set(matchupId, [matchupId % 4, highSeedTrack, lowSeedTrack]);

      highSeeds.splice(highSeedIndex, 1);
      lowSeeds.splice(lowSeedIndex, 1);
      matchupId++;
    }

    highSeed++;
    lowSeed--;
  }

  return matchupMap
}

const addRegions = (matchups) => {
  const matchupsWithRegions = new Map();
  var i;

  while(i < matchups.size) {
    var matchup = matchups.get(i);
    matchup.push(i % 4);
    matchupsWithRegions.set(i, matchup);
    i++;
  }

  return matchupsWithRegions;
}

const bracketUtils = {
  seedBracket,
  createMatchups,
  addRegions
}

export default bracketUtils;