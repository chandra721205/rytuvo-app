import type { ReactNode } from 'react';
import renderer, { act } from 'react-test-renderer';
import { ScreenHost } from './ScreenHost';
import { catalog } from './catalog';

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), back: jest.fn() }),
  usePathname: () => '/',
  Link: ({ children }: { children: ReactNode }) => children,
  Stack: { Screen: () => null },
}));

jest.mock('react-native-safe-area-context', () => {
  // Jest mock factories are hoisted and cannot use ESM imports.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require('react-native');
  return {
    SafeAreaView: View,
    SafeAreaProvider: ({ children }: { children: ReactNode }) => children,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

describe('route smoke', () => {
  test('every catalog screen renders', () => {
    for (const screen of catalog) {
      let tree: renderer.ReactTestRenderer | undefined;
      act(() => {
        tree = renderer.create(<ScreenHost id={screen.id} />);
      });
      expect(tree?.root).toBeTruthy();
      act(() => {
        tree?.unmount();
      });
    }
  }, 180000);
});
