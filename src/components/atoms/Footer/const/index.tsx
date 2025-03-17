import { Routers } from "../../../../shared/const/Routers"
import {
  IconFacebook,
  IconTelegram,
  IconTwitter,
  IconYoutube,
} from "../../Icons"
import { MenuFooterListType } from "../types"

const {
  FACEBOOK_ROUTER,
  FOOTER_AUDIT_ROUTER,
  FOOTER_DOCS_ROUTER,
  FOOTER_NFT_ROUTER,
  FOOTER_PRIVACY_ROUTER,
  FOOTER_SNAPTASK_ROUTER,
  FOOTER_SPINEL_BLOCKCHAIN_ROUTER,
  FOOTER_SPINEL_EXCHANGE_ROUTER,
  FOOTER_SPINEL_LAUNCHPAD_ROUTER,
  FOOTER_SPINEL_WALLET_ROUTER,
  FOOTER_TERMS_ROUTER,
  TELEGRAM_ROUTER,
  TWITTER_ROUTER,
  YOUTUBE_ROUTER,
} = Routers

const MENU_FOOTER_LIST: MenuFooterListType[] = [
  {
    heading: "About",
    items: [
      { label: "Docs", link: FOOTER_DOCS_ROUTER },
      { label: "Audit", link: FOOTER_AUDIT_ROUTER },
    ],
  },
  {
    heading: "Products",
    items: [
      { label: "Spinel Launchpad", link: FOOTER_SPINEL_LAUNCHPAD_ROUTER },
      { label: "NFT", link: FOOTER_NFT_ROUTER },
      { label: "Snaptask", link: FOOTER_SNAPTASK_ROUTER },
      { label: "Spinel Exchange", link: FOOTER_SPINEL_EXCHANGE_ROUTER },
      { label: "Spinel Wallet", link: FOOTER_SPINEL_WALLET_ROUTER },
      { label: "Spinel Blockchain", link: FOOTER_SPINEL_BLOCKCHAIN_ROUTER },
    ],
  },
  {
    heading: "Community",
    items: [
      { icon: <IconTwitter />, label: "X.com", link: TWITTER_ROUTER },
      { icon: <IconTelegram />, label: "Telegram", link: TELEGRAM_ROUTER },
      { icon: <IconFacebook />, label: "Facebook", link: FACEBOOK_ROUTER },
      { icon: <IconYoutube />, label: "Youtube", link: YOUTUBE_ROUTER },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Terms", link: FOOTER_TERMS_ROUTER },
      { label: "Privacy", link: FOOTER_PRIVACY_ROUTER },
    ],
  },
]

export const Constants = {
  MENU_FOOTER_LIST,
}
