#!/usr/bin/env sh

_() {
	if [ ! -d "build" ]; then
		echo "Criando diretório build..."
		mkdir build
	fi

	cd build || exit
	cmake ..
	ninja
	cd ..

} && _

unset -f _
