import { CellActionsProvider } from '@kbn/cell-actions';
import { I18nProvider } from '@kbn/i18n-react';
import { CellValueElementProps } from '@kbn/timelines-plugin/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { ThemeProvider } from 'styled-components';
import { DataTableComponent } from './index';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { euiDarkVars } from '@kbn/ui-theme';
import { mockGlobalState } from '@kbn/securitysolution-data-table/mock/global_state';
import { Store } from 'redux';
import { createStore as createReduxStore } from 'redux';
import type { Action } from '@kbn/ui-actions-plugin/public';
import { getMappedNonEcsValue } from './utils';
import { TableId } from '@kbn/securitysolution-data-table';
import { mockTimelineData } from '../../mock/mock_timeline_data';
import { EuiButtonEmpty } from '@elastic/eui';

export default {
  component: DataTableComponent,
  title: 'DataTableComponent',
};

const createStore = (state: any) => createReduxStore(() => state, state);

interface Props {
  children?: React.ReactNode;
  store?: Store;
  onDragEnd?: (result: DropResult, provided: ResponderProvided) => void;
  cellActions?: Action[];
}

const StoryCellRenderer: React.FC<CellValueElementProps> = ({ columnId, data }) => (
  <>
    {getMappedNonEcsValue({
      data,
      fieldName: columnId,
    })?.reduce((x) => x[0]) ?? ''}
  </>
);

const StoryProviders: React.FC<Props> = ({ children, onDragEnd = () => {}, cellActions = [] }) => {
  const store = createStore(mockGlobalState);
  const queryClient = new QueryClient();

  return (
    <I18nProvider>
      <ReduxStoreProvider store={store}>
        <ThemeProvider theme={() => ({ eui: euiDarkVars, darkMode: true })}>
          <QueryClientProvider client={queryClient}>
            <CellActionsProvider getTriggerCompatibleActions={() => Promise.resolve(cellActions)}>
              <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
            </CellActionsProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </ReduxStoreProvider>
    </I18nProvider>
  );
};

const MockFieldBrowser = () => {
  return (
    <EuiButtonEmpty
      color="text"
      data-test-subj="show-field-browser"
      iconType="tableOfContents"
      size="xs"
      onClick={() => window.alert('Not implemented')}
    >
      Field Browser
    </EuiButtonEmpty>
  );
};

export function Example() {
  return (
    <StoryProviders>
      <DataTableComponent
        browserFields={{}}
        data={mockTimelineData}
        id={TableId.test}
        renderCellValue={StoryCellRenderer}
        leadingControlColumns={[]}
        unitCountText="10 events"
        pagination={{
          pageSize: 25,
          pageIndex: 0,
          onChangeItemsPerPage: () => {},
          onChangePage: () => {},
        }}
        loadPage={() => {}}
        rowRenderers={[]}
        totalItems={mockTimelineData.length}
        getFieldBrowser={() => <MockFieldBrowser />}
      />
    </StoryProviders>
  );
}
