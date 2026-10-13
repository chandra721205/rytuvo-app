import { useLocalSearchParams } from 'expo-router';
import { StageScreen } from '../../../src/oneTradie/StageScreen';

export default function OneTradieStage() {
  const { stage } = useLocalSearchParams<{ stage: string }>();
  return <StageScreen key={String(stage)} id={String(stage)} />;
}
