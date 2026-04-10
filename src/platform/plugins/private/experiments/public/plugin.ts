/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type {
  AppCategory,
  AppMountParameters,
  CoreSetup,
  CoreStart,
  Plugin,
  PluginInitializerContext,
} from '@kbn/core/public';
import { i18n } from '@kbn/i18n';

const EXPERIMENTS_CATEGORY: AppCategory = {
  id: 'experiments',
  label: i18n.translate('experiments.category.label', {
    defaultMessage: 'Experiments',
  }),
  order: -1,
  euiIconType: 'beaker',
};

export type ExperimentsPluginSetup = void;
export type ExperimentsPluginStart = void;

export class ExperimentsPlugin
  implements Plugin<ExperimentsPluginSetup, ExperimentsPluginStart>
{
  constructor(private readonly initializerContext: PluginInitializerContext) {}

  public setup(core: CoreSetup) {
    core.application.register({
      id: 'experiments',
      title: 'Experiments',
      euiIconType: 'beaker',
      category: EXPERIMENTS_CATEGORY,
      order: -1,
      visibleIn: ['sideNav', 'globalSearch'],
      appRoute: '/app/experiments',
      async mount(params: AppMountParameters) {
        const [coreStart] = await core.getStartServices();
        const { renderApp } = await import('./application');
        return renderApp(coreStart, params);
      },
    });
  }

  public start(_core: CoreStart) {}

  public stop() {}
}
