// Type definitions for React Router Native 4.2
// Project: https://github.com/ReactTraining/react-router-native
// Definitions by: Eduard Zintz <https://github.com/ezintz>
//                 Fernando Helwanger <https://github.com/fhelwanger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export {
  match,
  matchPath,
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  Router,
  RouterChildContext,
  StaticRouter,
  Switch,
  withRouter
} from 'react-router';
import * as React from 'react';
import * as H from 'history';

export interface BackButtonProps {
  children?: React.ReactNode;
}

export class BackButton extends React.Component<BackButtonProps> {}
export class AndroidBackButton extends React.Component<BackButtonProps> {}

export class DeepLinking extends React.Component {}

export interface LinkProps {
  component?: React.Component | React.ComponentClass;
  replace?: boolean;
  style?: any;
  to: H.LocationDescriptor;
  [propName: string]: any;
}

export class Link extends React.Component<LinkProps> {}

export interface NativeRouterProps {
  getUserConfirmation?: Function;
  keyLength?: number;
  initialEntries?: string[];
  initialIndex?: number;
}

export class NativeRouter extends React.Component<NativeRouterProps> {}
