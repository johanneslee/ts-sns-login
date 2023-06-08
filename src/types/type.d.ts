export interface DefaultUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface User extends DefaultUser {}