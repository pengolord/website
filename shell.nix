let
  inherit (import ./. {}) pkgs package;
in pkgs.mkShell {
  inputsFrom = [
    package
  ];
}
