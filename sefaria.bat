@echo off
node %SEF_PATH% %1 > temp.txt
set /p ptxt=<temp.txt
echo %ptxt%
@echo on