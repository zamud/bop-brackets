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
    var highSeedIndex = 0;
    var lowSeedIndex = lowSeeds.length-1;

    while(highSeedIndex < highSeeds.length) {
      var regionNum = matchupId % 4;
      var highSeedTrack = addSeedAndTrim(highSeeds[highSeedIndex], highSeed+1, regionNum);
      var lowSeedTrack = addSeedAndTrim(lowSeeds[lowSeedIndex], lowSeed+1, regionNum);

      matchupMap.set(matchupId, [regionNum, highSeedTrack, lowSeedTrack]);

      highSeedIndex++;
      lowSeedIndex--;
      matchupId++;
    }

    highSeed++;
    lowSeed--;
  }

  return matchupMap
}

const addSeedAndTrim = (track, seed, regionNum) => {
  var seededTrimmedTrack = track.name;
  var seedStr = `[${seed}]`;

  if(seededTrimmedTrack.length > 24) {
    seededTrimmedTrack = seededTrimmedTrack.substring(0,21);
    seededTrimmedTrack = seededTrimmedTrack.concat('...');
  }

  seededTrimmedTrack = seedStr.concat(` ${seededTrimmedTrack}`);
  
  return seededTrimmedTrack;
}

const orderMatchups = (matchups) => {
  var region0Matchups = orderRegion(matchups, 0);
  var region1Matchups = orderRegion(matchups, 1);
  var region2Matchups = orderRegion(matchups, 2);
  var region3Matchups = orderRegion(matchups, 3);

  var orderedMatchups = [].concat(region0Matchups, region1Matchups, region2Matchups, region3Matchups);

  return orderedMatchups;
}

var orderRegion = (matchups, regionNum) => {
  var regionMatchups = Array.from(matchups.values()).filter(matchup => matchup[0] % 4 === regionNum);
  var orderedRegionMatchups = [regionMatchups[0], regionMatchups[3], regionMatchups[2], regionMatchups[1]];
  
  return orderedRegionMatchups;
}

const bracketUtils = {
  seedBracket,
  createMatchups,
  orderMatchups
}

export default bracketUtils;