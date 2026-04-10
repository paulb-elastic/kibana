/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { PluginInitializer, PluginInitializerContext } from '@kbn/core/public';
import type { ExperimentationPluginSetup, ExperimentationPluginStart } from './plugin';
import { ExperimentationPlugin } from './plugin';

export const plugin: PluginInitializer<ExperimentationPluginSetup, ExperimentationPluginStart> = (
  initializerContext: PluginInitializerContext
) => new ExperimentationPlugin(initializerContext);

export type { ExperimentationPluginSetup, ExperimentationPluginStart };
