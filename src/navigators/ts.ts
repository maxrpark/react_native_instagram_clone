export enum ScreenNames {
  FEED_SCREEN_PAGE = 'FeedScreen',
  POSTS_PAGE = 'Posts',
  PROFILE_SCREEN = 'Profile',
  // STACK_PROFILE = 'Profile',
  STACK_PROFILE = 'StackProfile',
  BOTTOM_TAB = 'BottomTab',
  SETTINGS = 'Settings',
}

export type RootBottomStackParams = {
  FeedScreen: any;
  Posts: undefined;
  Profile: {user: any};
};

export type MainNavigatorRootStack = {
  Home: undefined;
  EditProfile: undefined;
  Notifications: undefined;
  MessageNavigator: undefined;
  StackProfile: {user: any};
};

export type MyProfileTopRootStack = {
  Post: undefined;
  Reels: undefined;
  Tags: undefined;
};
export type MessageNavigatorRootStack = {
  Messages: undefined;
  SingleMessage: {user: any}; // TODO
};
