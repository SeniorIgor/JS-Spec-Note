#!/usr/bin/env node

import { serveCommand } from './commands/serve'
import { program } from 'commander'

program.addCommand(serveCommand)

program.parse(process.argv)
