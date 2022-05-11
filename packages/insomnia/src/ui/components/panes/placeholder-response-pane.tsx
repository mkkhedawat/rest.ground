import { HotKeyRegistry } from 'insomnia-common';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { hotKeyRefs } from '../../../common/hotkeys';
import { Hotkey } from '../hotkey';
import { Pane, PaneBody, PaneHeader } from './pane';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
});

const Item = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: 'var(--padding-sm)',
});

const Description = styled.div({
  marginRight: '2em',
});

interface Props {
  hotKeyRegistry: HotKeyRegistry;
}

// TODO: get hotKeyRegistry from redux
export const PlaceholderResponsePane: FunctionComponent<Props> = ({ hotKeyRegistry, children }) => (
  <Pane type="response">
    <PaneHeader />
    <PaneBody placeholder>
      <Wrapper>
        {[
          hotKeyRefs.REQUEST_SEND,
          hotKeyRefs.REQUEST_FOCUS_URL,
          hotKeyRefs.SHOW_COOKIES_EDITOR,
          hotKeyRefs.ENVIRONMENT_SHOW_EDITOR,
          hotKeyRefs.PREFERENCES_SHOW_KEYBOARD_SHORTCUTS,
        ].map(({ description, id }) => (
          <Item key={id}>
            <Description>{description}</Description>
            <code>
              <Hotkey
                keyBindings={hotKeyRegistry[id]}
                useFallbackMessage
              />
            </code>

          </Item>
        ))}
      </Wrapper>
    </PaneBody>
    {children}
  </Pane>
);