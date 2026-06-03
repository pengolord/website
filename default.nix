let
  nixpkgs = fetchTarball {
    url = "https://releases.nixos.org/nixos/unstable/nixos-26.05pre998534.d233902339c0/nixexprs.tar.xz";
  };
in{
  pkgs ? import nixpkgs {},
}: {
  inherit pkgs;

  package = pkgs.callPackage ./package.nix {};
}

