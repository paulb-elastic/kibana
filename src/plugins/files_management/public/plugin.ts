/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import type { CoreSetup, Plugin } from '@kbn/core/public';
import type { ManagementAppMountParams } from '@kbn/management-plugin/public';
import { LIST_BREADCRUMB, PLUGIN_ID, PLUGIN_NAME } from '../common';
import type { SetupDependencies, StartDependencies } from './types';

export class FilesManagementPlugin
  implements Plugin<void, void, SetupDependencies, StartDependencies>
{
  public setup(core: CoreSetup<StartDependencies>, { management }: SetupDependencies): void {
    management.sections.section.kibana.registerApp({
      id: PLUGIN_ID,
      title: PLUGIN_NAME,
      order: 1,
      async mount(params: ManagementAppMountParams) {
        const { mountManagementSection } = await import('./mount_management_section');
        const [coreStart, depsStart] = await core.getStartServices();

        const { docTitle } = coreStart.chrome;
        docTitle.change(PLUGIN_NAME);

        const { setBreadcrumbs } = params;
        setBreadcrumbs(LIST_BREADCRUMB);

        const unmountAppCallback = mountManagementSection(coreStart, depsStart, params);
        return () => {
          docTitle.reset();
          unmountAppCallback();
        };
      },
    });
  }

  public start() {}
}
