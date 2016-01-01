@echo off
node %DICT_PATH% %1 > temp.txt
type temp.txt
@echo on
