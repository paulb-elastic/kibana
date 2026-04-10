/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { CoreSetup, CoreStart, Plugin } from '@kbn/core/server';
import { DEFAULT_APP_CATEGORIES } from '@kbn/core/server';
import type { FeaturesPluginSetup } from '@kbn/features-plugin/server';
import { PLUGIN_ID, PLUGIN_NAME } from '../common';

interface SetupDeps {
  features: FeaturesPluginSetup;
}

export class ExperimentationPlugin implements Plugin<void, void, SetupDeps> {
  public setup(_core: CoreSetup, { features }: SetupDeps) {
    features.registerKibanaFeature({
      id: PLUGIN_ID,
      name: PLUGIN_NAME,
      order: 9000,
      category: DEFAULT_APP_CATEGORIES.observability,
      app: ['kibana', PLUGIN_ID],
      catalogue: [PLUGIN_ID, 'observability'],
      privileges: {
        all: {
          app: ['kibana', PLUGIN_ID],
          catalogue: [PLUGIN_ID, 'observability'],
          savedObject: { all: [], read: [] },
          ui: ['show'],
        },
        read: {
          app: ['kibana', PLUGIN_ID],
          catalogue: [PLUGIN_ID, 'observability'],
          savedObject: { all: [], read: [] },
          ui: ['show'],
        },
      },
    });
  }

  public start(_core: CoreStart) {}

  public stop() {}
}
