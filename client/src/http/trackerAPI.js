import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchTrackers = async () => {
  const {data} = await $authHost.get('api/trackers', )
  return data.trackers
}