/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { PluginInitializer, PluginInitializerContext } from '@kbn/core/public';
import type { ExperimentsPluginSetup, ExperimentsPluginStart } from './plugin';
import { ExperimentsPlugin } from './plugin';

export const plugin: PluginInitializer<ExperimentsPluginSetup, ExperimentsPluginStart> = (
  initializerContext: PluginInitializerContext
) => new ExperimentsPlugin(initializerContext);

export type { ExperimentsPluginSetup, ExperimentsPluginStart };
