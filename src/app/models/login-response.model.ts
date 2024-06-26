import { Profile } from "./profile.model";

export interface LoginResponse {
  token: string;
  user: Profile
}