cmake_minimum_required(VERSION 3.0 FATAL_ERROR)
project(custom_ops)

#find_package(Torch REQUIRED)

add_subdirectory(crow)

add_executable(seu_projeto main.cc)

target_link_libraries(seu_projeto crow)
#target_link_libraries(seu_projeto "${TORCH_LIBRARIES}")

set_property(TARGET seu_projeto PROPERTY CXX_STANDARD 14)

