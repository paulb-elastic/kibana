/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import type { AppMountParameters, CoreStart } from '@kbn/core/public';
import { APP_WRAPPER_CLASS } from '@kbn/core/public';
import { KibanaRenderContextProvider } from '@kbn/react-kibana-context-render';
import { EuiIcon, EuiPageTemplate, EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';

export const renderApp = (core: CoreStart, appMountParameters: AppMountParameters) => {
  const { element } = appMountParameters;
  element.classList.add(APP_WRAPPER_CLASS);

  ReactDOM.render(
    <KibanaRenderContextProvider {...core}>
      <EuiPageTemplate>
        <EuiPageTemplate.EmptyPrompt
          icon={<EuiIcon type="beaker" size="xxl" />}
          title={
            <EuiTitle size="l">
              <h1>Experiments</h1>
            </EuiTitle>
          }
          body={
            <>
              <EuiSpacer size="m" />
              <EuiText>
                <p>Welcome to the experimental page</p>
              </EuiText>
            </>
          }
        />
      </EuiPageTemplate>
    </KibanaRenderContextProvider>,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
