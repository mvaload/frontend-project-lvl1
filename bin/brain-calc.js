#!/usr/bin/env node

import run from '../src/index.js';
import { gameData, description, additionalInfo } from '../src/games/calc.js';

run(gameData, description, additionalInfo);
