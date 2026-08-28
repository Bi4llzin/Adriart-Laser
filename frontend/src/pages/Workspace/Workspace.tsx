import React, { useEffect } from 'react';
import { Card, Text } from '@nimbus-ds/components';
import { Layout, Page } from '@nimbus-ds/patterns';
import { navigateHeaderRemove } from '@tiendanube/nexo';

import { nexo } from '@/app';
import SectionNavigation from '@/components/SectionNavigation';

interface WorkspaceProps {
  title: string;
}

const Workspace: React.FC<WorkspaceProps> = ({ title }) => {
  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return (
    <Page maxWidth="1200px">
      <Page.Header title={title}>
        <SectionNavigation />
      </Page.Header>
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Card>
              <Card.Header title={title} />
              <Card.Body>
                <Text>Esta área está pronta para receber o conteúdo.</Text>
              </Card.Body>
            </Card>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default Workspace;
