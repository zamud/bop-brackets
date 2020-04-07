import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  rightSubBracket: {
    flexDirection: 'column',
    flexGrow: 1
  },
  matchup: {
    flexGrow: 1,
    fontSize: 10
  },
  topSong: {
    borderBottom: 1
  },
  bottomSongRight: {
    borderBottom: 1,
    borderLeft: 1,
    paddingTop: 10
  }
});

const PDFRightBracketRegion = ({matchups}) => {
  return (
    <View style={styles.rightSubBracket}>
      { matchups
        ? matchups.map((matchup) => {
            return (
              <View style={styles.matchup} key={matchups.indexOf(matchup)}>
                <Text style={styles.topSong}>{matchup[1].name}</Text>
                <Text style={styles.bottomSongRight}>{matchup[2].name}</Text>
              </View>
            )
          })
        : null
      }
    </View>
  )
}

export default PDFRightBracketRegion;