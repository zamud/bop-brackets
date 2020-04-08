import React from 'react';
import { Page, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import bracketUtils from '../utils/bracketUtils';
import PDFLeftBracketRegion from './PDFLeftBracketRegion';
import PDFRightBracketRegion from './PDFRightBracketRegion';

const styles = StyleSheet.create({
  page: {
    padding: 10,
    flexDirection: 'row'
  },
  leftBracket: {
    width: '16%',
    flexGrow: 1,
    textAlign: 'left'
  },
  rightBracket: {
    width: '16%',
    flexDirection: 'column',
    textAlign: 'right',
    flexGrow: 1
  },
  roundOf16Left: {
    width: '8%',
    flexDirection: 'column',
    marginTop: '22px'
  },
  r16MatchupLeft: {
    borderTop: 1,
    borderBottom: 1,
    borderRight: 1,
    height: '14%',
    marginBottom: '66px'
  },
  roundOf8Left: {
    width: '8%',
    flexDirection: 'column',
    marginTop: '60px',
    flexGrow: 1
  },
  r8MatchupLeft: {
    borderTop: 1,
    borderBottom: 1,
    borderRight: 1,
    height: '28%',
    marginBottom: '140px'
  },
  roundOf4Left: {
    width: '8%',
    flexDirection: 'column',
    marginTop: '130px',
    flexGrow: 1
  },
  r4MatchupLeft: {
    borderTop: 1,
    borderBottom: 1,
    borderRight: 1,
    height: '64%'
  },
  roundOf2Left: {
    width: '8%',
    flexDirection: 'column',
    flexGrow: 1,
    marginTop: '220px',
    borderTop: 1
  },
  roundOf16Right: {
    width: '8%',
    flexDirection: 'column',
    textAlign: 'left',
    marginTop: '22px'
  },
  r16MatchupRight: {
    borderTop: 1,
    borderBottom: 1,
    borderLeft: 1,
    height: '14%',
    marginBottom: '66px'
  },
  roundOf8Right: {
    width: '8%',
    flexDirection: 'column',
    marginTop: '60px',
    textAlign: 'right',
    flexGrow: 1
  },
  r8MatchupRight: {
    borderTop: 1,
    borderBottom: 1,
    borderLeft: 1,
    height: '28%',
    marginBottom: '140px'
  },
  roundOf4Right: {
    width: '8%',
    flexDirection: 'column',
    marginTop: '130px',
    flexGrow: 1
  },
  r4MatchupRight: {
    borderTop: 1,
    borderBottom: 1,
    borderLeft: 1,
    height: '64%'
  },
  roundOf2Right: {
    width: '8%',
    flexDirection: 'column',
    textAlign: 'right',
    flexGrow: 1,
    marginBottom: '220px',
    borderBottom: 1
  },
});

const TopTracksBracket32 = ({tracks}) => {

  var seedsArray = bracketUtils.seedBracket(tracks);
  var matchups = bracketUtils.createMatchups(seedsArray);
  var orderedMatchups = bracketUtils.orderMatchups(matchups);

  return (
    <div>
      <PDFViewer width='90%' height='800px'>
        <Document>
          <Page size="A4" orientation='landscape' style={styles.page}>
            <View style={styles.leftBracket}>
              { matchups
                ? <PDFLeftBracketRegion matchups={orderedMatchups[0]} />
                : null
              }
              { matchups
                ? <PDFLeftBracketRegion matchups={orderedMatchups[1]} />
                : null
              }
            </View>
            <View style={styles.roundOf16Left}>
              <View style={styles.r16MatchupLeft}></View>
              <View style={styles.r16MatchupLeft}></View>
              <View style={styles.r16MatchupLeft}></View>
              <View style={styles.r16MatchupLeft}></View>
            </View>
            <View style={styles.roundOf8Left}>
              <View style={styles.r8MatchupLeft}></View>
              <View style={styles.r8MatchupLeft}></View>
            </View>
            <View style={styles.roundOf4Left}>
              <View style={styles.r4MatchupLeft}></View>
            </View>
            <View style={styles.roundOf2Left}></View>
            <View style={styles.roundOf2Right}></View>
            <View style={styles.roundOf4Right}>
              <View style={styles.r4MatchupRight}></View>
            </View>
            <View style={styles.roundOf8Right}>
              <View style={styles.r8MatchupRight}></View>
              <View style={styles.r8MatchupRight}></View>
            </View>
            <View style={styles.roundOf16Right}>
              <View style={styles.r16MatchupRight}></View>
              <View style={styles.r16MatchupRight}></View>
              <View style={styles.r16MatchupRight}></View>
              <View style={styles.r16MatchupRight}></View>
            </View>
            <View style={styles.rightBracket}>
              { matchups
                ? <PDFRightBracketRegion matchups={orderedMatchups[2]} />
                : null
              }
              { matchups
                ? <PDFRightBracketRegion matchups={orderedMatchups[3]} />
                : null
              }
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}

export default TopTracksBracket32;