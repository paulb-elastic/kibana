/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { shallow, type ComponentType as EnzymeComponentType } from 'enzyme';

import { TestProviders } from '../../../../common/mock';
import { RuleStatusIcon } from '.';
jest.mock('../../../../common/lib/kibana');

describe('RuleStatusIcon', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RuleStatusIcon name="name" type="active" />, {
      wrappingComponent: TestProviders as EnzymeComponentType<{}>,
    });

    expect(wrapper.find('EuiAvatar')).toHaveLength(1);
  });
});
