#kaeru

## What is kaeru?

kaeru is a chrome extension for turning jisho.org.

## Why 'kaeru'?

'kaeru' is the romanized version of 変える, which means to change or transform. I chose the name in the spirit of the two tools it unites: jisho (辞書 = dictionary) and anki (暗記 = memory).

## How can I get it?

It will be available for free in the chrome store very shortly. Right now, you can use it as an unpacked extension. by following the steps in Development.

## Using it

1. search for a word on jisho.org
2. open the extension, click `make card` then `download card`.
3. go to your anki deck, then import the card

*notes:*

 * make sure you select `spaces` as the field separator
 * kaeru only supports basic card templates (no reverse cards yet)
 * styling of imported card hasn't been done yet (still figuring that out)
 *

## Development

1. clone the repo
2. run `yarn` or `npm install`
3. run `yarn dev` if you want to work on the popup
4. run `yarn build` to build the extension scripts
5. open <chrome://extensions> in your browser, and choose `load unpacked extension...`, then select the `dist` directory of your local repo.

## Contributing

PRs welcome, although it's not really much right now. Feedback is extremely welcome,
including feature requests or other ideas. If you'd like to collaborate or contribute long term,
please contact me.

## TODO

This is a mad work-in-progress right now. Lots to do!

1. Creating multiple cards before downloading (allows single import of multiple cards).
2. Cleanup the html markup before exporting
3. Make everything way more FP
4. Fix anki template and figure out how to distribute
5. Continue reducing friction from jisho -> anki
6. Add configuration options (only first entry, no furigana, etc.)
7. Tests! (lol should be way higher)

## Credits and Thanks

A big thanks to [Kim Ahlström](https://twitter.com/kimtaro) of [jisho.org](http://jisho.org) and the fine folks at [Anki](https://ankiweb.net/about)!

__icon:__ Created by Stewart Lamb Cromar from the Noun Project
