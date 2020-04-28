# Bop Brackets
React client which builds a seeded, fillable, 32-song bracket of an artist's top tracks using data from the [Last.FM API](https://www.last.fm/api/).

Try it out: http://bop-brackets.herokuapp.com/

### The Story
A friend sent me a PDF bracket of Drake songs to fill out.  I enjoyed listening to some old favorites and crowning a champion, but it was a process.  I downloaded the PDF, loaded it into Paint, inserted a text box for each winner, saved that image... you get the idea.  The experience left me with a few questions:

* How can I make this process streamlined and repeatable for different artists?
* How were the songs seeded?  How can I use data to seed consistently?
* How can I make it easier for friends to create and share brackets?

From that experience, Bop Brackets was born.

### The Solution
Bop Brackets is a React client which leverages data from a [Last.FM API](https://www.last.fm/api/) call to generate a bracket of 32 songs.  The user can download a blank bracket, or complete one in their browser and download the results.

#### API Call
The Last.FM API operation [artist.getTopTracks](https://www.last.fm/api/show/artist.getTopTracks) returns a list of an artist's tracks, ordered by total listeners.

Functions in [`bracketUtils.js`](https://github.com/zamud/bop-brackets/blob/master/src/utils/bracketUtils.js) mold this data into a seeded bracket.

#### React Client


### Future Enhancements
