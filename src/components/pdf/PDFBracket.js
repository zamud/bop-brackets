import React, { Fragment } from 'react';
import { Page, View, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 6,
    flexDirection: 'row',
    fontSize: 12,
    position: 'relative'
  },
  roundOf32: {
    flexDirection: 'column',
    textAlign: 'left',
    flexGrow: 0
  },
  topSong: {
    borderBottom: 1
  },
  r32Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '18px',
    textAlign: 'left',
    marginBottom: '5px',
    paddingTop: '3px'
  },
  r32VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '18px',
    textAlign: 'left',
    paddingTop: '3px'
  },
  roundOf16: {
    marginTop: '24px',
    flexGrow: 1
  },
  r16Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '36px',
    marginBottom: '37px'
  },
  r16VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '36px'
  },
  roundOf8: {
    marginTop: '44px',
    flexGrow: 1
  },
  r8Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '78px',
    marginBottom: '67px'
  },
  r8VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '78px'
  },
  roundOf4: {
    marginTop: '79px',
    flexGrow: 1
  },
  r4Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '155px',
    marginBottom: '125px'
  },
  r4VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '155px'
  },
  roundOf2: {
    marginTop: '150px',
    flexGrow: 1
  },
  r2Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '300px'
  },
  champion: {
    marginTop: '290px',
    flexGrow: 1
  }
});

const PDFBracket = ({matchups}) => {

  return (
    <Document>
      <Page size='legal' orientation='landscape' style={styles.page}>
        <View style={styles.roundOf32}>
          {
            matchups.map((matchup) => {
              return (
                <Fragment key={`r32_${matchups.indexOf(matchup)+1}`}>
                  <View style={styles.topSong}>
                    <Text>{matchup[1]}</Text>
                  </View>
                  <View style={styles.r32Bottom}>
                    <Text>{matchup[2]}</Text>
                  </View>
                </Fragment>
              )
            })
          }
        </View>
        <View style={styles.roundOf16}>
          {
            Array.from(Array(7).keys()).map((i) => {
              return (
                <Fragment key={`r16_${i+1}`}>
                  <View style={styles.topSong} />
                  <View style={styles.r16Bottom} />
                </Fragment>
              )
            })
          }
          <View style={styles.topSong} />
          <View style={styles.r16VeryBottom} />
        </View>
        <View style={styles.roundOf8}>
          {
            Array.from(Array(3).keys()).map((i) => {
              return (
                <Fragment key={`qf_${i+1}`}>
                  <View style={styles.topSong} />
                  <View style={styles.r8Bottom} />
                </Fragment>
              )
            })
          }
          <View style={styles.topSong} />
          <View style={styles.r8VeryBottom} />
        </View>
        <View style={styles.roundOf4}>
          <View style={styles.topSong} />
          <View style={styles.r4Bottom} />
          <View style={styles.topSong} />
          <View style={styles.r4VeryBottom} />
        </View>
        <View style={styles.roundOf2}>
          <View style={styles.topSong} />
          <View style={styles.r2Bottom} />
        </View>
        <View style={styles.champion}>
          <View style={styles.topSong} />
        </View>
      </Page>
    </Document>
  )
}

export default PDFBracket;