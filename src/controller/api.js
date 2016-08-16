var express = require('express');
var router = express.Router();

const pogobuf = require('pogobuf');
var _ = require('lodash');
var co = require('co');
var thunkify = require('thunkify');
var fs = require('fs-extra');

var movesData = require('../../data/game/moves.json');
var pokemonData = require('../../data/game/pokemon.json');
var Inventory = require('../model/inventory');

var login = new pogobuf.GoogleLogin(),
    client = new pogobuf.Client();

//This should probably be somewhere else earlier in the chain
// login.login('trichter87', 'web$frog25!')
// .then(token => {
//     console.log('logging in');
//     client.setAuthInfo('google', token);
//     //client.setPosition(52.3871113, 4.8882835); //Not needed!

//     return client.init();
// });

//Returns the inventory form file. Should be used by default if not refreshed
router.get('/savedinventory', (req, res, next) => {
  console.log('getting saved inventory');
  let poks = fs.readFileSync(process.cwd() + '/src/public/save/funnelio/inventory-pokemon.json', 'utf8');
  poks = JSON.parse(poks);

  let cand = fs.readFileSync(process.cwd() + '/src/public/save/funnelio/inventory-candy.json', 'utf8');
  cand = JSON.parse(cand);

  res.json({pokemon: poks, candy: cand});
});

router.get('/inventory', (req, res, next) => {
  console.log('get inventory called');

  var inventory = null;
  var pokemon = null;
  var candy = null;


  //Login into pokemon and get inventory info

  client.getInventory(0)
  .then(data => {
    console.log('got inventory');

    var delta = data.inventory_delta;

    //Filter out the pokemon from the raw inventory data
    pokemon = _.reduce(delta.inventory_items, function (result, item) {
      return (item.inventory_item_data !== undefined &&
              item.inventory_item_data.pokemon_data !== undefined && item.inventory_item_data.pokemon_data !== null &&
             !item.inventory_item_data.pokemon_data.is_egg) ?
                _.concat(result, item.inventory_item_data.pokemon_data) : result;
    }, []);

    //Filter out the candy from the raw inventory data
    candy = _.reduce(delta.inventory_items, function (result, item) {
      return (item.inventory_item_data !== undefined &&
              item.inventory_item_data.candy !== undefined && item.inventory_item_data.candy !== null) ?
                _.concat(result, item.inventory_item_data.candy) : result;
    }, []);

    //Convert IDs to pokemon names and moves
    pokemon = _.map(pokemon, (p) => {
      let mon = _.find(pokemonData, {'id': p.pokemon_id});
      let move1 = _.find(movesData, {'Id': p.move_1});
      let move2 = _.find(movesData, {'Id': p.move_2});
      p.pokemon_id = mon.name;
      p.id = p.id.low.toString().replace('-','') + p.id.high.toString().replace('-','');
      p.id = p.id.replace('-', '');
      p.move_1 = move1.Name;
      p.move_2 = move2.Name;
      return p;
    });

    candy = _.map(candy, c => {
      let mon = _.find(pokemonData, {'id': c.family_id});
      c.family_id = mon.name;

      return c;
    });

    if (inventory === null) {
      inventory = new Inventory('funnelio');
      inventory.load(candy, pokemon);
      inventory.save();
    } else {
      inventory.update(candy, pokemon);
      inventory.save();
    }

    res.json(inventory);
  })
  .catch(console.trace);
});


module.exports = router;
