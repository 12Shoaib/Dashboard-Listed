import { atom } from "recoil";

export const hamburgerMenu = atom({
  key: "hamburgerMenu",
  default: true,
});
export const imageUrl  = atom({
  key:'image',
  default : []
}
)