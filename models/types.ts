export type UserRole = "user" | "admin";

export interface User {
  id: string;
  username: string;
  role: UserRole;
  players: [Player, Player]; // Offense and Defense
}

export type PlayerType = "offense" | "defense";

export interface Player {
  id: string;
  type: PlayerType;
  name: string;
  attributes: PlayerAttributes;
  teamId?: string;
  pendingUpdates?: AttributeUpdate[];
}

export interface PlayerAttributes {
  speed: number;
  strength: number;
  agility: number;
  [key: string]: number;
}

export interface AttributeUpdate {
  id: string;
  playerId: string;
  attributes: Partial<PlayerAttributes>;
  status: "pending" | "approved" | "rejected";
}

export interface Team {
  id: string;
  name: string;
  roster: string[]; // Player IDs
}