@echo off
node %SEF_PATH% %1 > temp.txt
type temp.txt
@echo on