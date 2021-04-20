_Latest update April 20th, 2021!_ - Chrome & Firefox links coming soon(tm).

# Pokemon-Showdown-Enhanced-Tooltips
A Chrome Extension/Firefox Addon that enhances the tooltips on [Pokemon Showdown](http://play.pokemonshowdown.com/)  by displaying additional information:

- Type weaknesses and respective multipliers
- Move type and category (physical or special) icons
- Move base power
- Click Pokemon name to open their Smogon page in a new tab
- Height and weight

Optional settings (right click the extension icon and toggle the setting!):
- Base stats

### Example
![Screenshot](/screenshots/screenshot-PS.png)

![Screenshot](/screenshots/screenshot-PSET.png)

### Installation
Chrome & Firefox links coming soon(tm).

### Contributing
Bug reports and pull requests are welcome!  If you'd like to request a feature, please open an issue.  This project is intended to be a safe, welcoming space for collaboration.

### Local Development
The code for this plugin can be found in `./src`.

- `index.js` - The primary codebase for this plugin
- `icons` - Icon image files
- `css` - Custom styles
- `chrome` - Chrome-specific Javascript and manifest.json files
- `firefox` - Firefox-specific Javascript and manifest.json files

To build and test this code locally:

```bash
npm install
npm run build
```

This will create a `dist/` folder with a `chrome/` and `firefox/` folder. Use these unpacked files as a Chrome or Firefox plugin to test locally.

### Special Thanks
Special thanks to [Karl Hughes](https://github.com/karllhughes) for their great contributions to the extension

Also huge thanks to [Chris Schalago](https://github.com/rowin1) as the original creator of this addon. - Please msg me when you can :) 

### License
This plugin and code is distributed under the [MIT license](https://opensource.org/licenses/MIT).
