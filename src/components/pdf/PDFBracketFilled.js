import React, { Fragment } from 'react';
import { Page, View, Text, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

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
    marginTop: '10px',
    flexGrow: 1
  },
  r16Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '36px',
    marginBottom: '24px',
    paddingTop: '20px'
  },
  r16VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '36px',
    paddingTop: '20px'
  },
  roundOf8: {
    marginTop: '28px',
    flexGrow: 1
  },
  r8Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '80px',
    marginBottom: '51px',
    paddingTop: '64px'
  },
  r8VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '80px',
    paddingTop: '64px'
  },
  roundOf4: {
    marginTop: '63px',
    flexGrow: 1
  },
  r4Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '155px',
    marginBottom: '125px',
    paddingTop: '139px'
  },
  r4VeryBottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '155px',
    paddingTop: '139px'
  },
  roundOf2: {
    marginTop: '128px',
    flexGrow: 1
  },
  r2Bottom: {
    borderBottom: 1,
    borderRight: 1,
    height: '300px',
    paddingTop: '284px'
  },
  champion: {
    marginTop: '280px',
    flexGrow: 1
  }
});

const PDFBracketFilled = ({matchups, r16tracks, qfTracks, sfTracks, fTracks, champ}) => {
  return (
    <PDFViewer width='90%' height='600px'>
      <Document>
        <Page size='legal' orientation='landscape' style={styles.page}>
          <View style={styles.roundOf32}>
            {
              Array.from(Array(15).keys()).map(i => {
                return (
                  <Fragment key={`r32_${i}`}>
                    <View style={styles.topSong}>
                      <Text>{matchups[i][1]}</Text>
                    </View>
                    <View style={styles.r32Bottom}>
                      <Text>{matchups[i][2]}</Text>
                    </View>
                  </Fragment>
                )
              })
            }
            <View style={styles.topSong}>
              <Text>{matchups[15][1]}</Text>
            </View>
            <View style={styles.r32VeryBottom}>
              <Text>{matchups[15][2]}</Text>
            </View>
          </View>
          <View style={styles.roundOf16}>
            {
              Array.from(new Array(7), (x,i) => i*2).map(i => {
                return (
                  <Fragment key={`r16_${i}`}>
                    <View style={styles.topSong}>
                      <Text>{r16tracks[i]}</Text>
                    </View>
                    <View style={styles.r16Bottom}>
                      <Text>{r16tracks[i+1]}</Text>
                    </View>
                  </Fragment>
                )
              })
            }
            <View style={styles.topSong}>
              <Text>{r16tracks[14]}</Text>
            </View>
            <View style={styles.r16VeryBottom}>
              <Text>{r16tracks[15]}</Text>
            </View>
          </View>
          <View style={styles.roundOf8}>
            {
              Array.from(Array(3), (x,i) => i*2).map(i => {
                return (
                  <Fragment key={`qf_${i}`}>
                    <View style={styles.topSong}>
                      <Text>{qfTracks[i]}</Text>
                    </View>
                    <View style={styles.r8Bottom}>
                      <Text>{qfTracks[i+1]}</Text>
                    </View>
                  </Fragment>
                )
              })
            }
            <View style={styles.topSong}>
              <Text>{qfTracks[6]}</Text>
            </View>
            <View style={styles.r8VeryBottom}>
              <Text>{qfTracks[7]}</Text>
            </View>
          </View>
          <View style={styles.roundOf4}>
            <View style={styles.topSong}>
              <Text>{sfTracks[0]}</Text>
            </View>
            <View style={styles.r4Bottom}>
              <Text>{sfTracks[1]}</Text>
            </View>
            <View style={styles.topSong}>
              <Text>{sfTracks[2]}</Text>
            </View>
            <View style={styles.r4VeryBottom}>
              <Text>{sfTracks[3]}</Text>
            </View>
          </View>
          <View style={styles.roundOf2}>
            <View style={styles.topSong}>
              <Text>{fTracks[0]}</Text>
            </View>
            <View style={styles.r2Bottom}>
              <Text>{fTracks[1]}</Text>
            </View>
          </View>
          <View style={styles.champion}>
            <View style={styles.topSong}>
              <Text>{champ}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default PDFBracketFilled;