/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type {
  AppMountParameters,
  CoreSetup,
  CoreStart,
  Plugin,
  PluginInitializerContext,
} from '@kbn/core/public';
import { DEFAULT_APP_CATEGORIES } from '@kbn/core/public';
import { PLUGIN_ID, PLUGIN_NAME } from '../common';

export type ExperimentationPluginSetup = void;
export type ExperimentationPluginStart = void;

export class ExperimentationPlugin
  implements Plugin<ExperimentationPluginSetup, ExperimentationPluginStart>
{
  constructor(private readonly initializerContext: PluginInitializerContext) {}

  public setup(core: CoreSetup) {
    core.application.register({
      id: PLUGIN_ID,
      title: PLUGIN_NAME,
      euiIconType: 'beaker',
      category: DEFAULT_APP_CATEGORIES.observability,
      appRoute: '/app/experimentation',
      async mount(appMountParameters: AppMountParameters<unknown>) {
        const [coreStart] = await core.getStartServices();
        const { renderApp } = await import('./application');
        return renderApp(coreStart, appMountParameters);
      },
    });
  }

  public start(_core: CoreStart) {}

  public stop() {}
}
