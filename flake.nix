{
	inputs.nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";

	outputs = inputs: let
		inherit (inputs.nixpkgs) lib;

		systems = [ "x86_64-linux" "aarch64-linux" ];

		forEachSystem = perSystem:
			lib.genAttrs systems (system: perSystem inputs.nixpkgs.legacyPackages.${system});
	in {
		devShells = forEachSystem (pkgs: {
			default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs
          pkgs.pnpm
        ];
      };
		});

    packages = forEachSystem (pkgs: let
      site = pkgs.callPackage ./package.nix {};
    in {
      default = site;
      inherit site;
    });
	};
}
