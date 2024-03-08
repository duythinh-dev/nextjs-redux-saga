import { MINUS_ACTION, PLUS_ACTION } from "../actionTypes";

export function plus() {
  return { type: PLUS_ACTION };
}

export function minus() {
  return { type: MINUS_ACTION };
}
