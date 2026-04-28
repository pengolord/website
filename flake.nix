{
	inputs.nixpkgs.url = "nixpkgs";

	outputs = inputs: let
		inherit (inputs.nixpkgs) lib;

		systems = [ "x86_64-linux" "aarch64-linux" ];

		forEachSystem = perSystem:
			lib.genAttrs systems perSystem;
	in {
		devShells = forEachSystem (system: {
			default = let
				pkgs = inputs.nixpkgs.legacyPackages.${system};
			in pkgs.mkShell {
				buildInputs = with pkgs; [
					bun
				];
			};
		});
	};
}
