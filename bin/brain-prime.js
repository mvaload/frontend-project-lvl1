#!/usr/bin/env node

import run from '../src/index.js';
import { gameData, description } from '../src/games/prime.js';

run(gameData, description);
