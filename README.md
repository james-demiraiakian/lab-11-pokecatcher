# Assignment Overview: Lab 11

## Pokemon Catcher!

This two-day lab is an app for aspiring pokemon masters. You will simulate the experience of leaving Pallet Town and braving the wilds in search of Pokemon. Using the provided data, you will present the user with 3 random (different) pokemon. The user will select which pokemon they want to catch. Then you will present the user with 3 more pokemon. (As a stretch goal, don't allow to show the same pokemon in two consecutive trios). After the user has encountered 10 trios of pokemon, you will take them to a results page where they can see their haul.

## Learning Objectives
- Manage complex app state over time, tracking and displaying:
    - Number of total pokemon caught so far in this session
    - How many of _each pokemon_ you've caught so far in this session
    - How many times the user has encoutnered a given pokemon in this session
- Use a `while` loop to pick random pokemon _with no duplicates_

## Standard Setup Process

1. Create a repo (using the template) called `lab-11-pokemon-catcher` on Github
    - make sure to click add a `README.md`
1. Copy the URL of the new repo
1. From the command line (terminal) clone your repo:
    1. `git clone <url>`
    1. **`cd` into your repo from the command line**

    1. Launch vscode with `code .`

## Requirements/Guidance

**This is an individual assignment. You will do planning together in groups, but you will code and submit your own app. Use the group plan as a guide, but feel free to carve your own path if you like.**

## Pokecatcher Page
1) First, you will select three random photos from the available pokemon and display them side-by-side-by-side in the browser window.
1) Then, you'll want to be able to receive clicks on those displayed pokemon images, and track those clicks for each pokemon. You'll also want to track how many times each pokemon is displayed and each time each pokemon is clicked. Do this for:
    * A single, individual user session (which the user can click a clear button to play again)
    * STRETCH: Add the session to an array of all sessions stored in local storage. This can be used to report on all-time results. This will be an _array of arrays_.
1) When the user clicks on a pokemon, three new non-duplicating random pokemon images need to be automatically displayed. The three pokemon images that are displayed should contain no duplicates.
    - [AS A PRETTY FREAKING HARD STRETCH GOAL: nor should they duplicate with any pokemon images that we displayed immediately before (you may want to layer in this second requirement after the first is working)].
    - Additional stretch: Below each image, show how many of this kind of pokemon the user has encountered already, and how many they'ver already captured.
    - More stretch: At the top of the page, it should tell the user how many total pokemon they've caught so far.

## Planning

**Note: There are a lot of moving parts in this assignment, and more details to attend to than it might seem at first. Build methodically, in small pieces, that you test and check regularly. ACP regularly on at least one non-main branch. Try sketching out a plan on paper and breaking down the problem conceptually before getting into the code.**

Spend some time _IN GROUPS_ planning out your projects today.

Start by reading this document in its entirety. Especially the "requirements/guidance" section.

### Group Planning

Also draft a plan for the project (a detailed to-do list of things to make, step by step and tested at each stage) before getting into the code. That time spent in thought and planning will make the code flow a lot faster. Give yourself a series of little problems to solve (rather an a ginormous thing that you just wade through and poke at).

Plan out your data model. Here's an example based on the shopping cart lab:
```js
[
    {
        pokemon: 'magikarp',
        encountered: 1,
        captured: 1,
    },
        {
        pokemon: 'charizard',
        encountered: 3,
        captured: 1,
    }
        {
        pokemon: 'squirtle',
        encountered: 2,
        captured: 0,
    },
    {
        pokemon: 'weedle',
        encountered: 1,
        captured: 1,
    }
]
```

1. WHAT IS YOUR APP STATE? How will you represent it as a view?
1. When will your state change? In response to what user action?
1. What pages will need to be created?
1. What data will need to be saved, updated, and when?
1. What variables will need to be used to track data?
1. What data will need to be saved to local storage?

## Setup For This Lab

Do today's work on a branch! (not `main`)

* Create a new repo for this weekly project called `lab-11-pokemon-catcher`
* Clone locally and setup with usually config/scaffolding
* Inclde your wireframe in the repo

---

## Points Break Down

Looking For | Points (10)
:--|--:
Hosted on GitHub with URL in About section, with technial plan in Readme | 1
Display three random pokemon images (with radio buttons) _that are guaranteed to be different_ | 2
Write functions for `capturePokemon`, `encounterPokemon`, `getPokedex` and `setPokedex` | 2
Track TIMES encountered and TIMES CAPTURED for items during a single session in localStorage | 3
TDD all functions | 2
STRETCH: Use an array of arrays (that is, an array of session arrays) in local storage to track and display all-time encounters and captures (over multiple sessions) in addition to single session. Display these according to a design of your choice. | +1
STRETCH: Display random pokemon images _with weird non-duplication rules (i.e., don't show the same pokemon image in two different consecutive questions)_ | +1
STRETCH: As the user is playing, display captures and encounters for each pokemon below each pokemon image | +1



for (let item of results) {
    const fruit = findByID(fruits, item.id)

    cost div = document.createElement('div');
    cost img = document.createElement('img');
    img.src = fruit.image
    const header = document.creElement('h2');
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.testContent = `Shown: ${item.shown}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.testContent = `Shown: ${item.shown}`;
}

lab outline

1 - write plan

(alot of written notes/code snippets)

2 - functions

write tests - functions side by side

~~~findByID(id, item);
~~~get pokedex()
~~~set pokedex()
~~~cap pokemon()
~~~encounter pokemon()

3 - page html

4 - app.js functions

- randomizer
- no repeat section
- pokemon render
- event listener
- make sure pokemon is selected

5 - basic CSS 

6 - results page

- pass in localStorage data
- munge data of both results and pokemon info
- choose properties to chart.

7 - more CSS