import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Text, ToastProvider } from '@nimbus-ds/components';
import { ErrorBoundary, connect, iAmReady } from '@tiendanube/nexo';
import Router from '@/app/Router';

import nexo from './NexoClient';
import NexoSyncRoute from './NexoSyncRoute';
import { DarkModeProvider } from './DarkModeProvider';
import './I18n';

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (!isConnect) {
      connect(nexo)
        .then(async () => {
          setIsConnect(true);
          iAmReady(nexo);
        })
        .catch(() => {
          if (import.meta.env.DEV) {
            setIsPreview(true);
          }
        });
    }
  }, []);

  if (!isConnect && !isPreview)
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Conectando...</Text>
      </Box>
    );

  const application = (
    <DarkModeProvider>
      <ToastProvider>
        <BrowserRouter>
          {isPreview ? (
            <Router />
          ) : (
            <NexoSyncRoute>
              <Router />
            </NexoSyncRoute>
          )}
        </BrowserRouter>
      </ToastProvider>
    </DarkModeProvider>
  );

  if (isPreview) return application;

  return (
    <ErrorBoundary nexo={nexo}>
      {application}
    </ErrorBoundary>
  );
};

export default App;
