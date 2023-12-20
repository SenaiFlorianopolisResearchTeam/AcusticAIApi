# CMake generated Testfile for 
# Source directory: /home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/crow
# Build directory: /home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/build/crow
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(crow_test "/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/build/crow/tests/unittest")
set_tests_properties(crow_test PROPERTIES  _BACKTRACE_TRIPLES "/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/crow/CMakeLists.txt;58;add_test;/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/crow/CMakeLists.txt;0;")
add_test(template_test "/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/build/crow/tests/template/test.py")
set_tests_properties(template_test PROPERTIES  WORKING_DIRECTORY "/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/build/crow/tests/template" _BACKTRACE_TRIPLES "/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/crow/CMakeLists.txt;59;add_test;/home/fullzer4/Codes/AcustticLab/Backend/carcountAI_api/crow/CMakeLists.txt;0;")
subdirs("examples")
subdirs("tests")
