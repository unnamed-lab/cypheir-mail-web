import React, { ChangeEventHandler } from 'react';
import { TKeyBoxType } from './types';

export interface ITableData {
  id: string | number;
  type: string;
  status: string;
  time: string;
  view: string;
}

export interface IButton {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  children: any;
  submitted?: boolean;
  processing?: string;
  hasInput?: object;
  title?: string;
}

export interface ISideButton {
  icon: any;
  title: string;
  url: string;
  className?: string;
  containerClass?: string;
}

export interface IUserInfo {
  name: string;
  title?: string;
  user: string;
}

export interface IUserIcon {
  name: string;
  img: string;
  url?: string;
}

export interface IAuthForm {
  title: string;
  desc: string;
  type: 'login' | 'signup';
  redirectURL: string;
  children: any;
}

export interface BlockProps {
  image: string;
  title: string;
  desc: string;
  backLink: boolean;
}

export interface ICheckBox {
  name: string;
  required?: boolean;
}

export interface IStatCard {
  data: number;
  text: string;
  countable?: boolean;
  unit?: string;
}

export interface IToolTip {
  info: string;
  className?: string;
}

export interface IRequestItem {
  key: number;
  title: string;
  req: number;
  icon: any;
}

export interface IHistoryTable {
  className?: string;
  head: string[];
  headClass?: string;
  children: ITableData[];
}

export interface IActivityData {
  title: string;
  data: number[];
}

interface ILogDoughnutChart {
  mail: number;
  otp: number;
  request: number;
}

export interface IDailyLogChart {
  className?: string;
  data: ILogDoughnutChart;
}

export interface IKeyContainer {
  title: string;
  actionKey: string | number;
  type: TKeyBoxType;
  name: string;
  inputClass?: string;
}

export interface IHighlightCodeProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface IFileUpload {
  label?: string;
  name: string;
  accept?: string;
  required?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | any;
  multiple?: boolean;
  fileOutput?: any;
  fileLaunch?: boolean;
}
