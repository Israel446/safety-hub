export type Role = 'member' | 'owner' | 'admin';
export type Profile = { id: string; staff_id: string; full_name: string; role: Role; active: boolean; must_change_pin: boolean; created_at: string };
