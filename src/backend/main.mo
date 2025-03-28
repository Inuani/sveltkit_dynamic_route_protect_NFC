
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Cycles "mo:base/ExperimentalCycles";
import Principal "mo:base/Principal";
import Routes "routes";
// import Blob "mo:base/Blob";
import Option "mo:base/Option";

shared ({ caller = creator }) actor class () = this {

  stable let routesState = Routes.init();
  let routes_storage = Routes.RoutesStorage(routesState);

  public shared ({ caller }) func add_protected_route(path : Text) : async () {
    assert (caller == creator);
    ignore routes_storage.addProtectedRoute(path);
  };

  public shared ({ caller }) func update_route_cmacs(path : Text, new_cmacs : [Text]) : async () {
    assert (caller == creator);
    ignore routes_storage.updateRouteCmacs(path, new_cmacs);
  };

  public shared ({ caller }) func append_route_cmacs(path : Text, new_cmacs : [Text]) : async () {
    assert (caller == creator);
    ignore routes_storage.appendRouteCmacs(path, new_cmacs);
  };

  public query func get_route_protection(path : Text) : async ?Routes.ProtectedRoute {
    routes_storage.getRoute(path);
  };

  public query func get_route_cmacs(path : Text) : async [Text] {
    routes_storage.getRouteCmacs(path);
  };

  public query ({ caller }) func whoAmI() : async Principal {
    return caller;
  };

  public query func get_cycle_balance() : async Nat {
    return Cycles.balance();
  };


   public shared func validate_url_scan(url : Text, path : Text) : async Bool {
    // First, check if the path is protected
    switch (routes_storage.getRoute(path)) {
      case (null) {
        // If path is not protected, return true (access allowed)
        return true;
      };
      case (_) {
        // Path is protected, verify scan parameters
        return routes_storage.verifyRouteAccess(path, url);
      };
    };
  };

  public query func is_protected_route(path : Text) : async Bool {
    Option.isSome(routes_storage.getRoute(path));
  };


  };


