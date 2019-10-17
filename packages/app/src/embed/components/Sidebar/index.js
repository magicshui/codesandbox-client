import * as React from 'react';
import type { Sandbox } from '@codesandbox/common/lib/types';

import Section from './Section';
import SandboxInfo from './SandboxInfo';
import FileTree from './FileTree';
import Dependencies from './Dependencies';
import ExternalResources from './ExternalResources';
import EditorLink from '../EditorLink';
import { Container } from './elements';

type Props = {
  sandbox: Sandbox,
  setCurrentModule: (id: string) => void,
  currentModule: string,
};

function Sidebar({ sandbox, setCurrentModule, currentModule }: Props) {
  return (
    <Container>
      <Section title="CodeSandbox" openByDefault>
        <SandboxInfo sandbox={sandbox} />
      </Section>
      <Section title="Files">
        <FileTree
          sandbox={sandbox}
          currentModuleId={currentModule}
          setCurrentModuleId={setCurrentModule}
        />
      </Section>
      <Section title="Dependencies">
        <Dependencies sandbox={sandbox} />
      </Section>
      <Section
        title="External Resources"
        hidden={sandbox.externalResources.length === 0}
      >
        <ExternalResources sandbox={sandbox} />
      </Section>

      <EditorLink sandbox={sandbox} />
    </Container>
  );
}

export default Sidebar;
