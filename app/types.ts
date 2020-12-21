export type ExternalLinks = { [porp: string]: string }

export interface InitResolve {
  actTitle: string
  links: ExternalLinks
  copy: { [prop: string]: any }
}

export interface RootState {
  inProgress: boolean
}

// export interface State extends RootState {}
export interface State extends RootState {
  inProgress: boolean
}
