export type UserRole = 'admin' | 'principal' | 'it_admin' | 'head_teacher' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}