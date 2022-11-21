/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const SHORT_EMPTY_TITLE = i18n.translate(
  'xpack.securitySolution.osquery.action.shortEmptyTitle',
  {
    defaultMessage: 'Osquery is not available',
  }
);

export const PERMISSION_DENIED = i18n.translate(
  'xpack.securitySolution.osquery.action.permissionDenied',
  {
    defaultMessage: 'Permission denied',
  }
);

export const NOT_AVAILABLE = i18n.translate('xpack.securitySolution.osquery.action.unavailable', {
  defaultMessage:
    'The Osquery Manager integration is not added to the agent policy. To run queries on the host, add the Osquery Manager integration to the agent policy in Fleet.',
});

export const REQUIRED_ECS_MAPPING = i18n.translate(
  'xpack.securitySolution.osquery.action.requiredEcsMapping',
  {
    defaultMessage: 'ECS mapping is required.',
  }
);

export const DEFAULT_CUSTOM_FORM_ERROR = i18n.translate(
  'xpack.securitySolution.osquery.action.customFormError',
  {
    defaultMessage: 'Something is wrong with the form.',
  }
);

export const PARAMS_INTEGRATION_NOT_AVAILABLE = i18n.translate(
  'xpack.securitySolution.osquery.action.paramsUnavailable',
  {
    defaultMessage: '**{type}:** Osquery Response Action is not available.',
    values: { type: 'ResponseActions' },
  }
);
