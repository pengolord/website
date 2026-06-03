{
  fetchPnpmDeps,
  lib,
  nodejs,
  pnpm,
  pnpmConfigHook,
  stdenv,
  ...
}:

stdenv.mkDerivation (finalAttrs: {
  pname = "pengo.uk";
  version = "0.1.0";

  src = lib.cleanSource ./.;

  pnpmDeps = fetchPnpmDeps {
    inherit (finalAttrs) pname version src;
    fetcherVersion = 3;
    hash = "sha256-EaacwouNuiRjXNcBOg1549ldpMvWw2vM3PSUGKEQ2H8=";
  };

  nativeBuildInputs = [
    nodejs
    pnpm
    pnpmConfigHook
  ];

  buildPhase = ''
    runHook preBuild

    pnpm run build --outDir $out

    runHook postBuild
  '';

  meta = {
    description = "Pengo's personal website.";
    homepage = "https://github.com/pengolord/website";
    license = lib.licenses.gpl3Only;
    platforms = lib.platforms.all;
  };
})
