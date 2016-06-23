/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.post('/', (req, res) => {
  console.log('first req', req.body);
  const game = new Game(req.body);
  game.save(() => {
    res.send({ game });
  });
});

router.put('/:id/flip', (req, res) => {
  console.log('here', req.params.id);
  Game.findById(req.params.id, (err, game) => {
    console.log('err', err);
    const o = {};
    const n = req.body.num * 1;

    if (n) {
      o.heads = game.heads + 1;
    } else {
      o.tails = game.tails + 1;
    }
    game.update(o, () => {
      Game.findById(req.params.id, (err1, game1) => {
        console.log('err1', err1);
        res.send(game1);
      });
    });
  });
});
