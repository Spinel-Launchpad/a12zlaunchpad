import { Routers } from "../../../../shared/const/Routers";
import {
  IconDiscord,
  IconFacebook,
  IconTelegram,
  IconTwitter,
} from "../../Icons";
import { MenuHeaderListType, SocialListType } from "../types";

const {
  DISCORD_ROUTER,
  FACEBOOK_ROUTER,
  TELEGRAM_ROUTER,
  TWITTER_ROUTER,
  LAUNCHPAD,
  HISTORY,
} = Routers;

const SOCIAL_LIST: SocialListType[] = [
  {
    icon: <IconTwitter />,
    link: TWITTER_ROUTER,
  },
  {
    icon: <IconDiscord />,
    link: DISCORD_ROUTER,
  },
  {
    icon: <IconTelegram />,
    link: TELEGRAM_ROUTER,
  },
  {
    icon: <IconFacebook />,
    link: FACEBOOK_ROUTER,
  },
];

const MENU_HEADER_LIST: MenuHeaderListType[] = [
  {
    label: "Launchpad",
    link: "/",
  },
  {
    label: "History",
    link: HISTORY,
  },
  // {
  //   label: "NFP Staking",
  //   link: "/",
  // },
  // {
  //   items: [
  //     { label: "Pitchdeck", link: "/" },
  //     { label: "Whitepaper", link: "/" },
  //   ],
  //   label: "Resource",
  // },
];

export const Constants = {
  MENU_HEADER_LIST,
  SOCIAL_LIST,
};
