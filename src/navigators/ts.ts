export enum ScreenNames {
  FEED_SCREEN_PAGE = 'FeedScreen',
  POSTS_PAGE = 'Posts',
  MY_PROFILE_PAGE = 'MyProfile',
  BOTTOM_TAB = 'BottomTab',
  SETTINGS = 'Settings',
}

export type RootBottomStackParams = {
  FeedScreen: any;
  Posts: undefined;
  MyProfile: {user: any};
};

export type MainNavigatorRootStack = {
  Home: undefined;
  EditProfile: undefined;
  Notifications: undefined;
  MessageNavigator: undefined;
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
