# Bop Brackets
React client which builds a seeded, fillable, 32-song bracket of an artist's top tracks using data from the [Last.FM API](https://www.last.fm/api/).

Try it out (it's fun!): <a href="http://bop-brackets.herokuapp.com/" target="_blank">http://bop-brackets.herokuapp.com/</a>

## The Story
A friend sent me a PDF bracket of Drake songs to fill out.  I enjoyed listening to some old favorites and crowning a champion, but it was a process.  I downloaded the PDF, loaded it into Paint, inserted a text box for each winner, saved that image... you get the idea.  The experience left me with a few questions:

* How can I make this process streamlined and repeatable for different artists?
* How were the songs seeded?  How can I use data to seed consistently?
* How can I make it easier for friends to create and share brackets?

From that experience, Bop Brackets was born.

## The Solution
Bop Brackets is a React client which leverages data from a [Last.FM API](https://www.last.fm/api/) call to generate a bracket of 32 songs.  The user can download a blank bracket, or complete one in their browser and download the results.

### API Call and Bracket Setup
The Last.FM API operation [artist.getTopTracks](https://www.last.fm/api/show/artist.getTopTracks) returns a list of an artist's tracks, ordered by total listeners.  This accepts a parameter for number of tracks, which here is passed as 32.

Functions in [`bracketUtils.js`](https://github.com/zamud/bop-brackets/blob/master/src/utils/bracketUtils.js) mold this data into a seeded bracket:
* The 32 tracks are each assigned a seed of 1-8.  Top four tracks are 1 seeds, the next four are 2 seeds, and so on.
* Matchups are created.  Each 1 seed is matched up with an 8 seed, each 2 seed with a 7 seed, and so on.
* Regions are created.  Each region contains matchups 1v8, 2v7, 3v6, and 4v5.

For display consistency, [`bracketUtils.js`](https://github.com/zamud/bop-brackets/blob/master/src/utils/bracketUtils.js) contains a function to append the seed and trim long track names.  For example, this Pearl Jam track with a long title was assigned a 6 seed:

<p align="center">
  <img src="https://github.com/zamud/bop-brackets/blob/master/public/img/title-format.PNG" alt="Formatting Title Image">
</p>

When all is said and done, there will be a seeded 32 track bracket, which four regions like this:

<p align="center">
  <img src="https://github.com/zamud/bop-brackets/blob/master/public/img/sample-region.PNG" alt="Sample Region Image">
</p>

### User Interface
With the data fetched and bracket organized, it was time to create the user experience.  The flow was kept simple, and on a single page:
1. Enter an artist name and click "Generate Bracket"
2. Download a blank bracket (only if filling out by hand or outside the app)
3. Fill out in the browser and download completed bracket
4. Repeat

<p align="center">
  <img src="https://github.com/zamud/bop-brackets/blob/master/public/img/homepage.PNG" alt="Homepage Image">
</p>

#### 1. Enter Artist, Generate Bracket
On page load, only the "Artist" text box and "Generate Bracket" button are enabled.  The user can search for any artist (not case sensitive) and click the button.  If the artist name is invalid or there was another error, the user is prompted to try again.  If the API call is successful, the bracket is built and a success message displays.  The "Artist" and "Generate Brackets" elements are disabled, and the other controls come alive.

<p align="center">
  <img src="https://github.com/zamud/bop-brackets/blob/master/public/img/search-results.PNG" alt="Search Results Image">
</p>

#### 2. Download a Blank Bracket
On the way to a filled-out PDF bracket is a blank PDF bracket, so it became a feature!  [react-pdf](https://react-pdf.org/) is used to create a bracket layout with the first-round matchup data displayed.  Here is an example, downloaded directly from Bop Brackets:

---------------- Blank Pearl Jam Bracket

#### 3. Fill Out in Browser
A bracketing website wouldn't be complete without the ability to complete a bracket and choose a winner.  This can be done in both desktop and phone browsers with Bop Brackets' mobile responsiveness (acheived with [react-device-detect](https://github.com/duskload/react-device-detect).  In the desktop view, The user fills out the entire bracket on a single page.  Winners are chosen in drop-downs, which remain disabled until both tracks for that matchup have been set:

<p align="center">
  <img src="https://github.com/zamud/bop-brackets/blob/master/public/img/pearl-jam-in-progress.PNG" alt="Bracket In Progress Image">
</p>

In the mobile view, the user progresses through one round at a time.  Once all picks for a round are complete, the "Next Round" button is enabled, and they can progress.  They may also revisit previous rounds and change their picks:

--------------- Mobile Flow Image

Once a champion is crowned, the "Generate PDF" button becomes available, and the user can download their filled out bracket.  As an example, see my personal Pearl Jam bracket (link to PDF).  At this point, the user can send their results to friends and family for some friendly debate.

--------------- Champ card and Generate PDF Button Image

#### 4. Repeat
The user may start over at any time.  This will clear out their artist search and any picks they've made, and re-activate the "Artist" text box and "Generate Bracket" button, effectively resetting the app.  This allows users to repeat or restart the process.

<p align="center">
  <img src="https://github.com/zamud/bop-brackets/blob/master/public/img/start-from-scratch.PNG" alt="Start From Scratch Image">
</p>

## Future Enhancements
