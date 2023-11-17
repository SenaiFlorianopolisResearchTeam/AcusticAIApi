{ pkgs ? import <nixpkgs> { }
, pkgsLinux ? import <nixpkgs> { system = "x86_64-linux"; }
}:

pkgs.dockerTools.buildImage {
  name = "backend";

  config = {
    Cmd = [ "${pkgsLinux.hello}/bin/hello" ];

    WorkingDir = "/backend";
    Copy = [ "." ];

    Run = ''
        ${pkgs.yarn}/bin/yarn install &&

        ${pkgs.yarn}/bin/yarn build
    '';

  };

}