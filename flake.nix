{
	inputs.nixpkgs.url = "nixpkgs";

	outputs = inputs: let
		inherit (inputs.nixpkgs) lib;

		systems = [ "x86_64-linux" "aarch64-linux" ];

		forEachSystem = perSystem:
			lib.genAttrs systems (system: perSystem inputs.nixpkgs.legacyPackages.${system});
	in {
		devShells = forEachSystem (pkgs: {
			default = pkgs.mkShell {
				buildInputs = with pkgs; [
					bun
				];
			};
		});
	};
}
