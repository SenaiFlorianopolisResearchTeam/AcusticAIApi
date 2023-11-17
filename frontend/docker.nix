{ pkgs ? import <nixpkgs> { }
, pkgsLinux ? import <nixpkgs> { system = "x86_64-linux"; }
}:

pkgs.dockerTools.buildImage {
  name = "hello-docker";
  
  config = {
    Cmd = [ "${pkgsLinux.hello}/bin/hello" ];

    WorkingDir = "/app";
    Copy = [ "." ];

    Run = ''
      ${pkgs.yarn}/bin/yarn install &&

      ${pkgs.yarn}/bin/yarn build
    '';

  };
}
