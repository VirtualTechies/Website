@ECHO OFF

CALL :Main

PAUSE
GOTO :EOF

:Main
SET WorkDir=%~dp0
SET ToolsDir=C:\MusafirTools
SET NodeJSToolsDir=%ToolsDir%\nodejs
SET GruntToolsDir=%ToolsDir%\grunt

IF NOT EXIST "%NodeJSToolsDir%" (
	ECHO NodeJS tools are missing
	ECHO Please Checkout needed tools from: http://192.168.0.64:81/svn/MusafirTools/
	EXIT /B 1
)

IF NOT EXIST "%GruntToolsDir%" (
	ECHO Grunt tools are missing
	ECHO Please Checkout needed tools from: http://192.168.0.64:81/svn/MusafirTools/
	EXIT /B 1
)

IF NOT EXIST "%WorkDir%Musafir.Presentation.Website\Gruntfile.js" (
	ECHO Gruntfile.js is missing from: %WorkDir%Musafir.Presentation.Website
	EXIT /B 1
)

COPY /Y "%WorkDir%Musafir.Presentation.Website\Gruntfile.js" "%GruntToolsDir%" 1>NUL 2>&1 || (ECHO Could not copy Gruntfile.js & EXIT /B 1)
PUSHD %GruntToolsDir%
CALL grunt.bat production
POPD

