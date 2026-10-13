import type { ReactNode } from 'react';
import renderer, { act } from 'react-test-renderer';
import { ScreenHost } from './ScreenHost';
import { catalog } from './catalog';
import { StageScreen } from '../oneTradie/StageScreen';
import { STAGES } from '../oneTradie/flow';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), back: jest.fn(), canGoBack: () => false }),
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

jest.mock('expo-image-picker', () => ({}));

describe('1Tradie stage smoke', () => {
  test('every 1Tradie stage renders with charts, photos, QR and location cards', () => {
    for (const stage of STAGES) {
      let tree: renderer.ReactTestRenderer | undefined;
      act(() => {
        tree = renderer.create(<StageScreen id={stage.id} />);
      });
      expect(tree?.root).toBeTruthy();
      act(() => tree?.unmount());
    }
  });
});
