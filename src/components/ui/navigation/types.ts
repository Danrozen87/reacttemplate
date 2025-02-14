
import * as React from "react"

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export interface NavigationListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export interface NavigationItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  children: React.ReactNode;
}

export interface NavigationMobileProps {
  children: React.ReactNode;
}
