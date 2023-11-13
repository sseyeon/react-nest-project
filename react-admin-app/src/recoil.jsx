// recoil.js
import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: localStorage.getItem("accessToken") || "",
});
