import type { LimitKey, Permission, RoleCode } from '../domain/types';

export type { Permission, RoleCode };

const ALL_MONEY: Permission[] = [
  'lot.list',
  'lot.create',
  'bid.accept',
  'reserve.view',
  'reserve.set',
  'payment.reconcile',
  'weighment.enter',
  'weighment.otp',
  'team.manage',
  'advance.record',
  'bill.create',
];

const ROLE_PERMISSIONS: Record<RoleCode, Permission[]> = {
  PR_OWNER: [...ALL_MONEY, 'qc.sign'],
  PR_MANAGER: ['lot.list', 'lot.create', 'bid.accept', 'reserve.view', 'weighment.enter', 'weighment.otp', 'qc.sign'],
  PR_WORKER: ['lot.list', 'weighment.enter'],
  CA_OWNER: [
    'lot.list',
    'lot.create',
    'bid.accept',
    'reserve.view',
    'reserve.set',
    'payment.reconcile',
    'weighment.otp',
    'team.manage',
    'advance.record',
    'bill.create',
    'waiver.approve',
  ],
  CA_SALES: ['lot.list', 'lot.create', 'bid.accept', 'reserve.view', 'weighment.otp'],
  CA_MUNIM: ['lot.list', 'bill.create', 'payment.record', 'payment.reconcile', 'advance.record', 'waiver.request', 'rules.view'],
  CA_FIELD: ['lot.list', 'lot.create', 'weighment.enter'],
  CA_CLERK: ['lot.list', 'weighment.enter', 'weighment.otp'],
  BY_OWNER: [
    'lot.list',
    'bid.place',
    'bid.accept',
    'payment.record',
    'bill.confirm',
    'weighment.enter',
    'weighment.otp',
    'qc.sign',
    'team.manage',
    'autobid.set',
    'autobid.approve',
    'waiver.approve',
  ],
  BY_PURCHASER: ['lot.list', 'bid.place', 'autobid.set'],
  BY_QV: ['lot.list', 'qc.sign', 'inspection.record'],
  BY_ACCOUNTS: ['lot.list', 'payment.record', 'bill.confirm', 'waiver.request'],
  BY_LOGISTICS: ['lot.list', 'weighment.enter', 'weighment.otp', 'trip.operate'],
  BY_PLANT: ['lot.list', 'lot.create'],
  BY_QA: ['lot.list', 'qc.sign', 'inspection.record'],
  BY_SUPERVISOR: ['lot.list', 'weighment.enter'],
  BY_CRM: ['lot.list', 'bid.place'],
  BY_EXPORT: ['lot.list'],
  IN_HEAD: ['inspection.record', 'qc.sign', 'team.manage'],
  IN_FIELD: ['inspection.record'],
  IN_TECH: ['inspection.record'],
  TR_OWNER: ['trip.operate', 'team.manage'],
  TR_DISPATCH: ['trip.operate'],
  TR_DRIVER: ['trip.operate'],
  ST_MANAGER: ['warehouse.operate', 'team.manage'],
  ST_GATE: ['warehouse.operate'],
  ST_KEEPER: ['warehouse.operate'],
  BK_RM: ['finance.review'],
  BK_CREDIT: ['finance.review'],
  BK_RISK: ['finance.review', 'team.manage'],
  IS_UW: ['insurance.review'],
  IS_SURVEYOR: ['insurance.review'],
  IS_CLAIMS: ['insurance.review'],
  YD_ADMIN: ['yard.operate', 'rules.edit', 'team.manage', 'audit.read'],
  YD_SUPER: ['yard.operate', 'audit.read'],
  YD_WB: ['yard.operate', 'weighment.enter'],
  INP_OWNER: ['service.fulfil', 'team.manage', 'payment.record'],
  INP_SALES: ['service.fulfil'],
  SP_OWNER: ['service.fulfil', 'team.manage'],
  SP_TECH: ['service.fulfil'],
  PL_SUPER: ['kyc.review', 'rules.edit', 'team.manage', 'audit.read', 'reserve.view'],
  PL_KYC: ['kyc.review', 'audit.read'],
  PL_SUPPORT: ['audit.read'],
  PL_FIN: ['rules.view', 'audit.read', 'payment.record'],
  PL_AUDIT: ['audit.read', 'rules.view', 'reserve.view'],
};

