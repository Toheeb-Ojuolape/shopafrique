import moment from "moment";

export function dateFormatter(date) {
  return moment(date).format("lll");
}
