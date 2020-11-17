#!/usr/bin/env node

import run from '../src/index.js';
import { gameData, description } from '../src/games/progression.js';

run(gameData, description);
