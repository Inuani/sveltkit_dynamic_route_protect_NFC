export const idlFactory = ({ IDL }) => {
  const ProtectedRoute = IDL.Record({
    'cmacs' : IDL.Vec(IDL.Text),
    'path' : IDL.Text,
    'scan_count' : IDL.Nat,
  });
  const _anon_class_10_1 = IDL.Service({
    'add_protected_route' : IDL.Func([IDL.Text], [], []),
    'append_route_cmacs' : IDL.Func([IDL.Text, IDL.Vec(IDL.Text)], [], []),
    'get_cycle_balance' : IDL.Func([], [IDL.Nat], ['query']),
    'get_route_cmacs' : IDL.Func([IDL.Text], [IDL.Vec(IDL.Text)], ['query']),
    'get_route_protection' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(ProtectedRoute)],
        ['query'],
      ),
    'is_protected_route' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'update_route_cmacs' : IDL.Func([IDL.Text, IDL.Vec(IDL.Text)], [], []),
    'validate_url_scan' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], ['query']),
    'whoAmI' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return _anon_class_10_1;
};
export const init = ({ IDL }) => { return []; };
