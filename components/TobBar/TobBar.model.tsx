export interface ITobBarController {
  title: string;
  backTitle?: string;
  onBackPress?: () => void;
  rightButtons?: ITobBarButton[];
}

export interface ITobBarButton {
  iconName: string;
  onPress: () => void;
}