export function permissionsFor(role: RoleCode): Permission[] {
  return ROLE_PERMISSIONS[role];
}

export function can(role: RoleCode, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export interface LimitDecision {
  allowed: boolean;
  approver?: string;
  reason?: string;
}

const APPROVER: Partial<Record<RoleCode, string>> = {
  PR_MANAGER: 'PR_OWNER',
  CA_SALES: 'CA_OWNER',
  CA_MUNIM: 'CA_OWNER',
  BY_PURCHASER: 'BY_OWNER',
  BY_ACCOUNTS: 'BY_OWNER',
  BK_CREDIT: 'BK_RISK',
  IS_CLAIMS: 'HEAD_OFFICE',
  TR_DISPATCH: 'TR_OWNER',
};

/** A missing limit means unlimited for that key. */
export function checkLimit(role: RoleCode, key: LimitKey, value: number, limits: Partial<Record<LimitKey, number>>): LimitDecision {
  const cap = limits[key];
  if (cap == null || value <= cap) return { allowed: true };
  return {
    allowed: false,
    approver: APPROVER[role] ?? 'OWNER',
    reason: `${key}_above_limit`,
  };
}

export function canReviewOwnKyc(reviewerUserId: string, subjectUserId: string): boolean {
  return reviewerUserId !== subjectUserId;
}

export function inspectorConflict(inspectorUserId: string, partyUserIds: string[]): boolean {
  return partyUserIds.includes(inspectorUserId);
}

/** UI module ids. Hidden modules are not rendered for the active role. */
export type ModuleId =
  | 'home'
  | 'lots'
  | 'farm'
  | 'payments'
  | 'auction'
  | 'farmers'
  | 'ledger'
  | 'market'
  | 'bids'
  | 'weighment'
  | 'payables'
  | 'jobs'
  | 'reports'
  | 'trips'
  | 'fleet'
  | 'stock'
  | 'finance'
  | 'claims'
  | 'gate'
  | 'catalog'
  | 'team'
  | 'rules'
  | 'kyc'
  | 'assistant';

const MODULE_PERMISSION: Partial<Record<ModuleId, Permission>> = {
  payments: 'payment.reconcile',
  payables: 'payment.record',
  auction: 'bid.accept',
  bids: 'bid.place',
  weighment: 'weighment.enter',
  ledger: 'bill.create',
  jobs: 'inspection.record',
  trips: 'trip.operate',
  stock: 'warehouse.operate',
  finance: 'finance.review',
  claims: 'insurance.review',
  gate: 'yard.operate',
  catalog: 'service.fulfil',
  team: 'team.manage',
  rules: 'rules.edit',
  kyc: 'kyc.review',
};

export function moduleVisible(role: RoleCode, moduleId: ModuleId): boolean {
  const permission = MODULE_PERMISSION[moduleId];
  if (!permission) return true;
  if (moduleId === 'payments') {
    return (
      role === 'PR_OWNER' ||
      role === 'PR_MANAGER' ||
      can(role, 'payment.record') ||
      can(role, 'payment.reconcile') ||
      can(role, 'bill.confirm')
    );
  }
  if (moduleId === 'weighment') {
    return can(role, 'weighment.enter') || can(role, 'weighment.otp');
  }
  if (moduleId === 'auction') {
    return can(role, 'bid.accept') || can(role, 'reserve.set') || can(role, 'lot.create');
  }
  if (moduleId === 'rules') return can(role, 'rules.edit') || can(role, 'rules.view');
  return can(role, permission);
}
