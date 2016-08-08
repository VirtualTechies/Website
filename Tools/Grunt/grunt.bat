@CALL "%~dp0..\nodejs\nodevars.bat" || EXIT /B 1
@PUSHD "%~dp0"
@CALL "%~dp0npm\_grunt.cmd" %* || EXIT /B 1
@POPD
@EXIT /B 0