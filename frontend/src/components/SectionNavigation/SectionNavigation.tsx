import React from 'react';
import { Box, Button } from '@nimbus-ds/components';
import { useLocation, useNavigate } from 'react-router-dom';

const sections = [
  { label: 'Produção', path: '/producao' },
  { label: 'Materiais', path: '/materiais' },
  { label: 'Orçamento', path: '/orcamento' },
];

const SectionNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box display="flex" gap="2" flexWrap="wrap" role="navigation" aria-label="Áreas do aplicativo">
      {sections.map(({ label, path }) => (
        <Button
          key={path}
          appearance={location.pathname === path ? 'primary' : 'neutral'}
          onClick={() => navigate(path)}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default SectionNavigation;
