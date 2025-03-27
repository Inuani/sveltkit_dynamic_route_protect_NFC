import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ProtectedRoute {
  'cmacs' : Array<string>,
  'path' : string,
  'scan_count' : bigint,
}
export interface _anon_class_10_1 {
  'add_protected_route' : ActorMethod<[string], undefined>,
  'append_route_cmacs' : ActorMethod<[string, Array<string>], undefined>,
  'get_cycle_balance' : ActorMethod<[], bigint>,
  'get_route_cmacs' : ActorMethod<[string], Array<string>>,
  'get_route_protection' : ActorMethod<[string], [] | [ProtectedRoute]>,
  'is_protected_route' : ActorMethod<[string], boolean>,
  'update_route_cmacs' : ActorMethod<[string, Array<string>], undefined>,
  'validate_url_scan' : ActorMethod<[string, string], boolean>,
  'whoAmI' : ActorMethod<[], Principal>,
}
export interface _SERVICE extends _anon_class_10_1 {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
