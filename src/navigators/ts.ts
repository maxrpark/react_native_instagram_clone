export enum ScreenNames {
  FEED_SCREEN_PAGE = 'FeedScreen',
  HOME_SCREEN = 'Home',
  POSTS_PAGE = 'Posts',
  PROFILE_SCREEN = 'Profile',
  MESSAGES = 'Messages',
  SINGLE_MESSAGE = 'SingleMessage',

  //
  PROFILES_SCREEN = 'Profile',
  SETTINGS = 'Settings',
  EDIT_PROFILE = 'EditProfile',
  AUTH_SCREEN = 'AuthScreen',

  // Navigators names

  MESSAGE_NAVIGATOR = 'MessageNavigator',
  NOTIFICATIONS = 'Notifications',
  BOTTOM_TAB = 'BottomTap',
}

export type RootBottomStackParams = {
  Home: any;
  // FeedScreen: any;
  Posts: undefined;
  Profile: {user: any};
};

export type MainNavigatorRootStack = {
  AuthScreen: undefined;
  BottomTap: any;
  EditProfile: undefined;
  Notifications: undefined;
  MessageNavigator: undefined;
};
export type StackNavigatorRootStack = {
  FeedScreen: any;
  Profile: {user: any};
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
