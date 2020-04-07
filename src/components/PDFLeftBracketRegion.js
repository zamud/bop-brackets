import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  leftSubBracket: {
    flexDirection: 'column',
    flexGrow: 1
  },
  matchup: {
    height: '12%',
    flexGrow: 1,
    fontSize: 10
  },
  topSong: {
    borderBottom: 1
  },
  bottomSongLeft: {
    borderBottom: 1,
    borderRight: 1,
    paddingTop: 10
  }
});

const PDFLeftBracketRegion = ({matchups}) => {
  return (
    <View style={styles.leftSubBracket}>
      { matchups
        ? matchups.map((matchup) => {
            return (
              <View style={styles.matchup} key={matchups.indexOf(matchup)}>
                <Text style={styles.topSong}>{matchup[1].name}</Text>
                <Text style={styles.bottomSongLeft}>{matchup[2].name}</Text>
              </View>
            )
          })
        : null
      }
    </View>
  )
}

export default PDFLeftBracketRegion;